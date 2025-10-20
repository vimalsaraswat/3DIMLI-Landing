// app/components/sections/JoinSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const avatars = [
  {
    src: "https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Avatars/AVIF/3DIMLI-users-avatars-01.avif",
    alt: "User 1",
  },
  {
    src: "https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Avatars/AVIF/3DIMLI-users-avatars-02.avif",
    alt: "User 2",
  },
  {
    src: "https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Avatars/AVIF/3DIMLI-users-avatars-03.avif",
    alt: "User 3",
  },
  {
    src: "https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Avatars/AVIF/3DIMLI-users-avatars-04.avif",
    alt: "User 4",
  },
  {
    src: "https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Avatars/AVIF/3DIMLI-users-avatars-05.avif",
    alt: "User 5",
  },
];

// Messages corresponding to each avatar bubble (left/right alternate is preserved by existing styles)
const messages = [
  "Have you seen this?",
  "Give me a sec",
  "Yeah, it's interestin...",
  "Looks nice!",
  "I wanna try too",
];

export default function JoinSection() {
  const [activeTab, setActiveTab] = useState<"join" | "faq">("join");
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const messageRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (activeTab !== "join") return;

    // Typing configuration: fast enough to finish before the next bubble shows
    const secondsPerChar = 0.03; // ~33 chars/sec
    const minDuration = 0.35; // ensure very short messages still look typed

    gsap.utils.toArray(avatarRefs.current).forEach((el, i) => {
      if (!el) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el as HTMLElement,
          start: "top 85%",
          once: true,
        },
      });

      // 1) Reveal bubble smoothly
      tl.fromTo(
        el as HTMLElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );

      // 2) Type the text into the paragraph after bubble is visible
      const targetP = messageRefs.current[i];
      if (targetP) {
        const full = messages[i] ?? "";
        targetP.textContent = "";
        const proxy = { value: 0 };
        tl.to(proxy, {
          value: full.length,
          duration: Math.max(full.length * secondsPerChar, minDuration),
          ease: "none",
          onUpdate: () => {
            targetP.textContent = full.substring(0, Math.round(proxy.value));
          },
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [activeTab]);

  return (
    <div className="relative w-full min-h-[600px] !mt-[41%] md:!mt-[10%] sm:min-h-[700px] flex items-center justify-center">
      <div className="w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Tabs */}
        <div className="flex justify-start absolute bottom-full z-10 lg:left-[2.02rem]">
          <button
            onClick={() => setActiveTab("join")}
            className={`px-6 py-3 text-base font-medium transition-colors rounded-t-lg -mb-[1px] relative ${
              activeTab === "join"
                ? "bg-neutral-50 dark:bg-neutral-950 border-t border-x border-neutral-300 dark:border-neutral-700 border-b-0 text-black dark:text-white font-bold"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
            aria-selected={activeTab === "join"}
            role="tab"
          >
            <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-100/70 dark:to-black/20 pointer-events-none"></span>
            Join
          </button>
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-3 text-base font-medium transition-colors rounded-t-lg -mb-[1px] ml-2 relative ${
              activeTab === "faq"
                ? "bg-neutral-50 dark:bg-neutral-950 border-t border-x border-neutral-300 dark:border-neutral-700 border-b-0 text-black dark:text-white font-bold"
                : "text-neutral-500 dark:text-neutral-400"
            }`}
            aria-selected={activeTab === "faq"}
            role="tab"
          >
            FAQ
          </button>
        </div>

        {/* Tab Content */}
        <div className="relative w-full bg-neutral-100/70 dark:bg-black/20 border border-neutral-300 dark:border-neutral-700 rounded-none xl:rounded-b-[40px] xl:rounded-tr-[40px] overflow-hidden transform -translate-x-1/2 left-1/2">
          <div className="container mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 h-full">
            <div className="relative h-full">
              {activeTab === "join" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-center justify-items-center h-full">
                  {/* Avatars */}
                  <div className="relative w-full max-w-[600px] order-2 lg:order-1">
                    {avatars.map((avatar, i) => (
                      <div
                        key={i}
                        ref={(el) => {
                          avatarRefs.current[i] = el;
                        }}
                        className={`flex items-start mb-6 sm:mb-8 opacity-0 transform translate-y-5 transition-all duration-500 ease-out ${
                          i % 2 === 1 ? "justify-end" : ""
                        }`}
                        style={{
                          height: "auto",
                          minHeight: "60px",
                          maxHeight: "84px",
                        }}
                      >
                        {!avatar.alt.includes("2") &&
                          !avatar.alt.includes("4") && (
                            <div className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] lg:w-[84px] lg:h-[84px] rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={avatar.src}
                                alt={avatar.alt}
                                width={84}
                                height={84}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        <div
                          className={`relative flex-grow sm:flex-grow-0 sm:w-auto md:w-[320px] lg:w-[364px] h-[60px] sm:h-[70px] md:h-[75px] lg:h-[84px] flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 flex-shrink-0 ${
                            i % 2 === 1
                              ? "-mr-2 sm:-mr-4 md:-mr-6 lg:-mr-8"
                              : "ml-2 sm:ml-3"
                          }`}
                          style={{
                            backgroundImage: `url(${
                              i % 2 === 1
                                ? "https://static.tildacdn.com/tild3061-6632-4361-b831-356637626161/Button.svg"
                                : "https://static.tildacdn.com/tild3138-3265-4261-a364-633833313836/Button.svg"
                            })`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "contain",
                          }}
                        >
                          <div className="w-full h-[30px] sm:h-[36px] md:h-[42px] lg:h-[48px] overflow-hidden">
                            <p
                              ref={(el) => {
                                messageRefs.current[i] = el;
                              }}
                              aria-label={messages[i]}
                              className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-medium font-inter leading-[30px] sm:leading-[36px] md:leading-[42px] lg:leading-[48px] text-white text-center whitespace-nowrap overflow-hidden text-ellipsis"
                            >
                              {/* text is set via GSAP typing timeline */}
                            </p>
                          </div>
                        </div>
                        {(avatar.alt.includes("2") ||
                          avatar.alt.includes("4")) && (
                          <div className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[75px] md:h-[75px] lg:w-[84px] lg:h-[84px] rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={avatar.src}
                              alt={avatar.alt}
                              width={84}
                              height={84}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Text + CTA */}
                  <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-2">
                    <h2 className="text-2xl lg:text-6xl font-bold leading-tight">
                      Join the early birds
                    </h2>
                    <p className="text-base md:text-2xl text-zinc-600 dark:text-neutral-300">
                      Be the first to try — and get something special!
                    </p>
                    <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.30%,32.20%)] text-neutral-50 dark:bg-transparent dark:border dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[15rem] focus:outline-none mt-5 overflow-hidden">
                      Sign Up to apply
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col gap-4">
                  <div className="-mt-4">
                    <h2 className="text-2xl lg:text-4xl sm:text-5xl font-bold leading-tight mb-2">
                      Frequently Asked Questions
                    </h2>
                    <p className="text-sm lg:text-lg text-zinc-600 dark:text-neutral-300">
                      Find answers to common questions about using 3DIMLI to
                      sell your digital products
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-3 h-[480px]">
                    <div className="bg-white/80 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                          Still have questions?
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-neutral-400">
                          Join our Discord community to connect with other
                          creators and get direct support from the 3DIMLI team.
                        </p>
                      </div>
                      <a
                        href="https://discord.gg/d48csuWe46"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#5865F2] dark:bg-gradient-to-bl dark:from-gray-900 dark:to-primary text-white font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-md flex items-center justify-center gap-3 hover:bg-[#4752c4] dark:hover:bg-primary transition-all duration-300 ease-in-out text-xs lg:text-base relative overflow-hidden group shine-infinite"
                      >
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
                        <svg
                          width="24"
                          height="18"
                          viewBox="0 0 24 18"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative z-10"
                        >
                          <path d="M19.27 1.33C17.94 0.71 16.5 0.26 15 0a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 10.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                        </svg>
                        <span className="font-medium tracking-wide relative z-10">
                          Join 3DIMLI&apos;s Discord
                        </span>
                      </a>
                    </div>
                    <div className="md:col-span-2 flex flex-col h-full">
                      <div className="h-[400px] space-y-4 overflow-y-auto">
                        {[
                          {
                            q: "What is 3DIMLI and how is it different?",
                            a: "3DIMLI is an all-in-one digital commerce platform. It helps creators and small businesses build their own digital product stores—no middlemen, no commissions. You keep 100% of what you earn and fully control your brand.",
                          },
                          {
                            q: "What do I need to start selling on 3DIMLI?",
                            a: "To sell on 3DIMLI, you need a PayPal Business account and at least one digital product you own the rights to. Due to RBI regulations, PayPal accounts registered in India cannot be used to receive payments — so users in India currently can’t sell. However, buyers from India can still purchase products without any issues. Once your account is ready, just upload your product, set a price, and your store can go live — no coding needed.",
                          },
                          {
                            q: "What can I sell on 3DIMLI?",
                            a: "You can sell digital products like 3D models, ebooks, software, design assets, music, video files, and more. Physical products are not allowed.",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900 text-card-foreground shadow-sm hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md transition duration-300"
                          >
                            <button className="flex w-full items-center justify-between p-4 lg:p-5 text-left">
                              <span className="text-base lg:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                                {item.q}
                              </span>
                              <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors bg-neutral-200/50 dark:bg-neutral-700/50 text-neutral-800 dark:text-neutral-200">
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
                                  className="lucide lucide-minus h-5 w-5"
                                >
                                  <path d="M5 12h14" />
                                </svg>
                              </div>
                            </button>
                            <div className="px-4 pb-4 lg:px-5 lg:pb-5 text-muted-foreground text-sm lg:text-base">
                              {item.a}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center gap-4">
                        <button
                          disabled
                          aria-label="Previous page"
                          className="min-w-fit inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 outline outline-1 outline-gray-500/70 dark:outline-gray-500/30 px-4 py-2 border-input gap-2 transform transition-transform ease-in-out active:scale-95 active:-translate-y-[-0.015rem] group/button border-0 hover:bg-accent hover:text-accent-foreground w-[25px] lg:h-10 h-[25px] lg:w-10"
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
                            className="lucide lucide-chevron-left h-5 w-5"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          aria-label="Next page"
                          className="min-w-fit inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 outline outline-1 outline-gray-500/70 dark:outline-gray-500/30 px-4 py-2 border-input gap-2 transform transition-transform ease-in-out active:scale-95 active:-translate-y-[-0.015rem] group/button border-0 hover:bg-accent hover:text-accent-foreground w-[25px] lg:h-10 h-[25px] lg:w-10"
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
                            className="lucide lucide-chevron-right h-5 w-5"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </button>
                        <span className="text-md text-muted-foreground">
                          1/3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
