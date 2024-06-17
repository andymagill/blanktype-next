import { GoogleTagManager } from '@next/third-parties/google';
import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* SETUP: place GTM ID in .env file */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />

      <body>
        <div className='[age'>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
