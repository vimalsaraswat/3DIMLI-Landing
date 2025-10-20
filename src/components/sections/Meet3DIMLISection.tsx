// app/components/sections/Meet3DIMLISection.tsx
"use client";

import { Fragment, useRef } from "react";
import Link from "next/link";

export default function Meet3DIMLISection() {
  const text2WordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Animate headline words
  //   gsap.fromTo(
  //     text2WordsRef.current,
  //     { y: 50, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.6,
  //       stagger: 0.1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: "#sectionID",
  //         start: "top 80%",
  //         end: "top 40%",
  //         toggleActions: "play none none reverse",
  //       },
  //     },
  //   );

  //   // Animate benefit items
  //   gsap.utils.toArray(benefitRefs.current).forEach((el, i) => {
  //     gsap.fromTo(
  //       el,
  //       { y: 40, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.7,
  //         delay: i * 0.15,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: "#benefitsSection",
  //           start: "top 85%",
  //           toggleActions: "play none none reverse",
  //         },
  //       },
  //     );
  //   });

  //   // Animate dividers
  //   gsap.utils.toArray(dividerRefs.current).forEach((el) => {
  //     gsap.fromTo(
  //       el,
  //       { scaleY: 0, transformOrigin: "top" },
  //       {
  //         scaleY: 1,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: "#benefitsSection",
  //           start: "top 80%",
  //           toggleActions: "play none none reverse",
  //         },
  //       },
  //     );
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((t) => t.kill());
  //   };
  // }, []);

  return (
    <div
      id="sectionID"
      className="container h-fit md:h-[85vh] sm:px-6 z-40 5xl:h-[80vh] overflow-hidden 2md:top-0 grid place-items-center transition-opacity duration-700 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-4 w-full">
        {/* Text Content */}
        <div className="flex gap-6 flex-col items-center md:items-start text-center md:text-left">
          <h2 id="text1" className="text-[15px] 1.7sm:text-2xl">
            Meet 3DIMLI
          </h2>
          <h2
            id="text2"
            className="text-3xl 1.7sm:text-5xl lg:text-5xl xl:text-5xl font-medium"
          >
            {["Your", "All-in-one", "Digital", "Commerce", "Platform"].map(
              (word, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    text2WordsRef.current[i] = el;
                  }}
                  id={`text2-word-${i}`}
                  className="inline-block mr-2 text2-word"
                >
                  {word}
                </span>
              ),
            )}
          </h2>
          <p
            id="text3"
            className="text-[11.25px] 1.7sm:text-lg text-muted-foreground leading-relaxed"
          >
            <span className="font-semibold text-foreground">
              Sell 3D Models, E-books, and digital products
            </span>{" "}
            effortlessly. Manage your store, deliver products seamlessly, and
            reach a global audience.
          </p>
          <Link
            href="/login"
            id="startSellingBtn"
            className="nc-Button shine-infinite flex items-center dark:bg-transparent dark:border dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 justify-center rounded-full text-[8.7px] sm:text-base font-medium py-[0.5298rem] px-[0.9375rem] sm:py-3 sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.30%,32.20%)] text-neutral-50 w-[150px] sm:w-[15rem] overflow-hidden"
          >
            Start Selling Now
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
              className="lucide lucide-chevron-right ml-2 h-[10px] w-[10px] sm:h-4 sm:w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Video */}
        <div id="theVideo" className="w-full">
          <video
            ref={videoRef}
            width="100%"
            className="rounded-l-full"
            autoPlay
            loop
            muted
            playsInline
            poster="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Meet-3DIMLI/3DIMLI-Creators.avif"
          >
            <source
              src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Meet-3DIMLI/3DIMLI-Creators.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Benefits Section */}
        <div
          id="benefitsSection"
          className="col-span-1 md:col-span-2 md:mt-16 h-fit flex flex-col items-center w-full perspective"
        >
          <div className="w-full mx-auto overflow-hidden">
            <div className="flex flex-row w-full">
              {[
                { heading: "Global", text: "For creators worldwide." },
                { heading: "Earnings", text: "Keep 100% of what you earn." },
                { heading: "Support", text: "We’ve got your back." },
              ].map((item, i) => (
                <Fragment key={i}>
                  {i !== 0 && (
                    <div className="flex items-center">
                      <div
                        ref={(el) => {
                          dividerRefs.current[0] = el;
                        }}
                        id="divider1"
                        className="w-px bg-neutral-200 dark:bg-neutral-700 h-[60%] my-auto origin-top"
                      />
                    </div>
                  )}
                  <div
                    id={`benefitItem${i + 1}`}
                    ref={(el) => {
                      benefitRefs.current[i] = el;
                    }}
                    className="flex-1 flex flex-col items-center text-center p-1 1sm:p-2 sm:p-9 relative"
                  >
                    <div
                      className={`absolute inset-0 left-0 bg-gradient-to-r from-transparent via-${["blue", "orange", "green"][i]}-100/30 to-transparent dark:via-${["blue", "orange", "green"][i]}-900/10 -translate-x-full animate-shimmer`}
                    />
                    <h3
                      id={`benefitHeading${i + 1}`}
                      className="text-[18.75px] 1.5sm:text-[30px] 3sm:text-5xl font-medium text-black dark:text-white"
                    >
                      {item.heading}
                    </h3>
                    <p
                      id={`benefitText${i + 1}`}
                      className={`text-[#FF6B35] dark:text-[#FF8A5B] text-[10px] sm:text-base`}
                    >
                      {item.text}
                    </p>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
