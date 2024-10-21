import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";
import Link from "next/link";

export default function Footer(props) {
  return (
    <Container className=" border-t border-gray-100 dark:border-gray-800">
     
   <div className="flex justify-between text-white font-semibold ">
   {/* <div className="">
        <ul>
          <li>
           <Link  href="/blogs">
           Blogs
           </Link>
          
          
             
             
          </li>
          <li>
          <Link  href="/contact">
           Contact
           </Link>
          </li>
          <li>
          <Link   href= "https://github.com/Rahul-9211">
           Download
           </Link>
          </li>
        </ul>
      </div> */}
        <ul className="flex justify-center items-center w-full">
        <li className="px-4">
          <Link  href="/contact">
          Contact
           </Link>
          </li>
          <li className="px-4">
          <Link  href="/privacy-policy">
           Privacy-policy
           </Link>
          </li>
          <li className="px-4">
          <Link  href="/terms-and-condition">
           Terms & Conditions
           </Link>
          </li>
        </ul>

   </div>
      {/* <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>
          {" "}
          Made by{" "}
         
          <a
            href="https://github.com/Rahul-9211"
            rel="noopener"
            target="_blank">
            FastVideoSave
          </a>
        </span>
        <span>&middot;</span>
        <span>
          {" "}
          <a
            href="https://github.com/Rahul-9211"
            rel="noopener"
            target="_blank">
            Github
          </a>
        </span>
      </div> */}
      {/* <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a
            href="https://fastVideoSave.com"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <Image
              src={VercelLogo}
              alt="Powered by Vercel"
              unoptimized={true}
              width="150"
              height="25"
            />
            FastVideoSave
          </a>
        </div>
        <ThemeSwitch />
      </div> */}
      {/* <Backlink /> */}
    </Container>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://fastVideoSave.com/blog/ultimate-guide-how-to-sell-on-instagram-without-a-website"
      target="_blank"
      rel="noopener"
      className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="30"
          height="29.5385"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      {/* <span> Purchase Pro ↗</span> */}
    </a>
  );
};
