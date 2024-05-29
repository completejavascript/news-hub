export type Theme = 'light' | 'dark';

export interface Route {
  href: string;
  label: string;
}

export type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export type News = {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  source?: {
    id: string;
    name: string;
  };
  title?: string;
  url?: string;
};
