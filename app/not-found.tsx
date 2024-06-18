import Link from 'next/link';
import '../styles/pages/not-found.scss';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>404 OOPS!</h2>
      <h1>Page Not Found</h1>
      <p>
        This page you are looking for is missing, has been removed, or renamed.
      </p>
      <Link className='button' href='/'>
        Return to the Homepage
      </Link>
    </div>
  );
}
