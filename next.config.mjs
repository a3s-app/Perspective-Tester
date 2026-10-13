/** @type {import('next').NextConfig} */

const nextConfig = {
  images: { unoptimized: true, remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }] },
  // The CMS webhook and ISR require a server deployment, such as Vercel.
}

export default nextConfig
