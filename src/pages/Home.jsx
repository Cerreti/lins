import "@google/model-viewer";

function Home() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#242624] text-white">

      {/* FAIXA ROSA */}
      <div className="absolute left-0 top-0 h-full w-[55px] bg-[#ed809d] md:w-[75px]" />

      {/* LINHAS */}
      <div className="absolute left-[55px] right-0 top-0 h-px bg-white/10 md:left-[75px]" />
      <div className="absolute bottom-0 left-[55px] right-0 h-px bg-white/10 md:left-[75px]" />

      {/* DECORAÇÃO SUPERIOR */}
      <img
        src="/HomeIcon.png"
        alt=""
        className="pointer-events-none absolute left-[65px] top-[25px] size-[180px] rotate-180 object-contain opacity-30 md:left-[100px] md:size-[260px]"
      />

      {/* DECORAÇÃO INFERIOR */}
      <img
        src="/HomeIcon.png"
        alt=""
        className="pointer-events-none absolute bottom-[-30px] right-[-20px] size-[220px] object-contain opacity-30 md:size-[300px]"
      />

      {/* PEQUENA LINHA LATERAL */}
      <div className="absolute left-[85px] top-[250px] hidden h-[130px] w-px bg-white/30 md:block" />

      {/* NÚMERO */}
      <div className="absolute left-[70px] top-[110px] z-20 md:left-[105px]">
        <span className="font-serif text-[28px] text-white/30 md:text-[34px]">
          01
        </span>

        <div className="mt-2 h-px w-8 bg-[#ed809d]" />
      </div>

      {/* TÍTULO */}
      <section className="absolute left-[90px] top-[150px] z-20 md:left-[160px] md:top-[150px]">

        <p className="mb-5 text-[9px] uppercase tracking-[0.5em] text-[#ed809d] md:text-[11px]">
          Creative Studio
        </p>

        <h1 className="font-serif uppercase leading-[0.8] tracking-[-0.06em]">

          <span className="block text-[72px] sm:text-[90px] md:text-[120px]">
            {"RISE".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:text-[#ed809d]"
              >
                {letter}
              </span>
            ))}
          </span>

          <span className="mt-5 block text-[28px] font-light tracking-[0.25em] text-white/70 sm:text-[36px] md:text-[46px]">
            COMPANY
          </span>

        </h1>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px w-12 bg-[#ed809d] md:w-20" />

          <span className="text-[8px] uppercase tracking-[0.35em] text-white/40 md:text-[10px]">
            Digital • Creative • Identity
          </span>
        </div>

      </section>

      {/* MODELO 3D */}
      <div className="absolute left-[50%] top-[52%] z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 md:left-[57%] md:top-[53%] md:h-[680px] md:w-[680px]">

        {/* HALO ATRÁS DO MODELO */}
        <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ed809d]/10 blur-[80px]" />

        <model-viewer
          src="/silent_ash.glb"
          alt="Modelo 3D"
          shadow-intensity="1"
          exposure="1"
          auto-rotate
          rotation-per-second="20deg"
          camera-orbit="0deg 110deg 0deg"
          disable-zoom
          className="relative h-full w-full"
        />

      </div>

      {/* TEXTO DIREITO */}
      <section className="absolute right-[6%] top-[125px] z-20 hidden w-[280px] lg:block">

        <div className="mb-7 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ed809d]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50">
            Our approach
          </span>
        </div>

        <p className="mb-7 font-serif text-[25px] leading-tight text-white/90">
          Ideas that become
          <span className="text-[#ed809d]"> identity.</span>
        </p>

        <ul className="space-y-5 border-l border-white/10 pl-5">

          <li className="text-[12px] leading-5 text-white/55 transition-colors duration-300 hover:text-white">
            Transformando ideias em resultados.
          </li>

          <li className="text-[12px] leading-5 text-white/55 transition-colors duration-300 hover:text-white">
            Marketing que conecta pessoas.
          </li>

          <li className="text-[12px] leading-5 text-white/55 transition-colors duration-300 hover:text-white">
            Sua marca, nosso propósito.
          </li>

          <li className="text-[12px] leading-5 text-white/55 transition-colors duration-300 hover:text-white">
            Criatividade que gera impacto.
          </li>

        </ul>

        <button className="group mt-9 flex items-center gap-5 border border-white/20 px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.35em] transition-all duration-300 hover:border-[#ed809d] hover:bg-[#ed809d]">
          Explorar

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>

      </section>

      {/* TEXTO MOBILE */}
      <section className="absolute bottom-[40px] left-[90px] right-6 z-20 lg:hidden">

        <p className="max-w-[320px] font-serif text-[21px] leading-tight text-white/80">
          Ideas that become
          <span className="text-[#ed809d]"> identity.</span>
        </p>

        <button className="group mt-5 flex items-center gap-4 border border-white/20 px-5 py-3 text-[9px] uppercase tracking-[0.3em] transition hover:border-[#ed809d] hover:bg-[#ed809d]">
          Explorar
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>

      </section>

      {/* RODAPÉ DECORATIVO */}
      <div className="absolute bottom-7 left-[70px] z-20 text-[8px] tracking-[0.35em] text-white/30 md:left-[105px]">
        RISE COMPANY
      </div>

      <div className="absolute bottom-7 right-[7%] hidden items-center gap-4 lg:flex">
        <span className="text-[9px] tracking-[0.3em] text-white/30">
          SCROLL TO EXPLORE
        </span>

        <div className="h-px w-24 bg-white/20" />
      </div>

    </main>
  );
}

export default Home;
