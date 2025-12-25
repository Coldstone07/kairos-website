# Kairos Platform Database Schema

## Overview

This document defines the PostgreSQL database schema for the Kairos platform using Supabase. The schema implements Row Level Security (RLS) for privacy and data isolation.

## Core Tables

### profiles
Extends Supabase auth.users with profile information.

```sql
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    display_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    -- Privacy settings
    data_export_enabled BOOLEAN DEFAULT true,
    encryption_enabled BOOLEAN DEFAULT true,
    -- Preferences
    timezone TEXT DEFAULT 'UTC',
    language TEXT DEFAULT 'en'
);
```

### journal_entries
Stores user journal entries with local-first sync support.

```sql
CREATE TABLE public.journal_entries (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    local_id TEXT, -- For local-first sync conflict resolution
    content TEXT NOT NULL, -- Plain text content
    encrypted_content TEXT, -- Encrypted version for sensitive entries
    mood INTEGER CHECK (mood >= 1 AND mood <= 10), -- 1-10 scale
    tags TEXT[], -- Array of tags
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    synced_at TIMESTAMP WITH TIME ZONE,
    -- Metadata
    word_count INTEGER,
    sentiment_score DECIMAL(3,2), -- From Hume AI analysis
    is_private BOOLEAN DEFAULT false
);
```

### detected_patterns
AI-detected patterns from journal analysis.

```sql
CREATE TABLE public.detected_patterns (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    pattern_type TEXT NOT NULL, -- 'craving', 'aversion', 'delusion', 'integration'
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    evidence_quotes TEXT[], -- Array of supporting journal quotes
    confidence DECIMAL(3,2) NOT NULL CHECK (confidence >= 0 AND confidence <= 1),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    acknowledged_at TIMESTAMP WITH TIME ZONE,
    dismissed BOOLEAN DEFAULT false,
    -- Pattern metadata
    sankhara_type TEXT, -- Vipassana terminology
    related_entries UUID[] -- References to journal_entries
);
```

### digital_twins
User personality models for AI twins.

```sql
CREATE TABLE public.digital_twins (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    personality_blob TEXT NOT NULL, -- Encrypted personality model data
    model_version TEXT NOT NULL, -- LLM version used
    traits JSONB, -- Extracted traits (name, values, communication_style)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    last_active TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT true
);
```

### twin_conversations
AI-to-AI conversations for compatibility assessment.

```sql
CREATE TABLE public.twin_conversations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    twin_a UUID REFERENCES public.digital_twins(id) ON DELETE CASCADE NOT NULL,
    twin_b UUID REFERENCES public.digital_twins(id) ON DELETE CASCADE NOT NULL,
    conversation_topic TEXT,
    messages JSONB NOT NULL, -- Array of message objects
    quality_scores JSONB, -- Reciprocity, depth, curiosity, red_flags
    overall_quality DECIMAL(3,2),
    started_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE,
    duration_minutes INTEGER
);
```

### connection_matches
Human connection suggestions based on twin compatibility.

```sql
CREATE TABLE public.connection_matches (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_a UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    user_b UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    twin_conversation UUID REFERENCES public.twin_conversations(id),
    twin_quality_score DECIMAL(3,2),
    match_status TEXT DEFAULT 'pending' CHECK (match_status IN ('pending', 'accepted', 'declined', 'connected')),
    match_reason TEXT, -- Why this match was suggested
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    accepted_at TIMESTAMP WITH TIME ZONE,
    human_match_date TIMESTAMP WITH TIME ZONE,
    -- Relationship tracking
    relationship_status TEXT DEFAULT 'potential' CHECK (relationship_status IN ('potential', 'connected', 'dating', 'friends', 'ended')),
    last_checkin TIMESTAMP WITH TIME ZONE
);
```

## Supporting Tables

### meditation_sessions
Tracks meditation practice sessions.

```sql
CREATE TABLE public.meditation_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    session_type TEXT NOT NULL, -- 'guided', 'timer', 'breathing'
    duration_minutes INTEGER NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    notes TEXT,
    -- For breathing exercises
    breathing_pattern TEXT, -- '4-7-8', 'box', custom
    -- For guided sessions
    guide_voice TEXT,
    theme TEXT
);
```

### breathing_sessions
Detailed breathing practice tracking.

```sql
CREATE TABLE public.breathing_sessions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    pattern TEXT NOT NULL,
    inhale_duration INTEGER NOT NULL, -- seconds
    hold_duration INTEGER,
    exhale_duration INTEGER NOT NULL,
    cycles_completed INTEGER NOT NULL,
    session_duration INTEGER NOT NULL, -- total seconds
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    effectiveness_rating INTEGER CHECK (effectiveness_rating >= 1 AND effectiveness_rating <= 5)
);
```

### relationship_checkins
Optional relationship health check-ins.

```sql
CREATE TABLE public.relationship_checkins (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    match_id UUID REFERENCES public.connection_matches(id) ON DELETE CASCADE NOT NULL,
    initiator UUID REFERENCES public.profiles(id) NOT NULL,
    checkin_type TEXT NOT NULL, -- 'monthly', 'milestone', 'crisis'
    responses JSONB, -- User responses to prompts
    quality_rating INTEGER CHECK (quality_rating >= 1 AND quality_rating <= 10),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

### privacy_logs
Audit log for data export/deletion operations.

```sql
CREATE TABLE public.privacy_logs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    action TEXT NOT NULL, -- 'export', 'delete', 'consent_update'
    details JSONB,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);
```

## Indexes

```sql
CREATE INDEX idx_journal_entries_user_timestamp ON public.journal_entries(user_id, timestamp DESC);
CREATE INDEX idx_journal_entries_synced ON public.journal_entries(synced_at) WHERE synced_at IS NULL;
CREATE INDEX idx_patterns_user_created ON public.detected_patterns(user_id, created_at DESC);
CREATE INDEX idx_twins_user_active ON public.digital_twins(user_id, is_active) WHERE is_active = true;
CREATE INDEX idx_matches_users_status ON public.connection_matches(user_a, user_b, match_status);
CREATE INDEX idx_matches_created ON public.connection_matches(created_at DESC);
```

## Row Level Security Policies

All tables implement RLS to ensure users can only access their own data and related records.

### Key Policies

- **Profiles**: Users can only view/modify their own profile
- **Journal Entries**: Users can only access their own entries
- **Patterns**: Users can only see their own AI-detected patterns
- **Digital Twins**: Users can only access their own twin
- **Matches**: Users can see matches they're involved in
- **Conversations**: Users can view conversations involving their twin

## Data Export/Deletion Functions

### export_user_data(user_uuid UUID)
Returns all user data as JSONB for export functionality.

### delete_user_data(user_uuid UUID)
Completely removes all user data from the system.

## Triggers

Automatic `updated_at` timestamp triggers on relevant tables.

## Extensions Required

- `uuid-ossp` for UUID generation
- `pgcrypto` for encryption functions (if needed)

This schema supports the local-first architecture with cloud sync, maintains strict privacy through RLS, and enables the AI-powered features of the Kairos platform.