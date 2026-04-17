import type { Project } from "@/types/project";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A high-performance online store with real-time inventory management and seamless checkout.",
    thumbnailUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2024-03-15",
    category: "Web Application",
    status: "published"
  },
  {
    id: "2",
    title: "SaaS Dashboard",
    description: "Analytics and reporting dashboard for enterprise resource planning with data visualization.",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bbbda536ad00?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2024-03-12",
    category: "Dashboard",
    status: "published"
  },
  {
    id: "3",
    title: "Portfolio site",
    description: "Minimalist and clean portfolio site for creative professionals showcasing their work.",
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2024-03-10",
    category: "Personal Website",
    status: "draft"
  },
  {
    id: "4",
    title: "Mobile Fitness Tracker",
    description: "Android and iOS app for tracking daily workouts and nutrition with social features.",
    thumbnailUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2024-03-08",
    category: "Mobile App",
    status: "published"
  },
  {
    id: "5",
    title: "Marketing Landing Page",
    description: "Conversion-optimized landing page for a startup launch with interactive elements.",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2024-03-05",
    category: "Marketing",
    status: "published"
  },
  {
    id: "6",
    title: "AI Chat Interface",
    description: "Next-gen AI assistant interface with custom model integration and streaming responses.",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    updatedAt: "2024-03-01",
    category: "AI / ML",
    status: "published"
  }
];
