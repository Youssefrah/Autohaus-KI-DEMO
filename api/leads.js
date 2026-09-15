export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Nur POST erlaubt" });
  }

  try {
    const lead = req.body;

    if (!lead || !lead.name || !lead.phone) {
      return res.status(400).json({
        error: "Name und Telefonnummer fehlen"
      });
    }

    // Hier wird der Lead zunächst entgegengenommen.
    // Im nächsten Schritt verbinden wir ihn mit unserer Speicherung.
    console.log("NEUER LEAD:", lead);

    return res.status(200).json({
      success: true,
      message: "Lead erfolgreich empfangen",
      lead
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Interner Serverfehler"
    });
  }
}
