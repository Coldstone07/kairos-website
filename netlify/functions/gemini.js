
exports.handler = async function (event, context) {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("DEBUG: GEMINI_API_KEY is missing from environment.");
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Server Configuration Error: Missing API Key",
                tip: "Make sure GEMINI_API_KEY is set in your .env or Netlify settings."
            })
        };
    }

    if (typeof fetch === 'undefined') {
        console.error("DEBUG: Global 'fetch' is not available. Node version:", process.version);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Environment Error: 'fetch' is not defined",
                details: `Your Node.js version (${process.version}) may be too old. Use Node 18+.`
            })
        };
    }

    try {
        const requestBody = JSON.parse(event.body);

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
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

    } catch (error) {
        console.error("Function Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to process request", details: error.message })
        };
    }
};
