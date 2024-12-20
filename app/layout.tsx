import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
        <head>
        <meta name="google-site-verification" content="Vu1FnigGDboNlIeIP7b5IlNcXtZa5Nu4sdOWW7iNJnY" />
        </head>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-CT8789G4S4"></script>
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3371051243633561"
     crossOrigin="anonymous"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CT8789G4S4');
          `,
        }}
      />
      <body className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
