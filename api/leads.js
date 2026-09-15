import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.STORAGE_POSTGRES_URL);

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

    return res.status(200).json({
      success: true,
      message: "Lead gespeichert"
    });

  } catch (error) {
    console.error("DATABASE ERROR:", error);

    return res.status(500).json({
      error: "Lead konnte nicht gespeichert werden"
    });
  }
}
