/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   compiler: {
//     removeConsole: process.env.NODE_ENV !== "development",
//   },
// };

// const withPWA = require("next-pwa")({
//   dest: "public",
//   // disable: process.env.NODE_ENV === "development",
//   // register: true,
//   // skipWaiting: true,
// });

// module.exports = withPWA(nextConfig);


// const {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } = require("next/constants");

// /** @type {import("next").NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
//     const withPWA = require("@ducanh2912/next-pwa").default({
//       dest: "public",
//     });
//     return withPWA(nextConfig);
//   }
//   return nextConfig;
// };

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  // Your Next.js config
});