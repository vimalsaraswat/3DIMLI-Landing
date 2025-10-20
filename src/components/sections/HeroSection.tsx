"use client";

import { useRef, useState } from "react";
import { HoverCard } from "../ui/HoverCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const sentences = [
    "Discover, Buy, and Sell\n Digital Products",
    "Sell for Free,\nPay Only When You Earn",
    "Instant Payouts,\nFull Control, No Limits",
    "Buy Once, Download \nAnytime, Keep Forever",
  ];

  const [displayedText, setDisplayedText] = useState("");

  const typingSpeed = 100; // Speed of typing in ms per character
  const deletingSpeed = 50; // Speed of deleting in ms per character
  const pauseBetweenSentences = 1000; // Pause in ms after typing before deleting

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create ScrollSmoother
    // const smoother = ScrollSmoother.create({
    //   wrapper: wrapperRef.current,
    //   content: contentRef.current,
    //   smooth: 1, // 1 second to catch up to scroll position
    //   effects: true,
    //   normalizeScroll: true,
    // });

    // Typing animation timeline
    const tl = gsap.timeline({ repeat: -1 });

    function addTypeDeleteToTimeline(tl: gsap.core.Timeline, sentence: string) {
      const charIndex = { value: 0 };

      // Typing animation
      tl.to(charIndex, {
        value: sentence.length,
        duration: (sentence.length * typingSpeed) / 1000,
        ease: "none",
        snap: { value: 1 },
        onUpdate: () => {
          setDisplayedText(sentence.substring(0, Math.round(charIndex.value)));
        },
      });

      // Pause after typing
      tl.to({}, { duration: pauseBetweenSentences / 1000 });

      // Deleting animation
      tl.to(charIndex, {
        value: 0,
        duration: (sentence.length * deletingSpeed) / 1000,
        ease: "none",
        snap: { value: 1 },
        onUpdate: () => {
          setDisplayedText(sentence.substring(0, Math.round(charIndex.value)));
        },
      });
    }

    sentences.forEach((sentence) => {
      addTypeDeleteToTimeline(tl, sentence);
    });

    // Scroll-based animation for HoverCards (bubbles)
    // Positioned to form a bubble around the text without overlapping
    const bubblePositions = [
      { x: -420, y: -450 }, // Top-left (move further left)
      { x: 420, y: -450 },  // Top-right (move further right)
      { x: -360, y: -320 }, // Upper-mid left (move further left)
      { x: 360, y: -320 },  // Upper-mid right (move further right)
      { x: -300, y: 60 },   // Bottom-left (move further left)
      { x: 300, y: 60 },    // Bottom-right (move further right)
      { x: -230, y: -270 }, // Left-center (move further left)
      { x: 230, y: -270 },  // Right-center (move further right)
      { x: -520, y: -120 }, // Far-left (move much further left)
      { x: 520, y: -120 },  // Far-right (move much further right)
      { x: -50, y: -430 },  // Top-center (slight left shift)
      { x: -100, y: 200 },  // Bottom-center (move left)
    ];

    bubbleRefs.current.forEach((bubble, i) => {
      if (bubble) {
        const startX = bubblePositions[i % bubblePositions.length].x;
        const startY = bubblePositions[i % bubblePositions.length].y;

        gsap.set(bubble, { x: startX, y: startY, opacity: 1, scale: 1 });

        gsap.to(bubble, {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.5,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top top",
            end: "+=100vh",
            scrub: true,
            pin: contentRef.current, // Pin the hero section until bubbles converge
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });
      }
    });
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} className="relative">
      <div id="smooth-content" ref={contentRef} className="relative h-fit">
        <div id="triggerID" className="h-[100vh]">
          <section className="relative w-full h-full overflow-hidden z-10 transition-opacity duration-300 ease-out">
            <div className="container absolute inset-x-0 min-h-0 pl-20 py-24 flex overflow-hidden z-0">
              <span className="bg-[#ef233c] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply opacity-10 rounded-full w-72"></span>
              <span className="-ml-20 bg-[#04868b] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply mt-40 nc-animation-delay-2000 opacity-10 rounded-full w-72"></span>
            </div>
            <div className="absolute inset-0 md:block flex flex-col items-center justify-center text-center px-4">
              <div className="w-full absolute lg:top-[44%] xl:top-[45%] 2xl:top-[50%] 3xl:top-[43%] 4xl:top-[40%] 5xl:top-[42%] 6xl:top-[42%] lg:-translate-y-[50%]">
                <h1 className="text-3xl 1.7sm:text-5xl md:text-[3.66em] font-semibold leading-[1.1] tracking-tight pb-6 text-[rgb(30,30,30)] dark:text-[rgb(230,230,230)] min-h-[90px] 1.7sm:min-h-[120px] 2sm:min-h-[150px] md:min-h-[180px] whitespace-pre ease-in-out">
                  {displayedText}
                  <span className="cursor">|</span>
                </h1>
                <p className="text-sm 1.7sm:text-lg px-5 md:px-0 font-medium leading-[1.4] text-[#0000008a] dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16">
                  Your one-stop digital platform for 3D models and digital
                  creations.
                  <br className="hidden md:block" />
                  Join our community of creators and collectors today.
                </p>
                <div className="flex justify-center relative" id="exploreBtnID">
                  <a
                    href="/search?page=1"
                    className="nc-Button h-auto absolute inline-flex items-center justify-center rounded-full transition-colors z-[1000] 1.7sm:text-base font-medium py-2 px-4 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.30%,32.20%)] text-neutral-50 dark:bg-transparent dark:border whitespace-nowrap dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 overflow-hidden shine-infinite"
                  >
                    Explore all products
                  </a>
                  {/* Bubbles */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      ref={(el) => {
                        bubbleRefs.current[i] = el;
                      }}
                      className={`bubble-item-wrapper absolute top-1/2 left-1/2 will-change-transform bubble-${i}`}
                    >
                      <HoverCard index={i} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useRef, useState } from "react";
// import { HoverCard } from "../ui/HoverCard";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function HeroSection() {
//   const sentences = [
//     "Discover, Buy, and Sell\n Digital Products",
//     "Sell for Free,\nPay Only When You Earn",
//     "Instant Payouts,\nFull Control, No Limits",
//     "Buy Once, Download \nAnytime, Keep Forever",
//   ];

//   const [displayedText, setDisplayedText] = useState("");

//   const typingSpeed = 100; // Speed of typing in ms per character
//   const deletingSpeed = 50; // Speed of deleting in ms per character
//   const pauseBetweenSentences = 1000; // Pause in ms after typing before deleting

//   const containerRef = useRef(null);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Typing animation timeline
//     const tl = gsap.timeline({ repeat: -1 });

//     function addTypeDeleteToTimeline(tl: GSAPTimeline, sentence: string) {
//       const charIndex = { value: 0 };

//       // Typing animation
//       tl.to(charIndex, {
//         value: sentence.length,
//         duration: (sentence.length * typingSpeed) / 1000,
//         ease: "none",
//         snap: { value: 1 },
//         onUpdate: () => {
//           setDisplayedText(sentence.substring(0, Math.round(charIndex.value)));
//         },
//       });

//       // Pause after typing
//       tl.to({}, { duration: pauseBetweenSentences / 1000 });

//       // Deleting animation
//       tl.to(charIndex, {
//         value: 0,
//         duration: (sentence.length * deletingSpeed) / 1000,
//         ease: "none",
//         snap: { value: 1 },
//         onUpdate: () => {
//           setDisplayedText(sentence.substring(0, Math.round(charIndex.value)));
//         },
//       });
//     }

//     sentences.forEach((sentence) => {
//       addTypeDeleteToTimeline(tl, sentence);
//     });

//     // Scroll-based animation for HoverCards (bubbles)
//     gsap.utils.toArray(".bubble-item-wrapper").forEach((bubble) => {
//       gsap.to(bubble, {
//         x: 0,
//         y: 0,
//         opacity: 0,
//         scale: 0.5,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "+=26vh",
//           scrub: true,
//           invalidateOnRefresh: true,
//         },
//       });
//     });
//   }, []);

//   return (
//     <div ref={containerRef} className="relative h-fit lg:h-[216vh]">
//       <div
//         id="triggerID"
//         className="2md:sticky 2md:top-[90px] h-[92vh] 2md:h-[100vh]"
//       >
//         <section className="relative w-full h-full overflow-hidden z-10 transition-opacity duration-300 ease-out">
//           <div className="container absolute inset-x-0 md:top-10 min-h-0 pl-20 py-24 flex overflow-hidden z-0">
//             <span className="bg-[#ef233c] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply opacity-10 rounded-full w-72"></span>
//             <span className="-ml-20 bg-[#04868b] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply mt-40 nc-animation-delay-2000 opacity-10 rounded-full w-72"></span>
//           </div>
//           <div className="absolute inset-0 md:block flex flex-col items-center justify-center text-center px-4">
//             <div className="w-full absolute lg:top-[44%] xl:top-[45%] 2xl:top-[50%] 3xl:top-[43%] 4xl:top-[40%] 5xl:top-[42%] 6xl:top-[42%] lg:-translate-y-[50%]">
//               <h1 className="text-3xl 1.7sm:text-5xl md:text-[3.66em] font-semibold leading-[1.1] tracking-tight pb-6 text-[rgb(30,30,30)] dark:text-[rgb(230,230,230)] min-h-[90px] 1.7sm:min-h-[120px] 2sm:min-h-[150px] md:min-h-[180px] whitespace-pre ease-in-out">
//                 {displayedText}
//                 <span className="cursor">|</span> {/* Typewriter cursor */}
//               </h1>
//               <p className="text-[10px] 1.7sm:text-lg px-5 md:px-0 font-medium leading-[1.4] text-[#0000008a] dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16">
//                 Your one-stop digital platform for 3D models and digital
//                 creations.
//                 <br className="hidden md:block" />
//                 Join our community of creators and collectors today.
//               </p>
//               <div className="flex justify-center relative" id="exploreBtnID">
//                 <a
//                   href="/search?page=1"
//                   className="nc-Button h-auto absolute inline-flex items-center justify-center rounded-full transition-colors text-[10px] z-[1000] 1.7sm:text-base font-medium py-[0.514rem] px-[0.9375rem] 1.7sm:py-3.5 1.7sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201, 96.30%, 32.20%)] text-neutral-50 dark:bg-transparent dark:border whitespace-nowrap dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[156px] 1.7sm:w-[15rem] overflow-hidden shine-infinite"
//                 >
//                   Explore all products
//                 </a>
//                 {/* Bubbles */}
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className={`bubble-item-wrapper absolute top-1/2 left-1/2 will-change-transform bubble-${i}`}
//                     style={{
//                       zIndex: [50, 20, 40, 40, 30][i],
//                       opacity: 1,
//                       transform: `translateX(${[-450, 350, -280, 250, -30][i]}px) translateY(${[-350, -330, -50, -50, 70][i]}px)`,
//                     }}
//                   >
//                     <HoverCard index={i} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className="w-full h-0 2md:h-[26vh] z-10" id="mainTrigger"></div>
//     </div>
//   );
// }
// "use client";

// import { useRef, useState } from "react";
// import { HoverCard } from "../ui/HoverCard";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function HeroSection() {
//   const sentences = [
//     "Discover, Buy, and Sell\n Digital Products",
//     "Sell for Free,\nPay Only When You Earn",
//     "Instant Payouts,\nFull Control, No Limits",
//     "Buy Once, Download \nAnytime, Keep Forever",
//   ];

//   const [displayedText, setDisplayedText] = useState("");

//   const typingSpeed = 100; // Speed of typing in ms per character
//   const deletingSpeed = 50; // Speed of deleting in ms per character
//   const pauseBetweenSentences = 1000; // Pause in ms after typing before deleting

//   const wrapperRef = useRef(null);
//   const contentRef = useRef(null);
//   const bubbleRefs = useRef([]);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Create ScrollSmoother
//     // const smoother = ScrollSmoother.create({
//     //   wrapper: wrapperRef.current,
//     //   content: contentRef.current,
//     //   smooth: 1, // 1 second to catch up to scroll position
//     //   effects: true,
//     //   normalizeScroll: true,
//     // });

//     // Typing animation timeline
//     const tl = gsap.timeline({ repeat: -1 });

//     function addTypeDeleteToTimeline(tl, sentence) {
//       const charIndex = { value: 0 };

//       // Typing animation
//       tl.to(charIndex, {
//         value: sentence.length,
//         duration: (sentence.length * typingSpeed) / 1000,
//         ease: "none",
//         snap: { value: 1 },
//         onUpdate: () => {
//           setDisplayedText(sentence.substring(0, Math.round(charIndex.value)));
//         },
//       });

//       // Pause after typing
//       tl.to({}, { duration: pauseBetweenSentences / 1000 });

//       // Deleting animation
//       tl.to(charIndex, {
//         value: 0,
//         duration: (sentence.length * deletingSpeed) / 1000,
//         ease: "none",
//         snap: { value: 1 },
//         onUpdate: () => {
//           setDisplayedText(sentence.substring(0, Math.round(charIndex.value)));
//         },
//       });
//     }

//     sentences.forEach((sentence) => {
//       addTypeDeleteToTimeline(tl, sentence);
//     });

//     // Scroll-based animation for HoverCards (bubbles)
//     const bubblePositions = [
//       { x: -450, y: -350 },
//       { x: 350, y: -330 },
//       { x: -280, y: -50 },
//       { x: 250, y: -50 },
//       { x: -300, y: 70 },
//       { x: 400, y: -200 },
//       { x: -200, y: 150 },
//       { x: 300, y: 100 },
//       { x: -350, y: -100 },
//       { x: 100, y: -250 },
//       { x: -150, y: 200 },
//       { x: 200, y: -150 },
//     ];

//     bubbleRefs.current.forEach((bubble, i) => {
//       if (bubble) {
//         const startX = bubblePositions[i % bubblePositions.length].x;
//         const startY = bubblePositions[i % bubblePositions.length].y;

//         gsap.set(bubble, { x: startX, y: startY });

//         gsap.to(bubble, {
//           x: 0,
//           y: 0,
//           opacity: 0,
//           scale: 0.5,
//           scrollTrigger: {
//             trigger: contentRef.current,
//             start: "top top",
//             end: "+=100vh",
//             scrub: true,
//             pin: contentRef.current, // Pin the hero section until bubbles converge
//             pinSpacing: false,
//             invalidateOnRefresh: true,
//           },
//         });
//       }
//     });
//   }, []);

//   return (
//     <div id="smooth-wrapper" ref={wrapperRef} className="relative">
//       <div id="smooth-content" ref={contentRef} className="relative h-fit">
//         <div
//           id="triggerID"
//           className="md:sticky md:top-[90px] h-[92vh] md:h-[100vh]"
//         >
//           <section className="relative w-full h-full overflow-hidden z-10 transition-opacity duration-300 ease-out">
//             <div className="container absolute inset-x-0 md:top-10 min-h-0 pl-20 py-24 flex overflow-hidden z-0">
//               <span className="bg-[#ef233c] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply opacity-10 rounded-full w-72"></span>
//               <span className="-ml-20 bg-[#04868b] block blur-3xl filter h-72 lg:h-96 lg:w-96 mix-blend-multiply mt-40 nc-animation-delay-2000 opacity-10 rounded-full w-72"></span>
//             </div>
//             <div className="absolute inset-0 md:block flex flex-col items-center justify-center text-center px-4">
//               <div className="w-full absolute lg:top-[44%] xl:top-[45%] 2xl:top-[50%] 3xl:top-[43%] 4xl:top-[40%] 5xl:top-[42%] 6xl:top-[42%] lg:-translate-y-[50%]">
//                 <h1 className="text-3xl 1.7sm:text-5xl md:text-[3.66em] font-semibold leading-[1.1] tracking-tight pb-6 text-[rgb(30,30,30)] dark:text-[rgb(230,230,230)] min-h-[90px] 1.7sm:min-h-[120px] 2sm:min-h-[150px] md:min-h-[180px] whitespace-pre ease-in-out">
//                   {displayedText}
//                   <span className="cursor">|</span>
//                 </h1>
//                 <p className="text-[10px] 1.7sm:text-lg px-5 md:px-0 font-medium leading-[1.4] text-[#0000008a] dark:text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-16">
//                   Your one-stop digital platform for 3D models and digital
//                   creations.
//                   <br className="hidden md:block" />
//                   Join our community of creators and collectors today.
//                 </p>
//                 <div className="flex justify-center relative" id="exploreBtnID">
//                   <a
//                     href="/search?page=1"
//                     className="nc-Button h-auto absolute inline-flex items-center justify-center rounded-full transition-colors text-[10px] z-[1000] 1.7sm:text-base font-medium py-[0.514rem] px-[0.9375rem] 1.7sm:py-3.5 1.7sm:px-6 bg-[rgb(2,132,199)] hover:bg-[hsl(201,96.30%,32.20%)] text-neutral-50 dark:bg-transparent dark:border whitespace-nowrap dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 w-[156px] 1.7sm:w-[15rem] overflow-hidden shine-infinite"
//                   >
//                     Explore all products
//                   </a>
//                   {/* Bubbles */}
//                   {Array.from({ length: 12 }).map((_, i) => (
//                     <div
//                       key={i}
//                       ref={(el) => (bubbleRefs.current[i] = el)}
//                       className={`bubble-item-wrapper absolute top-1/2 left-1/2 will-change-transform bubble-${i}`}
//                     >
//                       <HoverCard index={i} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//         <div className="w-full h-[100vh] z-10" id="mainTrigger"></div>
//       </div>
//     </div>
//   );
// }
