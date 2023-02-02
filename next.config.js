/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.glitch.global", "api.qrserver.com"],
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
