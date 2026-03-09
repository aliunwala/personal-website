---
title: "Advanced React Query: Pagination, Infinite Scroll & Prefetching"
excerpt: "Master cursor vs offset pagination, optimistic updates, and intelligent prefetching strategies to build performant, user-friendly data-heavy applications with React Query."
coverImage: "/assets/blog/advanced-react-query/cover.jpg"
date: "2025-10-05"
author:
  name: Ali Unwala
  picture: "/assets/blog/authors/ali.png"
ogImage:
  url: "/assets/blog/advanced-react-query/cover.jpg"
---

React Query is a powerful data-fetching library, but its true potential shines when you master advanced patterns for pagination, infinite scrolling, and prefetching. These techniques can transform a sluggish data-heavy app into a snappy, responsive experience.

## Understanding Pagination: Offset vs Cursor

Before diving into implementation, let's understand the two main pagination strategies.

### Offset Pagination

Offset pagination works like pages in a book - skip X items and take Y items.

```typescript
// API: /api/posts?offset=0&limit=10
{
  data: [/* 10 posts */],
  total: 150,
  offset: 0,
  limit: 10
}
```

**Pros:**
- Simple to implement
- Easy to jump to specific pages
- Users can bookmark page URLs

**Cons:**
- Performance degrades with large offsets (database must scan all skipped rows)
- Can show duplicates or skip items if data changes between requests
- Not ideal for real-time data

**When to use:** Admin dashboards, search results, archives where data is relatively static.

### Cursor Pagination

Cursor pagination uses a pointer to the last seen item, like a bookmark.

```typescript
// API: /api/posts?cursor=eyJpZCI6MTIzfQ&limit=10
{
  data: [/* 10 posts */],
  nextCursor: "eyJpZCI6MTMzfQ",
  hasMore: true
}
```

**Pros:**
- Consistent performance regardless of position in dataset
- No duplicates or skipped items when data changes
- Perfect for real-time feeds
- More efficient database queries (WHERE id > cursor)

**Cons:**
- Can't jump to arbitrary pages
- Harder to implement page numbers
- Can't easily share deep links to pages

**When to use:** Social feeds, infinite scroll, real-time data, large datasets.

## Implementing Offset Pagination

Let's build a paginated table with React Query:

```typescript
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface Post {
  id: number;
  title: string;
  author: string;
}

interface PaginatedResponse {
  data: Post[];
  total: number;
  offset: number;
  limit: number;
}

async function fetchPosts(offset: number, limit: number): Promise<PaginatedResponse> {
  const response = await fetch(`/api/posts?offset=${offset}&limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

function PostsTable() {
  const [page, setPage] = useState(0);
  const limit = 10;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts', { page, limit }],
    queryFn: () => fetchPosts(page * limit, limit),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  const totalPages = Math.ceil(data.total / limit);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>Page {page + 1} of {totalPages}</span>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page >= totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

### Adding Prefetching for Instant Navigation

The key to making pagination feel instant is prefetching the next page before the user clicks:

```typescript
function PostsTable() {
  const [page, setPage] = useState(0);
  const limit = 10;
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts', { page, limit }],
    queryFn: () => fetchPosts(page * limit, limit),
  });

  // Prefetch next page
  const prefetchNextPage = () => {
    const nextPage = page + 1;
    queryClient.prefetchQuery({
      queryKey: ['posts', { page: nextPage, limit }],
      queryFn: () => fetchPosts(nextPage * limit, limit),
    });
  };

  // Prefetch on mount and when page changes
  React.useEffect(() => {
    if (data && page < Math.ceil(data.total / limit) - 1) {
      prefetchNextPage();
    }
  }, [page, data]);

  // ... rest of component
}
```

**Advanced prefetching strategy** - prefetch on hover:

```typescript
function PostsTable() {
  // ... previous code

  const handleNextHover = () => {
    const nextPage = page + 1;
    const totalPages = Math.ceil(data.total / limit);

    if (nextPage < totalPages) {
      queryClient.prefetchQuery({
        queryKey: ['posts', { page: nextPage, limit }],
        queryFn: () => fetchPosts(nextPage * limit, limit),
      });
    }
  };

  return (
    <div>
      {/* ... table */}
      <button
        onMouseEnter={handleNextHover}
        onClick={() => setPage(p => p + 1)}
      >
        Next
      </button>
    </div>
  );
}
```

This prefetches when the user hovers over the "Next" button, making the transition feel instantaneous while avoiding unnecessary network requests.

## Implementing Cursor-Based Infinite Scroll

For infinite scrolling feeds, React Query provides `useInfiniteQuery`:

```typescript
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

interface CursorResponse {
  data: Post[];
  nextCursor: string | null;
  hasMore: boolean;
}

async function fetchPostsCursor(cursor: string | null, limit: number): Promise<CursorResponse> {
  const url = cursor
    ? `/api/posts?cursor=${cursor}&limit=${limit}`
    : `/api/posts?limit=${limit}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

function InfinitePostsFeed() {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: ({ pageParam }) => fetchPostsCursor(pageParam, 10),
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextCursor : undefined;
    },
  });

  // Auto-fetch when scrolling near bottom
  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  return (
    <div>
      {data.pages.map((page, i) => (
        <div key={i}>
          {page.data.map((post) => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>by {post.author}</p>
            </article>
          ))}
        </div>
      ))}

      {/* Sentinel element to trigger loading */}
      <div ref={ref}>
        {isFetchingNextPage && <div>Loading more...</div>}
      </div>

      {!hasNextPage && <div>No more posts</div>}
    </div>
  );
}
```

### Understanding useInfiniteQuery

The key differences from `useQuery`:

1. **pageParam**: Tracks the cursor for the next page
2. **getNextPageParam**: Determines what cursor to use for the next fetch
3. **data.pages**: Array of all fetched pages
4. **fetchNextPage()**: Function to load the next page

### Intelligent Prefetching for Infinite Scroll

Prefetch the next page before the user reaches the bottom:

```typescript
function InfinitePostsFeed() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '400px', // Trigger 400px before reaching the element
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: ({ pageParam }) => fetchPostsCursor(pageParam, 10),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  // ... rest of component
}
```

By setting `rootMargin: '400px'`, the next page loads when the user is 400px away from the sentinel, creating seamless scrolling.

## Optimistic Updates

Optimistic updates make your app feel instant by updating the UI before the server responds.

### Optimistic Update for New Post

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CreatePostInput {
  title: string;
  content: string;
}

function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPost: CreatePostInput) => {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) throw new Error('Failed to create post');
      return response.json();
    },

    // Optimistically update the cache before mutation runs
    onMutate: async (newPost) => {
      // Cancel outgoing refetches to avoid overwriting optimistic update
      await queryClient.cancelQueries({ queryKey: ['posts-infinite'] });

      // Snapshot previous value for rollback
      const previousPosts = queryClient.getQueryData(['posts-infinite']);

      // Optimistically update cache
      queryClient.setQueryData(['posts-infinite'], (old: any) => {
        if (!old) return old;

        const optimisticPost = {
          id: Date.now(), // Temporary ID
          ...newPost,
          author: 'You',
        };

        return {
          ...old,
          pages: [
            {
              data: [optimisticPost, ...old.pages[0].data],
              nextCursor: old.pages[0].nextCursor,
              hasMore: old.pages[0].hasMore,
            },
            ...old.pages.slice(1),
          ],
        };
      });

      return { previousPosts };
    },

    // Rollback on error
    onError: (err, newPost, context) => {
      queryClient.setQueryData(['posts-infinite'], context?.previousPosts);
    },

    // Refetch after success
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts-infinite'] });
    },
  });
}

function CreatePostForm() {
  const createPost = useCreatePost();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    createPost.mutate({
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" required />
      <textarea name="content" placeholder="Content" required />
      <button type="submit" disabled={createPost.isPending}>
        {createPost.isPending ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
}
```

### Optimistic Delete

```typescript
function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postId: number) => {
      const response = await fetch(`/api/posts/${postId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete post');
    },

    onMutate: async (postId) => {
      await queryClient.cancelQueries({ queryKey: ['posts-infinite'] });
      const previousPosts = queryClient.getQueryData(['posts-infinite']);

      // Remove post from cache
      queryClient.setQueryData(['posts-infinite'], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            data: page.data.filter((post: Post) => post.id !== postId),
          })),
        };
      });

      return { previousPosts };
    },

    onError: (err, postId, context) => {
      queryClient.setQueryData(['posts-infinite'], context?.previousPosts);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts-infinite'] });
    },
  });
}
```

## Advanced Prefetching Strategies

### 1. Prefetch on Route Change

Prefetch data before navigating to a new page:

```typescript
import { useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

function PostLink({ postId }: { postId: number }) {
  const queryClient = useQueryClient();

  const prefetchPost = () => {
    queryClient.prefetchQuery({
      queryKey: ['post', postId],
      queryFn: () => fetchPostById(postId),
      staleTime: 60000, // Consider fresh for 1 minute
    });
  };

  return (
    <Link
      to={`/posts/${postId}`}
      onMouseEnter={prefetchPost}
      onFocus={prefetchPost}
    >
      View Post
    </Link>
  );
}
```

### 2. Prefetch Related Data

When fetching a post, prefetch the author's profile:

```typescript
function usePost(postId: number) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['post', postId],
    queryFn: async () => {
      const post = await fetchPostById(postId);

      // Prefetch author profile
      queryClient.prefetchQuery({
        queryKey: ['author', post.authorId],
        queryFn: () => fetchAuthor(post.authorId),
      });

      return post;
    },
  });
}
```

### 3. Background Refetching

Keep data fresh in the background:

```typescript
function usePostsWithBackgroundRefetch() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 30000, // Consider fresh for 30 seconds
    refetchInterval: 60000, // Refetch every minute
    refetchIntervalInBackground: true, // Continue when tab is inactive
  });
}
```

### 4. Optimistic Rendering with Placeholder Data

Show stale data immediately while refetching:

```typescript
function PostDetail({ postId }: { postId: number }) {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPostById(postId),
    placeholderData: () => {
      // Try to find post in the infinite scroll cache
      const cachedPages = queryClient.getQueryData(['posts-infinite']) as any;

      if (cachedPages) {
        for (const page of cachedPages.pages) {
          const post = page.data.find((p: Post) => p.id === postId);
          if (post) return post;
        }
      }
    },
  });

  // Renders immediately with cached data (if available) while refetching
  return <div>{data?.title}</div>;
}
```

## Performance Best Practices

### 1. Use Structural Sharing

React Query automatically uses structural sharing to prevent unnecessary re-renders:

```typescript
// React Query only updates changed parts of the data
const { data } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  // structuralSharing: true is the default
});
```

### 2. Select Specific Data

Only subscribe to the data you need:

```typescript
function PostTitles() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    select: (data) => data.map(post => ({ id: post.id, title: post.title })),
  });

  // Component only re-renders when titles change, not other post properties
}
```

### 3. Disable Queries Conditionally

Don't fetch when data isn't needed:

```typescript
function PostDetail({ postId }: { postId: number | null }) {
  const { data } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPostById(postId!),
    enabled: !!postId, // Only fetch when postId exists
  });
}
```

### 4. Stale While Revalidate

Show cached data immediately while refetching:

```typescript
const { data } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  staleTime: 60000, // Don't refetch for 1 minute
  gcTime: 300000, // Keep unused data in cache for 5 minutes (formerly cacheTime)
});
```

## Putting It All Together: Real-World Example

Here's a complete infinite scroll feed with all the optimizations:

```typescript
function OptimizedPostsFeed() {
  const { ref, inView } = useInView({ rootMargin: '400px' });
  const queryClient = useQueryClient();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['posts-infinite'],
    queryFn: ({ pageParam }) => fetchPostsCursor(pageParam, 20),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 60000,
  });

  const createPost = useCreatePost();
  const deletePost = useDeletePost();

  // Auto-fetch next page
  React.useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  // Prefetch author profiles for visible posts
  const prefetchAuthors = (posts: Post[]) => {
    posts.forEach((post) => {
      queryClient.prefetchQuery({
        queryKey: ['author', post.authorId],
        queryFn: () => fetchAuthor(post.authorId),
      });
    });
  };

  React.useEffect(() => {
    if (data?.pages[0]?.data) {
      prefetchAuthors(data.pages[0].data.slice(0, 5));
    }
  }, [data?.pages]);

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div>
      {data.pages.map((page, i) => (
        <div key={i}>
          {page.data.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={() => deletePost.mutate(post.id)}
            />
          ))}
        </div>
      ))}

      <div ref={ref}>
        {isFetchingNextPage && <LoadingSpinner />}
      </div>
    </div>
  );
}
```

## Conclusion

Mastering React Query's pagination, infinite scroll, and prefetching capabilities transforms user experience:

- **Offset pagination** for traditional page-based interfaces with smart prefetching
- **Cursor pagination** for infinite scroll with consistent performance
- **Optimistic updates** for instant feedback on mutations
- **Intelligent prefetching** on hover, route changes, and related data
- **Performance optimizations** with structural sharing, selective subscriptions, and stale-while-revalidate

These patterns create apps that feel instant and responsive, even with large datasets. The key is understanding when to use each technique and combining them thoughtfully for your specific use case.

## Resources

- [React Query Documentation](https://tanstack.com/query/latest)
- [TanStack Query DevTools](https://tanstack.com/query/latest/docs/react/devtools) - Essential for debugging
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - Elegant scroll detection
