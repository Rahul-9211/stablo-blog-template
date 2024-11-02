
import InstagramForm from "@/components/instagram/InstagramForm";

import { cn } from "@/utils";
// import BlogClientComponent from "@/components/blog/BlogClientComponent";
import { sampleModifiedBlogDataArray } from "@/utils/constant";
export default function HomePage() {

  const posts = sampleModifiedBlogDataArray;
  // const [videoBlob , setVideoBlob] = useState<Blob | null>(null);
  // const getBlobUrl =(blob : Blob)=>{
  //   console.log(blob);
  //   setVideoBlob(blob);
  // }
  return (
    <main id="main" className="flex w-full flex-1 flex-col">
     
     <section
        id="#download"
        className={cn(
          "flex w-full flex-col items-center px-4 py-28 shadow-sm ",
          "bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500"
        )}
      >
        <h1
          className={cn(
            "py-2 text-center text-2xl font-extrabold text-white sm:text-4xl"
          )}
        >
          Instagram Video Downloader
        </h1>
        <InstagramForm  />
        <p className="my-4 text-center text-xs text-white md:text-sm">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </section> 
    </main>
  );
}
