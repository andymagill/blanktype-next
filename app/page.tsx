import { siteConfig } from '../config/site';
import styles from '../styles/pages/homepage.module.scss';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <div className={styles.homepage}>
      <h1>Welcome to {siteConfig.title}</h1>
      <p>{siteConfig.description}</p>
    </div>
  );
}
