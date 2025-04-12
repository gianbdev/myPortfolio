//import type { NextConfig } from "next";

//const withNextIntl = require("next-intl/plugin");

//const nextConfig: NextConfig = {
//};

//export default nextConfig;
//export default withNextIntl(nextConfig);
// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: true, // Reemplaza experimental.turbo
};

export default withNextIntl(nextConfig);
