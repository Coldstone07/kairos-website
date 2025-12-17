
class ConsciousnessManager {
    constructor() {
        this.storageKey = 'kairos_consciousness_db';
        this.memory = this.loadMemory();
    }

    loadMemory() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : {
            sessions: [],
            totalSessions: 0,
            themes: {}, // Frequency map of themes
            transformations: [] // List of key shifts
        };
    }

    saveMemory(toolType, inputData, outputText, metadata = {}) {
        const session = {
            id: Date.now(),
            date: new Date().toISOString(),
            tool: toolType,
            input: inputData,
            output: outputText,
            metadata: metadata,
            themes: this.analyzeThemes(inputData, outputText), // Simple keyword extraction
            emotions: this.analyzeEmotions(inputData)
        };

        this.memory.sessions.push(session);
        this.memory.totalSessions++;
        this.updateThemeStats(session.themes);

        localStorage.setItem(this.storageKey, JSON.stringify(this.memory));
        return session;
    }

    analyzeThemes(input, output) {
        // Simple heuristic for demo purposes
        const keywords = ['fear', 'anger', 'hope', 'purpose', 'connection', 'isolation', 'body', 'mind', 'spirit'];
        const text = (JSON.stringify(input) + output).toLowerCase();
        return keywords.filter(k => text.includes(k));
    }

    analyzeEmotions(input) {
        // Placeholder for more complex sentiment analysis
        return [];
    }

    updateThemeStats(themes) {
        themes.forEach(t => {
            this.memory.themes[t] = (this.memory.themes[t] || 0) + 1;
        });
    }

    getMemoryContext(lastN = 3) {
        // Return context from last N sessions for RAG
        return this.memory.sessions.slice(-lastN).map(s => ({
            tool: s.tool,
            themes: s.themes,
            outputSnippet: s.output.substring(0, 100) + "..."
        }));
    }

    getStats() {
        return {
            total: this.memory.totalSessions,
            topThemes: Object.entries(this.memory.themes)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3)
                .map(e => e[0])
        };
    }

    updateTransformationTracking() {
        // Check for milestones
        if (this.memory.totalSessions === 1) this.logTransformation("Initiation");
        if (this.memory.totalSessions === 5) this.logTransformation("Deepening");
    }

    logTransformation(name) {
        if (!this.memory.transformations.includes(name)) {
            this.memory.transformations.push(name);
            localStorage.setItem(this.storageKey, JSON.stringify(this.memory));
        }
    }

    clearData() {
        localStorage.removeItem(this.storageKey);
        this.memory = this.loadMemory();
    }
}

// Global Export
window.consciousnessManager = new ConsciousnessManager();
