import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Category from "@/components/ui/category";
import { getAllCategories } from "@/lib/sanity/client";

// async function getCategory(){
//   return await getAllCategories();
// }

export default function Post({ posts }) {
  // const categories =  getCategory();
  return (
    <>
    {/* <Category  categories={categories}/> */}
      {posts && (
        <Container>
          {/* <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div> */}
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(1, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" category="blog"/>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/blogs"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
