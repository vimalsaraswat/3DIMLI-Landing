// app/components/ui/SearchBar.tsx
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./Input";
import { Search } from "lucide-react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="self-center w-full">
      <form>
        <div className="relative">
          <div className="inline-flex w-full h-10 justify-between rounded-lg border bg-transparent gap-1 text-sm border-neutral-200 dark:border-neutral-700 focus:ring-1 focus:ring-slate-500 focus:border-slate-500">
            <Input
              title="search"
              className="peer/search pl-3 bg-transparent pr-1 border-none ring-0 w-full placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:focus:ring-slate-400 dark:focus:border-slate-400 z-20 rounded-full"
              type="search"
              placeholder="Search..."
              defaultValue={searchParams.get("q")?.toString() || ""}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              type="submit"
              className="cursor-pointer my-2 flex items-center justify-center w-fit border-l border-neutral-200 dark:border-l-neutral-700 dark:border-neutral-700 px-3 z-20"
              aria-label="Search"
            >
              <Search className="shrink-0 size-4 text-gray-400 dark:text-white/60" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
