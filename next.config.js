/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'standalone' : 'module',
}

module.exports = nextConfig
