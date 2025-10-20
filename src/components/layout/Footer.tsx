// app/components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-neutral-950 transition-colors duration-300 ease-in-out text-gray-800 pt-7 md:pt-8 mt-24 3xl:mt-40">
      <div className="container px-5 lg:!px-8 pb-0 lg:pb-0 mx-auto">
        {/* Powered By */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16 mb-10 md:mb-16 bg-gray-50 dark:bg-card py-5 px-4 md:py-6 md:px-10 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
            <span className="text-sm md:text-lg font-medium text-black dark:text-neutral-400 text-center">
              Platform powered by
            </span>
            <div className="flex items-center space-x-2">
              <Image
                src="https://media.cgvizstudio.com/cg-viz-media/images/3DIMLI%20Images/Logo/3DIMLI%20LOGO.svg"
                alt="3DIMLI Logo"
                width={100}
                height={30}
                className="h-4 w-auto md:h-7 md:w-auto"
              />
            </div>
          </div>
          <div className="hidden md:block h-8 w-px bg-gray-300 dark:bg-neutral-600"></div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
            <span className="text-sm md:text-lg font-medium text-black dark:text-neutral-400 text-center">
              Payments powered by
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 124 33"
              className="h-5 md:h-8 w-auto"
            >
              <path
                d="M46.211 6.749h-6.839a.95.95 0 0 0-.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zM47 13.154c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zM66.654 13.075h-3.275a.57.57 0 0 0-.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0-.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zM84.096 13.075h-3.291a.954.954 0 0 0-.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0-.912-.678h-3.234a.57.57 0 0 0-.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0-.468-.895z"
                fill="#253B80"
              ></path>
              <path
                d="M94.992 6.749h-6.84a.95.95 0 0 0-.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zM115.434 13.075h-3.273a.567.567 0 0 0-.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0-.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zM119.295 7.23l-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0-.562-.659h-3.16a.571.571 0 0 0-.562.482z"
                fill="#179BD7"
              ></path>
              <path
                d="M7.266 29.154l.523-3.322-1.165-.027H1.061L4.927 1.292a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1-1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0-.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1-.096.035H7.266z"
                fill="#253B80"
              ></path>
              <path
                d="M23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545H9.326c-.661 0-1.218.48-1.321 1.132L6.596 26.83l-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0-1.336-1.03z"
                fill="#179BD7"
              ></path>
              <path
                d="M21.754 7.151a9.757 9.757 0 0 0-1.203-.267 15.284 15.284 0 0 0-2.426-.177h-7.352a1.172 1.172 0 0 0-1.159.992L8.05 17.605l-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0-1.017-.429 9.045 9.045 0 0 0-.277-.087z"
                fill="#222D65"
              ></path>
            </svg>
          </div>
        </div>

        {/* Social + Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="https://www.producthunt.com/products/3dimli-digital-commerce-platform?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-3dimli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=976739&theme=light&t=1760884898322"
                alt="3DIMLI on Product Hunt"
                width="250"
                height="54"
              />
            </a>
            {["twitter", "facebook", "instagram", "youtube", "linkedin"].map(
              (platform) => (
                <a
                  key={platform}
                  href="#"
                  className={`text-${
                    platform === "twitter"
                      ? "gray-900 dark:text-neutral-100"
                      : platform === "facebook"
                        ? "[#4267B2]"
                        : platform === "instagram"
                          ? "[#E4405F]"
                          : platform === "youtube"
                            ? "[#FF0000]"
                            : "[#0A66C2]"
                  } hover:opacity-80 transition-opacity`}
                  aria-label={
                    platform.charAt(0).toUpperCase() + platform.slice(1)
                  }
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="h-4 md:h-6 w-4 md:w-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        platform === "twitter"
                          ? "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                          : platform === "facebook"
                            ? "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                            : platform === "instagram"
                              ? "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                              : platform === "youtube"
                                ? "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                                : "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      }
                    />
                  </svg>
                </a>
              ),
            )}
          </div>
          <form className="flex items-baseline space-x-2 flex-1 justify-center md:justify-end flex-wrap">
            <div className="space-y-2">
              <div className="relative" id="newsletter-form">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-150 border border-gray-300 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-800/90 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-[8.75px] md:text-sm font-normal md:h-11 px-2.5 md:px-4 py-2 md:py-3 md:mt-1.5 block dark:placeholder:text-neutral-500 dark:focus:border-neutral-100 w-full md:w-[300px] h-full dark:border-neutral-700 mt-0 bg-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 outline outline-1 outline-gray-500/70 dark:outline-gray-500/30 py-2 gap-2 transform transition-transform ease-in-out active:scale-95 active:-translate-y-[-0.015rem] group/button border-0 border-gray-200 dark:border-neutral-700 bg-gradient-to-bl from-gray-900 to-primary text-white hover:bg-[#4752c4] dark:hover:bg-primary lg:h-11 rounded-md px-5 lg:px-8 min-w-[95.75px] text-xs md:text-sm md:min-w-[150px] h-[27.25px] md:h-[42px] relative mt-3"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 mb-10 md:mb-16">
          {[
            {
              title: "3DIMLI",
              links: [{ label: "Support", href: "/support" }],
            },
            {
              title: "Discover",
              links: [
                { label: "3D Models", href: "/search?productType=ThreeDModel" },
                { label: "Ebooks", href: "/search?productType=Ebook" },
                { label: "More Coming Soon...", href: "#" },
              ],
            },
            {
              title: "Policies",
              links: [
                { label: "Privacy Policy", href: "/privacy-policy" },
                {
                  label: "Acceptable Use Policy",
                  href: "/acceptable-use-policy",
                },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Terms Of Service", href: "/terms-of-services" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Help Center", href: "/help-center" },
              ],
            },
          ].map((section, i) => (
            <div
              key={i}
              className="space-y-2.5 md:space-y-4 flex flex-col w-full max-md:items-center justify-start"
            >
              <h3 className="font-semibold dark:text-neutral-50">
                {section.title}
              </h3>
              {section.links.map((link, j) => (
                <Link
                  key={j}
                  href={link.href}
                  className="block text-xs md:text-sm text-black dark:text-neutral-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-neutral-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs md:text-sm text-black dark:text-neutral-400">
              © 2024 - 2025 3DIMLI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
