/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    ...(process.env.CHECK_BUILD && { distDir: '.next-check' }),
};

export default nextConfig;
