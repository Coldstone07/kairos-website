# Kairos Path Website

A privacy-first platform for the holistic evolution of consciousness. This website serves as the digital home for the Kairos Path 10-week program, featuring a custom "Cosmic/Moonlight" aesthetic and interactive AI-powered "Consciousness Labs".

## 🏗 Architecture Overview

**Current State**: Multi-Page Application (MPA).
**Previous State**: Single-Page Application (SPA).

The website architectures was refactored from a single long-scrolling page to a multi-page structure to improve content organization, SEO, and maintainability. Each major section now resides in its own HTML file, while sharing common assets (`css/styles.css`, `js/app.js`).

### File Structure

- **`index.html`**: The **Landing Page**. Focuses on the "Framework" (AQAL Integral Theory) and the core invitation.
- **`methodology.html`**: A deep dive into the **Methodology**. Explains the 10-week journey and Somatic Toolkit (Body Map, Nervous System Visualizer).
- **`technology.html`**: Explains the **Privacy-First Technology**. Details the local-first, small language model approach.
- **`labs.html`**: The **Consciousness Labs (Beta)**. Contains interactive AI tools powered by the Gemini API:
    - *Consciousness Mirror*: Reflects somatic patterns.
    - *Parts Dialogue*: Simulates IFS (Internal Family Systems) conversations.
    - *Crisis Reframe*: Reframes challenges as growth edges.
- **`about.html`**: **Team & Mission**. Bios for founders (Shalini & Jatin) and the project manifesto.
- **`begin.html`**: **Application**. Program details, pricing, and "Begin Application" CTA.

### Shared Assets

- **`js/app.js`**: Contains all client-side logic.
    - *Event Delegation*: Handles clicks for navigation, lab tools, and interactive diagrams globally.
    - *Safety Guards*: Ensures code doesn't crash if specific elements (like Lab tools) are missing on a page.
    - *Labs Logic*: Manages state and UI for the interactive AI tools.
    - *Particle System*: Generates the ambient background effect.
- **`css/styles.css`**: Custom styles for animations, glassmorphism, and specific component overrides. Tailwind CSS is loaded via CDN for utility classes.

### Backend (Serverless)

- **`netlify/functions/gemini.js`**: A secure serverless function that acts as a proxy to the Google Gemini API. It hides the `GEMINI_API_KEY` from the client-side code.

## 🚀 Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS (CDN).
- **Icons**: Lucide Icons (CDN).
- **Sanitization**: DOMPurify (CDN) for safe Markdown/HTML rendering.
- **Backend**: Netlify Functions (Node.js).
- **AI**: Google Gemini Pro (via API).

## 🛠 Local Development Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Coldstone07/kairos-website.git
    cd kairos-website
    ```

2.  **Simple Static Serve (Frontend Only)**
    If you just want to view the layout without working AI features:
    ```bash
    python3 -m http.server 8000
    # Open http://localhost:8000
    ```

3.  **Full Development (With AI Features)**
    To use the Netlify Functions locally:
    - Install Netlify CLI: `npm install netlify-cli -g`
    - create `.env` file with `GEMINI_API_KEY=your_key_here`
    - Run:
    ```bash
    netlify dev
    ```

## 📝 Implementation Notes

- **Navigation**: The navigation bar is identical across all pages. The "active" page logic can be handled by manually adding the `text-accent-primary` class to the relevant link in the HTML, or by a small script in `app.js` (currently manual for simplicity/performance).
- **Labs State**: The `labsState` object in `app.js` tracks the conversation context for the AI tools. This state is reset when switching tools or refreshing the page.
- **Security**: Content Security Policy (CSP) is strictly defined in `<meta>` tags and `netlify.toml` to allow only specific CDNs (Tailwind, Lucide, DOMPurify) and local scripts.

## 🎨 Design System

- **Colors**:
    - *Cosmic Base*: `#0F0C29` (Deep, almost black purple)
    - *Moonlight*: `#F7F3E9` (Warm off-white)
    - *Accent Gold*: `#D4AF37`
- **Typography**:
    - Headings: *Lora* (Serif)
    - Body: *Manrope* (Sans-serif)
