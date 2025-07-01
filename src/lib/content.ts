import publicationsData from '../../content/publications.json';
import projectsData from '../../content/projects.json';

export interface Publication {
  title: string;
  context: string;
  year: number;
  views: number;
}

export interface Repository {
  name: string;
  description: string;
  stars: number;
  updated: string;
}

export async function getPublications(): Promise<Publication[]> {
  // In the future, this could be replaced with an API call
  return publicationsData as Publication[];
}

export async function getProjects(): Promise<Repository[]> {
  // In the future, this could be replaced with a GitHub API call
  return projectsData as Repository[];
}

// For now, return static data
export function getPublicationsSync(): Publication[] {
  return publicationsData as Publication[];
}

export function getProjectsSync(): Repository[] {
  return projectsData as Repository[];
}
