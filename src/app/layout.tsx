// app/layout.tsx
import Script from "next/script";
import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "3DIMLI - Digital Commerce Platform",
  description:
    "All-in-one platform to buy and sell 3D models, E-books, and digital assets.",
  icons: {
    icon: "https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20Favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-light dark:bg-neutral-950 min-h-screen flex flex-col justify-between text-p`}
      >
        {children}
        <Script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></Script>
      </body>
    </html>
  );
}
