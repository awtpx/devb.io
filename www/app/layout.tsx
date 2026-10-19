import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClientProvider } from "@/providers/CustomQueryClientProvider";
import Script from "next/script";
import { Banner } from "@/components/banner";

const dmSans = localFont({
  src: [
    {
      path: "./fonts/DMSans-Variable.ttf",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-Italic-Variable.ttf",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devb.io - Effortless Portfolios for Developers",
  description: "Effortless Portfolios for Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript"></script>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="sunithvs"
          data-description="Support me on Buy me a coffee!"
          data-color="#B9FF66"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          defer
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${dmSans.variable} font-dm-sans`}
      >
        <QueryClientProvider>
          <Banner />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
