import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const projects = await sql`
      SELECT *
      FROM projects
      ORDER BY display_order ASC, created_at DESC
    `;

    return res.status(200).json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);

    return res.status(500).json({
      message: "Failed to fetch projects",
    });
  }
}
