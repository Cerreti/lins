import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "@google/model-viewer";

function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-[#461B15] text-[#F8F4D8]">

      {/* LINHA INFERIOR */}

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#F8F4D8]/10">

        <div className="h-full w-[12%] bg-[#E95C8B]" />

      </div>


      <div className="flex h-20 items-center justify-between px-6 md:px-10 lg:px-14">

        {/* =====================================================
            LOGO
        ====================================================== */}

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

            <span className="block text-[17px] font-black uppercase tracking-[0.08em] text-[#F8F4D8]">
              Rise
            </span>

            <span className="block text-[7px] font-medium uppercase tracking-[0.4em] text-[#E6E47A]/60">
              Creative Company
            </span>

          </div>

        </Link>


        {/* =====================================================
            MENU DESKTOP
        ====================================================== */}

        <div className="hidden items-center gap-10 md:flex">

          {/* HOME */}

          <Link
            to="/"
            className={`group relative py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
              isActive("/")
                ? "text-[#E95C8B]"
                : "text-[#F8F4D8]/55 hover:text-[#F8F4D8]"
            }`}
          >

            Home

            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#E95C8B] transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />

          </Link>


          {/* SOBRE */}

          <Link
            to="/sobre"
            className={`group relative py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
              isActive("/sobre")
                ? "text-[#E95C8B]"
                : "text-[#F8F4D8]/55 hover:text-[#F8F4D8]"
            }`}
          >

            Sobre

            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#E95C8B] transition-all duration-300 ${
                isActive("/sobre") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />

          </Link>


          {/* PROJETOS */}

          <a
            href="#projetos"
            className="group relative py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F8F4D8]/55 transition-colors duration-300 hover:text-[#F8F4D8]"
          >

            Projetos

            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E95C8B] transition-all duration-300 group-hover:w-full" />

          </a>


          {/* CONTATO */}

          <Link
            to="/contato"
            className={`group relative py-2 text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${
              isActive("/contato")
                ? "text-[#E95C8B]"
                : "text-[#F8F4D8]/55 hover:text-[#F8F4D8]"
            }`}
          >

            Contato

            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-[#E95C8B] transition-all duration-300 ${
                isActive("/contato") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />

          </Link>

        </div>


        {/* =====================================================
            BOTÃO MOBILE
        ====================================================== */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-[#F8F4D8]/20 text-[#F8F4D8]/80 transition-all duration-300 hover:border-[#E95C8B] hover:bg-[#E95C8B] hover:text-[#461B15] md:hidden"
          aria-label="Menu"
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>


      {/* =====================================================
          MENU MOBILE
      ====================================================== */}

      <div
        className={`border-t border-[#F8F4D8]/10 bg-[#461B15] transition-all duration-500 md:hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >

        <div className="flex flex-col px-6 py-5">

          {/* HOME */}

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`border-b border-[#F8F4D8]/10 py-4 text-[10px] font-bold uppercase tracking-[0.35em] transition-colors ${
              isActive("/")
                ? "text-[#E95C8B]"
                : "text-[#F8F4D8]/60 hover:text-[#F8F4D8]"
            }`}
          >
            01 — Home
          </Link>


          {/* SOBRE */}

          <Link
            to="/sobre"
            onClick={() => setMenuOpen(false)}
            className={`border-b border-[#F8F4D8]/10 py-4 text-[10px] font-bold uppercase tracking-[0.35em] transition-colors ${
              isActive("/sobre")
                ? "text-[#E95C8B]"
                : "text-[#F8F4D8]/60 hover:text-[#F8F4D8]"
            }`}
          >
            02 — Sobre
          </Link>


          {/* PROJETOS */}

          <a
            href="#projetos"
            onClick={() => setMenuOpen(false)}
            className="border-b border-[#F8F4D8]/10 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#F8F4D8]/60 transition-colors hover:text-[#F8F4D8]"
          >
            03 — Projetos
          </a>


          {/* CONTATO */}

          <Link
            to="/contato"
            onClick={() => setMenuOpen(false)}
            className={`border-b border-[#F8F4D8]/10 py-4 text-[10px] font-bold uppercase tracking-[0.35em] transition-colors ${
              isActive("/contato")
                ? "text-[#E95C8B]"
                : "text-[#F8F4D8]/60 hover:text-[#F8F4D8]"
            }`}
          >
            04 — Contato
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default NavBar;