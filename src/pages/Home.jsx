import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-[#DED973] text-[#3D1A16]">

      {/* FAIXA LATERAL */}

      <div className="fixed left-0 top-0 z-40 h-full w-[4px] bg-[#E46092]" />


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-screen flex-col px-[7%]">

        {/* CABEÇALHO */}

        <div className="flex items-center justify-between border-b border-[#3D1A16]/10 py-7">

          <span className="text-[9px] font-black uppercase tracking-[0.35em]">
            Rise Company
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#3D1A16]/40">
            Creative Studio
          </span>

        </div>


        {/* LOGO */}

        <div className="flex flex-1 items-center justify-center py-16">

          <div className="w-full max-w-[1200px]">

            <div className="mb-8 flex items-center justify-center gap-4">

              <span className="h-[2px] w-8 bg-[#E46092]" />

              <span className="text-[9px] font-black uppercase tracking-[0.45em] text-[#3D1A16]/55">
                Company · Design · Concept
              </span>

              <span className="h-[2px] w-8 bg-[#E46092]" />

            </div>


            {/* IMAGEM DA IDENTIDADE */}

            <div className="mx-auto w-full">

              <img
                src="/Sun.jpeg"
                alt="Rise Company"
                className="mx-auto block h-auto w-full max-w-[1100px] object-contain"
                draggable="false"
              />

            </div>


            {/* FRASE */}

            <div className="mt-10 flex flex-col items-center justify-center gap-5 text-center md:flex-row">

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#3D1A16]/45">
                Design
              </span>

              <span className="hidden h-px w-10 bg-[#3D1A16]/20 md:block" />

              <p className="max-w-[400px] text-[12px] font-medium leading-5 text-[#3D1A16]/60">
                Criatividade, estratégia e tecnologia
                para transformar ideias em experiências.
              </p>

              <span className="hidden h-px w-10 bg-[#3D1A16]/20 md:block" />

              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#3D1A16]/45">
                Concept
              </span>

            </div>


            {/* BOTÃO */}

            <div className="mt-10 flex justify-center">

              <Link
                to="/sobre"
                className="group flex items-center gap-8 bg-[#3D1A16] px-8 py-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8F4D8] transition-all duration-300 hover:bg-[#E46092]"
              >

                Conheça a Rise

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>


        {/* RODAPÉ DO HERO */}

        <div className="flex items-center justify-between border-t border-[#3D1A16]/10 py-5">

          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#3D1A16]/35">
            Brasil · 2026
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#3D1A16]/35">
            ↓ Role para explorar
          </span>

        </div>

      </section>


      {/* =====================================================
          ESTATÍSTICAS
      ====================================================== */}

      <section className="bg-[#3D1A16] px-[7%] py-20 text-[#F8F4D8]">

        <div className="mx-auto max-w-[1100px]">

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">


            {/* +300 */}

            <div>

              <span className="block font-serif text-[58px] italic leading-none tracking-[-0.05em] text-[#C9C769] sm:text-[65px] md:text-[75px]">
                +300
              </span>

              <div className="mt-4">

                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#F8F4D8]/65">
                  Marcas
                </span>

                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#F8F4D8]/65">
                  Atendidas
                </span>

              </div>

            </div>


            {/* 10 */}

            <div>

              <span className="block font-serif text-[58px] italic leading-none tracking-[-0.05em] text-[#C9C769] sm:text-[65px] md:text-[75px]">
                10
              </span>

              <div className="mt-4">

                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#F8F4D8]/65">
                  Anos
                </span>

                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#F8F4D8]/65">
                  De mercado
                </span>

              </div>

            </div>


            {/* 9K+ */}

            <div>

              <span className="block font-serif text-[58px] italic leading-none tracking-[-0.05em] text-[#C9C769] sm:text-[65px] md:text-[75px]">
                1K+
              </span>

              <div className="mt-4">

                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#F8F4D8]/65">
                  De vidas
                </span>

                <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#F8F4D8]/65">
                  transformadas
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOBRE
      ====================================================== */}

      <section className="bg-[#F8F4D8] px-[8%] py-32">

        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[180px_1fr]">

          <div>

            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#E46092]">
              01 — Sobre
            </span>

          </div>


          <div className="max-w-[950px]">

            <h2 className="text-[42px] font-black leading-[0.95] tracking-[-0.05em] sm:text-[55px] md:text-[75px]">

              Ideias não precisam
              <br />

              apenas existir.

              <br />

              <span className="text-[#E46092]">
                Elas precisam crescer.
              </span>

            </h2>


            <p className="mt-10 max-w-[600px] text-[12px] font-medium leading-6 text-[#3D1A16]/55 md:text-[14px] md:leading-7">

              A Rise Company é um estúdio criativo focado em
              transformar ideias em marcas, experiências e
              soluções digitais que realmente tenham identidade.

            </p>


            <Link
              to="/sobre"
              className="group mt-8 inline-flex items-center gap-6 border-b-2 border-[#3D1A16]/20 pb-3 text-[9px] font-bold uppercase tracking-[0.3em] transition-colors hover:border-[#E46092]"
            >

              Saiba mais

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          ESPECIALIDADES
      ====================================================== */}

      <section className="bg-[#3D1A16] px-[8%] py-32 text-[#F8F4D8]">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-16">

            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#C9C769]">
              02 — Especialidades
            </span>

            <h2 className="mt-6 text-[50px] font-black leading-none tracking-[-0.06em] sm:text-[65px] md:text-[85px]">
              O que fazemos
            </h2>

          </div>


          <div className="border-t border-[#F8F4D8]/15">

            <div className="flex items-center justify-between border-b border-[#F8F4D8]/15 py-8">

              <span className="text-[28px] font-black md:text-[40px]">
                Branding
              </span>

              <span className="text-[10px] text-[#F8F4D8]/30">
                01
              </span>

            </div>


            <div className="flex items-center justify-between border-b border-[#F8F4D8]/15 py-8">

              <span className="text-[28px] font-black md:text-[40px]">
                Design
              </span>

              <span className="text-[10px] text-[#F8F4D8]/30">
                02
              </span>

            </div>


            <div className="flex items-center justify-between border-b border-[#F8F4D8]/15 py-8">

              <span className="text-[28px] font-black md:text-[40px]">
                Marketing
              </span>

              <span className="text-[10px] text-[#F8F4D8]/30">
                03
              </span>

            </div>


            <div className="flex items-center justify-between border-b border-[#F8F4D8]/15 py-8">

              <span className="text-[28px] font-black md:text-[40px]">
                Desenvolvimento Web
              </span>

              <span className="text-[10px] text-[#F8F4D8]/30">
                04
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-[#E46092] px-[8%] py-28 text-[#3D1A16]">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 md:flex-row md:items-end">

          <div>

            <span className="text-[9px] font-black uppercase tracking-[0.4em]">
              Vamos criar juntos?
            </span>

            <h2 className="mt-6 text-[55px] font-black leading-[0.85] tracking-[-0.06em] sm:text-[70px] md:text-[95px]">

              Tem uma ideia?

              <br />

              <span className="text-[#F8F4D8]">
                Vamos criar.
              </span>

            </h2>

          </div>


          <Link
            to="/contato"
            className="group flex w-fit items-center gap-8 bg-[#3D1A16] px-8 py-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8F4D8] transition-all duration-300 hover:bg-[#F8F4D8] hover:text-[#3D1A16]"
          >

            Entrar em contato

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#3D1A16] px-[8%] py-8 text-[#F8F4D8]">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-[#F8F4D8]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#F8F4D8]/40">
            Rise Company © 2026
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#F8F4D8]/40">
            Estratégia · Design · Tecnologia
          </span>

        </div>

      </footer>

    </main>
  );
}

export default Home;