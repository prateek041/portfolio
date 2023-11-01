'use client';
import NavItem from './NavItem';
import { useState } from 'react';

export default function BlogNav({ items }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <section className="WEB_VIEW">
        <div className="border-solid overflow-hidden border-r border-[#FAF0E6]">
          <ul className={`max-h-[70vh] overflow-y-auto`}>
            {items.map((value) => (
              <NavItem key={value.title} item={value} />
            ))}
          </ul>
        </div>
      </section>

      <section className="MOBILE_VIEW md:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}></div>
      </section>
      <style>{`
      .hideMenuNav {
        width: 0px;
        height: 0px;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
