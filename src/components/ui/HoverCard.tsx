import {
  Box,
  Download,
  Headphones,
  Heart,
  Layers,
  LayoutGrid,
  Search,
  ShoppingCart,
  Star,
  Tag,
  Upload,
  Users,
} from "lucide-react";
import { useState } from "react";

const hoverData = [
  {
    icon: Box,
    title: "3D Models",
    desc: "Browse thousands of high-quality 3D models for your projects. Filter by category, style, format, and more.",
    image: "/_next/static/media/car-model.40128753.avif",
  },
  {
    icon: ShoppingCart, // or whatever your "Check" was meant to represent—likely a cart
    title: "Checkout",
    desc: "Fast and secure payments for your 3D model purchases.",
  },
  {
    icon: Tag,
    title: "Pricing",
    desc: "Flexible pricing options for creators and businesses.",
  },
  {
    icon: Search,
    title: "Search",
    desc: "Find exactly what you need with our powerful search tools.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Join thousands of 3D artists and designers.",
  },
  {
    icon: Upload,
    title: "Upload Models",
    desc: "Share your creations with our community. Upload your 3D models and reach thousands of potential buyers.",
    image: "/_next/static/media/car-model.40128753.avif",
  },
  {
    icon: Download,
    title: "Downloads",
    desc: "Access your purchased models anywhere, anytime.",
  },
  {
    icon: LayoutGrid,
    title: "Categories",
    desc: "Explore our organized collection by categories.",
  },
  {
    icon: Star,
    title: "Featured Models",
    desc: "Discover our handpicked selection of premium 3D models and assets from top creators.",
    creator: { name: "Creator", tier: "Premium" },
  },
  {
    icon: Layers,
    title: "Collections",
    desc: "Curated sets of models for specific projects and needs.",
  },
  {
    icon: Heart,
    title: "Favorites",
    desc: "Save models you love for quick access later.",
  },
  {
    icon: Headphones,
    title: "Support",
    desc: "Get help when you need it from our friendly support team.",
  },
];

export function HoverCard({ index }: { index: number }) {
  const [visible, setVisible] = useState(false);
  const colorConfig = {
    indigo: {
      icon: "text-indigo-600",
      bg: "bg-indigo-50",
      gradientFrom: "from-white/70",
      gradientTo: "to-indigo-50",
    },
    emerald: {
      icon: "text-emerald-600",
      bg: "bg-emerald-50",
      gradientFrom: "from-white/70",
      gradientTo: "to-emerald-50",
    },
    amber: {
      icon: "text-amber-600",
      bg: "bg-amber-50",
      gradientFrom: "from-white/70",
      gradientTo: "to-amber-50",
    },
    blue: {
      icon: "text-blue-600",
      bg: "bg-blue-50",
      gradientFrom: "from-white/70",
      gradientTo: "to-blue-50",
    },
    purple: {
      icon: "text-purple-600",
      bg: "bg-purple-50",
      gradientFrom: "from-white/70",
      gradientTo: "to-purple-50",
    },
  };
  const colors = [
    "indigo",
    "emerald",
    "amber",
    "blue",
    "purple",
    "indigo",
    "emerald",
    "amber",
    "blue",
    "purple",
  ];

  const color = colors[index] as keyof typeof colorConfig;
  const colorStyles = colorConfig[color];

  const IconComponent = hoverData[index].icon;

  return (
    <div
      className="relative z-0"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div
        className={`bubble-item relative rounded-full backdrop-blur-lg bg-white/70 dark:bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-[0.5287rem] 1.7sm:p-3.5 flex items-center justify-center cursor-grab border border-white/40 dark:border-white/10 bg-gradient-to-r from-white/70 to-${color}-50 dark:from-white/10 dark:to-transparent`}
        tabIndex={0}
        style={{ opacity: 1 }}
      >
        <div className="w-[54px] h-[54px] 1.7sm:w-10 1.7sm:h-10 flex items-center justify-center">
          <IconComponent size={30} className={`${colorStyles?.icon}`} />
        </div>
      </div>
      <div
        className={`absolute bottom-auto top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-500 ease-in-out ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } pointer-events-none`}
      >
        <div className="rounded-lg dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-600 text-card-foreground w-48 shadow-xl bg-white/95 border-indigo-400 border border-dashed">
          <div className="flex flex-col space-y-1.5 p-6 pb-1 md:pb-2">
            <h3 className="tracking-tight text-xs md:text-sm font-medium flex items-center gap-2">
              <span className={`p-1 bg-${color}-50 rounded-full`}>
                <IconComponent
                  width="16"
                  height="16"
                  className={`text-${color}-600`}
                />
              </span>
              {hoverData[index].title}
            </h3>
          </div>
          <div className="p-6 pt-0">
            <p className="text-xs leading-relaxed text-[#0000008a] dark:text-neutral-400">
              {hoverData[index].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
