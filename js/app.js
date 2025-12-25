
// Gemini API Setup
// Gemini API Setup
// apiKey is handled securely via Netlify Functions (process.env.GEMINI_KEY)

// Labs Logic - State Tracking for Continuations
let labsState = {
    mirror: { count: 0, context: "" },
    parts: { count: 0, context: "" },
    crisis: { count: 0, context: "" }
};

// Global Event Delegation
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    createParticles();

    document.body.addEventListener('click', (e) => {
        const target = e.target.closest('[data-action]');
        if (!target) return;

        const action = target.dataset.action;

        switch (action) {
            case 'navigate':
                navigateTo(target.dataset.target);
                break;
            case 'toggle-mobile-menu':
                toggleMobileMenu();
                break;
            case 'show-details':
                showDetails(target.dataset.quadrant); // ul, ur, ll, lr
                break;
            case 'reset-details':
                resetDetails();
                break;
            case 'set-wave':
                setWave(target.dataset.state);
                break;
            case 'highlight-body':
                highlightBody(target.dataset.target);
                break;
            case 'switch-lab':
                switchLab(target.dataset.mode);
                break;
            case 'set-mirror-input':
                setMirrorInput(target.dataset.text);
                break;
            case 'select-scenario':
                selectScenario(target.dataset.text);
                break;
            case 'select-part':
                selectPart(target.dataset.side, target.dataset.name, target.dataset.desc, target.dataset.persp);
                break;
            case 'clear-part':
                // Handled via 'input' event on the input field mostly, but if there's a button
                break;
            case 'select-crisis':
                selectCrisis(target.dataset.name, target.dataset.context);
                break;
            case 'call-gemini':
                callGeminiTool(target.dataset.tool, target.dataset.input, target.dataset.output);
                break;
            case 'call-parts-two-llm':
                callGeminiPartsTwoLLM();
                break;
            case 'continue-gemini':
                continueGeminiTool(target.dataset.tool, target.dataset.output);
                break;
        }
    });

    // Input event delegation for clearing part selection
    document.body.addEventListener('input', (e) => {
        if (e.target.matches('#inputPartA')) clearPartSelection('A');
        if (e.target.matches('#inputPartB')) clearPartSelection('B');
    });

    // Hover delegation for showing details (if needed via JS instead of CSS/HTML)
    // The original code used onmouseover="showDetails". We can delegate mouseover too.
    document.body.addEventListener('mouseover', (e) => {
        const target = e.target.closest('[data-hover-action]');
        if (!target) return;
        if (target.dataset.hoverAction === 'show-details') {
            showDetails(target.dataset.quadrant);
        }
    });
});


function switchLab(mode) {
    // Update Buttons
    document.querySelectorAll('.lab-mode-btn').forEach(btn => btn.classList.remove('active'));

    const btns = document.querySelectorAll('.lab-mode-btn');
    btns.forEach(b => {
        // Checking text content is a bit fragile if text changes, but matches original logic
        if (b.textContent.toLowerCase().includes(mode.split(' ')[0])) b.classList.add('active');
    });

    // Update Views
    document.querySelectorAll('.lab-tool').forEach(tool => tool.classList.remove('active', 'active-flex', 'hidden'));

    // Hide all tools
    document.querySelectorAll('.lab-tool').forEach(tool => {
        tool.classList.add('hidden');
    });

    const activeTool = document.getElementById(`tool-${mode}`);
    if (activeTool) {
        activeTool.classList.remove('hidden');
        activeTool.classList.add('active');
    }
}

// Helper functions for inputs
function setMirrorInput(text) {
    document.getElementById('mirrorInput').value = text;
}

function selectScenario(text) {
    document.getElementById('partsScenario').value = text;
}

function selectPart(side, name, description, perspective) {
    document.getElementById(`inputPart${side}`).value = name;
    document.getElementById(`descPart${side}`).value = description || "";
    document.getElementById(`perspPart${side}`).value = perspective || "";

    const btns = document.querySelectorAll(`.part-btn-${side.toLowerCase()}`);
    btns.forEach(b => {
        b.classList.remove('bg-white/20', 'border-white/30');
        if (b.textContent.trim() === name) {
            b.classList.add('bg-white/20', 'border-white/30');
        }
    });
}

function selectCrisis(name, context) {
    document.getElementById('crisisName').value = name;
    document.getElementById('crisisContext').value = context;
}

function clearPartSelection(side) {
    const btns = document.querySelectorAll(`.part-btn-${side.toLowerCase()}`);
    btns.forEach(b => b.classList.remove('bg-white/20', 'border-white/30'));
}

// --- NEW CONTINUATION LOGIC ---

function appendContinueButton(toolType, outputId) {
    const container = document.getElementById(outputId);
    const currentCount = labsState[toolType].count;

    // Remove existing continue buttons if any
    const existingBtn = container.querySelector('.continue-btn-container');
    if (existingBtn) existingBtn.remove();

    if (currentCount < 2) {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'continue-btn-container mt-6 text-center border-t border-white/10 pt-4';

        let btnText = "Continue Conversation";
        if (toolType === 'parts') btnText = "Negotiate Closer";
        if (toolType === 'mirror') btnText = "Go Deeper";
        if (toolType === 'crisis') btnText = "Practical Micro-Step";

        // UPDATED: Use data-action instead of onclick
        btnContainer.innerHTML = `
            <button data-action="continue-gemini" data-tool="${toolType}" data-output="${outputId}" class="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-xs uppercase tracking-widest text-moonlight-secondary transition-all flex items-center gap-2 mx-auto">
                <i data-lucide="arrow-down" class="w-3 h-3"></i> ${btnText} <span class="opacity-50">(${2 - currentCount} left)</span>
            </button>
        `;
        container.appendChild(btnContainer);
        lucide.createIcons();
    } else {
        const limitMsg = document.createElement('div');
        limitMsg.className = 'mt-6 text-center text-xs text-moonlight-muted italic border-t border-white/5 pt-4';
        limitMsg.textContent = "Session complete. Take a moment to integrate.";
        container.appendChild(limitMsg);
    }
}

async function continueGeminiTool(toolType, outputId) {
    const outputDiv = document.getElementById(outputId);
    const btnContainer = outputDiv.querySelector('.continue-btn-container');
    if (btnContainer) btnContainer.innerHTML = '<div class="loader mx-auto w-4 h-4"></div>';

    const previousContext = labsState[toolType].context;
    let prompt = "";
    let systemPrompt = "";

    if (toolType === 'parts') {
        systemPrompt = "You are a Digital Twin Consciousness Simulator. Continue the dialogue. The parts should move from conflict toward a tentative agreement or understanding.";
        prompt = `PREVIOUS CONTEXT:\n${previousContext}\n\nTASK: Continue the dialogue for 2 more lines each. They should start softening their stance.`;
    } else if (toolType === 'mirror') {
        systemPrompt = "You are a Consciousness Mirror. Go deeper into the somatic experience.";
        prompt = `PREVIOUS CONTEXT:\n${previousContext}\n\nTASK: Ask one profound question about the somatic sensation identified and offer a brief visualization to hold it.`;
    } else if (toolType === 'crisis') {
        systemPrompt = "You are a Developmental Coach. Move from insight to action.";
        prompt = `PREVIOUS CONTEXT:\n${previousContext}\n\nTASK: Suggest 3 specific, tiny micro-actions the user can take TODAY to embody this Growth Edge.`;
    }

    try {
        const response = await fetch('/.netlify/functions/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] }
            })
        });

        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        let text = data.candidates[0].content.parts[0].text;

        // Append result
        const newContent = document.createElement('div');
        newContent.className = 'mt-6 pt-6 border-t border-white/10 fade-in';

        // Parse and sanitize
        let safeContent;
        if (toolType === 'parts' || toolType === 'mirror' || toolType === 'sankara') {
            // Assuming text is safe HTML from trusted prompt, but we should strictly sanitize
            // If DOMPurify is available
            if (window.DOMPurify) {
                safeContent = DOMPurify.sanitize(text);
            } else {
                safeContent = text; // Fallback if blocked
            }
        } else {
            safeContent = parseMarkdown(text);
        }

        newContent.innerHTML = safeContent;

        // Remove loading spinner button
        if (btnContainer) btnContainer.remove();

        outputDiv.appendChild(newContent);

        // Update State
        labsState[toolType].count++;
        labsState[toolType].context += `\n\nCONTINUATION:\n${text}`;

        // Add next button if applicable
        appendContinueButton(toolType, outputId);

    } catch (error) {
        console.error("Gemini Error:", error);
        if (btnContainer) btnContainer.innerHTML = '<span class="text-red-400 text-xs">Connection lost.</span>';
    }
}

async function callGeminiTool(toolType, inputId, outputId) {
    // Reset State on new call
    labsState[toolType].count = 0;
    labsState[toolType].context = "";

    let input = "";

    if (toolType === 'parts') {
        const partA = document.getElementById('inputPartA').value;
        const descA = document.getElementById('descPartA').value;
        const perspA = document.getElementById('perspPartA').value;

        const partB = document.getElementById('inputPartB').value;
        const descB = document.getElementById('descPartB').value;
        const perspB = document.getElementById('perspPartB').value;

        const scenario = document.getElementById('partsScenario').value;

        if (!partA || !partB) {
            alert("Please name both parts to simulate the dialogue.");
            return;
        }

        input = `
        CONTEXT/SCENARIO: "${scenario || 'A general conflict about control vs safety'}"
        
        ROLE A NAME: "${partA}"
        ROLE A TRAITS: "${descA}"
        ROLE A PERSPECTIVE/GOAL: "${perspA}"
        
        ROLE B NAME: "${partB}"
        ROLE B TRAITS: "${descB}"
        ROLE B PERSPECTIVE/GOAL: "${perspB}"
        `;
    } else if (toolType === 'crisis') {
        const name = document.getElementById('crisisName').value;
        const context = document.getElementById('crisisContext').value;

        if (!name || !context) {
            alert("Please describe the crisis to reframe it.");
            return;
        }

        input = `CRISIS NAME: "${name}"\nCONTEXT/EXPERIENCE: "${context}"`;
    } else {
        const inputEl = document.getElementById(inputId);
        if (inputEl) {
            input = inputEl.value;
            if (!input.trim()) return;
        } else {
            // If inputId is 'null' or not found
        }
    }

    const outputDiv = document.getElementById(outputId);
    outputDiv.innerHTML = '<div class="text-center py-8"><div class="loader mx-auto mb-4"></div><span class="text-moonlight-muted animate-pulse">Running Consciousness Simulation...</span></div>';
    outputDiv.classList.remove('hidden');

    let systemPrompt = "";

    if (toolType === 'mirror') {
        systemPrompt = `You are a "Consciousness Mirror". 
        Output HTML format:
        <div class="mb-4"><strong class="text-blue-400 block mb-1">I Hear:</strong> [Reflection of emotion]</div>
        <div class="mb-4"><strong class="text-purple-400 block mb-1">Check Your Body:</strong> [Somatic cue]</div>
        <div><strong class="text-accent-primary block mb-1">Pattern Insight:</strong> [Pattern name]</div>`;
    } else if (toolType === 'parts') {
        systemPrompt = `You are a Digital Twin Consciousness Simulator.
        Task: Simulate a conversation between two internal parts based on user input.
        Output HTML Format:
        <div class="space-y-4 bg-black/20 p-6 rounded-xl border border-white/10">
            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">A</div>
                <div class="text-sm"><strong class="text-blue-400 block text-xs uppercase mb-1">Part A</strong>"[Line 1]"</div>
            </div>
            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold shrink-0">B</div>
                <div class="text-sm"><strong class="text-red-400 block text-xs uppercase mb-1">Part B</strong>"[Line 1]"</div>
            </div>
            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">A</div>
                <div class="text-sm"><strong class="text-blue-400 block text-xs uppercase mb-1">Part A</strong>"[Line 2]"</div>
            </div>
            <div class="flex gap-4">
                <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold shrink-0">B</div>
                <div class="text-sm"><strong class="text-red-400 block text-xs uppercase mb-1">Part B</strong>"[Line 2 - revealing intent]"</div>
            </div>
            <div class="mt-4 pt-4 border-t border-white/10 text-xs text-moonlight-muted italic text-center">
                Simulation Complete • Resonance Detected
            </div>
        </div>`;
    } else if (toolType === 'crisis') {
        systemPrompt = `You are a Developmental Coach specializing in "Crisis as Opportunity". 
        Input: A specific crisis scenario and description.
        Task: Reframe this crisis not as a failure, but as a specific "Growth Edge".
        
        Output HTML Format:
        <div>
            <h3 class="text-xl font-serif text-white mb-4">The Hidden Invitation</h3>
            <p class="text-moonlight-secondary mb-4">[2 sentences validating the pain while pointing to the opportunity]</p>
            
            <div class="bg-white/5 p-4 rounded-lg border-l-2 border-green-400 mb-4">
                <strong class="text-green-400 text-xs uppercase tracking-widest block mb-1">Your Growth Edge</strong>
                <span class="text-white text-lg font-bold">[The specific quality being birthed, e.g. "Radical Self-Trust"]</span>
            </div>
            
            <p class="text-xs text-moonlight-muted italic">"The wound is the place where the Light enters you." - Rumi</p>
        </div>`;
    }

    try {
        const response = await fetch('/.netlify/functions/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: input }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] }
            })
        });

        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        let text = data.candidates[0].content.parts[0].text;

        // Sanitization
        let safeContent;
        if (window.DOMPurify) {
            safeContent = DOMPurify.sanitize(text);
        } else {
            safeContent = text;
        }

        outputDiv.innerHTML = safeContent;

        // Store Context
        labsState[toolType].context = `INPUT:\n${input}\n\nOUTPUT:\n${text}`;

        // Show Continue Button
        appendContinueButton(toolType, outputId);

    } catch (error) {
        console.error("Gemini Error:", error);
        outputDiv.textContent = "The lab is currently offline. Please try again.";
    }
}

// ============================================================================
// TWO-LLM DIALOGUE SYSTEM FOR PARTS WORK
// ============================================================================

async function callGeminiPartsTwoLLM() {
    // Reset State
    labsState.parts.count = 0;
    labsState.parts.context = "";

    // Collect Part A data
    const partA = {
        name: document.getElementById('inputPartA').value,
        description: document.getElementById('descPartA').value,
        perspective: document.getElementById('perspPartA').value
    };

    // Collect Part B data
    const partB = {
        name: document.getElementById('inputPartB').value,
        description: document.getElementById('descPartB').value,
        perspective: document.getElementById('perspPartB').value
    };

    const scenario = document.getElementById('partsScenario').value;

    // Validation
    if (!partA.name || !partB.name) {
        alert("Please name both parts to simulate the dialogue.");
        return;
    }

    const outputDiv = document.getElementById('partsOutput');
    outputDiv.innerHTML = '<div class="text-center py-8"><div class="loader mx-auto mb-4"></div><span class="text-moonlight-muted animate-pulse">Initializing Dialogue Between Parts...</span></div>';
    outputDiv.classList.remove('hidden');

    // Create dialogue container
    const dialogueContainer = document.createElement('div');
    dialogueContainer.className = 'space-y-4 bg-black/20 p-6 rounded-xl border border-white/10';
    dialogueContainer.id = 'dialogue-container';
    outputDiv.innerHTML = '';
    outputDiv.appendChild(dialogueContainer);

    // Dialogue orchestration
    const NUM_EXCHANGES = 4; // 4 exchanges = 8 total messages
    let conversationHistory = [];

    try {
        for (let turn = 0; turn < NUM_EXCHANGES * 2; turn++) {
            const isPartA = turn % 2 === 0;
            const currentPart = isPartA ? partA : partB;
            const color = isPartA ? 'blue' : 'red';
            const letter = isPartA ? 'A' : 'B';

            // Show thinking indicator
            const thinkingDiv = document.createElement('div');
            thinkingDiv.className = `flex gap-4 animate-pulse thinking-indicator-${letter}`;
            thinkingDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-${color}-500/20 flex items-center justify-center text-${color}-400 font-bold shrink-0">${letter}</div>
                <div class="text-sm flex items-center gap-2">
                    <span class="text-${color}-400 text-xs uppercase">${currentPart.name} is thinking...</span>
                    <div class="loader w-3 h-3"></div>
                </div>
            `;
            dialogueContainer.appendChild(thinkingDiv);

            // Build system prompt for this part
            const systemPrompt = buildPartSystemPrompt(currentPart, scenario, isPartA);

            // Build user prompt (conversation context + instruction)
            const userPrompt = buildDialoguePrompt(conversationHistory, turn, scenario);

            // Call Gemini API
            const response = await callGeminiForPart(systemPrompt, userPrompt);

            // Remove thinking indicator
            thinkingDiv.remove();

            // Add response to UI
            const messageDiv = document.createElement('div');
            messageDiv.className = 'flex gap-4 fade-in';
            messageDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-${color}-500/20 flex items-center justify-center text-${color}-400 font-bold shrink-0">${letter}</div>
                <div class="text-sm">
                    <strong class="text-${color}-400 block text-xs uppercase mb-1">${currentPart.name}</strong>
                    <span class="text-moonlight-secondary">"${response}"</span>
                </div>
            `;
            dialogueContainer.appendChild(messageDiv);

            // Update conversation history
            conversationHistory.push({
                part: currentPart.name,
                message: response,
                isPartA: isPartA
            });

            // Small delay for better UX (makes dialogue feel natural)
            await sleep(800);
        }

        // Add completion footer
        const footer = document.createElement('div');
        footer.className = 'mt-4 pt-4 border-t border-white/10 text-xs text-moonlight-muted italic text-center';
        footer.textContent = 'Simulation Complete • Resonance Detected';
        dialogueContainer.appendChild(footer);

        // Store context
        labsState.parts.context = JSON.stringify({
            scenario,
            partA,
            partB,
            conversationHistory
        });

        // Add continue button
        appendContinueButton('parts', 'partsOutput');

    } catch (error) {
        console.error("Dialogue Error:", error);
        outputDiv.innerHTML = '<div class="text-center py-8"><span class="text-red-400">Dialogue failed. Please check your network and try again.</span></div>';
    }
}

function buildPartSystemPrompt(part, scenario, isPartA) {
    return `You are roleplaying as an internal psychological part in an IFS (Internal Family Systems) dialogue.

SCENARIO: ${scenario || 'A general internal conflict'}

YOUR IDENTITY:
- Name: ${part.name}
- Character Traits: ${part.description || 'Not specified'}
- Core Desire/Goal: ${part.perspective || 'To be heard and understood'}

INSTRUCTIONS:
- Speak in first person as "${part.name}"
- Stay completely in character with your defined traits and perspective
- Express your viewpoint authentically and with emotion
- Keep responses to 2-3 sentences maximum
- Show conviction but also vulnerability where appropriate
- Do NOT break character or add meta-commentary
- Do NOT use quotation marks in your response
- Output ONLY your spoken dialogue

Remember: You are a real part of someone's psyche with genuine needs and fears. Speak truthfully from that place.`;
}

function buildDialoguePrompt(history, turnIndex, scenario) {
    if (turnIndex === 0) {
        return `This is the beginning of the dialogue about: "${scenario}"\n\nYou speak first. Express your perspective on this situation clearly and emotionally. What do you want? What do you fear?`;
    }

    const lastMessage = history[history.length - 1];
    const contextMessages = history.length > 3 ? history.slice(-3) : history;

    let prompt = "CONVERSATION SO FAR:\n";
    contextMessages.forEach(h => {
        prompt += `${h.part}: "${h.message}"\n`;
    });

    prompt += `\nThe other part just said: "${lastMessage.message}"\n\nRespond to what they said. Stay in character. Show how their words make you feel and what you need them to understand.`;

    return prompt;
}

async function callGeminiForPart(systemPrompt, userPrompt) {
    const response = await fetch('/.netlify/functions/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: userPrompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
        })
    });

    if (!response.ok) throw new Error('API Error');
    const data = await response.json();
    let text = data.candidates[0].content.parts[0].text;

    // Clean up response (remove quotes if LLM added them)
    text = text.trim().replace(/^["']|["']$/g, '');

    return text;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================================================
// END TWO-LLM DIALOGUE SYSTEM
// ============================================================================

// New Markdown Parser Utility (Sanitized logic wrapper)
function parseMarkdown(text) {
    if (!text) return '';
    const raw = text
        // Headers
        .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold text-white mt-4 mb-2">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold text-white mt-4 mb-2">$1</h2>')
        // Bold
        .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-accent-primary">$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/gim, '<em class="text-moonlight-secondary">$1</em>')
        // Lists
        .replace(/^\s*-\s+(.*)/gim, '<li class="ml-4 list-disc text-moonlight-muted">$1</li>')
        // Newlines to breaks
        .replace(/\n/gim, '<br>');

    // Double ensure sanitization here too if used directly?
    // Usually parseMarkdown is used where HTML tag output is expected, so we trust our regex replacement.
    // Ideally we'd sanitize AFTER regex replacement or BEFORE.
    // With DOMPurify, we can sanitize the end result.
    if (window.DOMPurify) {
        return DOMPurify.sanitize(raw);
    }
    return raw;
}

function createParticles() {
    const container = document.getElementById('particles');
    // Guard clause
    if (!container) return;

    // Clear previous
    container.innerHTML = '';

    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
        particle.style.animationDelay = `-${Math.random() * 10}s`;
        container.appendChild(particle);
    }
}

function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) {
        console.error(`Section with id "${sectionId}" not found.`);
        return;
    }

    document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
    section.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
}

function toggleMobileMenu() {
    const mm = document.getElementById('mobile-menu');
    if (mm) mm.classList.toggle('hidden');
}

// AQAL Details Logic
const aqalData = {
    ul: {
        title: "Upper Left: Psychological",
        subtitle: "Interior-Individual (The 'I' Space)",
        philosophy: "The domain of your inner narrative, values, and subjective reality. In Kairos, we view the mind not as something to be 'fixed', but as a landscape of parts to be witnessed.",
        practice: "<strong>The Work:</strong> We use <em>IFS (Internal Family Systems)</em> and <em>Enneagram</em> mapping to move from being 'blended' with your patterns to witnessing them. This shifts your internal operating system from unconscious reaction to conscious choice."
    },
    ur: {
        title: "Upper Right: Somatic",
        subtitle: "Exterior-Individual (The 'It' Space)",
        philosophy: "The domain of biology, energy, and observable behavior. The body never lies; it stores the history your mind tries to forget. We treat the nervous system as the foundation of capacity.",
        practice: "<strong>The Work:</strong> We use <em>Polyvagal regulation</em> and <em>energy clearing</em> to release frozen trauma patterns (sankaras). This isn't just relaxation—it's building the physiological hardware required to run new software."
    },
    ll: {
        title: "Lower Left: Relational",
        subtitle: "Interior-Collective (The 'We' Space)",
        philosophy: "The domain of shared meaning, resonance, and culture. We believe healing happens in connection. Transformation that doesn't change how you relate to others is incomplete.",
        practice: "<strong>The Work:</strong> We leverage <em>Collective Coherence</em> in small cohorts. When one person's nervous system regulates, it creates a permission field for others. We practice authentic relating to rewire attachment patterns."
    },
    lr: {
        title: "Lower Right: Systemic",
        subtitle: "Exterior-Collective (The 'Its' Space)",
        philosophy: "The domain of systems, environment, and social impact. Your internal wholeness seeks expression in the world. We view your environment as either a support structure or a drain.",
        practice: "<strong>The Work:</strong> We focus on <em>Service Activation</em> and <em>Environmental Design</em>. We align your external life structures (career, home, legacy) to support your internal shifts, ensuring your purpose lands in reality."
    }
};

function showDetails(quadrant) {
    const panel = document.getElementById('aqal-details');
    if (!panel) return;
    const data = aqalData[quadrant];
    if (!data) return;

    panel.innerHTML = `
        <span class="text-accent-primary text-xs uppercase tracking-widest mb-2 block">${data.subtitle}</span>
        <h3 class="text-3xl font-serif text-white mb-4">${data.title}</h3>
        <p class="text-moonlight-muted leading-relaxed text-sm border-t border-white/10 pt-4 mt-4">${data.practice}</p>
    `;
}

function resetDetails() {
    const panel = document.getElementById('aqal-details');
    if (!panel) return;
    panel.innerHTML = `
        <span class="text-accent-primary text-xs uppercase tracking-widest mb-2 block">System Overview</span>
        <h3 class="text-3xl font-serif text-white mb-6">The Four Dimensions</h3>
        <p class="text-moonlight-secondary leading-relaxed mb-4">
            This map organizes human experience into two axes: <strong>Interior vs. Exterior</strong> (Subjective experience vs. Observable behavior) and <strong>Individual vs. Collective</strong> (Personal reality vs. Shared reality).
        </p>
        <div class="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 flex items-start gap-3">
            <i data-lucide="mouse-pointer" class="text-accent-primary w-5 h-5 mt-0.5"></i>
            <p class="text-moonlight-muted text-sm italic">
                <strong>Interactive:</strong> Hover over any quadrant to explore the specific dimensions. Click the center "YOU" to reset.
            </p>
        </div>
    `;
}

// Nervous System Visualizer Logic
function setWave(state) {
    const path = document.getElementById('wave-path');
    const desc = document.getElementById('wave-desc');
    const btns = document.querySelectorAll('.state-btn');

    btns.forEach(b => b.classList.remove('active', 'bg-accent-primary', 'text-[#0F0C29]'));

    // Re-apply base styles to buttons
    btns.forEach(b => b.classList.add('text-xs', 'border', 'border-white/20', 'rounded'));

    // Simple visualizer logic
    if (state === 'sympathetic') {
        path.setAttribute('d', 'M0 50 L 20 20 L 40 80 L 60 30 L 80 70 L 100 50 L 120 10 L 140 90 L 160 50 L 180 20 L 200 80 L 220 50 L 240 10 L 260 90 L 280 50 L 300 20 L 320 80 L 340 50 L 360 10 L 380 90 L 400 50');
        path.setAttribute('stroke', '#EF4444'); // Red
        desc.innerHTML = '<strong>Sympathetic:</strong> Mobilized, anxious, jagged. Fight or Flight activation.';
    } else if (state === 'dorsal') {
        path.setAttribute('d', 'M0 90 L 400 90');
        path.setAttribute('stroke', '#6B7280'); // Grey
        desc.innerHTML = '<strong>Dorsal Vagal:</strong> Flat, disconnected, heavy. Freeze or Shutdown.';
    } else {
        path.setAttribute('d', 'M0 50 Q 50 100 100 50 T 200 50 T 300 50 T 400 50');
        path.setAttribute('stroke', 'var(--accent-primary)'); // Gold
        desc.innerHTML = '<strong>Ventral Vagal:</strong> Smooth, rhythmic, coherent. This is the state where healing and connection occur.';
    }

    // Highlight active button by matching data-state instead of text
    const activeBtn = Array.from(btns).find(b => b.dataset.state === state);
    if (activeBtn) activeBtn.classList.add('bg-accent-primary', 'text-[#0F0C29]');
}

// Updated Body Map Logic
function highlightBody(center) {
    // Reset all groups
    const groups = document.querySelectorAll('.energy-group');
    groups.forEach(g => {
        g.classList.remove('opacity-100');
        g.classList.add('opacity-40');
        g.querySelector('circle:first-child').style.fill = 'var(--accent-primary)';
        g.querySelector('circle:first-child').style.filter = 'none';
        g.querySelector('circle:last-child').style.fill = 'rgba(255,255,255,0.5)';
    });

    // Reset buttons
    document.querySelectorAll('.center-btn').forEach(b => {
        b.classList.remove('bg-accent-primary', 'text-[#0F0C29]');
    });

    const desc = document.getElementById('body-desc');
    const targetGroup = document.getElementById(`group-${center}`);
    const targetBtn = document.querySelector(`.center-btn[data-target="${center}"]`);

    // Activate target
    if (targetGroup) {
        targetGroup.classList.remove('opacity-40');
        targetGroup.classList.add('opacity-100');

        // Add Glow Effect
        const outerRing = targetGroup.querySelector('circle:first-child');
        const innerDot = targetGroup.querySelector('circle:last-child');

        outerRing.style.filter = 'url(#center-glow)';
        innerDot.style.fill = '#fff';
    }

    if (targetBtn) {
        targetBtn.classList.add('bg-accent-primary', 'text-[#0F0C29]');
    }

    if (center === 'head') {
        desc.innerHTML = "<strong>Upper Dantian (Head Center):</strong><br>Mental chatter, planning, and detachment. <br><span class='text-moonlight-muted text-xs'>Somatic Sign: Tension in forehead/eyes.</span>";
    } else if (center === 'heart') {
        desc.innerHTML = "<strong>Middle Dantian (Heart Center):</strong><br>Emotional turbulence, image maintenance, and shame. <br><span class='text-moonlight-muted text-xs'>Somatic Sign: Tightness in chest/shoulders.</span>";
    } else {
        desc.innerHTML = "<strong>Lower Dantian (Gut Center):</strong><br>Instinctual drive, anger, and boundary defense. <br><span class='text-moonlight-muted text-xs'>Somatic Sign: Clenching in jaw/pelvis/belly.</span>";
    }
}
