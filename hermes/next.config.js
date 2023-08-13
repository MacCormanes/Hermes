/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.hermes.com',
                port: '',
                pathname: '/is/image/**'
            },
        ]
    },
}

module.exports = nextConfig
