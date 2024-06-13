import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      { /* SETUP: place GTM ID in .env file */ }
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />
      
      <body>{children}</body>
    </html>
  );
}
