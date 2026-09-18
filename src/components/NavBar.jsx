import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "@google/model-viewer";

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-[#242624]/95 text-white backdrop-blur-md">

      {/* LINHA ROSA */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ed809d]/20">
        <div className="h-full w-[12%] bg-[#ed809d]" />
      </div>

      <div className="flex h-20 items-center justify-between px-6 md:px-10 lg:px-14">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="relative flex h-11 w-11 items-center justify-center">

            <model-viewer
              src="/logo.glb"
              alt="Rise Company"
              shadow-intensity="0.8"
              camera-orbit="0deg 90deg 2.5m"
              rotation-per-second="25deg"
              auto-rotate
              disable-zoom
              className="h-full w-full transition-transform duration-500 group-hover:scale-110"
            />

          </div>

          <div className="hidden sm:block">
            <span className="block font-serif text-[17px] uppercase tracking-[0.08em]">
              Rise
            </span>

            <span className="block text-[7px] uppercase tracking-[0.4em] text-white/40">
              Creative Company
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-10 md:flex">

          <Link
            to="/"
            className={`group relative py-2 text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
              isActive("/")
                ? "text-white"
                : "text-white/45 hover:text-white"
            }`}
          >
            Home

            <span
              className={`absolute bottom-0 left-0 h-px bg-[#ed809d] transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          <Link
            to="/sobre"
            className={`group relative py-2 text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${
              isActive("/sobre")
                ? "text-white"
                : "text-white/45 hover:text-white"
            }`}
          >
            Sobre

            <span
              className={`absolute bottom-0 left-0 h-px bg-[#ed809d] transition-all duration-300 ${
                isActive("/sobre") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          <a
            href="#projetos"
            className="group relative py-2 text-[10px] uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 hover:text-white"
          >
            Projetos

            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#ed809d] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contato"
            className="group relative py-2 text-[10px] uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 hover:text-white"
          >
            Contato

            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#ed809d] transition-all duration-300 group-hover:w-full" />
          </a>

        </div>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:border-[#ed809d] hover:text-[#ed809d] md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MENU MOBILE */}
      <div
        className={`border-t border-white/10 bg-[#242624] transition-all duration-500 md:hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.35em] transition-colors ${
              isActive("/")
                ? "text-[#ed809d]"
                : "text-white/60 hover:text-white"
            }`}
          >
            01 — Home
          </Link>

          <Link
            to="/sobre"
            onClick={() => setMenuOpen(false)}
            className={`border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.35em] transition-colors ${
              isActive("/sobre")
                ? "text-[#ed809d]"
                : "text-white/60 hover:text-white"
            }`}
          >
            02 — Sobre
          </Link>

          <a
            href="#projetos"
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/10 py-4 text-[10px] uppercase tracking-[0.35em] text-white/60 transition-colors hover:text-white"
          >
            03 — Projetos
          </a>

          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="py-4 text-[10px] uppercase tracking-[0.35em] text-white/60 transition-colors hover:text-white"
          >
            04 — Contato
          </a>

        </div>
      </div>

    </nav>
  );
}

export default NavBar;