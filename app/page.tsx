import { siteConfig } from '../config/site';
import Vercel from '/public/vercel.svg';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <>
      <h1>Welcome to {siteConfig.title}</h1>
      <p>{siteConfig.description}</p>
      <Vercel />
    </>
  );
}
