import Link from 'next/link';

export default function NavItem({ item }) {
  const { fileName, title, date } = item;
  return (
    <Link className="no-underline" href={`/writings/${fileName}`}>
      <div className="flex flex-col py-2 leading-snug">
        <p className="font-normal">{title}</p>
        <p className="text-xs font-light">{date}</p>
      </div>
    </Link>
  );
}
