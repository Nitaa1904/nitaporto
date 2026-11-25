import { neon } from "@neondatabase/serverless";

const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "Enterprise Mobility & RPO Modules",
    slug: "enterprise-mobility-rpo-modules",
    category: "ENTERPRISE INTERNSHIP • FULLSTACK",
    role: "Fullstack Developer Intern (PT Mobilitas Digital Indonesia)",
    description:
      "Refactored core enterprise mobility services and master data APIs to meet strict security and performance standards.",
    highlights: [
      "Migrated 15+ REST API endpoints & RTK Query services from GET to POST body",
      "Updated payload validation schemas for Route Planning & Dock Scheduling",
      "Fixed offset pagination & optimized Promise.all concurrent fetching",
      "Standardized 15+ modules with Postman API Collections"
    ],
    tech_stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Koa",
      "Objection.js",
      "PostgreSQL",
      "RTK Query"
    ],
    project_url: null,
    github_url: null,
    featured: true,
    display_order: 1
  },
  {
    id: 2,
    title: "SiCantik Bangsa V2",
    slug: "sicantik-bangsa-v2",
    category: "BACKEND ARCHITECTURE • THESIS",
    role: "Backend Developer",
    description:
      "A multi-role and multi-institution backend system designed to support participatory village governance workflows, from public aspirations to village budgeting.",
    highlights: [
      "Modular Monolith Architecture",
      "JWT Authentication & RBAC",
      "80+ Swagger / OpenAPI Endpoints",
      "114 API Test Cases Passed (100%)"
    ],
    tech_stack: ["Rust", "Actix Web", "PostgreSQL", "Redis", "Docker"],
    project_url: null,
    github_url: null,
    featured: true,
    display_order: 2
  },
  {
    id: 3,
    title: "Village Cooperative System (BRI Project)",
    slug: "village-cooperative-system",
    category: "BACKEND DEVELOPMENT • FINTECH",
    role: "Backend Developer",
    description:
      "Backend services for a village cooperative system with authentication, role-based middleware, financial rule management, filtering, and pagination.",
    highlights: [
      "20+ REST API Endpoints",
      "Role-based Middleware & JWT",
      "Deposit & Loan Business Rules",
      "Swagger API Documentation"
    ],
    tech_stack: ["Golang", "Gin", "PostgreSQL", "JWT", "Swagger"],
    project_url: null,
    github_url: null,
    featured: false,
    display_order: 3
  },
  {
    id: 4,
    title: "TalkUp — Digital Counseling Platform",
    slug: "talkup",
    category: "FULLSTACK & LEADERSHIP",
    role: "Project Leader & Backend Developer",
    description:
      "Multi-role digital counseling platform serving 300+ active users (admins, counselors, students) with SRS documentation.",
    highlights: [
      "Led full SDLC & SRS documentation",
      "Multi-role consultation & appointment workflows",
      "300+ active users served across academic trials",
      "Exhibited at International Capstone Exhibition"
    ],
    tech_stack: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Sequelize"],
    project_url: "https://bit.ly/talk-up",
    github_url: null,
    featured: false,
    display_order: 4
  }
];

export default async function handler(req, res) {
  try {
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      const projects = await sql`
        SELECT *
        FROM projects
        ORDER BY display_order ASC, created_at DESC
      `;
      if (projects && projects.length > 0) {
        return res.status(200).json(projects);
      }
    }
  } catch (error) {
    console.error("Database fetch error, using fallback:", error);
  }

  return res.status(200).json(FALLBACK_PROJECTS);
}
