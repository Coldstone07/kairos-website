# Kairos Platform API Specification

## Overview

The Kairos platform API is built using Netlify Functions with Supabase for database operations and real-time subscriptions. All endpoints require authentication via Supabase JWT tokens.

## Authentication

All API requests must include the `Authorization: Bearer <supabase-jwt>` header.

## Base URL

```
https://your-netlify-site.netlify.app/.netlify/functions/
```

## API Endpoints

### Journal Entries

#### GET /api/journal/entries
Retrieve user's journal entries with pagination.

**Query Parameters:**
- `limit` (integer, default: 20, max: 100)
- `offset` (integer, default: 0)
- `start_date` (ISO 8601 date)
- `end_date` (ISO 8601 date)
- `mood_min` (integer, 1-10)
- `mood_max` (integer, 1-10)
- `tags` (string, comma-separated)

**Response:**
```json
{
  "entries": [
    {
      "id": "uuid",
      "content": "Journal content...",
      "mood": 7,
      "tags": ["reflection", "growth"],
      "timestamp": "2024-01-01T10:00:00Z",
      "word_count": 245,
      "is_private": false
    }
  ],
  "total": 150,
  "has_more": true
}
```

#### POST /api/journal/entries
Create a new journal entry.

**Request Body:**
```json
{
  "content": "Today's reflection...",
  "mood": 8,
  "tags": ["mindfulness"],
  "timestamp": "2024-01-01T10:00:00Z",
  "is_private": false
}
```

**Response:** Created entry object

#### GET /api/journal/entries/{id}
Retrieve a specific journal entry.

#### PUT /api/journal/entries/{id}
Update a journal entry.

#### DELETE /api/journal/entries/{id}
Delete a journal entry.

### Patterns

#### GET /api/patterns
Retrieve AI-detected patterns.

**Query Parameters:**
- `limit` (integer, default: 10)
- `offset` (integer, default: 0)
- `acknowledged` (boolean)
- `dismissed` (boolean)

**Response:**
```json
{
  "patterns": [
    {
      "id": "uuid",
      "pattern_type": "craving",
      "title": "Pattern of External Validation",
      "description": "Recurring focus on seeking approval from others...",
      "evidence_quotes": [
        "I felt anxious when my boss didn't respond to my email...",
        "I was disappointed when my post didn't get many likes..."
      ],
      "confidence": 0.85,
      "created_at": "2024-01-01T10:00:00Z",
      "acknowledged_at": null,
      "dismissed": false
    }
  ],
  "total": 5
}
```

#### PUT /api/patterns/{id}
Acknowledge or dismiss a pattern.

**Request Body:**
```json
{
  "acknowledged": true,
  "dismissed": false
}
```

### Digital Twins

#### GET /api/twins/me
Retrieve user's digital twin.

**Response:**
```json
{
  "id": "uuid",
  "traits": {
    "communication_style": "reflective",
    "values": ["authenticity", "growth"],
    "personality": "INTJ"
  },
  "model_version": "llama-2-7b",
  "is_active": true,
  "last_active": "2024-01-01T10:00:00Z"
}
```

#### PUT /api/twins/me
Update twin settings.

#### POST /api/twins/regenerate
Trigger twin personality regeneration from recent journal data.

### Connection Matching

#### GET /api/matches
Retrieve connection suggestions.

**Query Parameters:**
- `status` (string: pending, accepted, declined, connected)
- `limit` (integer, default: 10)

**Response:**
```json
{
  "matches": [
    {
      "id": "uuid",
      "user_b": {
        "id": "uuid",
        "display_name": "Alex",
        "traits_summary": "Reflective, values growth"
      },
      "twin_quality_score": 0.78,
      "match_reason": "High reciprocity in twin conversation about personal growth",
      "match_status": "pending",
      "created_at": "2024-01-01T10:00:00Z"
    }
  ]
}
```

#### PUT /api/matches/{id}
Update match status.

**Request Body:**
```json
{
  "status": "accepted"
}
```

### Twin Conversations

#### GET /api/conversations/{conversation_id}
Retrieve a twin conversation transcript.

**Response:**
```json
{
  "id": "uuid",
  "participants": ["twin_a_id", "twin_b_id"],
  "topic": "Personal growth challenges",
  "messages": [
    {
      "sender": "twin_a",
      "content": "I've been struggling with...",
      "timestamp": "2024-01-01T10:00:00Z"
    }
  ],
  "quality_scores": {
    "reciprocity": 0.8,
    "depth": 0.7,
    "curiosity": 0.9,
    "red_flags": 0.1
  },
  "overall_quality": 0.75
}
```

### Meditation & Practices

#### POST /api/meditation/sessions
Log a meditation session.

**Request Body:**
```json
{
  "session_type": "guided",
  "duration_minutes": 20,
  "theme": "mindfulness",
  "guide_voice": "female",
  "notes": "Felt very centered"
}
```

#### POST /api/breathing/sessions
Log a breathing practice session.

**Request Body:**
```json
{
  "pattern": "4-7-8",
  "cycles_completed": 4,
  "session_duration": 480,
  "effectiveness_rating": 4
}
```

### Data Export & Privacy

#### GET /api/export
Export all user data.

**Response:** JSON object containing all user data (see database schema)

#### POST /api/privacy/delete
Initiate account deletion.

**Response:**
```json
{
  "message": "Account deletion initiated. All data will be permanently removed within 30 days.",
  "deletion_date": "2024-02-01T00:00:00Z"
}
```

### AI Processing Endpoints

#### POST /api/ai/analyze-patterns
Trigger pattern analysis on recent journal entries.

**Internal Use:** Called by background job

#### POST /api/ai/twin-conversation
Simulate conversation between two digital twins.

**Request Body:**
```json
{
  "twin_a_id": "uuid",
  "twin_b_id": "uuid",
  "topic": "Personal growth"
}
```

#### POST /api/ai/emotion-analysis
Analyze emotions in text using Hume AI.

**Request Body:**
```json
{
  "text": "Journal entry content...",
  "context": "journal_entry"
}
```

## Real-time Subscriptions

Using Supabase real-time subscriptions for live updates.

### Journal Changes
```javascript
supabase
  .channel('journal_changes')
  .on('postgres_changes', {
    event: '*',
    schema: 'public',
    table: 'journal_entries',
    filter: `user_id=eq.${userId}`
  }, callback)
  .subscribe()
```

### New Patterns
```javascript
supabase
  .channel('pattern_discovery')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'detected_patterns',
    filter: `user_id=eq.${userId}`
  }, callback)
  .subscribe()
```

### Match Notifications
```javascript
supabase
  .channel('match_updates')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'connection_matches',
    filter: `user_a=eq.${userId}`
  }, callback)
  .subscribe()
```

## Error Handling

All endpoints return standard HTTP status codes:

- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

Error response format:
```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": "Additional context"
}
```

## Rate Limiting

- Journal operations: 100 requests/minute
- AI processing: 10 requests/minute
- Export operations: 1 request/hour

## Versioning

API versioning via URL path: `/api/v1/...`

## CORS

All endpoints support CORS for web application access.

## Security

- All requests validated with Supabase JWT
- Row Level Security enforced at database level
- Input sanitization and validation
- Rate limiting to prevent abuse