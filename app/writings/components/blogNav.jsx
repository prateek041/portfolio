import Link from 'next/link';

export default function blogNav({ series }) {
  return (
    <div className="border-solid overflow-hidden border-r border-[#FAF0E6] max-w-fit w-2/3 pr-4">
      <ul className={`max-h-[70vh] overflow-y-auto`}>
        {Object.entries(series).map(([key, value]) => {
          return (
            <ul key={key}>
              {value.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      className="no-underline font-normal"
                      href={`writings/${item.name}`}
                    >
                      {item.name}
                    </Link>
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
