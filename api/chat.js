import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.POSTGRES_URL);

const vehicles = [
  { id:"A001", brand:"BMW", model:"320d", year:2021, km:72000, price:24990, fuel:"Diesel", transmission:"Automatik", power:190, color:"Schwarz", status:"Verfügbar" },
  { id:"A002", brand:"BMW", model:"118i", year:2022, km:45000, price:21990, fuel:"Benzin", transmission:"Automatik", power:136, color:"Weiß", status:"Verfügbar" },
  { id:"A003", brand:"Mercedes-Benz", model:"A 200", year:2021, km:52000, price:23990, fuel:"Benzin", transmission:"Automatik", power:163, color:"Grau", status:"Verfügbar" },
  { id:"A004", brand:"Audi", model:"A3 Sportback", year:2020, km:61000, price:20990, fuel:"Benzin", transmission:"Automatik", power:150, color:"Schwarz", status:"Verfügbar" },
  { id:"A005", brand:"Volkswagen", model:"Golf 8", year:2021, km:48000, price:19990, fuel:"Benzin", transmission:"Automatik", power:150, color:"Blau", status:"Verfügbar" },
  { id:"A006", brand:"Volkswagen", model:"Passat Variant", year:2020, km:69000, price:22990, fuel:"Diesel", transmission:"Automatik", power:150, color:"Schwarz", status:"Verfügbar" },
  { id:"A007", brand:"Mercedes-Benz", model:"C 220d", year:2022, km:39000, price:32990, fuel:"Diesel", transmission:"Automatik", power:200, color:"Silber", status:"Verfügbar" },
  { id:"A008", brand:"Audi", model:"A4 Avant", year:2021, km:57000, price:27990, fuel:"Diesel", transmission:"Automatik", power:163, color:"Grau", status:"Verfügbar" },
  { id:"A009", brand:"BMW", model:"X1", year:2022, km:41000, price:31990, fuel:"Benzin", transmission:"Automatik", power:178, color:"Weiß", status:"Verfügbar" },
  { id:"A010", brand:"Volkswagen", model:"Tiguan", year:2021, km:55000, price:26990, fuel:"Diesel", transmission:"Automatik", power:150, color:"Schwarz", status:"Verfügbar" },
  { id:"A011", brand:"Skoda", model:"Octavia", year:2021, km:62000, price:18990, fuel:"Diesel", transmission:"Automatik", power:150, color:"Grau", status:"Verfügbar" },
  { id:"A012", brand:"Seat", model:"Leon", year:2022, km:38000, price:19990, fuel:"Benzin", transmission:"Automatik", power:150, color:"Rot", status:"Verfügbar" },
  { id:"A013", brand:"Ford", model:"Focus", year:2021, km:47000, price:17990, fuel:"Benzin", transmission:"Automatik", power:155, color:"Blau", status:"Verfügbar" },
  { id:"A014", brand:"Opel", model:"Astra", year:2022, km:35000, price:18990, fuel:"Benzin", transmission:"Automatik", power:130, color:"Schwarz", status:"Verfügbar" },
  { id:"A015", brand:"Renault", model:"Megane", year:2021, km:44000, price:16990, fuel:"Benzin", transmission:"Automatik", power:140, color:"Weiß", status:"Verfügbar" },
  { id:"A016", brand:"Toyota", model:"Corolla", year:2022, km:33000, price:21990, fuel:"Hybrid", transmission:"Automatik", power:184, color:"Silber", status:"Verfügbar" },
  { id:"A017", brand:"Hyundai", model:"i30", year:2021, km:42000, price:17990, fuel:"Benzin", transmission:"Automatik", power:140, color:"Grau", status:"Verfügbar" },
  { id:"A018", brand:"Kia", model:"Ceed", year:2022, km:29000, price:19990, fuel:"Benzin", transmission:"Automatik", power:160, color:"Schwarz", status:"Verfügbar" },
  { id:"A019", brand:"Mazda", model:"3", year:2021, km:36000, price:20990, fuel:"Benzin", transmission:"Automatik", power:150, color:"Rot", status:"Verfügbar" },
  { id:"A020", brand:"Volkswagen", model:"Golf 8 GTI", year:2022, km:31000, price:29990, fuel:"Benzin", transmission:"Automatik", power:245, color:"Weiß", status:"Nicht verfügbar" }
];

function extractLead(text) {

  const start = text.indexOf("LEAD_START");
  const end = text.indexOf("LEAD_END");

  if (start === -1 || end === -1 || end <= start) {
    return null;
  }

  const leadText = text
    .substring(start + "LEAD_START".length, end)
    .trim();

  const lead = {};

  for (const line of leadText.split("\n")) {

    const separator = line.indexOf(":");

    if (separator === -1) {
      continue;
    }

    const key = line.substring(0, separator).trim();
    const value = line.substring(separator + 1).trim();

    lead[key] = value;
  }

  if (lead.lead !== "true") {
    return null;
  }

  return lead;
}

function removeLeadFromReply(text) {

  const start = text.indexOf("LEAD_START");
  const end = text.indexOf("LEAD_END");

  if (start === -1 || end === -1 || end <= start) {
    return text.trim();
  }

  const before = text.substring(0, start).trim();
  const after = text.substring(end + "LEAD_END".length).trim();

  return `${before}\n${after}`.trim();
}

function cleanReply(text) {

  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/_(.*?)_/g, "$1")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function saveLeadAndSendEmail(lead) {

  await sql`
    INSERT INTO leads
    (
      name,
      phone,
      email,
      vehicle_id,
      vehicle,
      test_drive,
      date,
      time,
      message,
      status
    )
    VALUES
    (
      ${lead.name || ""},
      ${lead.phone || ""},
      ${lead.email || ""},
      ${lead.vehicle_id || ""},
      ${lead.vehicle || ""},
      true,
      ${lead.date || null},
      ${lead.time || null},
      ${lead.message || "Probefahrt-Anfrage"},
      ${lead.status || "Neu"}
    )
  `;

  const resendKey = process.env.RESEND_API_KEY
    ?.trim()
    .replace(/\s/g, "")
    .replace(/^["']|["']$/g, "")
    .replace(/^Bearer/i, "");

  if (!resendKey) {
    console.error("RESEND_API_KEY fehlt");
    return;
  }

  const emailText = `
Neue Probefahrt-Anfrage

Name: ${lead.name || "-"}
Telefon: ${lead.phone || "-"}
E-Mail: ${lead.email || "-"}

Fahrzeug:
${lead.vehicle || "-"}

Fahrzeug-ID:
${lead.vehicle_id || "-"}

Datum:
${lead.date || "-"}

Uhrzeit:
${lead.time || "-"}

Nachricht:
${lead.message || "-"}

Status:
Neu
`;

  const emailResponse = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + resendKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Autohaus KI <leads@autoverkauf-ki.de>",
        to: ["youssefr9999@gmail.com"],
        subject:
          `Neue Probefahrt-Anfrage – ${lead.vehicle || "Fahrzeug"}`,
        text: emailText
      })
    }
  );

  const emailData = await emailResponse.json();

  if (!emailResponse.ok) {
    console.error("RESEND ERROR:", emailData);
    throw new Error("E-Mail konnte nicht versendet werden");
  }

  console.log("LEAD GESPEICHERT UND E-MAIL VERSENDET");
}

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Nur POST erlaubt"
    });
  }

  try {

    const {
      message,
      messages
    } = req.body;

    if (!message && !Array.isArray(messages)) {
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

    const vehicleData =
      JSON.stringify(vehicles, null, 2);


    /*
      =====================================================
      GESPRÄCHSHISTORIE
      =====================================================
    */

    let conversationInput;

    if (
      Array.isArray(messages) &&
      messages.length > 0
    ) {

      conversationInput = messages
        .filter(
          item =>
            item &&
            (
              item.role === "user" ||
              item.role === "assistant"
            ) &&
            typeof item.content === "string" &&
            item.content.trim()
        )
        .slice(-20)
        .map(item => ({
          role: item.role,
          content: item.content
        }));

    } else {

      conversationInput = [
        {
          role: "user",
          content: message
        }
      ];

    }


    /*
      =====================================================
      ZUSÄTZLICHE KONVERSATIONSREGELN
      =====================================================
    */

    const instructions = `
Du bist ein professioneller KI-Verkaufsassistent für ein Autohaus.

Du arbeitest ausschließlich mit der Fahrzeugdatenbank.

=====================================================
ABSOLUT WICHTIG: GESPRÄCH NICHT ZURÜCKSETZEN
=====================================================

Die Nachrichten gehören ALLE zu EINER Unterhaltung.

Du darfst niemals so tun, als wäre eine neue Unterhaltung gestartet worden.

Du musst alle Informationen aus vorherigen Nachrichten behalten.

Das gilt insbesondere für:

- gewünschtes Fahrzeug
- Probefahrtwunsch
- Name
- Telefonnummer
- E-Mail
- Datum
- Uhrzeit

Wenn eine Information bereits genannt wurde, darfst du sie NICHT erneut abfragen.

=====================================================
PROBEFAHRT – WICHTIGSTE REGEL
=====================================================

Wenn im bisherigen Gespräch bereits eine Probefahrt besprochen oder angeboten wurde und der Kunde anschließend "Ja", "ja", "gerne", "klar", "auf jeden Fall" oder eine ähnliche Zustimmung schreibt, bedeutet diese Antwort:

DER KUNDE MÖCHTE DIE PROBEFAHRT.

Du darfst dann NICHT wieder fragen:

"Möchten Sie eine Probefahrt vereinbaren?"

Du musst stattdessen direkt mit dem Probefahrtprozess fortfahren.

Beispiel:

Kunde:
"BMW 118i"

Assistent:
"Der BMW 118i ist verfügbar. Möchten Sie eine Probefahrt vereinbaren?"

Kunde:
"Ja"

RICHTIGE REAKTION:

"Sehr gerne. Für die Probefahrt benötige ich noch Ihren Namen, Ihre Telefonnummer, Ihre E-Mail-Adresse sowie Ihren Wunschtermin und Ihre Wunschzeit."

FALSCH:

"Wie kann ich Ihnen helfen?"

FALSCH:

"Welche Fahrzeuge suchen Sie?"

FALSCH:

"Möchten Sie eine Probefahrt vereinbaren?"

=====================================================
FAHRZEUG AUS DEM GESPRÄCH BEHALTEN
=====================================================

Wenn der Kunde vorher ein Fahrzeug genannt hat und danach eine Probefahrt möchte, ist dieses Fahrzeug automatisch das gewünschte Probefahrzeug.

Beispiel:

Kunde:
"Der BMW 118i gefällt mir."

Danach:
"Ja, ich möchte eine Probefahrt."

Dann ist das gewünschte Fahrzeug:

BMW 118i
Fahrzeug-ID: A002

Du darfst NICHT erneut nach Marke und Modell fragen.

=====================================================
EINZELNE ANTWORTEN RICHTIG INTERPRETIEREN
=====================================================

Wenn der Assistent vorher nach dem Namen fragt und der Kunde nur:

"Youssef"

schreibt, ist "Youssef" der Name.

Wenn der Assistent nach der Telefonnummer fragt und der Kunde nur eine Telefonnummer schreibt, ist diese Telefonnummer die Telefonnummer.

Wenn der Assistent nach der E-Mail fragt und der Kunde nur eine E-Mail-Adresse schreibt, ist diese E-Mail-Adresse die E-Mail-Adresse.

Wenn der Assistent nach dem Datum fragt und der Kunde nur "morgen" schreibt, ist das gewünschte Datum morgen.

Wenn der Assistent nach der Uhrzeit fragt und der Kunde nur "15 Uhr" schreibt, ist die gewünschte Uhrzeit 15:00.

Ein einzelnes Wort oder eine einzelne Angabe darf niemals dazu führen, dass die Unterhaltung zurückgesetzt wird.

=====================================================
PROBEFAHRT-INFORMATIONEN
=====================================================

Benötigt werden:

- Name
- Telefonnummer
- E-Mail-Adresse
- Fahrzeug
- Datum
- Uhrzeit

Bereits vorhandene Informationen weiterverwenden.

Nur tatsächlich fehlende Informationen abfragen.

=====================================================
DATUM
=====================================================

Aktuelles Datum:
2026-09-15

morgen:
2026-09-16

übermorgen:
2026-09-17

=====================================================
LEAD ERSTELLEN
=====================================================

Sobald alle notwendigen Informationen vorhanden sind, erstelle den Lead.

Verwende exakt:

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

=====================================================
FAHRZEUGSUCHE
=====================================================

Wenn nach Fahrzeugen gesucht wird, müssen ALLE Kriterien gleichzeitig erfüllt sein.

Beispiel:

BMW unter 25.000 €, maximal 60.000 km und Automatik

Muss gleichzeitig bedeuten:

BMW
Preis <= 25.000 €
Kilometer <= 60.000
Automatik
Verfügbar

Fahrzeuge, die nicht alle Kriterien erfüllen, dürfen nicht vorgeschlagen werden.

Nicht verfügbare Fahrzeuge niemals als verfügbar darstellen.

Keine Fahrzeuge erfinden.

Maximal 5 Fahrzeuge nennen.

Keine Tabellen.

=====================================================
FAHRZEUGDATENBANK
=====================================================

${vehicleData}
`;


    /*
      =====================================================
      OPENAI
      =====================================================
    */

    console.log(
      "OpenAI Anfrage wird gesendet..."
    );

    console.log(
      "Anzahl Nachrichten im Kontext:",
      Array.isArray(conversationInput)
        ? conversationInput.length
        : 1
    );


    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",

        headers: {
          "Authorization": "Bearer " + apiKey,
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          model: "gpt-5.6",
          instructions,
          input: conversationInput
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


    let reply = "";


    if (data.output) {

      for (const item of data.output) {

        if (!item.content) {
          continue;
        }

        for (const content of item.content) {

          if (
            content.type === "output_text" &&
            content.text
          ) {
            reply += content.text;
          }

        }

      }

    }


    if (!reply && data.output_text) {
      reply = data.output_text;
    }


    if (!reply) {

      return res.status(500).json({
        error: "Keine Antwort erhalten"
      });

    }


    /*
      =====================================================
      LEAD
      =====================================================
    */

    const lead = extractLead(reply);


    if (lead) {

      console.log(
        "LEAD ERKANNT:",
        lead
      );

      try {

        await saveLeadAndSendEmail(
          lead
        );

      } catch (leadError) {

        console.error(
          "LEAD ERROR:",
          leadError
        );

        return res.status(500).json({
          error:
            "Lead konnte nicht verarbeitet werden"
        });

      }


      reply =
        removeLeadFromReply(reply);


      if (!reply) {

        reply =
          "Vielen Dank! Ihre Probefahrt-Anfrage wurde erfolgreich aufgenommen. Das Autohaus wird sich bei Ihnen melden.";

      }

    }


    reply =
      cleanReply(reply);


    return res.status(200).json({
      success: true,
      reply
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
