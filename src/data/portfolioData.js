export const personalInfo = {
  name: "Vephito Dasai",
  role: "Backend & Platform Engineer",
  location: "Bengaluru, India",
  email: "vephito.dasai@gmail.com",
  phone: "7005181283",
  github: "https://github.com/vephito",
  linkedin: "https://linkedin.com/in/vephito.dasai",
  resumeUrl: (process.env.PUBLIC_URL || "") + "/resume.pdf",
  summary:
    "Backend and Platform Engineer with 2+ years of experience building and operating production systems on Kubernetes from REST APIs and distributed workers to Kubernetes platforms, high-availability databases, and production observability."
};

export const technicalSkills = [
  {
    category: "Platform & DevOps",
    skills: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "Ansible",
      "CI/CD",
      "ArgoCD",
      "Envoy Gateway API",
      "NGINX Ingress",
      "HashiCorp Vault",
      "KEDA",
      "NetBird"
    ]
  },
  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Flask",
      "REST API Design",
      "Distributed Workers",
      "Microservices"
    ]
  },
  {
    category: "Observability & Telemetry",
    skills: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "OpenTelemetry"
    ]
  },
  {
    category: "Databases & Streaming",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis & Redis Streams",
      "OpenSearch"
    ]
  },
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"]
  }
];

export const experienceData = [
  {
    id: "platform-engineer",
    role: "Platform Engineer",
    company: "Pagesoft",
    location: "Bengaluru, Karnataka",
    period: "Jul 2025 – Present",
    type: "Full-time",
    highlights: [
      "Automated CI/CD deployment workflows for application services, eliminating manual releases and standardizing deployment consistency.",
      "Deployed and managed high-availability PostgreSQL and MongoDB infrastructure, including automated database failover, scheduled backups, and disaster recovery.",
      "Migrated Kubernetes ingress infrastructure to Envoy Gateway using the Kubernetes Gateway API, modernizing traffic routing and ingress management.",
      "Deployed and managed HashiCorp Vault for centralized secrets management, PKI certificate issuance, SSH access, and dynamic database credentials.",
      "Replaced legacy VPN with NetBird mesh networking, establishing encrypted peer connectivity and fine-grained access control across infrastructure.",
      "Implemented OIDC-based Single Sign-On (SSO) with Dex across ArgoCD, Grafana, and Vault, consolidating access control for the engineering team.",
      "Engineered Kubernetes KEDA autoscaling policies, cutting idle compute costs and seamlessly handling 3x traffic spikes."
    ],
    tags: ["Kubernetes", "Envoy Gateway", "HashiCorp Vault", "ArgoCD", "PostgreSQL", "MongoDB", "KEDA", "CI/CD"]
  },
  {
    id: "backend-developer",
    role: "Backend Developer",
    company: "Pagesoft",
    location: "Bengaluru, Karnataka",
    period: "Sep 2024 – Jul 2025",
    type: "Full-time",
    highlights: [
      "Architected and deployed a distributed PDF processing system using Node.js and Python workers communicating asynchronously over Redis Streams, processing 5K+ documents/month.",
      "Self-hosted and configured an end-to-end open-source monitoring stack from scratch: Prometheus (metrics), Loki (logs), and Tempo (distributed tracing).",
      "Led end-to-end observability across 5+ production microservices, driving the engineering team's adoption of structured telemetry and actionable alerts."
    ],
    tags: ["Node.js", "Python", "Redis Streams", "Prometheus", "Grafana", "Loki", "Tempo", "OpenTelemetry"]
  },
  {
    id: "backend-intern",
    role: "Backend Developer Intern",
    company: "Pagesoft",
    location: "Bengaluru, Karnataka",
    period: "Mar 2024 – Sep 2024",
    type: "Internship",
    highlights: [
      "Developed performant REST APIs with Node.js and Express for user activity telemetry and product analytics.",
      "Authored automated unit tests for core API endpoints, improving test coverage and release confidence before production deployments."
    ],
    tags: ["Node.js", "Express", "REST APIs", "Unit Testing", "Analytics"]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Kristu Jayanti University",
    location: "Bengaluru",
    period: "Aug 2022 – May 2024"
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Patkai Christian College",
    location: "Nagaland",
    period: "Aug 2018 – May 2021"
  }
];

export const projectsData = [
  {
    id: "attendance-notifier",
    title: "Attendance Notifier",
    subtitle: "Serverless Monitoring & Alerting",
    description:
      "Serverless automation system running on AWS Lambda with EventBridge triggers and Selenium. Automatically scrapes university attendance portals daily and dispatches SMS alerts via Twilio, eliminating manual status checks.",
    technologies: ["Python", "AWS Lambda", "EventBridge", "Selenium", "Twilio"],
    github: "https://github.com/vephito",
    live: null
  },
  {
    id: "chat-app",
    title: "Chat Application",
    subtitle: "Real-time Messaging System",
    description:
      "Full-stack real-time chat application with authentication, instant messaging capabilities, and responsive UI.",
    technologies: ["React", "Node.js", "Express", "Socket.io"],
    github: "https://github.com/vephito",
    live: "https://chat-app-sandy-zeta.vercel.app/auth"
  },
  {
    id: "campus-trade",
    title: "CampusTrade / E-Auction",
    subtitle: "Campus Marketplace & Bidding",
    description:
      "Web application designed for campus trading and auctioning, enabling peer-to-peer item listings and structured bidding workflows.",
    technologies: ["Node.js", "MongoDB", "Express", "JavaScript"],
    github: "https://github.com/vephito/CampusTrade",
    live: null
  },
  {
    id: "gamezone",
    title: "Gamezone Arcade",
    subtitle: "Interactive Web Game",
    description:
      "Classic browser arcade game featuring responsive controls, collision detection, and score persistence.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    github: "https://github.com/vephito/Gamezone",
    live: null
  }
];
