import { neon } from "@neondatabase/serverless";

const FALLBACK_PROJECTS = {
  "enterprise-mobility-rpo-modules": {
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
    problem:
      "Enterprise mobility services handling route planning, dock scheduling, and master data required security hardening and query performance optimization under enterprise traffic.",
    solution:
      "Migrated sensitive query parameters to secure POST request bodies, enhanced input payload validation schemas, corrected offset pagination boundaries, and accelerated batch data retrieval using Promise.all concurrency.",
    architecture:
      "Modular micro-service architecture powered by Node.js and Koa, structured with Objection.js ORM over PostgreSQL, integrated with Next.js frontend state management using RTK Query.",
    security:
      "GET-to-POST migration preventing URL data exposure, role-based endpoint authorization, and strict schema validation preventing malformed payload injection.",
    testing_result:
      "Refactored endpoints and validation schemas validated across integration suites and standardized with 15+ Postman collections."
  },
  "sicantik-bangsa-v2": {
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
    problem:
      "The previous backend architecture was designed around a single institution and limited role structure. This created a risk of data overlap and made the system difficult to extend for multiple village groups and governance roles.",
    solution:
      "The backend was redesigned into a modular monolith architecture with multi-role and multi-institution support. Each domain is separated into logical modules while remaining within a single deployment unit, allowing the system to remain maintainable without introducing unnecessary distributed-system complexity.",
    architecture:
      "The system uses a REST API architecture built with Rust and Actix Web. SeaORM manages database access to PostgreSQL, while Redis supports session management. The backend is organized by domain modules including authentication, aspirations, proposals, meeting reports, village planning, budgeting, export, and notifications.",
    security:
      "Authentication uses JWT-based access control combined with Role-Based Access Control (RBAC). User permissions are scoped according to roles and institutional context, while passwords are securely hashed using Argon2 and active sessions are managed through Redis.",
    testing_result:
      "The REST API was evaluated using functional Black Box Testing with Equivalence Partitioning for test case design. A total of 114 API test cases covering authentication, authorization, input validation, role-based access, workflow behavior, and successful request scenarios passed successfully."
  },
  "village-cooperative-system": {
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
    problem:
      "Village cooperative operations involve different user responsibilities and financial workflows. The backend needed to manage authentication, access control, deposit and loan rules, while keeping data retrieval efficient and structured.",
    solution:
      "The backend was developed using Golang with REST API principles. Authentication and role-based middleware were implemented to control access, while business rules were applied to cooperative financial workflows including deposits and loans.",
    architecture:
      "The system follows a REST API architecture where client requests are processed through authentication and role-based middleware before reaching business logic and database operations. Filtering and pagination were implemented to support efficient data retrieval.",
    security:
      "The backend uses JWT authentication and role-based middleware to protect endpoints and ensure users can only access operations permitted for their role.",
    testing_result:
      "Protected API endpoints and financial workflow validations tested against multiple role configurations."
  },
  "talkup": {
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
    problem:
      "Accessing mental health consultation and academic counseling was hindered by manual booking, lack of scheduling transparency, and fragmented records between students, counselors, and administrative staff.",
    solution:
      "Engineered a centralized digital counseling platform with role-based dashboards, automated consultation booking, confidential counseling case notes, and comprehensive SRS specifications.",
    architecture:
      "Fullstack architecture featuring a responsive web client and a Node.js/Express.js REST API with Sequelize ORM connected to PostgreSQL, managing structured consultation schedules and role boundaries.",
    security:
      "JWT token authentication, encrypted session state, strict RBAC ensuring student consultation notes are private to assigned counselors, and validated input sanitization.",
    testing_result:
      "Validated across multiple user roles (admins, counselors, students) with 300+ active users during institutional deployment trials."
  }
};

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL);
      const projects = await sql`
        SELECT *
        FROM projects
        WHERE slug = ${slug}
        LIMIT 1
      `;

      if (projects.length > 0) {
        return res.status(200).json(projects[0]);
      }
    }
  } catch (error) {
    console.error("Database fetch error, using fallback:", error);
  }

  if (FALLBACK_PROJECTS[slug]) {
    return res.status(200).json(FALLBACK_PROJECTS[slug]);
  }

  return res.status(404).json({
    message: "Project not found"
  });
}
