/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'ucarecdn.com' }],
	},
}

module.exports = nextConfig
