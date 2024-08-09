/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import PrelineScript from "@/app/components/PrelineScript";


export const metadata = {
  title: "Kayfolios",
  description: "My Website Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Fira Code, monospace' }} suppressHydrationWarning={true}>
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
