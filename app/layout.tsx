import { GoogleTagManager } from '@next/third-parties/google';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from '../styles/components/layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* FIXME: place real GTM ID in .env file or hardcode here */}
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID as string} />

      <body>
        <div>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
