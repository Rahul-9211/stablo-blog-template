"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";
import logoWeb from "../public/img/fastVideoSave.png"
export default function Navbar(props) {



  const leftmenu = [
    {
      label: "Marketing",
      href: "#",
      children: [
        {
          label: "How to Sell Products Without a Website",
          href: "/blog/how-to-sell-on-instagram-without-a-website"
        },
        {
          label: "Is Investing in Online Ads Profitable?",
          href: "/blog/is-investing-in-instagram-ads-worth-it"
        },
        {
          label: "Getting More Views on Short Videos",
          href: "/blog/how-to-get-more-views-on-your-instagram-reels"
        },
        {
          label: "Unlocking Features for Longer Video Clips",
          href: "/blog/how-to-enable-60-second-reels-on-instagram"
        },
        {
          label: "2024 Trends for Short Video Content",
          href: "/blog/instagram-trending-reels-2024-top-trends-and-tips"
        }
      ]
    },
    {
      label: "Growth",
      href: "#",
      children: [
        {
          label: "Updates on Short-Form Video Platforms",
          href: "/blog/youtube-shorts-new-update-180-seconds"
        },
        {
          label: "Discovering and Searching Trending Videos in 2024",
          href: "/blog/instagram-reel-finder-search-discover-reels-2024"
        },
        {
          label: "Earning Money with Digital Marketing Techniques",
          href: "/blog/how-to-make-money-through-digital-marketing"
        },
        {
          label: "Finding Niche Influencers for Your Brand",
          href: "/blog/how-to-find-micro-influencers-on-instagram"
        },
        {
          label: "Advanced Online Protections for Young Users",
          href: "/blog/instagram-implements-advanced-protections-for-teen-users"
        }
      ]
    },
    {
      label: "Legal",
      href: "#",
      children: [
        {
          label: "Brain Injury Legal Assistance in Dallas",
          href: "/blog/dallas-brain-injury-lawyer"
        },
        {
          label: "Attorneys for Oilfield Accidents in Houston",
          href: "/blog/houston-oilfield-accident-attorney"
        },
        {
          label: "Legal Experts for 18-Wheeler Accidents in Midland",
          href: "/blog/18-wheeler-accident-lawyer-midland"
        },
        {
          label: "Best Legal Advisors for Contractors",
          href: "/blog/best-contractor-lawyer",
        }
      ]
    }
    , {
      label: "How to",
      href: "#",
      children: [
        {
          label: "How to Use a Mastercard Gift Card for Online Shopping",
          href: "/blog/how-to-use-a-mastercard-gift-card"
        },
        {
          label: "How to Find Insurance Policy Limits: A Comprehensive Guide",
          href: "/blog/how-to-find-insurance-policy-limits"
        },
        {
          label: "How to Become a Librarian: Requirements, Steps, and Career Path ",
          href: "/blog/how-to-become-a-librarian"
        },
        {
          label: "Can You Have Insurance on an Unregistered Car: What You Need to Know",
          href: "/blog/can-you-have-insurance-on-an-unregistered-car"
        }
      ]
    }
  ];
  
  // const leftmenu = [
  //   {
  //     label: "Marketing",
  //     href: "/",
  //     children : [
  //       {
  //         label: "How to Sell Products Without a Website",
  //         href: "/services/web-development"
  //       },
  //     ]
  //   },
  //   {
  //     label: "Services",
  //     href: "#",
  //     children: [
  //       {
  //         label: "Web Development",
  //         href: "/services/web-development"
  //       },
  //       {
  //         label: "Mobile Development",
  //         href: "/services/mobile-development"
  //       },
  //       {
  //         label: "SEO",
  //         href: "/services/seo"
  //       },
  //       {
  //         label: "UI/UX Design",
  //         href: "/services/ui-ux-design" // New link added here
  //       },
  //       {
  //         label: "Web Development",
  //         href: "/services/web-development"
  //       },
  //       {
  //         label: "Mobile Development",
  //         href: "/services/mobile-development"
  //       },
  //       {
  //         label: "SEO",
  //         href: "/services/seo"
  //       },
  //       {
  //         label: "UI/UX Design",
  //         href: "/services/ui-ux-design" // New link added here
  //       },
  //       {
  //         label: "Web Development",
  //         href: "/services/web-development"
  //       },
  //       {
  //         label: "Mobile Development",
  //         href: "/services/mobile-development"
  //       },
  //       {
  //         label: "SEO",
  //         href: "/services/seo"
  //       },
  //       {
  //         label: "UI/UX Design",
  //         href: "/services/ui-ux-design" // New link added here
  //       }

  //     ]
  //   },
  //   {
  //     label: "Contact",
  //     href: "/contact"
  //   }
  // ];
  
  

  const rightmenu = [
    {
      label: "Blogs",
      href: "/blogs"
    },
    {
      label: "Pro Version",
      href: "https://stablo-pro.web3templates.com/",
      external: true,
      badge: "new"
    },
    {
      label: "Download",
      href: "https://github.com/Rahul-9211",
      external: true
    }
  ];

  const mobilemenu = [...leftmenu];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10">

              <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/" className="w-48 dark:hidden">
                    {props.logo ? (
                      <Image
                        {...urlForImage(props.logo)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      // <span className="block text-center font-extrabold">
                      //   FastVideoSave
                      // </span>
                      <Image
                      src={logoWeb}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                        width={800}
                        height={200}
                      />
                    )}
                  </Link>
                  <Link href="/" className="hidden w-28 dark:block">
                    {props.logoalt ? (
                      <Image
                        {...urlForImage(props.logoalt)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center font-bold">
                        FastVideoSave
                      </span>
                    )}
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                  {leftmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
               
                {/* <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {rightmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          <span> {item.label}</span>
                          {item.badge && (
                            <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div> */}
              </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}



const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {menu.children.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.href ? item.href : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.label}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};


// const DropdownMenu = ({ menu, items, mobile }) => {
//   return (
//     <div className={cx("relative group text-left", mobile && "w-full")}>
//       {/* Menu Label with Hover */}
//       <div
//         className={cx(
//           "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  transition-all dark:hover:bg-gray-800",
//           "text-gray-600 dark:text-gray-400 hover:text-blue-500",
//           mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
//         )}
//       >
//         <span>{menu.label}</span>
//         <ChevronDownIcon className="mt-0.5 h-4 w-4" />
//       </div>

//       {/* Dropdown Menu */}
//       <div
//         className={cx(
//           "absolute left-0 z-20 mt-2 hidden w-48 rounded-md bg-white shadow-lg group-hover:block",
//           "dark:bg-gray-800"
//         )}
//       >
//         <div className="py-1">
//           {items.map((subItem, index) => (
//             <Link
//               key={index}
//               href={subItem.href}
//               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
//             >
//               {subItem.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
