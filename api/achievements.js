import { neon } from "@neondatabase/serverless";

const FALLBACK_ACHIEVEMENTS = [
  {
    id: 1,
    year: "2023",
    type: "NATIONAL COMPETITION & IP",
    title: "GEMASTIK XVI Finalist & HKI Intellectual Property (EC00202376447)",
    subtitle: "DISA Digital Tourism Platform · Kemdikbudristek",
    description:
      "Selected as national finalist in the Software Development division of GEMASTIK XVI; officially registered Intellectual Property Rights (HKI: EC00202376447) for the DISA platform.",
    credential_url:
      "https://drive.google.com/drive/folders/186TGoGhc_puK8yxOIk9LB06tajY_Dhrz?usp=sharing",
    display_order: 1
  },
  {
    id: 2,
    year: "2025",
    type: "INTERNATIONAL CERTIFICATION",
    title: "IT Specialist in JavaScript",
    subtitle: "Certiport (Pearson VUE)",
    description:
      "Earned international certification validating professional proficiency in JavaScript syntax, DOM manipulation, asynchronous programming, and web development fundamentals.",
    credential_url:
      "https://drive.google.com/drive/folders/186TGoGhc_puK8yxOIk9LB06tajY_Dhrz?usp=sharing",
    display_order: 2
  },
  {
    id: 3,
    year: "2025",
    type: "CLOUD CERTIFICATION",
    title: "AWS Back-End Academy",
    subtitle: "Dicoding Indonesia & AWS",
    description:
      "Completed rigorous backend cloud specialization focusing on REST API development, relational and non-relational database architecture, and AWS cloud deployment.",
    credential_url:
      "https://drive.google.com/drive/folders/186TGoGhc_puK8yxOIk9LB06tajY_Dhrz?usp=sharing",
    display_order: 3
  },
  {
    id: 4,
    year: "2024",
    type: "INTENSIVE BOOTCAMP",
    title: "Fullstack Web Development Bootcamp with AI Literacy",
    subtitle: "Binar Academy (Kampus Merdeka MSIB)",
    description:
      "Graduated intensive fullstack software development program with distinction, mastering modern frontend & backend engineering workflows paired with AI productivity integration.",
    credential_url:
      "https://drive.google.com/drive/folders/186TGoGhc_puK8yxOIk9LB06tajY_Dhrz?usp=sharing",
    display_order: 4
  }
];

export default async function handler(req, res) {
  try {
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      const achievements = await sql`
        SELECT *
        FROM achievements
        ORDER BY display_order ASC, created_at DESC
      `;
      if (achievements && achievements.length > 0) {
        return res.status(200).json(achievements);
      }
    }
  } catch (error) {
    console.error("Database fetch error, using fallback:", error);
  }

  return res.status(200).json(FALLBACK_ACHIEVEMENTS);
}
