import { getAllCategories, getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    // title: {
    //   default:
    //     settings?.title ||
    //     "FastVideoSave - Blog Template for Instagram Information",
    //   template: "%s | FastVideoSave"
    // },
    // description:
    //   settings?.description ||
    //   "FastVideoSave - popular open-source next.js and sanity blog template",
    // keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    // authors: [{ name: "Surjith" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "FastVideoSave Template",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}



export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
     <div className="shadow-sm">
     <Navbar {...settings} />
     </div>

      <div className="bg-red-50 py-10">{children}</div>

      <div className="bg-[#ffc7e9]">
      <Footer {...settings} />
      </div>
      <div className="text-center text-sm py-4">
        Copyright © {new Date().getFullYear()} . All
        rights reserved.
      </div>
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
