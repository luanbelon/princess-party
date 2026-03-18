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

        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;
                n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1453464742951736');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1453464742951736&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LGPDBanner />
      </body>
    </html>
  );
}
