const vehicles = [
  {
    id: "A001",
    brand: "BMW",
    model: "320d",
    year: 2021,
    km: 72000,
    price: 24990,
    fuel: "Diesel",
    transmission: "Automatik",
    power: 190,
    color: "Schwarz",
    status: "Verfügbar"
  },
  {
    id: "A002",
    brand: "BMW",
    model: "118i",
    year: 2022,
    km: 45000,
    price: 21990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 136,
    color: "Weiß",
    status: "Verfügbar"
  },
  {
    id: "A003",
    brand: "Mercedes-Benz",
    model: "A 200",
    year: 2021,
    km: 52000,
    price: 23990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 163,
    color: "Grau",
    status: "Verfügbar"
  },
  {
    id: "A004",
    brand: "Audi",
    model: "A3 Sportback",
    year: 2020,
    km: 61000,
    price: 20990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 150,
    color: "Schwarz",
    status: "Verfügbar"
  },
  {
    id: "A005",
    brand: "Volkswagen",
    model: "Golf 8",
    year: 2021,
    km: 48000,
    price: 19990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 150,
    color: "Blau",
    status: "Verfügbar"
  },
  {
    id: "A006",
    brand: "Volkswagen",
    model: "Passat Variant",
    year: 2020,
    km: 69000,
    price: 22990,
    fuel: "Diesel",
    transmission: "Automatik",
    power: 150,
    color: "Schwarz",
    status: "Verfügbar"
  },
  {
    id: "A007",
    brand: "Mercedes-Benz",
    model: "C 220d",
    year: 2022,
    km: 39000,
    price: 32990,
    fuel: "Diesel",
    transmission: "Automatik",
    power: 200,
    color: "Silber",
    status: "Verfügbar"
  },
  {
    id: "A008",
    brand: "Audi",
    model: "A4 Avant",
    year: 2021,
    km: 57000,
    price: 27990,
    fuel: "Diesel",
    transmission: "Automatik",
    power: 163,
    color: "Grau",
    status: "Verfügbar"
  },
  {
    id: "A009",
    brand: "BMW",
    model: "X1",
    year: 2022,
    km: 41000,
    price: 31990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 178,
    color: "Weiß",
    status: "Verfügbar"
  },
  {
    id: "A010",
    brand: "Volkswagen",
    model: "Tiguan",
    year: 2021,
    km: 55000,
    price: 26990,
    fuel: "Diesel",
    transmission: "Automatik",
    power: 150,
    color: "Schwarz",
    status: "Verfügbar"
  },
  {
    id: "A011",
    brand: "Skoda",
    model: "Octavia",
    year: 2021,
    km: 62000,
    price: 18990,
    fuel: "Diesel",
    transmission: "Automatik",
    power: 150,
    color: "Grau",
    status: "Verfügbar"
  },
  {
    id: "A012",
    brand: "Seat",
    model: "Leon",
    year: 2022,
    km: 38000,
    price: 19990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 150,
    color: "Rot",
    status: "Verfügbar"
  },
  {
    id: "A013",
    brand: "Ford",
    model: "Focus",
    year: 2021,
    km: 47000,
    price: 17990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 155,
    color: "Blau",
    status: "Verfügbar"
  },
  {
    id: "A014",
    brand: "Opel",
    model: "Astra",
    year: 2022,
    km: 35000,
    price: 18990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 130,
    color: "Schwarz",
    status: "Verfügbar"
  },
  {
    id: "A015",
    brand: "Renault",
    model: "Megane",
    year: 2021,
    km: 44000,
    price: 16990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 140,
    color: "Weiß",
    status: "Verfügbar"
  },
  {
    id: "A016",
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    km: 33000,
    price: 21990,
    fuel: "Hybrid",
    transmission: "Automatik",
    power: 184,
    color: "Silber",
    status: "Verfügbar"
  },
  {
    id: "A017",
    brand: "Hyundai",
    model: "i30",
    year: 2021,
    km: 42000,
    price: 17990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 140,
    color: "Grau",
    status: "Verfügbar"
  },
  {
    id: "A018",
    brand: "Kia",
    model: "Ceed",
    year: 2022,
    km: 29000,
    price: 19990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 160,
    color: "Schwarz",
    status: "Verfügbar"
  },
  {
    id: "A019",
    brand: "Mazda",
    model: "3",
    year: 2021,
    km: 36000,
    price: 20990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 150,
    color: "Rot",
    status: "Verfügbar"
  },
  {
    id: "A020",
    brand: "Volkswagen",
    model: "Golf 8 GTI",
    year: 2022,
    km: 31000,
    price: 29990,
    fuel: "Benzin",
    transmission: "Automatik",
    power: 245,
    color: "Weiß",
    status: "Nicht verfügbar"
  }
];

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

    const apiKey = process.env.OPENAI_API_KEY
      ?.trim()
      .replace(/\s/g, "")
      .replace(/^["']|["']$/g, "")
      .replace(/^Bearer/i, "");

    if (!apiKey) {
      return res.status(500).json({
        error: "OPENAI_API_KEY fehlt"
      });
    }

    const vehicleData = JSON.stringify(vehicles, null, 2);

    const instructions = `
Du bist ein professioneller KI-Verkaufsassistent für ein Autohaus.

Deine Aufgaben:
- Beantworte Fragen zu den Fahrzeugen.
- Nutze ausschließlich die unten angegebene Fahrzeugdatenbank.
- Erfinde niemals Fahrzeuge, Preise, Kilometerstände, Ausstattungen oder andere Fahrzeugdaten.
- Wenn ein Fahrzeug "Nicht verfügbar" ist, sage klar, dass es aktuell nicht verfügbar ist.
- Wenn der Kunde nach passenden Fahrzeugen fragt, suche innerhalb der Datenbank nach passenden Fahrzeugen.
- Berücksichtige Preis, Marke, Modell, Baujahr, Kilometerstand, Kraftstoff, Getriebe, Leistung und Farbe.
- Antworte freundlich, professionell und verkaufsorientiert.
- Wenn mehrere Fahrzeuge passen, nenne die relevantesten Fahrzeuge übersichtlich.
- Preise immer in Euro angeben.
- Kilometerstände immer in km angeben.

FORMATIERUNG DER FAHRZEUGE:
- Formatiere Fahrzeugangebote immer übersichtlich und ohne Tabellen.
- Verwende für jedes Fahrzeug eine eigene Überschrift mit Marke und Modell.
- Nutze kurze Zeilen mit Baujahr, Kilometerstand, Kraftstoff, Getriebe, Leistung, Farbe und Preis.
- Verwende keine Zeichen wie |, --- oder Markdown-Tabellen.
- Setze zwischen mehrere Fahrzeuge eine Leerzeile.
- Verwende beim Preis das Format 21.990 €.
- Der Fahrzeugname soll deutlich erkennbar sein.

Beispiel:

BMW 118i

Baujahr: 2022
Kilometer: 45.000 km
Kraftstoff: Benzin
Getriebe: Automatik
Leistung: 136 PS
Farbe: Weiß
Preis: 21.990 €

Bei Fragen nach einer Probefahrt:
- Frage nach Name, Telefonnummer, gewünschtem Datum und gewünschter Uhrzeit, falls diese Informationen noch fehlen.
- Verwende das aktuelle Datum 2026-09-15.
- "morgen" bedeutet 2026-09-16.
- "übermorgen" bedeutet 2026-09-17.
- Interpretiere relative Datumsangaben entsprechend.

Wenn alle notwendigen Daten für eine Probefahrt vorhanden sind, gib zusätzlich einen strukturierten Lead aus.

Der strukturierte Lead muss exakt dieses Format verwenden:

LEAD_START
lead: true
name: [Name]
phone: [Telefon]
email: [E-Mail oder leer]
vehicle_id: [Fahrzeug-ID]
vehicle: [Marke und Modell]
test_drive: true
date: [YYYY-MM-DD]
time: [HH:MM]
message: [kurze Zusammenfassung]
status: Neu
LEAD_END

Fahrzeugdatenbank:
${vehicleData}

WICHTIG:
Diese Fahrzeugdatenbank ist deine einzige Quelle für Fahrzeuginformationen.
`;

    console.log("OpenAI Anfrage wird gesendet...");

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-5.6",
        instructions,
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

    console.log("OpenAI Antwort erfolgreich erhalten.");

    let reply = "";

    if (data.output) {
      for (const item of data.output) {
        if (item.content) {
          for (const content of item.content) {
            if (content.type === "output_text" && content.text) {
              reply += content.text;
            }
          }
        }
      }
    }

    if (!reply && data.output_text) {
      reply = data.output_text;
    }

    if (!reply) {
      console.error("KEIN TEXT IN OPENAI ANTWORT:", data);

      return res.status(500).json({
        error: "Keine Antwort erhalten"
      });
    }

    return res.status(200).json({
      success: true,
      reply
    });

  } catch (error) {
    console.error("CHAT ERROR:", error);

    return res.status(500).json({
      error: "Interner Serverfehler"
    });
  }
}
