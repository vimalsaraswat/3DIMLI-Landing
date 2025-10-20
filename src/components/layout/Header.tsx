// app/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { Suspense } from "react";
import SearchBar from "../ui/SearchBar";
import { Button } from "../ui/Button";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 w-full font-popins transition-transform duration-300 ease-in-out hidden lg:block">
      <div className="relative z-10 border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 transition-colors duration-300 ease-in-out">
        <div className="px-2 lg:px-14 w-full">
          <div className="flex h-16 justify-between items-center sm:h-20">
            <div className="flex items-center gap-x-3 sm:gap-x-8 flex-shrink-0">
              <Link
                href="/"
                className="ttnc-logo inline-block flex-shrink-0 text-primary-600 cursor-pointer mt-[5px]"
              >
                <div className="flex items-center">
                  <img
                    src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
                    alt="3DIMLI Logo"
                    className="h-9 w-auto"
                  />
                  <div className="ml-2 flex flex-col justify-center text-[10px] leading-none text-muted-foreground border-l dark:border-l-neutral-700 pl-2 h-full">
                    <span>BETA</span>
                    <span>1.0.1</span>
                  </div>
                </div>
              </Link>
              <div className="hidden h-8 border-s border-neutral-200 md:block dark:border-neutral-700"></div>
              <nav className="hidden sm:block">
                <ul className="nc-Navigation items-center hidden lg:flex">
                  <li>
                    <Link
                      href="/"
                      className="text-opacity-80 nc-menu-lv1 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="text-opacity-80 nc-menu-lv1 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300 cursor-pointer">
                      Discover
                    </span>
                  </li>
                  <li>
                    <Link
                      href="/features"
                      className="text-opacity-80 nc-menu-lv1 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-opacity-80 nc-menu-lv1 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300 whitespace-nowrap"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="inline-flex items-center justify-end w-full gap-1 lg:gap-2">
              <Suspense fallback={<div className="w-full h-10 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>}>
                <SearchBar />
              </Suspense>
              <a target="_blank" href="https://discord.gg/d48csuWe46">
                <button className=" bg-[#5865F2] dark:bg-gradient-to-bl dark:from-gray-900 dark:to-primary text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center gap-3 hover:bg-[#4752c4] dark:hover:bg-primary transition-all duration-300 ease-in-out text-base relative overflow-hidden group ">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
                  <svg
                    width="28"
                    height="22"
                    viewBox="0 0 24 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                  >
                    <path d="M19.27 1.33C17.94 0.71 16.5 0.26 15 0a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 10.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"></path>
                  </svg>
                  <span className="font-medium tracking-wide relative z-10 cursor-pointer">
                    Discord
                  </span>
                </button>
              </a>
              <Button variant="upload">Upload</Button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 focus:outline-none sm:h-12 sm:w-12 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-gray-300 dark:border-neutral-700 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
