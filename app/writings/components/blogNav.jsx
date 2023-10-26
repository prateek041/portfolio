import Link from 'next/link';
import NavItem from './NavItem';

export default function blogNav({ series }) {
  return (
    <div className="border-solid overflow-hidden border-r border-[#FAF0E6]">
      <ul className={`max-h-[70vh] overflow-y-auto`}>
        {Object.entries(series).map(([key, value]) => {
          return (
            <ul key={key}>
              {value.map((item) => {
                return (
                  <li className="py-1" key={item.name}>
                    <NavItem item={item} />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </ul>
    </div>
  );
}
