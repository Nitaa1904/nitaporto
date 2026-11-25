export const DEVELOPER_PROFILE = {
  name: "Nita Fitrotul Mar'ah",
  title: "Software Engineer",
  subtitle: "SOFTWARE ENGINEER • BACKEND & FULLSTACK FOCUSED",
  headline: "Building systems behind the interface.",
  about: {
    summary:
      "Software Engineering graduate from Telkom University Purwokerto (GPA 3.92/4.00) with hands-on experience in backend architecture, RESTful APIs, and fullstack web development.",
    paragraphs: [
      "Software Engineering graduate from Telkom University Purwokerto (GPA 3.92/4.00) with hands-on experience in backend architecture, RESTful APIs, and fullstack web development.",
      "My core engineering focus spans designing scalable REST APIs, robust authentication & RBAC mechanisms, optimized relational database schemas, and clean fullstack web applications.",
      "I prioritize understanding how high-reliability systems operate behind the interface — from business logic and data pipelines to API design, contract testing, security hardening, and deployment."
    ],
    stats: [
      {
        value: "3.92",
        label: "GPA CUM LAUDE",
        note: "Telkom University Purwokerto"
      },
      {
        value: "114",
        label: "API TESTS PASSED (100%)",
        note: "Functional Black-Box"
      },
      {
        value: "80+",
        label: "REST APIS DOCUMENTED",
        note: "Swagger & Postman"
      }
    ]
  },
  techStrip: [
    "RUST",
    "GOLANG",
    "TYPESCRIPT",
    "NODE.JS",
    "POSTGRESQL",
    "DOCKER"
  ],
  devJson: {
    name: "Nita Fitrotul Mar'ah",
    role: "Software Engineer (Backend & Fullstack)",
    current_role: "Fullstack Developer Intern @ PT MODA",
    focus: [
      "Backend",
      "Fullstack Web",
      "API Design",
      "System Architecture"
    ],
    status: "ready_to_build"
  },
  contact: {
    email: "nitafitrotul1904@gmail.com",
    github: "https://github.com/Nitaa1904",
    githubUser: "Nitaa1904",
    linkedin: "https://linkedin.com/in/nitafitrotul",
    linkedinUser: "Nita Fitrotul Mar'ah",
    resumeUrl:
      "https://drive.google.com/drive/folders/1tu6B1A1xDTNzQJm9FC_-INLjuoJ40BFV?usp=sharing"
  }
};

export const DEFAULT_PROJECTS = [
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
    is_nda: true,
    display_order: 1,
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
    is_nda: false,
    display_order: 2,
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
    is_nda: false,
    display_order: 3,
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
    is_nda: false,
    display_order: 4,
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
];

export const DEFAULT_EXPERIENCES = [
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

export const TECH_GROUPS = [
  {
    number: "01",
    title: "Backend",
    description:
      "Building high-performance APIs, robust business logic, authentication, and backend services.",
    technologies: [
      "Rust",
      "Actix Web",
      "Golang",
      "Gin",
      "Node.js",
      "Express.js",
      "Koa",
      "Laravel",
      "REST API"
    ]
  },
  {
    number: "02",
    title: "Data & Infrastructure",
    description:
      "Architecting relational schemas, session caching, containerized micro-services, and cloud pipelines.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SeaORM",
      "Objection.js",
      "Docker",
      "Azure DevOps",
      "Linux"
    ]
  },
  {
    number: "03",
    title: "Frontend & Mobile",
    description:
      "Constructing responsive, scannable web interfaces and typed client applications.",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React.js",
      "RTK Query",
      "Tailwind CSS",
      "Flutter"
    ]
  },
  {
    number: "04",
    title: "Security & Testing",
    description:
      "Securing endpoints, enforcing RBAC boundaries, and validating reliability through contract & functional testing.",
    technologies: [
      "JWT",
      "RBAC",
      "Swagger / OpenAPI",
      "Postman",
      "Functional Black-Box Testing",
      "Git"
    ]
  }
];

export const DEFAULT_ACHIEVEMENTS = [
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

export const LEADERSHIPS = [
  {
    period: "2024 — 2025",
    role: "Vice President / Vice Chairperson",
    organization:
      "Himpunan Mahasiswa Software Engineering (HMSE) • Telkom University Purwokerto",
    description:
      "Led 7 organizational departments in executing annual work plans, digitalization initiatives, and strategic leadership. Coordinated the 8th SE Anniversary national event with 300+ attendees."
  },
  {
    period: "2023 — 2024",
    role: "Secretary",
    organization:
      "Himpunan Mahasiswa Software Engineering (HMSE) • Telkom University Purwokerto",
    description:
      "Managed organizational administration, authoring 200+ official archives and 7+ major event proposals, streamlining internal communications across university stakeholders."
  },
  {
    period: "2024",
    role: "General Staff Mentor",
    organization: "Pusat Prestasi Satria Muda • Telkom University Purwokerto",
    description:
      "Mentored student competition teams, reviewing 100+ proposals and technical blueprints for national student showcases including GEMASTIK and KMI Expo."
  }
];
