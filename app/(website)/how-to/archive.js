import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";

import { getAllCategories, getAllPosts, getPaginatedPosts, getPostsByCategory } from "@/lib/sanity/client";

export default async function Post({ searchParams, posts }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;
  const POSTS_PER_PAGE = 12;
  console.log("🚀 ~ Post ~ posts:", posts.length)
  const isFirstPage = pageIndex < 2;
  const isLastPage = true;

  return (
    <>
      {posts && posts?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            End of the result!
          </span>
        </div>
      )}
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {posts.map(post => (
          <PostList key={post._id} post={post} aspect="square" category="how-to" />
        ))}
      </div>

      <Pagination
      category={"how-to"}
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </>
  );
}
