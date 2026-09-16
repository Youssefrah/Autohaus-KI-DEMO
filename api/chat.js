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
      return res.status(500).json({
        error: "OPENAI_API_KEY fehlt"
      });
    }

    apiKey = apiKey
      .replace(/\s/g, "")
      .replace(/^["']|["']$/g, "")
      .replace(/^Bearer/i, "");

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

Du beantwortest Kundenfragen freundlich und professionell auf Deutsch.

Deine Aufgaben:

- Kunden zu Fahrzeugen beraten
- Fahrzeuge anhand von Preis, Marke, Modell, Baujahr, Kilometerstand, Kraftstoff, Getriebe und Leistung erklären
- Kunden bei der Fahrzeugauswahl unterstützen
- Probefahrten entgegennehmen
- Bei einer Probefahrt nach Name, Telefonnummer, Fahrzeug, Wunschdatum und Wunschzeit fragen
- Niemals Fahrzeugdaten erfinden
- Wenn dir bestimmte Fahrzeugdaten nicht vorliegen, sage ehrlich, dass diese Information nicht vorliegt

Aktuell handelt es sich um eine Demo des Autohaus-KI-Systems.
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

    /*
      Die Responses API liefert den Text
      innerhalb des output-Arrays zurück.
    */

    let reply = "";

    if (Array.isArray(data.output)) {

      for (const item of data.output) {

        if (!Array.isArray(item.content)) {
          continue;
        }

        for (const content of item.content) {

          if (
            content.type === "output_text" &&
            typeof content.text === "string"
          ) {
            reply += content.text;
          }

        }
      }
    }

    if (!reply) {

      console.error(
        "KEIN TEXT IN OPENAI ANTWORT:",
        JSON.stringify(data)
      );

      return res.status(500).json({
        error: "OpenAI hat keine Textantwort geliefert"
      });
    }

    console.log("OpenAI Antwort erfolgreich erhalten.");

    return res.status(200).json({
      success: true,
      reply: reply
    });

  } catch (error) {

    console.error("CHAT ERROR:", error);

    return res.status(500).json({
      error: "Interner Serverfehler"
    });
  }
}
