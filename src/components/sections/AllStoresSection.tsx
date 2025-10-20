// app/components/sections/AllStoresSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stores = [
  {
    name: "Dr Bit",
    products: 0,
    gradient:
      "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 191, 36) 100%)",
    logo: "https://media.3dimli.com/cmg8i9vf40000l404nywvotof/store/store-logo.png",
    slug: "drbit",
  },
  {
    name: "Sound Effect Stacks",
    products: 2,
    gradient:
      "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 191, 36) 100%)",
    logo: "https://media.3dimli.com/cmg7dctvi0000jl04j5tk7y57/store/store-logo.png",
    slug: "sound-effect-stacks",
  },
  {
    name: "axeslab studio",
    products: 1,
    gradient:
      "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 191, 36) 100%)",
    logo: null,
    slug: "axeslab-studio",
  },
  {
    name: "Loretta Nash Fine Art",
    products: 0,
    gradient:
      "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 191, 36) 100%)",
    logo: null,
    slug: "lorettanashfineart",
  },
  {
    name: "Adrin Artwork",
    products: 1,
    gradient:
      "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 191, 36) 100%)",
    logo: "https://media.3dimli.com/cmfxqdt8z0001js0454noeu79/store/store-logo.jpg",
    slug: "adrin-artwork",
  },
  {
    name: "Kent s Post Production Lab",
    products: 0,
    gradient:
      "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 191, 36) 100%)",
    logo: null,
    slug: "kentproduction",
  },
  {
    name: "Karimay89",
    products: 5,
    gradient:
      "linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(236, 72, 153) 100%)",
    logo: "https://media.3dimli.com/cmfrkjxye0001i6048l5n66l4/store/store-logo.jpg",
    slug: "karimay89",
  },
  {
    name: "Astarta 3d",
    products: 2,
    gradient:
      "linear-gradient(135deg, rgb(244, 114, 182) 0%, rgb(251, 191, 36) 100%)",
    logo: null,
    slug: "astarta-3d",
  },
];

export default function AllStoresSection() {
  const storeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.utils.toArray(storeRefs.current).forEach((el) => {
      if (el) {
        gsap.fromTo(
          el as HTMLElement,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: el as HTMLElement,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="container px-5 lg:!px-8 mt-[10%] !mb-[25%] lg:!mb-0 lg:!mt-24 3xl:!mt-44">
      <div className="flex justify-center mb-8 lg:mb-12">
        <div className="inline-flex bg-neutral-100 dark:bg-neutral-800/50 p-1.5 rounded-full backdrop-blur-sm">
          <button className="flex items-center justify-center px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-grid w-2.5 md:w-4 h-2.5 md:h-4 mr-1 md:mr-2"
            >
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
            All
          </button>
        </div>
      </div>

      <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between w-full items-center mb-6 sm:mb-8">
          <div className="text-center sm:text-left w-full">
            <h2 className="text-[22.5px] md:text-4xl font-semibold">
              All Stores
            </h2>
            <span className="mt-2 md:mt-4 font-normal block text-[11.25px] md:text-lg text-neutral-500 dark:text-neutral-400">
              Explore our complete collection of stores and find your favorite
              sellers
            </span>
          </div>
          <Link
            href="/all-stores"
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-[10px] lg:text-base font-medium py-2 px-4 sm:py-3.5 lg:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201, 96.30%, 32.20%)] text-neutral-50 dark:bg-transparent dark:border dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[150px] lg:w-[15rem] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 mt-[12.5px] lg:mt-5 overflow-hidden"
          >
            View All Stores
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right ml-1 sm:ml-2 h-2.5 lg:h-4 w-2.5 lg:w-4 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative flow-root">
        <div className="flow-root overflow-hidden rounded-xl">
          <div className="grid gap-4 md:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stores.map((store, i) => (
              <div
                key={store.slug}
                ref={(el) => {
                  storeRefs.current[i] = el;
                }}
                className="relative flex flex-col overflow-hidden group border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-3xl hover:shadow-xl transition-shadow"
              >
                <div
                  className="relative flex-shrink-0 h-36"
                  style={{ backgroundImage: store.gradient }}
                >
                  <div className="relative w-full h-full"></div>
                </div>
                <div className="pb-5 px-4 pt-1.5">
                  <div className="text-center relative flex items-center justify-center">
                    <svg
                      className="mx-auto h-14 -mt-[38px] text-white dark:text-neutral-800 dark:group-hover:text-neutral-800"
                      width="134"
                      height="54"
                      viewBox="0 0 134 54"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M101.734 19.8581C99.2658 17.4194 96.9737 14.8065 94.5052 12.1935C94.1526 11.671 93.6237 11.3226 93.0947 10.8C92.7421 10.4516 92.5658 10.2774 92.2131 9.92903C85.6895 3.83226 76.6974 0 67 0C57.3026 0 48.3105 3.83226 41.6105 9.92903C41.2579 10.2774 41.0816 10.4516 40.7289 10.8C40.2 11.3226 39.8474 11.671 39.3184 12.1935C36.85 14.8065 34.5579 17.4194 32.0895 19.8581C23.2737 28.7419 11.4605 30.4839 -0.176331 30.8323V54H16.3974H32.0895H101.558H110.197H134V30.6581C122.363 30.3097 110.55 28.7419 101.734 19.8581Z" />
                    </svg>
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                      <div className="relative flex-shrink-0 inline-flex items-center justify-center text-[rgb(243,244,246)] uppercase font-semibold shadow-inner rounded-full w-12 h-12 text-2xl border border-gray-300 dark:border-neutral-700 overflow-hidden">
                        {store.logo ? (
                          <Image
                            src={store.logo}
                            alt={store.name}
                            width={48}
                            height={48}
                            className="object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#F8F8F8]">
                            <svg
                              width="60"
                              height="60"
                              viewBox="0 0 60 60"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15 22.5H45M15 22.5V42.5C15 44.7091 16.7909 46.5 19 46.5H41C43.2091 46.5 45 44.7091 45 42.5V22.5M15 22.5L20 13.5H40L45 22.5"
                                stroke="#E5E5E5"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M25 32.5C25 34.7091 23.2091 36.5 21 36.5C18.7909 36.5 17 34.7091 17 32.5C17 30.2909 18.7909 28.5 21 28.5C23.2091 28.5 25 30.2909 25 32.5Z"
                                stroke="#E5E5E5"
                                strokeWidth="2"
                              />
                              <path
                                d="M43 32.5C43 34.7091 41.2091 36.5 39 36.5C36.7909 36.5 35 34.7091 35 32.5C35 30.2909 36.7909 28.5 39 28.5C41.2091 28.5 43 30.2909 43 32.5Z"
                                stroke="#E5E5E5"
                                strokeWidth="2"
                              />
                              <path
                                d="M25 22.5V17.5"
                                stroke="#E5E5E5"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                              <path
                                d="M35 22.5V17.5"
                                stroke="#E5E5E5"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm md:text-base font-medium flex w-4/5 items-center">
                        <span
                          title={store.name}
                          className="text-[rgb(17,24,39)] dark:text-white truncate"
                        >
                          {store.name}
                        </span>
                      </h2>
                      <span className="block mt-0.5 text-xs md:text-sm">
                        <span className="font-medium text-[rgb(17,24,39)] dark:text-white">
                          {store.products}
                        </span>
                        <span className="ml-1.5 text-[rgb(107,114,128)] dark:text-neutral-400">
                          {store.products === 1 ? "Product" : "Products"}
                        </span>
                      </span>
                    </div>
                    <Link
                      href={`/store/${store.slug}`}
                      className="relative h-auto inline-flex items-center justify-center rounded-md transition-colors text-xs md:text-sm font-medium px-2 md:px-4 py-1 md:py-2 min-w-[84px] z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(2,132,199)] dark:focus:ring-offset-0 disabled:bg-opacity-70 bg-[rgb(2,132,199)] hover:bg-[rgb(3,105,161)] text-[rgb(249,250,251)]"
                    >
                      <span className="text-[11px] md:text-sm font-medium md:font-bold hover:underline flex items-center gap-2">
                        View store
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-external-link w-2.5 md:w-4 h-2.5 md:h-4 ml-0.5"
                        >
                          <path d="M15 3h6v6" />
                          <path d="M10 14 21 3" />
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-12 lg:mt-16 mb-8">
        <button className="nc-Button h-auto inline-flex items-center justify-center rounded-full transition-colors text-[10px] 1.7sm:text-base font-medium py-[0.514rem] px-[0.9375rem] 1.7sm:py-3.5 1.7sm:px-6 bg-transparent hover:bg-gray-300 text-neutral-900 dark:text-neutral-300 dark:bg-transparent border border-gray-300 whitespace-nowrap dark:border-neutral-700 dark:hover:bg-neutral-800 w-[156px] 1.7sm:w-[15rem]">
          Show me more
        </button>
        <button className="nc-Button h-auto absolute inline-flex items-center justify-center rounded-full transition-colors text-[10px] 1.7sm:text-base font-medium py-[0.514rem] px-[0.9375rem] 1.7sm:py-3.5 1.7sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201, 96.30%, 32.20%)] text-neutral-50 dark:bg-transparent dark:border whitespace-nowrap dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[156px] 1.7sm:w-[15rem] overflow-hidden shine-infinite">
          Become a seller
        </button>
      </div>
    </div>
  );
}
