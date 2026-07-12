import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  try {
    const sql = neon(process.env.DATABASE_URL);

    const { slug } = req.query;

    const projects = await sql`
      SELECT *
      FROM projects
      WHERE slug = ${slug}
      LIMIT 1
    `;

    if (projects.length === 0) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    return res.status(200).json(projects[0]);
  } catch (error) {
    console.error("Failed to fetch project:", error);

    return res.status(500).json({
      message: "Failed to fetch project",
    });
  }
}
