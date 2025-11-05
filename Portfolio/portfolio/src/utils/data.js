export const projects = [
  {
    id: 1,
    title: "Cloud Native Microservices Platform",
    description: "A scalable microservices architecture built with Kubernetes, Docker, and AWS ECS. Features auto-scaling, service discovery, and distributed tracing.",
    technologies: ["Kubernetes", "Docker", "AWS", "Node.js", "React"],
    githubUrl: "https://github.com/Nikhilchen/cloud-microservices",
    thumbnail: "/project-1.jpg"
  },
  {
    id: 2,
    title: "AI-Powered Code Review Assistant",
    description: "Machine learning system that analyzes code quality and suggests improvements using natural language processing and static analysis.",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    githubUrl: "https://github.com/Nikhilchen/ai-code-review",
    thumbnail: "/project-2.jpg"
  },
  {
    id: 3,
    title: "Serverless E-commerce Platform",
    description: "Full-stack e-commerce solution built with serverless architecture, featuring real-time inventory management and payment processing.",
    technologies: ["AWS Lambda", "Next.js", "Stripe", "DynamoDB", "CloudFront"],
    githubUrl: "https://github.com/Nikhilchen/serverless-ecommerce",
    thumbnail: "/project-3.jpg"
  }
];

export const experience = [
  {
    id: 1,
    company: "TechCorp Inc.",
    role: "Senior Cloud Engineer",
    period: "2022 - Present",
    bullets: [
      "Led migration of monolithic architecture to microservices, reducing latency by 40%",
      "Implemented CI/CD pipelines serving 50+ developers",
      "Managed Kubernetes clusters hosting 200+ services"
    ]
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    bullets: [
      "Built scalable web applications serving 10k+ daily users",
      "Integrated machine learning models into production applications",
      "Mentored junior developers and established coding standards"
    ]
  },
  {
    id: 3,
    company: "DevStudio",
    role: "Frontend Developer",
    period: "2018 - 2020",
    bullets: [
      "Developed responsive web applications with React and TypeScript",
      "Collaborated with design teams to implement pixel-perfect UIs",
      "Optimized application performance achieving 95+ Lighthouse scores"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "#"
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    url: "#"
  },
  {
    id: 3,
    title: "Best AI Hack - TechCrunch Disrupt",
    issuer: "TechCrunch",
    date: "2021",
    url: "#"
  },
  {
    id: 4,
    title: "Paper: 'ML Model Deployment Patterns'",
    publisher: "ACM Digital Library",
    date: "2020",
    url: "#"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Nikhil's cloud architecture expertise transformed our infrastructure, resulting in 60% cost savings and improved scalability.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Inc."
  },
  {
    id: 2,
    quote: "Working with Nikhil was exceptional. Their full-stack skills and attention to detail delivered a flawless product ahead of schedule.",
    name: "Michael Torres",
    role: "Product Director",
    company: "StartupXYZ"
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "FastAPI"],
  cloud: ["AWS", "Docker", "Kubernetes", "Terraform", "Serverless"],
  ml: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face"],
  tools: ["Git", "Jenkins", "Prometheus", "Grafana", "Jest"]
};