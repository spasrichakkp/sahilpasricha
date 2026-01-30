/** @type {import('next').NextConfig} */
const nextConfig = {
    // swcMinify: true, // Default in Next 13+
    // reactStrictMode: true, // Default
    images: {
        domains: ["formsubmit.co"], // Whitelist if needed
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
