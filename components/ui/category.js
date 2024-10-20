import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const getCategoryIcon = (category) => {
  switch (category.toLowerCase()) {
    case "growth":
      return (
        <Link href="growth">
        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-4 rounded-full">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  width="32"
  height="32"
  className="text-blue-500"
  fill="currentColor"
>
  <path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2zm12.9 23.9c.1.3.1.6.1.9 0 9.2-7 19.8-19.8 19.8-3.9 0-7.5-1.1-10.5-3 3.2.4 6.3-.5 8.7-2.3-2.9-.1-5.4-2-6.2-4.6.9.2 1.8.2 2.7-.1-3-.6-5.2-3.2-5.2-6.4v-.1c.9.5 2 .8 3.1.8-2.8-1.9-3.6-5.6-1.8-8.4 3.3 4.1 8.2 6.8 13.7 7-1.1-4.5 2.4-8.7 7-8.7 2 0 3.8.8 5.1 2.1 1.6-.3 3-.9 4.3-1.6-.5 1.6-1.6 3-3.1 3.8 1.4-.2 2.7-.5 3.9-1-1 1.5-2.3 2.8-3.8 3.8z" />
</svg>

          </div>
          <p className="text-blue-500 mt-2 text-sm font-semibold">{category}</p>
        </div> </Link>
      );
    case "legal":
      return (
        <Link href="legal">
        <div className="flex flex-col items-center">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="32"
              height="32"
              className="text-red-500"
              fill="currentColor"
            >
              <path d="M32 2l12 12h-8v20h8L32 62 20 34h8V14h-8z" />
            </svg>
          </div>
          <p className="text-red-500 mt-2 text-sm font-semibold">{category}</p>
        </div> </Link>
      );
    case "marketing":
      return (
        <Link href="marketing">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="32"
              height="32"
              className="text-green-500"
              fill="currentColor"
            >
              <rect x="16" y="8" width="32" height="48" rx="6" ry="6" fill="none" stroke="currentColor" />
              <line x1="16" y1="24" x2="48" y2="24" stroke="currentColor" />
              <line x1="16" y1="40" x2="48" y2="40" stroke="currentColor" />
            </svg>
          </div>
          <p className="text-green-500 mt-2 text-sm font-semibold">{category}</p>
        </div> </Link>
      );
    case "how-to":
      return (
        <Link href="how-to">
        <div className="flex flex-col items-center">
        
          <div className="bg-purple-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="32"
              height="32"
              className="text-purple-500"
              fill="currentColor"
            >
              <path d="M44 4H20C15.6 4 12 7.6 12 12v40c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8V12c0-4.4-3.6-8-8-8zM32 56c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10-8H22V12h20v36z" />
            </svg>
          </div>
          <p className="text-purple-500 mt-2 text-sm font-semibold">{category}</p>
        </div>
        </Link>
      );
    default:
      return (
        <></>
        // <div className="flex flex-col items-center">
        //   <div className="bg-gray-100 p-4 rounded-full">
        //     <MagnifyingGlassIcon className="h-8 w-8 text-gray-500" />
        //   </div>
        //   <p className="text-gray-500 mt-2 text-sm font-semibold">{category}</p>
        // </div>
      );
  }
};
function matchCatgory(category){
  if(category === "growth"|| category === "how-to" || category === "marketing" || category === "legal")  return true;
  else false
}

export default function Category({ categories }) {
  return (
    <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4">
      {categories &&
        categories.map((ele, key) => {
          if(matchCatgory(ele.category)){
            return <div className="flex justify-center cursor-pointer" key={key}>
            {getCategoryIcon(ele.category)}
          </div>
          }
})}
    </div>
  );
}
