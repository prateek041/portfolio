import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="container flex items-center justify-center gap-x-9 text-lg">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/writings">Writings</Link>
    </div>
  );
}
