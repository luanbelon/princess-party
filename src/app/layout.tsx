import type { Metadata } from "next";
import Script from "next/script";
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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18024916701"
          strategy="beforeInteractive"
        />
        <Script
          id="gtag-inline"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18024916701');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <LGPDBanner />
      </body>
    </html>
  );
}
