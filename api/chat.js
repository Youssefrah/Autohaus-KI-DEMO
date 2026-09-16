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

    /*
      Fahrzeugdaten von der eigenen Website laden
    */

    const vehicleUrl =
      new URL("/vehicles.json", req.url).toString();

    const vehicleResponse = await fetch(vehicleUrl);

    if (!vehicleResponse.ok) {
      console.error(
        "FAHRZEUGDATEN FEHLER:",
        vehicleResponse.status
      );

      return res.status(500).json({
        error: "Fahrzeugdaten konnten nicht geladen werden"
      });
    }

    const vehicles = await vehicleResponse.json();

    console.log(
      "Fahrzeugdaten geladen:",
      vehicles.length
    );

    const vehicleData =
      JSON.stringify(vehicles, null, 2);

    /*
      OpenAI Anfrage
    */

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
Du bist der digitale Verkaufsassistent eines Autohauses.

Du berätst Kunden freundlich, professionell und auf Deutsch.

WICHTIG:
Die folgende Fahrzeugdatenbank ist deine einzige Quelle
für Fahrzeugdaten.

Erfinde niemals:
- Fahrzeuge
- Preise
- Kilometerstände
- Baujahre
- Leistungen
- Kraftstoffarten
- Getriebe
- Farben
- Verfügbarkeiten

Wenn ein Fahrzeug den Status "Nicht verfügbar" hat,
darfst du es nicht als verfügbares Fahrzeug anbieten.

Du kannst Fahrzeuge nach folgenden Kriterien suchen:
- Marke
- Modell
- Preis
- Baujahr
- Kilometerstand
- Kraftstoff
- Getriebe
- Leistung
- Farbe
- Verfügbarkeit

Wenn der Kunde beispielsweise fragt:

"Welche BMW gibt es unter 25.000 €?"

dann suche in der Datenbank nach passenden verfügbaren
BMW-Fahrzeugen und nenne die relevanten Daten.

Bei einer Probefahrt:
- Frage nach dem gewünschten Fahrzeug.
- Frage nach Name.
- Frage nach Telefonnummer.
- Frage nach Wunschdatum.
- Frage nach Wunschzeit.
- Frage optional nach E-Mail.

Wenn noch Informationen fehlen, frage gezielt danach.

FAHRZEUGDATENBANK:

${vehicleData}
          `,

          input: message

        })
      }
    );

    const data = await response.json();

    if (!response.ok) {

      console.error(
        "OPENAI ERROR:",
        data
      );

      return res.status(500).json({
        error: "OpenAI-Anfrage fehlgeschlagen"
      });
    }

    /*
      Antworttext aus Responses API auslesen
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
        "KEINE TEXTANTWORT:",
        JSON.stringify(data)
      );

      return res.status(500).json({
        error: "Keine Textantwort erhalten"
      });
    }

    console.log(
      "OpenAI Antwort erfolgreich erhalten."
    );

    return res.status(200).json({
      success: true,
      reply: reply
    });

  } catch (error) {

    console.error(
      "CHAT ERROR:",
      error
    );

    return res.status(500).json({
      error: "Interner Serverfehler"
    });
  }
}
