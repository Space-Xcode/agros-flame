/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    '/project/[slug]': ['./public/imported-pages/projects/**/*.html'],
    '/journal/[slug]': ['./public/imported-pages/journal/**/*.html'],
  },
}

export default nextConfig
