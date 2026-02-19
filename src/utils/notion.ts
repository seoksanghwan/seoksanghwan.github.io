export interface ProjectPost {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
  url: string;
  tags: string[];
  startDate: string;
  endDate: string;
  notionUrl: string;
  youtube?: string;
}
