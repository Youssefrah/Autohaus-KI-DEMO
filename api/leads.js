import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.POSTGRES_URL);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Nur POST erlaubt" });
  }

  try {
    const lead = req.body;

    if (!lead?.name || !lead?.phone) {
      return res.status(400).json({
        error: "Name und Telefonnummer fehlen"
      });
    }

    // Lead in Datenbank speichern
    await sql`
      INSERT INTO leads
      (name, phone, email, vehicle_id, vehicle, test_drive, date, time, message, status)
      VALUES
      (${lead.name},
       ${lead.phone},
       ${lead.email || ""},
       ${lead.vehicle_id || ""},
       ${lead.vehicle || ""},
       ${lead.test_drive ?? true},
       ${lead.date || null},
       ${lead.time || null},
       ${lead.message || ""},
       ${lead.status || "Neu"})
    `;

    // E-Mail-Benachrichtigung senden
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["Youssefrahime9@gmail.com"],
        subject: `🚗 Neue Probefahrt-Anfrage: ${lead.vehicle || "Fahrzeug"}`,
        html: `
          <h2>🚗 Neue Probefahrt-Anfrage</h2>
          <p><strong>Name:</strong> ${lead.name}</p>
          <p><strong>Telefon:</strong> ${lead.phone}</p>
          <p><strong>E-Mail:</strong> ${lead.email || "-"}</p>
          <p><strong>Fahrzeug:</strong> ${lead.vehicle || "-"}</p>
          <p><strong>Fahrzeug-ID:</strong> ${lead.vehicle_id || "-"}</p>
          <p><strong>Datum:</strong> ${lead.date || "-"}</p>
          <p><strong>Uhrzeit:</strong> ${lead.time || "-"}</p>
          <p><strong>Nachricht:</strong> ${lead.message || "-"}</p>
          <p><strong>Status:</strong> ${lead.status || "Neu"}</p>
        `
      })
    });

    if (!emailResponse.ok) {
      console.error("EMAIL ERROR:", await emailResponse.text());
    }

    return res.status(200).json({
      success: true,
      message: "Lead gespeichert und Benachrichtigung verarbeitet"
    });

  } catch (error) {
    console.error("LEAD ERROR:", error);

    return res.status(500).json({
      error: "Lead konnte nicht verarbeitet werden"
    });
  }
}
