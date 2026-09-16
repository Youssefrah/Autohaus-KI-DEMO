export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Nur POST erlaubt"
    });
  }

  try {
    const { message } = req.body || {};

    if (!message) {
      return res.status(400).json({
        error: "Nachricht fehlt"
      });
    }

    let apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("OPENAI_API_KEY fehlt");

      return res.status(500).json({
        error: "OPENAI_API_KEY fehlt"
      });
    }

    // Entfernt Leerzeichen, Zeilenumbrüche und versehentliche Anführungszeichen
    apiKey = apiKey
      .replace(/\s/g, "")
      .replace(/^["']|["']$/g, "")
      .replace(/^Bearer/i, "");

    if (!apiKey) {
      console.error("OPENAI_API_KEY ist leer");

      return res.status(500).json({
        error: "OPENAI_API_KEY ist leer"
      });
    }

    console.log("OpenAI Anfrage wird gesendet...");

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Authorization": "Bearer " + apiKey,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          model: "gpt-5.6-luna",

          instructions: `
Du bist ein professioneller KI-Verkaufsassistent für ein Autohaus.

Deine Aufgaben:

- Beantworte Fragen zu Fahrzeugen.
- Nenne Fahrzeugdaten nur aus der bereitgestellten Fahrzeugdatenbank.
- Erfinde niemals Fahrzeuge, Preise, Kilometerstände oder Ausstattungen.
- Hilf Kunden dabei, passende Fahrzeuge zu finden.
- Beantworte Fragen zu Preis, Baujahr, Kilometerstand, Kraftstoff, Getriebe und Leistung.
- Wenn ein Kunde eine Probefahrt möchte, frage nach Name, Telefonnummer, Fahrzeug, Wunschdatum und Wunschzeit.
- Wenn alle wichtigen Daten vorhanden sind, bestätige die Probefahrt-Anfrage.
- Antworte freundlich, professionell und auf Deutsch.
          `,

          input: message
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("OPENAI ERROR:", data);

      return res.status(500).json({
        error: "OpenAI-Anfrage fehlgeschlagen"
      });
    }

    console.log("OpenAI Antwort erfolgreich erhalten.");

    return res.status(200).json({
      success: true,
      reply:
        data.output_text ||
        "Entschuldigung, ich konnte gerade keine Antwort erstellen."
    });

  } catch (error) {
    console.error("CHAT ERROR:", error);

    return res.status(500).json({
      error: "Interner Serverfehler"
    });
  }
}
