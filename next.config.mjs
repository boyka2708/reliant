/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "render.fineartamerica.com",
            },
            {
                protocol: 'https',
                hostname: 'www.reliantaqua.com'
            }
        ]
    }
};

export default nextConfig;
