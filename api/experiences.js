import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const experiences = await sql`
      SELECT *
      FROM experiences
      ORDER BY display_order ASC, created_at DESC
    `;

    return res.status(200).json(experiences);
  } catch (error) {
    console.error("Failed to fetch experiences:", error);

    return res.status(500).json({
      message: "Failed to fetch experiences",
    });
  }
}
