export class RepoItem {
  name!: string;
  updated_at?: string;
  language?: string;
  description!: string;
  homepage!: string;
  open_issues?: number;
  stargazers_count?: number;
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  private?: boolean;
}

export interface User {
  login: string;
  avatar_url: string;
  company: string | null;
  email: string | null;
  pat: string;
}
