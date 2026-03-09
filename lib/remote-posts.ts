export interface RemotePostConfig {
  url: string;
  slug: string;
  // Optional metadata - if not provided, will be extracted from the markdown frontmatter
  title?: string;
  date?: string;
  excerpt?: string;
  author?: {
    name: string;
    picture: string;
  };
  coverImage?: string;
  ogImage?: {
    url: string;
  };
}

// Configuration for remote posts
export const REMOTE_POSTS: RemotePostConfig[] = [
  {
    url: "https://raw.githubusercontent.com/aliunwala/personal-cheat-sheets/refs/heads/main/javascript/Quick%20Reference%20-%20Javascript%2C%20React.md",
    slug: "quick-reference",
    coverImage: "/assets/blog/quick-reference/cover.avif",

    // If metadata is not provided here, it will be extracted from the markdown frontmatter
    // If frontmatter doesn't exist, we'll use sensible defaults
  },
];
