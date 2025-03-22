import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";
import {fileURLToPath} from "node:url";
import {createJiti} from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to make sure our environment variables are validated at build time
// jiti("./src/env");

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
            },
            {
                protocol: "https",
                hostname: "ik.imagekit.io",
                port: "",
            },
        ],
    },
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        // @ts-ignore
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        return config
    }
};

export default withNextIntl(nextConfig);