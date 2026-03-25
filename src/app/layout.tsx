import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import SnowEffect from "@/components/SnowEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forex Trading App Learn & Trade Smart | Trusted | Grubyfx",
  description: "New to forex trading and feeling confused? Learn trading, use signals, practice with a simulator, and join a traders' community. Start learning today with Grubyfx.",
  metadataBase: new URL('https://grubyfx.pl'),
  openGraph: {
    title: "TAKE PROFIT GRUBYFX - Dołącz za darmo!",
    description: "Dołącz do 1000+ traderów, którzy już zarabiają z nami każdego dnia! Sygnały, analizy, społeczność - wszystko za darmo.",
    url: "https://grubyfx.pl",
    siteName: "TAKE PROFIT GRUBYFX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TAKE PROFIT GRUBYFX",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAKE PROFIT GRUBYFX - Dołącz za darmo!",
    description: "Dołącz do 1000+ traderów! Sygnały, analizy, społeczność - wszystko za darmo.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <head>
        <link rel="canonical" href="https://www.grubyfx.com/" />
<meta name="google-site-verification" content="7hS7ibF2CfXMr4gVzftsDGKu-K0Ra6kRsflbaqOUH0I" />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3TCWEVR5HR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3TCWEVR5HR');
</script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4207043402882585');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=4207043402882585&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Contentsquare */}
        <Script 
          src="https://t.contentsquare.net/uxa/95765d8fe4882.js" 
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <SnowEffect />
        {children}
        <Footer />
      </body>
    </html>
  );
}
