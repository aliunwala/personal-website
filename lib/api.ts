import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { REMOTE_POSTS, RemotePostConfig } from "./remote-posts";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// Fetch remote markdown content with caching
async function fetchRemoteMarkdown(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    return await response.text();
  } catch (error) {
    console.error(`Error fetching remote markdown from ${url}:`, error);
    throw error;
  }
}

// Get post by slug from remote sources
async function getRemotePostBySlug(slug: string): Promise<Post | null> {
  const remoteConfig = REMOTE_POSTS.find((config) => config.slug === slug);
  if (!remoteConfig) {
    return null;
  }

  try {
    const markdownContent = await fetchRemoteMarkdown(remoteConfig.url);
    const { data, content } = matter(markdownContent);

    // Create default metadata
    const defaultAuthor = {
      name: "Ali Unwala",
      picture: "/assets/blog/authors/ali.png",
    };

    const defaultMetadata = {
      title:
        remoteConfig.title ||
        data.title ||
        extractTitleFromContent(content) ||
        "Untitled",
      date:
        remoteConfig.date ||
        data.date ||
        new Date().toISOString().split("T")[0],
      excerpt:
        remoteConfig.excerpt ||
        data.excerpt ||
        extractExcerptFromContent(content),
      author: remoteConfig.author || data.author || defaultAuthor,
      coverImage:
        remoteConfig.coverImage ||
        data.coverImage ||
        "/assets/blog/dynamic-routing/cover.jpg",
      ogImage: remoteConfig.ogImage ||
        data.ogImage || { url: "/assets/blog/dynamic-routing/cover.jpg" },
    };

    return {
      ...defaultMetadata,
      slug,
      content,
      source: "remote",
      sourceUrl: remoteConfig.url,
    } as Post;
  } catch (error) {
    console.error(`Error processing remote post ${slug}:`, error);
    return null;
  }
}

// Helper function to extract title from markdown content
function extractTitleFromContent(content: string): string {
  const titleMatch = content.match(/^#\s+(.+)$/m);
  return titleMatch ? titleMatch[1].trim() : "";
}

// Helper function to extract excerpt from markdown content
function extractExcerptFromContent(content: string): string {
  // Remove markdown formatting and get first paragraph
  const cleanContent = content
    .replace(/^#.*$/gm, "") // Remove headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links, keep text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // Remove bold
    .replace(/\*([^*]+)\*/g, "$1") // Remove italic
    .replace(/`([^`]+)`/g, "$1") // Remove inline code
    .trim();

  const firstParagraph = cleanContent.split("\n\n")[0];
  return firstParagraph.length > 200
    ? firstParagraph.substring(0, 197) + "..."
    : firstParagraph;
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");

  // First try to find local post
  try {
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content, source: "local" } as Post;
  } catch (error) {
    // If local post doesn't exist, this will be handled by the async version
    throw error;
  }
}

export async function getPostBySlugAsync(slug: string): Promise<Post | null> {
  const realSlug = slug.replace(/\.md$/, "");

  // First try to find local post
  try {
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content, source: "local" } as Post;
  } catch (error) {
    // If local post doesn't exist, try remote
    return await getRemotePostBySlug(realSlug);
  }
}

export async function getAllPostsAsync(): Promise<Post[]> {
  // Get local posts
  const localSlugs = getPostSlugs();
  const localPostPromises = localSlugs.map((slug) => {
    try {
      return Promise.resolve(getPostBySlug(slug));
    } catch {
      return Promise.resolve(null);
    }
  });

  // Get remote posts
  const remotePostPromises = REMOTE_POSTS.map((config) =>
    getRemotePostBySlug(config.slug)
  );

  // Wait for all posts to resolve
  const [localPosts, remotePosts] = await Promise.all([
    Promise.all(localPostPromises),
    Promise.all(remotePostPromises),
  ]);

  // Filter out null posts and combine
  const allPosts = [
    ...localPosts.filter((post): post is Post => post !== null),
    ...remotePosts.filter((post): post is Post => post !== null),
  ];

  // Sort posts by date in descending order
  return allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
