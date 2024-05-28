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
