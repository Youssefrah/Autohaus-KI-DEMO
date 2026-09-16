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

function normalize(text = "") {
  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function findVehicle(text, previousState = {}) {
  const normalized = normalize(text);

  if (previousState.vehicleId) {
    const previous = vehicles.find(
      vehicle => vehicle.id === previousState.vehicleId
    );

    if (previous) {
      return previous;
    }
  }

  return (
    vehicles.find(vehicle => {
      const fullName = normalize(
        `${vehicle.brand} ${vehicle.model}`
      );

      const brand = normalize(vehicle.brand);
      const model = normalize(vehicle.model);

      return (
        normalized.includes(fullName) ||
        normalized.includes(model) ||
        normalized.includes(brand)
      );
    }) || null
  );
}

/*
  INTELLIGENTE FAHRZEUGSUCHE

  Erkennt Wünsche wie:
  - BMW
  - Audi
  - Mercedes
  - Diesel
  - Benzin
  - Hybrid
  - Automatik
  - SUV
  - unter 25.000 €
  - bis 30.000 €
  - maximal 20.000 €
  - Baujahr ab 2022
  - weniger als 50.000 km
*/

function extractSearchCriteria(text = "") {
  const normalized = normalize(text);

  const criteria = {
    brand: "",
    fuel: "",
    transmission: "",
    maxPrice: null,
    minPrice: null,
    minYear: null,
    maxKm: null,
    color: "",
    bodyType: ""
  };

  const brands = [
    "BMW",
    "Mercedes-Benz",
    "Mercedes",
    "Audi",
    "Volkswagen",
    "VW",
    "Skoda",
    "Seat",
    "Ford",
    "Opel",
    "Renault",
    "Toyota",
    "Hyundai",
    "Kia",
    "Mazda"
  ];

  for (const brand of brands) {
    if (normalized.includes(normalize(brand))) {
      criteria.brand =
        brand === "VW"
          ? "Volkswagen"
          : brand === "Mercedes"
          ? "Mercedes-Benz"
          : brand;

      break;
    }
  }

  if (
    normalized.includes("diesel")
  ) {
    criteria.fuel = "Diesel";
  } else if (
    normalized.includes("benzin")
  ) {
    criteria.fuel = "Benzin";
  } else if (
    normalized.includes("hybrid")
  ) {
    criteria.fuel = "Hybrid";
  }

  if (
    normalized.includes("automatik")
  ) {
    criteria.transmission = "Automatik";
  }

  if (
    normalized.includes("schwarz")
  ) {
    criteria.color = "Schwarz";
  } else if (
    normalized.includes("weiss")
  ) {
    criteria.color = "Weiß";
  } else if (
    normalized.includes("grau")
  ) {
    criteria.color = "Grau";
  } else if (
    normalized.includes("blau")
  ) {
    criteria.color = "Blau";
  } else if (
    normalized.includes("rot")
  ) {
    criteria.color = "Rot";
  } else if (
    normalized.includes("silber")
  ) {
    criteria.color = "Silber";
  }

  /*
    Preis:
    25.000
    25.000 €
    25000
    25k
  */

  const priceMatch = text.match(
    /(?:unter|bis|maximal|max\.?|höchstens|hoechstens)\s*(\d{1,3}(?:[.\s]\d{3})*|\d+)\s*(?:€|euro|eur|k)?/i
  );

  if (priceMatch) {
    let value = priceMatch[1]
      .replace(/[.\s]/g, "");

    let price = Number(value);

    if (
      /k\b/i.test(priceMatch[0])
    ) {
      price *= 1000;
    }

    if (price > 0) {
      criteria.maxPrice = price;
    }
  }

  /*
    Preis ohne "unter":
    "25.000 Euro"
  */

  if (criteria.maxPrice === null) {
    const simplePriceMatch =
      text.match(
        /\b(\d{1,3}(?:[.\s]\d{3})+|\d{4,6})\s*(?:€|euro|eur)\b/i
      );

    if (simplePriceMatch) {
      const price = Number(
        simplePriceMatch[1].replace(
          /[.\s]/g,
          ""
        )
      );

      if (price >= 5000) {
        criteria.maxPrice = price;
      }
    }
  }

  /*
    Baujahr:
    "ab 2022"
    "Baujahr ab 2022"
    "2022 oder neuer"
  */

  const yearMatch =
    normalized.match(
      /(?:baujahr\s*)?(?:ab|seit|mindestens)\s*(20\d{2})/
    );

  if (yearMatch) {
    criteria.minYear = Number(
      yearMatch[1]
    );
  }

  const newerMatch =
    normalized.match(
      /(20\d{2})\s*(?:oder\s*)?(?:neuer|juenger)/
    );

  if (newerMatch) {
    criteria.minYear = Number(
      newerMatch[1]
    );
  }

  /*
    Kilometer:
    "unter 50.000 km"
    "maximal 50.000 km"
    "weniger als 50000 km"
  */

  const kmMatch =
    text.match(
      /(?:unter|bis|maximal|max\.?|höchstens|hoechstens|weniger als)\s*(\d{1,3}(?:[.\s]\d{3})*|\d+)\s*(?:km|kilometer)/i
    );

  if (kmMatch) {
    const km = Number(
      kmMatch[1].replace(
        /[.\s]/g,
        ""
      )
    );

    if (km > 0) {
      criteria.maxKm = km;
    }
  }

  /*
    SUV-Erkennung.
    In der aktuellen Datenbank gelten
    BMW X1 und VW Tiguan als SUV.
  */

  if (
    normalized.includes("suv") ||
    normalized.includes("gelandewagen") ||
    normalized.includes("gelände") ||
    normalized.includes("crossover")
  ) {
    criteria.bodyType = "SUV";
  }

  return criteria;
}

function isSearchRequest(text = "") {
  const normalized = normalize(text);

  const searchWords = [
    "suche",
    "such",
    "suchen",
    "zeig",
    "zeigen",
    "habt ihr",
    "haben sie",
    "welche autos",
    "welche fahrzeuge",
    "fahrzeug suche",
    "fahrzeugsuche",
    "auto suche",
    "automodelle",
    "unter ",
    "bis ",
    "maximal",
    "höchstens",
    "hoechstens",
    "diesel",
    "benzin",
    "hybrid",
    "suv",
    "automatik"
  ];

  return searchWords.some(
    word =>
      normalized.includes(
        normalize(word)
      )
  );
}

function vehicleMatchesCriteria(
  vehicle,
  criteria
) {
  if (
    vehicle.status !==
    "Verfügbar"
  ) {
    return false;
  }

  if (
    criteria.brand &&
    normalize(vehicle.brand) !==
      normalize(criteria.brand)
  ) {
    return false;
  }

  if (
    criteria.fuel &&
    normalize(vehicle.fuel) !==
      normalize(criteria.fuel)
  ) {
    return false;
  }

  if (
    criteria.transmission &&
    normalize(
      vehicle.transmission
    ) !==
      normalize(
        criteria.transmission
      )
  ) {
    return false;
  }

  if (
    criteria.color &&
    normalize(vehicle.color) !==
      normalize(criteria.color)
  ) {
    return false;
  }

  if (
    criteria.maxPrice !== null &&
    vehicle.price >
      criteria.maxPrice
  ) {
    return false;
  }

  if (
    criteria.minPrice !== null &&
    vehicle.price <
      criteria.minPrice
  ) {
    return false;
  }

  if (
    criteria.minYear !== null &&
    vehicle.year <
      criteria.minYear
  ) {
    return false;
  }

  if (
    criteria.maxKm !== null &&
    vehicle.km >
      criteria.maxKm
  ) {
    return false;
  }

  if (
    criteria.bodyType ===
    "SUV"
  ) {
    const suvModels = [
      "X1",
      "Tiguan"
    ];

    if (
      !suvModels.includes(
        vehicle.model
      )
    ) {
      return false;
    }
  }

  return true;
}

function searchVehicles(text = "") {
  const criteria =
    extractSearchCriteria(
      text
    );

  const results =
    vehicles.filter(
      vehicle =>
        vehicleMatchesCriteria(
          vehicle,
          criteria
        )
    );

  return {
    criteria,
    results
  };
}

function formatSearchResults(
  searchResult
) {
  if (
    !searchResult.results.length
  ) {
    return "KEINE PASSENDEN FAHRZEUGE";
  }

  return searchResult.results
    .map(vehicle => {
      return [
        `ID: ${vehicle.id}`,
        `Fahrzeug: ${vehicle.brand} ${vehicle.model}`,
        `Baujahr: ${vehicle.year}`,
        `Kilometer: ${vehicle.km}`,
        `Preis: ${vehicle.price} €`,
        `Kraftstoff: ${vehicle.fuel}`,
        `Getriebe: ${vehicle.transmission}`,
        `Leistung: ${vehicle.power} PS`,
        `Farbe: ${vehicle.color}`,
        `Status: ${vehicle.status}`
      ].join(" | ");
    })
    .join("\n");
}

function extractPhone(text = "") {
  const match = text.match(
    /(?:\+49|0049|0)\s?(?:\(?\d{2,5}\)?[\s./-]?)?(?:\d[\s./-]?){6,12}/
  );

  if (!match) {
    return "";
  }

  const value =
    match[0].replace(
      /[^\d+]/g,
      ""
    );

  if (
    value.length < 9 ||
    value.length > 15
  ) {
    return "";
  }

  return match[0].trim();
}

function extractEmail(text = "") {
  const match = text.match(
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
  );

  return match
    ? match[0].trim()
    : "";
}

function extractDate(text = "") {
  const normalized =
    normalize(text);

  if (
    /\buebermorgen\b/.test(
      normalized
    )
  ) {
    return "2026-09-17";
  }

  if (
    /\bmorgen\b/.test(
      normalized
    )
  ) {
    return "2026-09-16";
  }

  const match = text.match(
    /\b(\d{1,2})[./-](\d{1,2})(?:[./-](\d{2,4}))?\b/
  );

  if (!match) {
    return "";
  }

  const day = Number(
    match[1]
  );

  const month = Number(
    match[2]
  );

  const year = match[3]
    ? Number(
        match[3].length === 2
          ? `20${match[3]}`
          : match[3]
      )
    : 2026;

  if (
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12
  ) {
    return "";
  }

  return `${year}-${String(
    month
  ).padStart(
    2,
    "0"
  )}-${String(
    day
  ).padStart(
    2,
    "0"
  )}`;
}

function extractTime(text = "") {
  const colonMatch =
    text.match(
      /\b([01]?\d|2[0-3]):([0-5]\d)\b/
    );

  if (colonMatch) {
    return `${String(
      Number(
        colonMatch[1]
      )
    ).padStart(
      2,
      "0"
    )}:${colonMatch[2]}`;
  }

  const hourMatch =
    text.match(
      /\b([01]?\d|2[0-3])\s*Uhr\b/i
    );

  if (hourMatch) {
    return `${String(
      Number(
        hourMatch[1]
      )
    ).padStart(
      2,
      "0"
    )}:00`;
  }

  return "";
}

function looksLikeName(text = "") {
  const value =
    text.trim();

  if (
    !value ||
    value.length > 60
  ) {
    return false;
  }

  if (extractEmail(value)) {
    return false;
  }

  if (extractPhone(value)) {
    return false;
  }

  if (extractDate(value)) {
    return false;
  }

  if (extractTime(value)) {
    return false;
  }

  if (
    /\b(morgen|uebermorgen|uhr|ja|nein|okay|ok|passt|danke)\b/i.test(
      normalize(value)
    )
  ) {
    return false;
  }

  return /^[A-Za-zÄÖÜäöüßÀ-ÿ' -]{2,60}$/.test(
    value
  );
}

function isPositiveAnswer(
  text = ""
) {
  return /^(ja|jap|jo|gerne|gern|klar|natuerlich|natürlich|okay|ok|passt|yes|gerne ja)[!. ]*$/i.test(
    text.trim()
  );
}

function buildConversationState(
  messages = []
) {
  const state = {
    vehicleId: "",
    vehicle: "",
    testDrive: false,
    name: "",
    phone: "",
    email: "",
    date: "",
    time: ""
  };

  for (
    let i = 0;
    i < messages.length;
    i++
  ) {
    const message =
      messages[i];

    const content =
      message?.content ||
      "";

    if (
      message.role ===
      "user"
    ) {
      const vehicle =
        findVehicle(
          content,
          state
        );

      if (vehicle) {
        state.vehicleId =
          vehicle.id;

        state.vehicle =
          `${vehicle.brand} ${vehicle.model}`;
      }

      const phone =
        extractPhone(
          content
        );

      if (phone) {
        state.phone =
          phone;
      }

      const email =
        extractEmail(
          content
        );

      if (email) {
        state.email =
          email;
      }

      const date =
        extractDate(
          content
        );

      if (date) {
        state.date =
          date;
      }

      const time =
        extractTime(
          content
        );

      if (time) {
        state.time =
          time;
      }

      if (
        isPositiveAnswer(
          content
        )
      ) {
        const previousAssistant =
          messages[i - 1];

        if (
          previousAssistant?.role ===
            "assistant" &&
          /probefahrt/i.test(
            previousAssistant.content ||
              ""
          )
        ) {
          state.testDrive =
            true;
        }
      }

      if (
        state.testDrive &&
        !state.name &&
        looksLikeName(
          content
        ) &&
        i > 0
      ) {
        const previousAssistant =
          messages[i - 1];

        if (
          previousAssistant?.role ===
            "assistant" &&
          /(name|heißen|heissen|vorname)/i.test(
            previousAssistant.content ||
              ""
          )
        ) {
          state.name =
            content.trim();
        }
      }
    }

    if (
      message.role ===
      "assistant"
    ) {
      const assistantText =
        content;

      if (
        /probefahrt/i.test(
          assistantText
        )
      ) {
        const nextUser =
          messages[i + 1];

        if (
          nextUser?.role ===
            "user" &&
          isPositiveAnswer(
            nextUser.content ||
              ""
          )
        ) {
          state.testDrive =
            true;
        }
      }

      if (
        !state.name &&
        /(wie ist ihr name|wie heißen sie|wie heissen sie|wie lautet ihr name|vorname)/i.test(
          assistantText
        )
      ) {
        const nextUser =
          messages[i + 1];

        if (
          nextUser?.role ===
            "user" &&
          looksLikeName(
            nextUser.content ||
              ""
          )
        ) {
          state.name =
            nextUser.content.trim();
        }
      }
    }
  }

  return state;
}

function getMissingField(
  state
) {
  if (!state.vehicleId) {
    return "vehicle";
  }

  if (!state.testDrive) {
    return "testDrive";
  }

  if (!state.name) {
    return "name";
  }

  if (!state.phone) {
    return "phone";
  }

  if (!state.email) {
    return "email";
  }

  if (!state.date) {
    return "date";
  }

  if (!state.time) {
    return "time";
  }

  return null;
}

function buildConversationDirective(
  state
) {
  const missing =
    getMissingField(
      state
    );

  if (!state.vehicleId) {
    return `
Der Kunde hat noch kein konkretes Fahrzeug ausgewählt.

Wenn der Kunde nach bestimmten Fahrzeugen fragt,
verwende die unten bereitgestellten passenden Suchergebnisse.

Wenn mehrere Fahrzeuge passen, zeige mehrere passende
Fahrzeuge übersichtlich an.

Nenne bei einem Treffer mindestens:
- Marke und Modell
- Baujahr
- Kilometerstand
- Preis
- Kraftstoff
- Getriebe

Frage anschließend freundlich, ob eines der Fahrzeuge
interessant ist.
`;
  }

  if (!state.testDrive) {
    return `
Das Fahrzeug ist bereits bekannt.

Eine Probefahrt wurde bisher noch nicht bestätigt.

Wenn es zum Gespräch passt, darfst du fragen:
"Möchten Sie eine Probefahrt vereinbaren?"

Wenn der Kunde eindeutig mit Ja antwortet,
ist die Probefahrt bestätigt.
`;
  }

  if (missing === "name") {
    return `
Die Probefahrt ist bereits bestätigt.

FRAGE NICHT erneut, ob der Kunde eine Probefahrt
möchte oder vereinbaren möchte.

Frage ausschließlich nach dem Namen.

Beispiel:
"Sehr gerne. Wie ist Ihr Name?"
`;
  }

  if (missing === "phone") {
    return `
Die Probefahrt ist bereits bestätigt.

Der Name ist bereits vorhanden.

FRAGE NICHT erneut nach der Probefahrt.

Frage ausschließlich nach der Telefonnummer.

Beispiel:
"Danke, ${state.name}. Wie lautet Ihre Telefonnummer?"
`;
  }

  if (missing === "email") {
    return `
Die Probefahrt ist bereits bestätigt.

Name und Telefonnummer sind bereits vorhanden.

FRAGE NICHT erneut nach der Probefahrt.

Frage ausschließlich nach der E-Mail-Adresse.

Beispiel:
"Danke. Welche E-Mail-Adresse darf ich verwenden?"
`;
  }

  if (missing === "date") {
    return `
Die Probefahrt ist bereits bestätigt.

Name, Telefonnummer und E-Mail-Adresse
sind bereits vorhanden.

FRAGE NICHT erneut nach der Probefahrt.

Frage ausschließlich nach dem gewünschten Datum.

Beispiel:
"Danke. Welches Datum wünschen Sie für die Probefahrt?"
`;
  }

  if (missing === "time") {
    return `
Die Probefahrt ist bereits bestätigt.

Name, Telefonnummer, E-Mail und Datum
sind bereits vorhanden.

FRAGE NICHT erneut nach der Probefahrt.

Das Datum ist bereits erfasst.

Frage ausschließlich nach der Uhrzeit.

Beispiel:
"Und welche Uhrzeit passt Ihnen?"
`;
  }

  return `
Alle benötigten Angaben für die Probefahrt
sind vorhanden.

Erstelle jetzt den Lead.

Frage nichts mehr.
`;
}

function cleanReply(
  reply = "",
  state
) {
  let result =
    reply.trim();

  if (state.testDrive) {
    result =
      result.replace(
        /(?:möchten|moechten|wollen|würden|wuerden)\s+sie\s+(?:eine\s+)?probefahrt[^?!.]*[?!.]?/gi,
        ""
      );

    result =
      result.replace(
        /(?:eine\s+)?probefahrt\s+(?:vereinbaren|machen|buchen)[^?!.]*[?!.]?/gi,
        ""
      );

    result =
      result
        .replace(
          /\s{2,}/g,
          " "
        )
        .trim();
  }

  return result;
}

function extractLead(
  text = "",
  state
) {
  const blockMatch =
    text.match(
      /LEAD_START([\s\S]*?)LEAD_END/i
    );

  if (!blockMatch) {
    return null;
  }

  const block =
    blockMatch[1];

  function getValue(key) {
    const regex =
      new RegExp(
        `^${key}:\\s*(.*)$`,
        "im"
      );

    const match =
      block.match(
        regex
      );

    return match
      ? match[1].trim()
      : "";
  }

  const lead = {
    name:
      getValue("name") ||
      state.name,

    phone:
      getValue("phone") ||
      state.phone,

    email:
      getValue("email") ||
      state.email,

    vehicle_id:
      getValue(
        "vehicle_id"
      ) ||
      state.vehicleId,

    vehicle:
      getValue("vehicle") ||
      state.vehicle,

    test_drive:
      getValue(
        "test_drive"
      ),

    date:
      getValue("date") ||
      state.date,

    time:
      getValue("time") ||
      state.time,

    message:
      getValue("message"),

    status:
      getValue("status") ||
      "Neu"
  };

  lead.test_drive =
    String(
      lead.test_drive
    ).toLowerCase() ===
      "true" ||
    state.testDrive;

  if (
    !lead.name ||
    !lead.phone
  ) {
    return null;
  }

  return lead;
}

function removeLeadFromReply(
  text = ""
) {
  return text
    .replace(
      /LEAD_START[\s\S]*?LEAD_END/gi,
      ""
    )
    .trim();
}

async function saveLead(
  lead
) {
  const result =
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
        ${lead.name},
        ${lead.phone},
        ${lead.email || ""},
        ${lead.vehicle_id || ""},
        ${lead.vehicle || ""},
        ${lead.test_drive ?? true},
        ${lead.date || null},
        ${lead.time || null},
        ${lead.message || ""},
        ${lead.status || "Neu"}
      )
      RETURNING *
    `;

  return result[0];
}

async function sendLeadEmail(
  lead
) {
  if (
    !process.env.RESEND_API_KEY
  ) {
    console.error(
      "RESEND_API_KEY fehlt."
    );

    return;
  }

  const emailText = `
Neue Anfrage über den KI-Verkaufsassistenten

Name: ${lead.name}
Telefon: ${lead.phone}
E-Mail: ${lead.email || "-"}

Fahrzeug: ${lead.vehicle || "-"}
Fahrzeug-ID: ${lead.vehicle_id || "-"}

Probefahrt: ${
    lead.test_drive
      ? "Ja"
      : "Nein"
  }

Datum: ${
    lead.date || "-"
  }

Uhrzeit: ${
    lead.time || "-"
  }

Nachricht:
${lead.message || "-"}

Status: ${
    lead.status || "Neu"
  }
`;

  const response =
    await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${process.env.RESEND_API_KEY}`,

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
            `Neue Fahrzeuganfrage – ${
              lead.vehicle ||
              "Autohaus KI"
            }`,

          text: emailText
        })
      }
    );

  if (
    !response.ok
  ) {
    const errorText =
      await response.text();

    console.error(
      "RESEND ERROR:",
      errorText
    );
  }
}

function buildVehicleContext() {
  return vehicles
    .map(
      vehicle =>
        [
          `ID: ${vehicle.id}`,
          `Marke: ${vehicle.brand}`,
          `Modell: ${vehicle.model}`,
          `Baujahr: ${vehicle.year}`,
          `Kilometer: ${vehicle.km}`,
          `Preis: ${vehicle.price} €`,
          `Kraftstoff: ${vehicle.fuel}`,
          `Getriebe: ${vehicle.transmission}`,
          `Leistung: ${vehicle.power} PS`,
          `Farbe: ${vehicle.color}`,
          `Status: ${vehicle.status}`
        ].join(" | ")
    )
    .join("\n");
}

export default async function handler(
  req,
  res
) {
  try {
    if (
      req.method !== "POST"
    ) {
      return res.status(405).json({
        error:
          "Methode nicht erlaubt"
      });
    }

    const message =
      req.body?.message ||
      "";

    const messages =
      Array.isArray(
        req.body?.messages
      )
        ? req.body.messages
        : [];

    if (
      !message.trim()
    ) {
      return res.status(400).json({
        error:
          "Nachricht fehlt"
      });
    }

    const state =
      buildConversationState(
        messages
      );

    console.log(
      "GESPRÄCHSZUSTAND:",
      state
    );

    /*
      NEU:
      Intelligente Fahrzeugsuche
    */

    let searchResult = null;

    if (
      isSearchRequest(
        message
      )
    ) {
      searchResult =
        searchVehicles(
          message
        );

      console.log(
        "FAHRZEUGSUCHE:",
        searchResult
      );
    }

    const vehicleContext =
      buildVehicleContext();

    const searchContext =
      searchResult
        ? formatSearchResults(
            searchResult
          )
        : "Keine spezielle Fahrzeugsuche für diese Nachricht.";

    const conversationDirective =
      buildConversationDirective(
        state
      );

    const systemPrompt = `
Du bist ein professioneller KI-Verkaufsassistent
eines deutschen Autohauses.

DEINE AUFGABEN:

- Fahrzeugfragen beantworten
- Fahrzeuge ausschließlich aus der Fahrzeugdatenbank nennen
- Fahrzeuge anhand von Kundenwünschen suchen
- Interessenten freundlich begleiten
- Probefahrt-Anfragen aufnehmen
- Leads vollständig erfassen

WICHTIGE REGELN:

1. Verwende ausschließlich die Fahrzeugdatenbank.

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

2. NICHT VERFÜGBARE Fahrzeuge dürfen nicht als
verfügbar angeboten werden.

3. Wenn der Kunde mehrere Suchkriterien nennt,
müssen diese gemeinsam berücksichtigt werden.

Beispiel:

"BMW Diesel unter 30.000 €"

bedeutet:
Marke = BMW
Kraftstoff = Diesel
Preis <= 30.000 €

4. Wenn mehrere Fahrzeuge passen,
kannst du mehrere passende Fahrzeuge nennen.

5. Bei Fahrzeugempfehlungen nenne möglichst:
- Marke und Modell
- Preis
- Baujahr
- Kilometerstand
- Kraftstoff
- Getriebe

6. Wenn kein Fahrzeug passt, sage ehrlich,
dass aktuell kein passendes Fahrzeug vorhanden ist.

Erfinde keine Alternative als Treffer.

7. Wenn ein konkretes Fahrzeug bereits erkannt wurde,
frage NICHT erneut, welches Fahrzeug gemeint ist.

8. Wenn der Kunde eine Probefahrt bereits bestätigt hat,
ist die Probefahrt-Absicht fest.

Frage danach NIEMALS erneut:

"Möchten Sie eine Probefahrt?"
"Möchten Sie eine Probefahrt vereinbaren?"
"Wollen Sie eine Probefahrt?"

oder sinngleiche Fragen.

9. Bereits vorhandene Informationen dürfen
NICHT erneut abgefragt werden.

10. Sammle die Probefahrt-Daten in dieser Reihenfolge:

Name
→ Telefonnummer
→ E-Mail
→ Datum
→ Uhrzeit

11. Frage immer nur nach der nächsten fehlenden Information.

12. Ein eindeutiges "Ja" auf eine Probefahrtfrage
bedeutet:

test_drive = true

13. Datumsangaben:

morgen = 2026-09-16
übermorgen = 2026-09-17

14. GANZ WICHTIG:

"19.12" ist ein DATUM.

"19:12" ist eine UHRZEIT.

"19 Uhr" ist eine UHRZEIT.

Verwechsle diese Angaben niemals.

15. Sobald alle Informationen vorhanden sind:

Name
Telefonnummer
E-Mail
Fahrzeug
Probefahrt
Datum
Uhrzeit

erstelle den Lead-Block.

16. Der Lead-Block muss exakt dieses Format haben:

LEAD_START
lead: true
name: [Name]
phone: [Telefon]
email: [E-Mail oder leer]
vehicle_id: [Fahrzeug-ID]
vehicle: [Marke und Modell]
test_drive: [true/false]
date: [YYYY-MM-DD]
time: [HH:MM]
message: [kurze Zusammenfassung]
status: Neu
LEAD_END

17. Nach dem Lead-Block keinen weiteren unnötigen Dialog führen.

18. Antworte auf Deutsch, freundlich, professionell
und natürlich.


FAHRZEUGDATENBANK:

${vehicleContext}


ERGEBNIS DER AKTUELLEN FAHRZEUGSUCHE:

${searchContext}


AKTUELL ERKANNTER GESPRÄCHSZUSTAND:

${JSON.stringify(
  state,
  null,
  2
)}


VERBINDLICHE DIALOGANWEISUNG:

${conversationDirective}
`;

    const apiMessages = [
      {
        role: "system",
        content:
          systemPrompt
      },

      ...messages
        .filter(
          msg =>
            msg &&
            (
              msg.role ===
                "user" ||
              msg.role ===
                "assistant"
            ) &&
            typeof msg.content ===
              "string"
        )
        .slice(-30)
    ];

    if (
      apiMessages.length ===
        1 ||
      apiMessages[
        apiMessages.length - 1
      ]?.content !== message
    ) {
      apiMessages.push({
        role: "user",
        content: message
      });
    }

    const openaiResponse =
      await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${process.env.OPENAI_API_KEY}`,

            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            model: "gpt-5.6",
            messages:
              apiMessages
          })
        }
      );

    if (
      !openaiResponse.ok
    ) {
      const errorText =
        await openaiResponse.text();

      console.error(
        "OPENAI ERROR:",
        errorText
      );

      return res.status(500).json({
        error:
          "Fehler bei der KI"
      });
    }

    const openaiData =
      await openaiResponse.json();

    let reply =
      openaiData
        ?.choices?.[0]
        ?.message?.content ||
      "Entschuldigung, ich konnte Ihre Anfrage gerade nicht verarbeiten.";

    const finalState =
      buildConversationState([
        ...messages,

        {
          role: "user",
          content: message
        },

        {
          role: "assistant",
          content: reply
        }
      ]);

    const lead =
      extractLead(
        reply,
        finalState
      );

    if (lead) {
      try {
        const savedLead =
          await saveLead(
            lead
          );

        await sendLeadEmail(
          lead
        );

        console.log(
          "LEAD GESPEICHERT:",
          savedLead.id
        );

        reply =
          removeLeadFromReply(
            reply
          );

        if (!reply) {
          reply =
            "Vielen Dank! Ihre Probefahrt-Anfrage wurde erfolgreich aufgenommen. Das Autohaus wird sich bei Ihnen melden.";
        }
      } catch (
        leadError
      ) {
        console.error(
          "LEAD ERROR:",
          leadError
        );
      }
    } else {
      reply =
        removeLeadFromReply(
          reply
        );
    }

    reply =
      cleanReply(
        reply,
        finalState
      );

    return res.status(200).json({
      reply,

      lead: lead
        ? {
            saved: true,
            vehicle_id:
              lead.vehicle_id,
            date:
              lead.date,
            time:
              lead.time
          }
        : null
    });
  } catch (error) {
    console.error(
      "CHAT API ERROR:",
      error
    );

    return res.status(500).json({
      error:
        "Interner Serverfehler"
    });
  }
}
