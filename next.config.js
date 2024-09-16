// @ts-check

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	async redirects() {
		return [
			{
				source: "/comic/great-minds-sleep-alike",
				destination: "/2008/12/18",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
