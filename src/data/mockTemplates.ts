import type { Template } from "@/types/template";

export const mockTemplates: Template[] = [
  {
    id: "t1",
    name: "Modern E-commerce",
    description: "A feature-rich store template with optimized product grids and shopping cart features.",
    thumbnailUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    category: "Store",
    price: "Free",
    tags: ["E-commerce", "Sales", "Inventory"]
  },
  {
    id: "t2",
    name: "Corporate Dashboard",
    description: "Clean and professional administrative layout for complex data management and reporting.",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bbbda536ad00?auto=format&fit=crop&q=80&w=800",
    category: "Admin",
    price: "Premium",
    tags: ["SaaS", "Analytics", "CRM"]
  },
  {
    id: "t3",
    name: "Creative Portfolio",
    description: "Visually striking layout for artists and designers to showcase their high-resolution work.",
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    category: "Portfolio",
    price: "Free",
    tags: ["Design", "Personal", "Showcase"]
  },
  {
    id: "t4",
    name: "SaaS Landing Page",
    description: "Conversion-optimized landing page with pricing tables, FAQs, and testimonial sections.",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Marketing",
    price: "Free",
    tags: ["Landing Page", "Startup", "Conversion"]
  },
  {
    id: "t5",
    name: "Social Networking App",
    description: "Modular template for building community-driven platforms with profile and feed layouts.",
    thumbnailUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800",
    category: "Social",
    price: "Premium",
    tags: ["Community", "Social", "Profiles"]
  },
  {
    id: "t6",
    name: "AI Tool Interface",
    description: "Modern interface specifically designed for AI agents and chat-based interactions.",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    category: "AI",
    price: "Premium",
    tags: ["Artificial Intelligence", "Chat", "Tools"]
  }
];
