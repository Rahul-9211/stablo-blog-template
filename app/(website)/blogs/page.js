import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./archive";
import Loading from "@/components/loading";
import Category from "@/components/ui/category";
import { getAllCategories } from "@/lib/sanity/client";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {

  const categories = await getAllCategories();
  return (
    <>
      <Container className="relative">
        <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          Blogs
        </h1>
        <div className="text-center mb-8">
          <p className="mt-2 text-lg">
            See all posts we have ever written.
          </p>
        </div>
        {/* category list  */}
        <Category  categories={categories}/>
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
