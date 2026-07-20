//  import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
//       <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
//         <Link to="/" className="font-display text-base font-bold tracking-wide text-[#D1FB77]">
//           DEVHORIZON_26
//         </Link>

//         <div className="hidden items-center gap-9 font-utility text-sm tracking-wide md:flex">
//           <Link to="/" className="text-text-dim transition-colors hover:text-accent">HOME</Link>
//           <Link to="/schedule" className="text-text-dim transition-colors hover:text-accent">SCHEDULE</Link>
//           <Link to="/speakers" className="text-text-dim transition-colors hover:text-accent">SPEAKERS</Link>
//         </div>

//         <button className="text-3xl text-text md:hidden" aria-label="Open menu">
//           &#9776;
//         </button>
//       </div>
//     </nav>
//   );
// }


import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "HOME" },
    { to: "/schedule", label: "SCHEDULE" },
    { to: "/speakers", label: "SPEAKERS" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <Link
          to="/"
          className="font-display text-base font-bold tracking-wide text-[#D1FB77]"
          onClick={() => setIsOpen(false)}
        >
          DEVHORIZON_26
        </Link>

        <div className="hidden items-center gap-9 font-utility text-sm tracking-wide md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-text-dim transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="text-3xl text-text md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line font-utility text-sm tracking-wide transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-8 py-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rounded-sm px-2 py-3 text-text-dim transition-colors hover:bg-surface hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
