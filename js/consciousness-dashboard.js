
document.addEventListener('DOMContentLoaded', () => {
    // Wait for manager to load? It's synchronous, so it should be there if script order is right.
    // Or just run this logic when dashboard is opened.

    setTimeout(initDashboard, 1000); // Delay init to ensure DOM is ready
});

function initDashboard() {
    refreshDashboard();
}

function refreshDashboard() {
    if (!window.consciousnessManager) return;

    const stats = window.consciousnessManager.getStats();

    // Update Stats UI if elements exist
    const sessionCountEl = document.getElementById('dash-session-count');
    if (sessionCountEl) sessionCountEl.textContent = stats.total;

    const themesEl = document.getElementById('dash-top-themes');
    if (themesEl && stats.topThemes.length > 0) {
        themesEl.innerHTML = stats.topThemes.map(t => `<span class="px-2 py-1 bg-white/10 rounded text-xs uppercase">${t}</span>`).join(' ');
    }

    renderTimeline();
    renderTransformationMap();
}

function renderTimeline() {
    const container = document.getElementById('dash-timeline');
    if (!container) return;

    const history = window.consciousnessManager.memory.sessions.slice().reverse().slice(0, 5); // Last 5

    if (history.length === 0) {
        container.innerHTML = '<div class="text-center text-xs text-moonlight-muted py-4">No memory traces yet. Begin a session.</div>';
        return;
    }

    container.innerHTML = history.map(s => `
        <div class="mb-3 pl-3 border-l border-white/20">
            <div class="text-[10px] text-moonlight-muted uppercase tracking-widest">${new Date(s.date).toLocaleDateString()} • ${s.tool}</div>
            <div class="text-xs text-moonlight-secondary mt-1 truncate">${s.themes.join(', ')}</div>
        </div>
    `).join('');
}

function renderTransformationMap() {
    // Visualization of transformation nodes
    const mapContainer = document.getElementById('dash-map');
    if (!mapContainer) return;

    const stages = ['Initiation', 'Deepening', 'Integration', 'Synthesis'];
    const current = window.consciousnessManager.memory.transformations;

    mapContainer.innerHTML = stages.map((stage, idx) => {
        const isActive = current.includes(stage);
        const color = isActive ? 'bg-accent-primary shadow-[0_0_10px_rgba(var(--accent-primary-rgb),0.5)]' : 'bg-white/10';
        const text = isActive ? 'text-white' : 'text-moonlight-muted';

        return `
        <div class="flex items-center gap-2 mb-2">
            <div class="w-2 h-2 rounded-full ${color}"></div>
            <div class="text-xs ${text} uppercase tracking-widest">${stage}</div>
        </div>`;
    }).join('');
}

function toggleDashboard() {
    const dashboard = document.getElementById('consciousness-dashboard');
    if (dashboard) {
        dashboard.classList.toggle('hidden');
        if (!dashboard.classList.contains('hidden')) {
            refreshDashboard();
        }
    }
}

function showDashboardTab(tabId) {
    // Simple tab switching if we add tabs inside dashboard later
    // For now, placeholder
}

function clearConsciousnessData() {
    if (confirm("Are you sure you want to wipe all memory traces? Integration data will be lost.")) {
        window.consciousnessManager.clearData();
        refreshDashboard();
    }
}
