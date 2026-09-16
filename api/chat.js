import { readFile } from "fs/promises";

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

    // OpenAI API-Key laden
    let apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "OPENAI_API_KEY fehlt"
      });
    }

    // Versehentliche Leerzeichen/Zeilenumbrüche entfernen
    apiKey = apiKey
      .replace(/\s/g, "")
      .replace(/^["']|["']$/g, "")
      .replace(/^Bearer/i, "");

    // Fahrzeugdatenbank laden
    const vehiclesPath = new URL("../vehicles.json", import.meta.url);
    const vehiclesFile = await readFile(vehiclesPath, "utf8");
    const vehicles = JSON.parse(vehiclesFile);

    // Nur die Fahrzeugdaten an die KI geben
    const vehicleData = JSON.stringify(vehicles, null, 2);

    console.log("OpenAI Anfrage wird gesendet...");
    console.log("Fahrzeuge geladen:", vehicles.length);

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

WICHTIG:
Du darfst Fahrzeugdaten ausschließlich aus der unten angegebenen Fahrzeugdatenbank verwenden.

Du darfst niemals Fahrzeuge, Preise, Kilometerstände,
Baujahre, Leistungen oder andere Fahrzeugdaten erfinden.

Wenn ein Fahrzeug nicht in der Datenbank vorhanden ist,
sage dem Kunden, dass es aktuell nicht im Bestand gefunden wurde.

Wenn ein Fahrzeug den Status "Nicht verfügbar" hat,
darfst du es nicht als verfügbares Fahrzeug anbieten.

Deine Aufgaben:

1. Kunden freundlich und professionell beraten.
2. Fahrzeuge anhand der Wünsche des Kunden suchen.
3. Nach Marke, Modell, Preis, Baujahr, Kilometerstand,
   Kraftstoff, Getriebe oder Leistung filtern.
4. Mehrere passende Fahrzeuge übersichtlich darstellen.
5. Bei Fahrzeugfragen konkrete Daten aus der Datenbank nennen.
6. Bei einer Probefahrt die benötigten Kundendaten erfragen:
   - Name
   - Telefonnummer
   - E-Mail, falls vorhanden
   - gewünschtes Fahrzeug
   - Wunschdatum
   - Wunschzeit
7. Wenn noch wichtige Angaben für eine Probefahrt fehlen,
   gezielt danach fragen.
8. Wenn der Kunde nur allgemein nach Fahrzeugen fragt,
   zuerst passende verfügbare Fahrzeuge nennen.
9. Antworte auf Deutsch.
10. Sei kurz, freundlich und verkaufsorientiert, aber ehrlich.

FAHRZEUGDATENBANK:

${vehicleData}
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

    // Antworttext aus der Responses API auslesen
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
