// app/components/layout/MobileHeader.tsx
import Link from "next/link";

export default function MobileHeader() {
  return (
    <div className="lg:hidden sticky top-0 z-[999] font-popins transition-transform duration-300 ease-in-out w-full inline-flex justify-between items-center p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 h-14">
      <Link
        href="/"
        className="inline-block flex-shrink-0 text-primary-600 w-full text-start mt-[5px] px-1"
      >
        <div className="flex items-center">
          <img
            src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
            alt="3DIMLI Logo"
            className="h-7 w-auto"
          />
          <div className="ml-2 flex flex-col justify-center text-[10px] leading-none text-muted-foreground border-l dark:border-l-neutral-700 pl-2 h-full">
            <span>BETA</span>
            <span>1.0.1</span>
          </div>
        </div>
      </Link>
      <div className="px-2 inline-flex border-l dark:border-l-neutral-700 items-center justify-center gap-2 divide-x divide-slate-200/70 dark:divide-neutral-700 cursor-pointer">
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
          className="stroke-[1.3] w-6 h-6 text-neutral-400 dark:text-neutral-300"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  );
}
