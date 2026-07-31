/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
}

export default nextConfig