import type { Metadata } from "next";
import "./globals.css";
import LGPDBanner from "@/components/LGPDBanner";

export const metadata: Metadata = {
  title: "Princess Party — Festas e Spa para Meninas em Seixal",
  description: "O lugar mágico onde os sonhos das princesas ganham vida. Festas de aniversário, spa e eventos especiais para meninas em Seixal, Portugal.",
  keywords: ["festas meninas", "spa meninas", "festas aniversario seixal", "princess party", "festas infantis"],
  openGraph: {
    title: "Princess Party — Festas e Spa para Meninas em Seixal",
    description: "O lugar mágico onde os sonhos das princesas ganham vida.",
    type: "website",
    locale: "pt_PT",
  },
  icons: {
    icon: "/logo-princess-party.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>
        {children}
        <LGPDBanner />
      </body>
    </html>
  );
}
