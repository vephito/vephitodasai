export const personalInfo = {
  name: "Vephito Dasai",
  role: "Backend & Platform Engineer",
  location: "Bengaluru, India",
  email: "vephito.dasai@gmail.com",
  phone: "7005181283",
  github: "https://github.com/vephito",
  linkedin: "https://linkedin.com/in/vephito.dasai",
  resumeUrl: "/vephito/resume.pdf",
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
    status: "Current",
    phase: "03",
    tagline: "Cloud Native Platform, Ingress & Zero-Trust Security",
    metrics: [
      { label: "Autoscaling", value: "3x Spikes Handled" },
      { label: "Traffic", value: "Gateway API & Envoy" },
      { label: "Secrets", value: "Vault PKI & Dynamic DB" }
    ],
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
    status: "Promoted",
    phase: "02",
    tagline: "Distributed Systems & Full-Stack Observability",
    metrics: [
      { label: "Throughput", value: "5K+ Docs/Mo" },
      { label: "Telemetry", value: "5+ Microservices" },
      { label: "Streaming", value: "Redis Streams" }
    ],
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
    status: "Foundation",
    phase: "01",
    tagline: "API Engineering & Automated Testing",
    metrics: [
      { label: "Focus", value: "REST APIs & Telemetry" },
      { label: "Quality", value: "Automated Unit Tests" }
    ],
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
    id: "huntsmen",
    title: "Huntsmen",
    subtitle: "Community & Tournament Platform",
    description:
      "Collaborative tournament and community web platform featuring team rosters, event highlights, and dynamic visual layouts. Iterated and deployed on Vercel with responsive mobile and desktop workflows.",
    technologies: ["React", "JavaScript", "CSS3", "Vercel"],
    github: "https://github.com/vephito/huntsmen",
    live: "https://huntsmen.vercel.app/",
    displayUrl: "huntsmen.vercel.app"
  },
  {
    id: "qrcafe",
    title: "QR Cafe (OrderKit)",
    subtitle: "Dine-in QR Table Ordering",
    description:
      "Full-stack QR cafe ordering system where guests scan their table QR code, browse live categorized food & beverage menus, and place orders that route directly into a real-time kitchen queue with zero app download required.",
    technologies: ["Next.js", "React", "Supabase Realtime", "PostgreSQL", "QR System"],
    github: "https://github.com/vephito/toolkit",
    live: "https://toolkit-five-beta.vercel.app/order?shop=default-cafe&table=1&t=9cspuUcBzVT4ZOa6hPco6tad",
    displayUrl: "toolkit-five-beta.vercel.app/order"
  },
  {
    id: "orderkit-pos",
    title: "OrderKit POS",
    subtitle: "Cloud Point-of-Sale for Retail & Cafes",
    description:
      "High-speed countertop cloud POS engineered for peak retail rush. Features direct tap-to-type bulk quantity entry, instant retail/wholesale pricing toggle, 80mm ESC/POS thermal receipt printing, shift management, and Supabase RLS data isolation.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "ESC/POS"],
    github: "https://github.com/vephito/OrderKit-POS",
    live: "https://order-kit-pos.vercel.app/",
    displayUrl: "order-kit-pos.vercel.app"
  },
  {
    id: "attendance-notifier",
    title: "Attendance Notifier",
    subtitle: "Serverless Automation & Alerting",
    description:
      "Event-driven serverless automation pipeline running on AWS Lambda with EventBridge triggers. Automatically scrapes academic portals daily via headless Selenium, evaluates attendance thresholds, and dispatches SMS alerts via Twilio.",
    technologies: ["Python", "AWS Lambda", "EventBridge", "Selenium", "Twilio"],
    github: "https://github.com/vephito",
    live: null,
    displayUrl: null
  }
];
