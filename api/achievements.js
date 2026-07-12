import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const achievements = await sql`
      SELECT *
      FROM achievements
      ORDER BY display_order ASC, created_at DESC
    `;

    return res.status(200).json(achievements);
  } catch (error) {
    console.error("Failed to fetch achievements:", error);

    return res.status(500).json({
      message: "Failed to fetch achievements",
    });
  }
}
