export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Nur POST erlaubt"
    });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Nachricht fehlt"
      });
    }

    const apiKey = process.env.OPENAI_API_KEY?.trim();

    if (!apiKey) {
      return res.status(500).json({
        error: "OPENAI_API_KEY fehlt"
      });
    }

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-5.6",
        input: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OPENAI ERROR:", data);

      return res.status(500).json({
        error: "OpenAI-Anfrage fehlgeschlagen"
      });
    }

    return res.status(200).json({
      success: true,
      reply: data.output_text || "Keine Antwort erhalten."
    });

  } catch (error) {
    console.error("CHAT ERROR:", error);

    return res.status(500).json({
      error: "Interner Serverfehler"
    });
  }
}
