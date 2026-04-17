export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  updatedAt: string;
  category: string;
  status: 'published' | 'draft' | 'archived';
}
