import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.POSTGRES_URL);

export default async function handler(req, res) {
  try {
    // GET = Leads aus Neon abrufen
    if (req.method === "GET") {
      const leads = await sql`
        SELECT
          id,
          name,
          phone,
          email,
          vehicle_id,
          vehicle,
          test_drive,
          date,
          time,
          message,
          status,
          created_at
        FROM leads
        ORDER BY created_at DESC
      `;

      return res.status(200).json({
        success: true,
        leads
      });
    }

    // POST = neuen Lead speichern
    if (req.method === "POST") {
      const lead = req.body;

      if (!lead?.name || !lead?.phone) {
        return res.status(400).json({
          error: "Name und Telefonnummer fehlen"
        });
      }

      const result = await sql`
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

      return res.status(200).json({
        success: true,
        message: "Lead gespeichert",
        lead: result[0]
      });
    }

    return res.status(405).json({
      error: "Methode nicht erlaubt"
    });

  } catch (error) {
    console.error("LEADS API ERROR:", error);

    return res.status(500).json({
      error: "Fehler beim Verarbeiten der Leads"
    });
  }
}
