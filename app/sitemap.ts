import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/mdx";

const BASE_URL = "https://ondecomprarnoatacado.com";

const categorias = ["roupas", "cosmeticos", "alimentos", "eletronicos", "calcados", "bijuterias"];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articleUrls: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/guias/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoriaUrls: MetadataRoute.Sitemap = categorias.map((c) => ({
    url: `${BASE_URL}/onde-comprar/${c}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/guias`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/parceiros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/sobre`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    ...categoriaUrls,
    ...articleUrls,
  ];
}
