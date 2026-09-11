export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

export async function fetchLiveGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(https://api.github.com/users//repos?sort=updated&per_page=12, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'AGY-Portfolio-AutoSync'
      },
      next: { revalidate: 3600 } // revalidate hourly
    });
    
    if (!res.ok) return [];
    const repos = await res.json();
    return repos.filter((r: any) => !r.fork);
  } catch (error) {
    console.error('Error fetching live GitHub repositories:', error);
    return [];
  }
}
