import { siteConfig } from '../config/site';
import '../styles/globals.css';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <>
      <h1>Welcome to {siteConfig.title}</h1>
      <p>{siteConfig.description}</p>
    </>
  );
}
