import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Onde Comprar no Atacado — Guias Práticos para Revendedores",
    template: "%s | OndeComprarNoAtacado.com",
  },
  description:
    "Portal de referência sobre compras no atacado no Brasil. Guias práticos sobre onde comprar barato, melhores fornecedores por segmento, como abrir negócio de revenda.",
  keywords: "onde comprar no atacado, fornecedores atacado, comprar atacado brasil, revenda, MEI",
  metadataBase: new URL("https://ondecomprarnoatacado.com"),
  openGraph: {
    siteName: "OndeComprarNoAtacado.com",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
