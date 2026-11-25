import { neon } from "@neondatabase/serverless";

const FALLBACK_EXPERIENCES = [
  {
    id: 1,
    company: "PT Mobilitas Digital Indonesia (Astra & Toyota JV)",
    position: "Fullstack Developer Intern",
    experience_type: "internship",
    location: "Jakarta, Indonesia",
    start_date: "OCT 2026",
    end_date: "PRESENT",
    description:
      "Executed GET-to-POST security refactoring across 15+ RPO master data endpoints, refined request validation schemas, resolved deterministic pagination bugs, and authored comprehensive Postman documentation.",
    responsibilities: [
      "Executed GET-to-POST security refactoring across 15+ RPO master data endpoints",
      "Refined request validation schemas for Route Planning & Dock Scheduling",
      "Resolved deterministic pagination bugs and optimized Promise.all concurrent fetching",
      "Authored comprehensive Postman collections for cross-team standardization"
    ],
    tech_stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Koa",
      "Objection.js",
      "PostgreSQL"
    ],
    display_order: 1
  },
  {
    id: 2,
    company: "Laboratory Unit • Telkom University Purwokerto",
    position: "Web Developer Intern",
    experience_type: "internship",
    location: "Purwokerto, Indonesia",
    start_date: "SEP 2025",
    end_date: "JAN 2026",
    description:
      "Built and maintained a laboratory profile website using Laravel and React.js. Developed an integrated Lab Free Letter feature and improved application performance through query optimization and caching.",
    responsibilities: [
      "Built and maintained laboratory profile website using Laravel and React.js",
      "Developed integrated Lab Free Letter digital service feature",
      "Improved application performance through database query optimization and caching"
    ],
    tech_stack: ["Laravel", "React.js", "PostgreSQL", "REST API"],
    display_order: 2
  },
  {
    id: 3,
    company: "PT Telkom Indonesia Tbk",
    position: "UI/UX Designer Intern",
    experience_type: "internship",
    location: "Indonesia",
    start_date: "JUL 2025",
    end_date: "SEP 2025",
    description:
      "Designed analytical dashboards and interface components supporting customer experience strategy and Net Promoter Score (NPS) analytics.",
    responsibilities: [
      "Designed analytical dashboards and high-fidelity interface components",
      "Collaborated with cross-functional teams to translate user journeys into clean UI systems",
      "Supported customer experience strategy and Net Promoter Score (NPS) program"
    ],
    tech_stack: ["UI/UX", "Figma", "Dashboard Analytics", "Design System"],
    display_order: 3
  },
  {
    id: 4,
    company: "BRI Village Cooperative Project",
    position: "Backend Developer",
    experience_type: "project",
    location: "Indonesia",
    start_date: "MAY 2025",
    end_date: "JUL 2025",
    description:
      "Engineered backend services using Golang and Gin, implementing JWT authentication, role-based access control, deposit/loan rules, and pagination.",
    responsibilities: [
      "Implemented JWT authentication and role-based middleware",
      "Engineered 20+ REST API endpoints for deposit, savings, and loan workflows",
      "Implemented financial business rule validation, filtering, and pagination",
      "Documented API endpoints using Swagger / OpenAPI"
    ],
    tech_stack: ["Golang", "Gin", "PostgreSQL", "JWT", "RBAC"],
    display_order: 4
  },
  {
    id: 5,
    company: "Telkom University Purwokerto",
    position:
      "Teaching Assistant (Software Engineering & Information Systems)",
    experience_type: "work",
    location: "Purwokerto, Indonesia",
    start_date: "AUG 2024",
    end_date: "JAN 2026",
    description:
      "Mentored 200+ students across courses in Mobile Application Programming (Flutter), Web Application Development (Laravel), and Operating Systems (Linux).",
    responsibilities: [
      "Mentored 200+ undergraduate students across practical laboratory sessions",
      "Taught Flutter mobile development, Laravel web engineering, and Linux OS concepts",
      "Evaluated student code assignments, code reviews, and project implementations"
    ],
    tech_stack: ["Flutter", "Laravel", "Linux", "Mentoring"],
    display_order: 5
  }
];

export default async function handler(req, res) {
  try {
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      const experiences = await sql`
        SELECT *
        FROM experiences
        ORDER BY display_order ASC, created_at DESC
      `;
      if (experiences && experiences.length > 0) {
        return res.status(200).json(experiences);
      }
    }
  } catch (error) {
    console.error("Database fetch error, using fallback:", error);
  }

  return res.status(200).json(FALLBACK_EXPERIENCES);
}
