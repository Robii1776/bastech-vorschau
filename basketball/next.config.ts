import type { NextConfig } from "next";

// Für eine Vorschau in einem Unterverzeichnis (z.B. GitHub Pages) den
// Base-Path setzen; auf der echten Domain bleibt er leer.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
