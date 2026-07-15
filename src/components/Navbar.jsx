 import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <Link to="/" className="font-display text-base font-bold tracking-wide text-text">
          DEVHORIZON_26
        </Link>

        <div className="hidden items-center gap-9 font-utility text-sm tracking-wide md:flex">
          <Link to="/" className="text-text-dim transition-colors hover:text-accent">HOME</Link>
          <Link to="/schedule" className="text-text-dim transition-colors hover:text-accent">SCHEDULE</Link>
          <Link to="/speakers" className="text-text-dim transition-colors hover:text-accent">SPEAKERS</Link>
        </div>

        <button className="text-3xl text-text md:hidden" aria-label="Open menu">
          &#9776;
        </button>
      </div>
    </nav>
  );
}
