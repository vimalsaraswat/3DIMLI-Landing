// app/components/sections/NewArrivalsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "7cf8602d-c0cf-4da9-99f6-bc468eb4f104",
    title: "FREE Treasure Chests",
    type: "ThreeDModel",
    price: null,
    image:
      "https://media.3dimli.com/cmckpu7f60000jr04kfzrgoly/products/7cf8602d-c0cf-4da9-99f6-bc468eb4f104/4.png",
    seller: { name: "OVK Studios", logo: null },
    free: true,
  },
  {
    id: "a8c0d73a-d827-40d4-9805-f327b7725e5c",
    title: "FREE Target Dummy",
    type: "ThreeDModel",
    price: null,
    image:
      "https://media.3dimli.com/cmckpu7f60000jr04kfzrgoly/products/a8c0d73a-d827-40d4-9805-f327b7725e5c/Dummy.001.jpg",
    seller: { name: "OVK Studios", logo: null },
    free: true,
  },
  {
    id: "427b3d3c-4c03-418a-b1bd-e14836e5f42c",
    title: "Buildings Game Asset Pack",
    type: "ThreeDModel",
    price: 39.99,
    image:
      "https://media.3dimli.com/cmckpu7f60000jr04kfzrgoly/products/427b3d3c-4c03-418a-b1bd-e14836e5f42c/IMG-20251002-WA0012.jpg",
    seller: { name: "OVK Studios", logo: null },
    free: false,
  },
  {
    id: "2104aa6e-0fca-455d-b5ee-90bf581d4f73",
    title: "Siege Weapons Asset Pack",
    type: "ThreeDModel",
    price: 19.99,
    image:
      "https://media.3dimli.com/cmckpu7f60000jr04kfzrgoly/products/2104aa6e-0fca-455d-b5ee-90bf581d4f73/Untitled.png",
    seller: { name: "OVK Studios", logo: null },
    free: false,
  },
  {
    id: "2497f7e4-84ef-4c3f-acae-13a9b9d369a4",
    title: "Character Asset Pack",
    type: "ThreeDModel",
    price: 19.99,
    image:
      "https://media.3dimli.com/cmckpu7f60000jr04kfzrgoly/products/2497f7e4-84ef-4c3f-acae-13a9b9d369a4/Complete RPG.011.png",
    seller: { name: "OVK Studios", logo: null },
    free: false,
  },
  {
    id: "7ca6dfed-1c17-4c27-8bf4-3a7cf1df4780",
    title: "Goblin Army Asset Pack",
    type: "ThreeDModel",
    price: 39.99,
    image:
      "https://media.3dimli.com/cmckpu7f60000jr04kfzrgoly/products/7ca6dfed-1c17-4c27-8bf4-3a7cf1df4780/IMG-20251002-WA0001(1).jpg",
    seller: { name: "OVK Studios", logo: null },
    free: false,
  },
  {
    id: "92a1bec1-371c-4b36-9603-77b34fce9533",
    title: "Full Game Mega Asset Pack",
    type: "ThreeDModel",
    price: 89.99,
    image:
      "https://media.3dimli.com/cmckpu7f60000jr04kfzrgoly/products/92a1bec1-371c-4b36-9603-77b34fce9533/IMG-20251002-WA0012.jpg",
    seller: { name: "OVK Studios", logo: null },
    free: false,
  },
  {
    id: "4f75994e-9622-4c94-bfc4-65588d661c87",
    title: "High Quality Wave Sound Effect",
    type: "Audio",
    price: 20.0,
    image:
      "https://media.3dimli.com/cmg7dctvi0000jl04j5tk7y57/products/4f75994e-9622-4c94-bfc4-65588d661c87/Thumbnail Yogyakarta Beach Trisik 700.png",
    seller: {
      name: "Sound Effect Stacks",
      logo: "https://media.3dimli.com/cmg7dctvi0000jl04j5tk7y57/store/store-logo.png",
    },
    free: false,
  },
];

export default function NewArrivalsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.utils.toArray(cardRefs.current).forEach((el) => {
      if (el) {
        gsap.fromTo(
          el as HTMLElement,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            scrollTrigger: {
              trigger: el as HTMLElement,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="container px-5 lg:!px-8 mt-[10%] !mb-[25%] lg:!mb-0 lg:!mt-0">
      <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 text-neutral-900 dark:text-neutral-50">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between w-full items-center mb-6 sm:mb-8">
          <div className="text-center sm:text-left w-full">
            <h2 className="text-[22.5px] md:text-4xl font-semibold">
              New Arrivals
            </h2>
            <span className="mt-2 md:mt-4 font-normal block text-[11.25px] md:text-lg text-neutral-500 dark:text-neutral-400">
              Discover the newest arrivals on 3DIMLI.
            </span>
          </div>
          <Link
            href="/search?page=1&sorting=newest"
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-[10px] lg:text-base font-medium py-2 px-4 sm:py-3.5 lg:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201, 96.30%, 32.20%)] text-neutral-50 dark:bg-transparent dark:border dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[150px] lg:w-[15rem] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 mt-[12.5px] lg:mt-5 overflow-hidden"
          >
            View All
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
          <div className="grid gap-2 sm:gap-3 lg:px-0 grid-cols-2 lg:grid-cols-4">
            {products.map((product, i) => (
              <div
                key={product.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="relative w-full aspect-video lg:aspect-square mx-auto group"
              >
                <div className="border dark:border-neutral-700 text-card-foreground shadow-sm overflow-hidden rounded-xl bg-gradient-to-r dark:from-white/10 dark:to-neutral-950 p-2 sm:p-3">
                  <div className="space-y-2 sm:space-y-4">
                    <div className="flex items-start space-x-1 sm:space-x-3">
                      <span className="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6 sm:w-9 sm:h-9">
                        {false || product.seller.logo ? (
                          <Image
                            src={product.seller.logo}
                            alt={product.seller.name}
                            width={36}
                            height={36}
                            className="object-cover"
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
                      </span>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/product/${product.id}`}
                          title={product.title}
                          className="text-xs lg:text-sm tracking-normal hover:underline font-bold font-sans leading-tight whitespace-pre-wrap break-all line-clamp-1 text-gray-900 dark:text-gray-100"
                        >
                          {product.title}
                        </Link>
                        <Link href={`/search?productType=${product.type}`}>
                          <div
                            className={`rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium mt-0.5 lg:mt-1 cursor-pointer ${
                              product.type === "Audio"
                                ? "bg-green-50 text-green-700 dark:bg-green-950/30 dark:text-green-400 border-green-200 dark:border-green-800"
                                : "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                            }`}
                          >
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
                              className="lucide lucide-box w-2.5 h-2.5"
                            >
                              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                              <path d="m3.3 7 8.7 5 8.7-5" />
                              <path d="M12 22V12" />
                            </svg>
                            {product.type}
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="relative overflow-hidden w-full h-full">
                      <Link
                        href={`/product/${product.id}`}
                        className="block w-full h-full cursor-pointer"
                      >
                        {/*<Image
                          src={product.image}
                          alt={product.title}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          style={{ aspectRatio: "1 / 1" }}
                        />*/}
                      </Link>
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                        <div className="flex justify-center">
                          <Button
                            variant="gradient"
                            size="sm"
                            className="w-[77%] sm:w-[80%] md:w-[65%]"
                          >
                            {product.free ? "Add to Download" : "Add to Cart"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="inline-flex items-center gap-1 sm:gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="flex items-center justify-center gap-1 p-0.5 xs:p-1 sm:p-1.5 rounded-md">
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
                                  className="lucide lucide-arrow-up w-2.5 h-2.5 lg:w-4 lg:h-4 text-gray-400"
                                >
                                  <path d="m5 12 7-7 7 7" />
                                  <path d="M12 19V5" />
                                </svg>
                                <span className="text-[8.75px] lg:text-sm font-medium text-gray-400">
                                  0
                                </span>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Upvote this product</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="p-0.5 xs:p-1 sm:p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
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
                                  className="lucide lucide-bookmark w-2.5 h-2.5 lg:w-4 lg:h-4"
                                >
                                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                                </svg>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Bookmark this product</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      {product.free ? (
                        <span className="text-green-600 dark:text-green-400 font-semibold text-xs h-6 sm:text-xs lg:text-base grid place-items-center">
                          Free
                        </span>
                      ) : (
                        <span className="text-green-600 dark:text-green-400 font-semibold text-xs lg:text-base">
                          ${product.price?.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
