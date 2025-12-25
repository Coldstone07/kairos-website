
exports.handler = async function (event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server Configuration Error: Missing API Key" })
        };
    }

    try {
        const checkBody = JSON.parse(event.body);
        const { systemPrompt, userPrompt, context: prevContext } = checkBody;

        // Construct the full prompt for Gemini
        const contents = [];

        if (prevContext) {
            contents.push({ role: "user", parts: [{ text: `Context so far:\n${prevContext}` }] });
            contents.push({ role: "model", parts: [{ text: "Understood." }] }); // Steering
        }

        contents.push({ role: "user", parts: [{ text: userPrompt }] });

        const requestBody = {
            contents: contents,
            systemInstruction: { parts: [{ text: systemPrompt }] }
        };

        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error("Simulation Function Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to process simulation", details: error.message })
        };
    }
};
