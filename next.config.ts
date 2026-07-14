import type { NextConfig } from "next";

// Für die GitHub-Pages-Vorschau wird die Seite unter /bastech-website/
// ausgeliefert; auf der echten Domain bleibt der Base-Path leer.
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
