import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="container flex items-center justify-center gap-x-9 text-lg">
      <Link className="no-underline font-normal" href="/">
        Home
      </Link>
      <Link className="no-underline font-normal" href="/about">
        About
      </Link>
      <Link className="no-underline font-normal" href="/writings">
        Writings
      </Link>
    </div>
  );
}
