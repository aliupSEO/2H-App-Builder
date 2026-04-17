export interface Template {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  price: 'Free' | 'Premium';
  tags: string[];
}
