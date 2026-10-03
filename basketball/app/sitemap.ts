import type { MetadataRoute } from "next";
import { club } from "@/lib/club";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${club.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${club.url}/impressum/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${club.url}/datenschutz/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
