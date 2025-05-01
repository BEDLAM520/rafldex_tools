const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
	runtimeCaching: [
			...runtimeCaching,
			{
				urlPattern: /^https:\/\/api\.rafldex\.com\/.*\//i,
				handler: 'NetworkFirst',
				options: {
						cacheName: 'api-cache',
						networkTimeoutSeconds: 10,
						expiration: {
								maxEntries: 16,
								maxAgeSeconds: 24 * 60 * 60,
						},
				},
			},
			{
				urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
				handler: 'CacheFirst',
				options: {
						cacheName: 'image-cache',
						expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 }
				}
			}
		],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
