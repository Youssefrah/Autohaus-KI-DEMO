import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.POSTGRES_URL);

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


/* =====================================================
   LEAD AUS KI-ANTWORT AUSLESEN
===================================================== */

function extractLead(text) {

  const start = text.indexOf("LEAD_START");
  const end = text.indexOf("LEAD_END");

  if (
    start === -1 ||
    end === -1 ||
    end <= start
  ) {
    return null;
  }

  const leadText = text
    .substring(
      start + "LEAD_START".length,
      end
    )
    .trim();

  const lead = {};

  for (
    const line of leadText.split("\n")
  ) {

    const separator =
      line.indexOf(":");

    if (separator === -1) {
      continue;
    }

    const key =
      line
        .substring(0, separator)
        .trim();

    const value =
      line
        .substring(separator + 1)
        .trim();

    lead[key] = value;
  }

  if (lead.lead !== "true") {
    return null;
  }

  return lead;
}


/* =====================================================
   TECHNISCHEN LEAD-BLOCK ENTFERNEN
===================================================== */

function removeLeadFromReply(text) {

  const start =
    text.indexOf("LEAD_START");

  const end =
    text.indexOf("LEAD_END");

  if (
    start === -1 ||
    end === -1 ||
    end <= start
  ) {
    return text.trim();
  }

  const before =
    text.substring(0, start).trim();

  const after =
    text
      .substring(
        end + "LEAD_END".length
      )
      .trim();

  return `${before}\n${after}`.trim();
}


/* =====================================================
   MARKDOWN ENTFERNEN
===================================================== */

function cleanReply(text) {

  return text
    .replace(
      /\*\*(.*?)\*\*/g,
      "$1"
    )
    .replace(
      /\*(.*?)\*/g,
      "$1"
    )
    .replace(
      /__(.*?)__/g,
      "$1"
    )
    .replace(
      /_(.*?)_/g,
      "$1"
    )
    .replace(
      /^#{1,6}\s*/gm,
      ""
    )
    .replace(
      /^\s*[-*]\s+/gm,
      "• "
    )
    .replace(
      /\n{3,}/g,
      "\n\n"
    )
    .trim();
}


/* =====================================================
   GESPRÄCHSZUSTAND ERMITTELN
===================================================== */

function buildConversationState(messages) {

  const state = {
    vehicle: null,
    vehicle_id: null,
    test_drive: false,
    name: null,
    phone: null,
    email: null,
    date: null,
    time: null
  };


  if (!Array.isArray(messages)) {
    return state;
  }


  const userMessages =
    messages.filter(
      item =>
        item &&
        item.role === "user" &&
        typeof item.content === "string"
    );


  const assistantMessages =
    messages.filter(
      item =>
        item &&
        item.role === "assistant" &&
        typeof item.content === "string"
    );


  /*
     -----------------------------------------------------
     FAHRZEUG ERKENNEN
     -----------------------------------------------------
  */

  for (
    const userMessage of userMessages
  ) {

    const text =
      userMessage.content
        .toLowerCase();

    for (
      const vehicle of vehicles
    ) {

      const fullName =
        `${vehicle.brand} ${vehicle.model}`
          .toLowerCase();

      const brand =
        vehicle.brand.toLowerCase();

      const model =
        vehicle.model.toLowerCase();

      if (
        text.includes(fullName) ||
        (
          text.includes(brand) &&
          text.includes(model)
        )
      ) {

        if (
          vehicle.status === "Verfügbar"
        ) {

          state.vehicle = vehicle;
          state.vehicle_id = vehicle.id;

        }

      }
    }
  }


  /*
     -----------------------------------------------------
     PROBEFAHRT ERKENNEN
     -----------------------------------------------------
  */

  for (
    const userMessage of userMessages
  ) {

    const text =
      userMessage.content
        .toLowerCase();

    if (
      text.includes("probefahrt") ||
      text.includes("probefahren") ||
      text.includes("testfahrt")
    ) {

      state.test_drive = true;

    }

  }


  /*
     "JA" ALS ANTWORT AUF EINE PROBEFAHRT-FRAGE
     -----------------------------------------------------
  */

  const lastUser =
    userMessages[
      userMessages.length - 1
    ];


  if (lastUser) {

    const lastText =
      lastUser.content
        .trim()
        .toLowerCase();

    const isYes =
      /^(ja|jap|gerne|klar|natürlich|auf jeden fall|auf jedenfall|yes)$/i
        .test(lastText);

    const previousAssistant =
      assistantMessages[
        assistantMessages.length - 1
      ];


    if (
      isYes &&
      previousAssistant &&
      /probefahrt|probefahren|testfahrt/i
        .test(previousAssistant.content)
    ) {

      state.test_drive = true;

    }

  }


  /*
     -----------------------------------------------------
     E-MAIL ERKENNEN
     -----------------------------------------------------
  */

  for (
    const userMessage of userMessages
  ) {

    const match =
      userMessage.content.match(
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      );

    if (match) {
      state.email = match[0];
    }

  }


  /*
     -----------------------------------------------------
     TELEFONNUMMER ERKENNEN
     -----------------------------------------------------
  */

  for (
    const userMessage of userMessages
  ) {

    const match =
      userMessage.content.match(
        /(?:\+49|0)[0-9][0-9\s./-]{7,15}/
      );

    if (match) {

      state.phone =
        match[0].trim();

    }

  }


  /*
     -----------------------------------------------------
     DATUM
     -----------------------------------------------------
  */

  for (
    const userMessage of userMessages
  ) {

    const text =
      userMessage.content
        .toLowerCase()
        .trim();


    if (
      /\bmorgen\b/.test(text)
    ) {

      state.date =
        "2026-09-16";

    }


    if (
      /\bübermorgen\b/.test(text)
    ) {

      state.date =
        "2026-09-17";

    }


    const explicitDate =
      text.match(
        /\b(\d{1,2})[./](\d{1,2})(?:[./](\d{4}))?\b/
      );


    if (explicitDate) {

      const day =
        explicitDate[1]
          .padStart(2, "0");

      const month =
        explicitDate[2]
          .padStart(2, "0");

      const year =
        explicitDate[3] || "2026";

      state.date =
        `${year}-${month}-${day}`;

    }

  }


  /*
     -----------------------------------------------------
     UHRZEIT
     -----------------------------------------------------
  */

  for (
    const userMessage of userMessages
  ) {

    const text =
      userMessage.content
        .toLowerCase();


    const timeMatch =
      text.match(
        /\b(\d{1,2})(?::|\.| Uhr|uhr)(\d{2})?\b/
      );


    if (timeMatch) {

      const hour =
        timeMatch[1]
          .padStart(2, "0");

      const minute =
        timeMatch[2] || "00";

      state.time =
        `${hour}:${minute}`;

    }


    const simpleTime =
      text.match(
        /\b(\d{1,2})\s*Uhr\b/i
      );


    if (simpleTime) {

      state.time =
        `${simpleTime[1].padStart(2, "0")}:00`;

    }

  }


  /*
     -----------------------------------------------------
     NAME ERKENNEN
     -----------------------------------------------------
     */

  /*
     Der Name wird bevorzugt dann erkannt,
     wenn die letzte Assistentennachricht
     ausdrücklich nach dem Namen fragt.
  */

  for (
    let i = 0;
    i < messages.length;
    i++
  ) {

    const current =
      messages[i];

    if (
      !current ||
      current.role !== "assistant" ||
      typeof current.content !== "string"
    ) {
      continue;
    }


    if (
      !/name/i.test(current.content)
    ) {
      continue;
    }


    const next =
      messages[i + 1];


    if (
      !next ||
      next.role !== "user" ||
      typeof next.content !== "string"
    ) {
      continue;
    }


    const candidate =
      next.content.trim();


    if (
      candidate &&
      candidate.length <= 60 &&
      !candidate.includes("@") &&
      !/[0-9]/.test(candidate) &&
      candidate.split(/\s+/).length <= 4
    ) {

      state.name =
        candidate;

    }

  }


  return state;
}


/* =====================================================
   LEAD SPEICHERN + E-MAIL
===================================================== */

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


  const resendKey =
    process.env.RESEND_API_KEY
      ?.trim()
      .replace(/\s/g, "")
      .replace(
        /^["']|["']$/g,
        ""
      )
      .replace(
        /^Bearer/i,
        ""
      );


  if (!resendKey) {

    console.error(
      "RESEND_API_KEY fehlt"
    );

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


  const emailResponse =
    await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          "Authorization":
            "Bearer " + resendKey,
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          from:
            "Autohaus KI <leads@autoverkauf-ki.de>",

          to: [
            "youssefr9999@gmail.com"
          ],

          subject:
            `Neue Probefahrt-Anfrage – ${lead.vehicle || "Fahrzeug"}`,

          text:
            emailText
        })
      }
    );


  const emailData =
    await emailResponse.json();


  if (!emailResponse.ok) {

    console.error(
      "RESEND ERROR:",
      emailData
    );

    throw new Error(
      "E-Mail konnte nicht versendet werden"
    );

  }


  console.log(
    "LEAD GESPEICHERT UND E-MAIL VERSENDET"
  );
}


/* =====================================================
   HAUPT-API
===================================================== */

export default async function handler(
  req,
  res
) {

  if (req.method !== "POST") {

    return res.status(405).json({
      error:
        "Nur POST erlaubt"
    });

  }


  try {

    const {
      message,
      messages
    } = req.body;


    if (
      !message &&
      !Array.isArray(messages)
    ) {

      return res.status(400).json({
        error:
          "Nachricht fehlt"
      });

    }


    const apiKey =
      process.env.OPENAI_API_KEY
        ?.trim()
        .replace(/\s/g, "")
        .replace(
          /^["']|["']$/g,
          ""
        )
        .replace(
          /^Bearer/i,
          ""
        );


    if (!apiKey) {

      return res.status(500).json({
        error:
          "OPENAI_API_KEY fehlt"
      });

    }


    /*
       --------------------------------------------------
       GESPRÄCHSVERLAUF
       --------------------------------------------------
    */

    let conversation;

    if (
      Array.isArray(messages) &&
      messages.length > 0
    ) {

      conversation =
        messages
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
          .map(
            item => ({
              role: item.role,
              content: item.content
            })
          );

    } else {

      conversation = [
        {
          role: "user",
          content: message
        }
      ];

    }


    /*
       --------------------------------------------------
       ZUSTAND AUS DEM GESPRÄCH ERMITTELN
       --------------------------------------------------
    */

    const state =
      buildConversationState(
        conversation
      );


    console.log(
      "GESPRÄCHSZUSTAND:",
      {
        vehicle:
          state.vehicle
            ? `${state.vehicle.brand} ${state.vehicle.model}`
            : null,

        vehicle_id:
          state.vehicle_id,

        test_drive:
          state.test_drive,

        name:
          state.name,

        phone:
          state.phone,

        email:
          state.email,

        date:
          state.date,

        time:
          state.time
      }
    );


    const vehicleData =
      JSON.stringify(
        vehicles,
        null,
        2
      );


    /*
       --------------------------------------------------
       AKTUELLEN ZUSTAND KLAR AN GPT ÜBERGEBEN
       --------------------------------------------------
    */

    const currentState = `
AKTUELLER GESPRÄCHSZUSTAND:

Fahrzeug:
${
  state.vehicle
    ? `${state.vehicle.brand} ${state.vehicle.model}`
    : "NOCH NICHT BEKANNT"
}

Fahrzeug-ID:
${state.vehicle_id || "NOCH NICHT BEKANNT"}

Probefahrt gewünscht:
${state.test_drive ? "JA" : "NEIN"}

Name:
${state.name || "NOCH NICHT BEKANNT"}

Telefon:
${state.phone || "NOCH NICHT BEKANNT"}

E-Mail:
${state.email || "NOCH NICHT BEKANNT"}

Datum:
${state.date || "NOCH NICHT BEKANNT"}

Uhrzeit:
${state.time || "NOCH NICHT BEKANNT"}
`;


    /*
       --------------------------------------------------
       SYSTEMANWEISUNG
       --------------------------------------------------
    */

    const instructions = `
Du bist ein professioneller KI-Verkaufsassistent für ein Autohaus.

Du führst einen echten mehrstufigen Verkaufdialog.

====================================================
ABSOLUTE REGEL: GESPRÄCHSZUSTAND
====================================================

Der Server hat den aktuellen Gesprächszustand bereits aus der bisherigen Unterhaltung ermittelt.

Du MUSST diesen Zustand verwenden.

Wenn dort ein Fahrzeug steht, ist dieses Fahrzeug das aktuell gewünschte Fahrzeug.

Wenn dort "Probefahrt gewünscht: JA" steht, befindet sich der Kunde bereits im Probefahrtprozess.

Du darfst den Prozess niemals zurücksetzen.

Du darfst niemals eine bereits bekannte Information erneut abfragen.

====================================================
BEISPIEL
====================================================

Kunde:
"BMW 118i"

Assistent:
"Der BMW 118i ist verfügbar. Möchten Sie eine Probefahrt vereinbaren?"

Kunde:
"Ja"

Dann muss der Zustand sein:

Fahrzeug = BMW 118i
Probefahrt = JA

Die nächste Antwort muss beispielsweise sein:

"Sehr gerne. Wie ist Ihr Name?"

NICHT:

"Zu welchem Fahrzeug?"

NICHT:

"Wie kann ich Ihnen helfen?"

NICHT:

"Möchten Sie eine Probefahrt vereinbaren?"

====================================================
NOCH EIN BEISPIEL
====================================================

Kunde:
"BMW 118i"

Kunde:
"Ja"

Kunde:
"Youssef"

Kunde:
"016000000"

Kunde:
"test@example.de"

Kunde:
"morgen um 15 Uhr"

Dann müssen alle Angaben zusammengehören.

====================================================
WAS NOCH FEHLT
====================================================

Wenn Probefahrt = JA, prüfe den aktuellen Zustand.

Frage nur nach der ERSTEN tatsächlich fehlenden Information.

Reihenfolge:

1. Name
2. Telefonnummer
3. E-Mail
4. Fahrzeug
5. Datum
6. Uhrzeit

Aber:
Wenn das Fahrzeug bereits bekannt ist, überspringe Fahrzeug.

Wenn Name bereits bekannt ist, überspringe Name.

Wenn Telefonnummer bereits bekannt ist, überspringe Telefonnummer.

Wenn E-Mail bereits bekannt ist, überspringe E-Mail.

Wenn Datum bereits bekannt ist, überspringe Datum.

Wenn Uhrzeit bereits bekannt ist, überspringe Uhrzeit.

====================================================
DATUM
====================================================

Aktuelles Datum:
2026-09-15

morgen:
2026-09-16

übermorgen:
2026-09-17

====================================================
LEAD
====================================================

Wenn alle sechs Informationen vorhanden sind:

Name
Telefon
E-Mail
Fahrzeug
Datum
Uhrzeit

dann MUSST du den Lead erstellen.

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

Der Server verarbeitet diesen Block automatisch.

====================================================
FAHRZEUGSUCHE
====================================================

Bei einer normalen Fahrzeugsuche müssen ALLE Kriterien gleichzeitig erfüllt sein.

Keine Fahrzeuge erfinden.

Nicht verfügbare Fahrzeuge niemals als verfügbar darstellen.

Nur die Fahrzeugdatenbank verwenden.

Maximal 5 Fahrzeuge nennen.

Keine Tabellen.

====================================================
FAHRZEUGDATENBANK
====================================================

${vehicleData}

====================================================
AKTUELLER ZUSTAND
====================================================

${currentState}
`;


    /*
       --------------------------------------------------
       OPENAI
       --------------------------------------------------
    */

    const response =
      await fetch(
        "https://api.openai.com/v1/responses",
        {
          method: "POST",

          headers: {
            "Authorization":
              "Bearer " + apiKey,

            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            model:
              "gpt-5.6",

            instructions,

            input:
              conversation

          })
        }
      );


    const data =
      await response.json();


    if (!response.ok) {

      console.error(
        "OPENAI ERROR:",
        data
      );

      return res.status(500).json({
        error:
          "OpenAI-Anfrage fehlgeschlagen"
      });

    }


    let reply = "";


    if (data.output) {

      for (
        const item of data.output
      ) {

        if (!item.content) {
          continue;
        }


        for (
          const content of item.content
        ) {

          if (
            content.type ===
              "output_text" &&
            content.text
          ) {

            reply +=
              content.text;

          }

        }

      }

    }


    if (
      !reply &&
      data.output_text
    ) {

      reply =
        data.output_text;

    }


    if (!reply) {

      return res.status(500).json({
        error:
          "Keine Antwort erhalten"
      });

    }


    /*
       --------------------------------------------------
       LEAD VERARBEITEN
       --------------------------------------------------
    */

    const lead =
      extractLead(reply);


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
        removeLeadFromReply(
          reply
        );


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
      error:
        "Interner Serverfehler"
    });

  }

}
