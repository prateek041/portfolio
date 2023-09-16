import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="container h-28 flex items-center justify-center gap-x-9 text-[24px]">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
