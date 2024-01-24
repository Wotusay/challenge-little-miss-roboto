/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/1',
            },
        ];
    },
};

export default nextConfig;
