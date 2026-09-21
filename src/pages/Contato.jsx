import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Contato() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#E6E47A] text-[#461B15]">

      {/* LINHAS DE FUNDO */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[6%] top-0 h-full w-px bg-[#461B15]/10" />

        <div className="absolute right-[6%] top-0 h-full w-px bg-[#461B15]/10" />

        <div className="absolute left-0 right-0 top-0 h-px bg-[#461B15]/10" />

      </div>


      {/* FAIXA LATERAL */}

      <div className="fixed left-0 top-0 z-50 h-full w-[4px] bg-[#E95C8B]" />


      {/* CONTEÚDO */}

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] flex-col justify-center px-[8%] py-24">

        {/* CABEÇALHO */}

        <div className="mb-12">

          <div className="mb-6 flex items-center gap-4">

            <span className="text-[9px] font-bold tracking-[0.35em] text-[#461B15]/40">
              04
            </span>

            <div className="h-[2px] w-8 bg-[#E95C8B]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#461B15]/50">
              Entre em contato
            </span>

          </div>


          <h1 className="max-w-[900px] text-[16vw] font-black leading-[0.78] tracking-[-0.07em] sm:text-[100px] md:text-[130px] lg:text-[160px]">

            Vamos

            <br />

            <span className="text-[#E95C8B]">
              conversar.
            </span>

          </h1>

        </div>


        {/* PARTE INFERIOR */}

        <div className="grid gap-12 border-t-2 border-[#461B15]/10 pt-10 md:grid-cols-[1fr_1fr]">


          {/* =====================================================
              QUADRADO DE CONTATOS
          ====================================================== */}

          <div>

            <div className="flex min-h-[280px] flex-col items-center justify-center border-[3px] border-[#E95C8B] bg-[#F8F4D8] px-8 py-10 text-center">

              <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#461B15]">
                Contatos
              </span>


              {/* REDES */}

              <div className="mt-8 flex items-center gap-5">


                {/* INSTAGRAM */}

                <a
                  href="https://instagram.com/risecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Rise Company"
                  className="group flex h-14 w-14 items-center justify-center border-2 border-[#461B15] text-[#461B15] transition-all duration-300 hover:border-[#E95C8B] hover:bg-[#E95C8B]"
                >

                  <FaInstagram
                    size={23}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                </a>


                {/* WHATSAPP */}

                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Rise Company"
                  className="group flex h-14 w-14 items-center justify-center border-2 border-[#461B15] text-[#461B15] transition-all duration-300 hover:border-[#C9C769] hover:bg-[#C9C769]"
                >

                  <FaWhatsapp
                    size={23}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                </a>


                {/* E-MAIL */}

                <a
                  href="mailto:contato@risecompany.com"
                  aria-label="Enviar e-mail para a Rise Company"
                  className="group flex h-14 w-14 items-center justify-center border-2 border-[#461B15] text-[#461B15] transition-all duration-300 hover:border-[#E95C8B] hover:bg-[#E95C8B]"
                >

                  <FaEnvelope
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                </a>

              </div>


              {/* E-MAIL */}

              <a
                href="mailto:contato@risecompany.com"
                className="mt-8 text-[12px] font-medium text-[#461B15]/70 transition-colors hover:text-[#E95C8B]"
              >
                contato@risecompany.com
              </a>

            </div>


            {/* BOTÃO VOLTAR */}

            <div className="mt-10 text-center">

              <a
                href="/"
                className="inline-block bg-[#461B15] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8F4D8] transition-colors hover:bg-[#E95C8B] hover:text-[#461B15]"
              >
                Voltar
              </a>

            </div>

          </div>


          {/* =====================================================
              TEXTO + INFORMAÇÕES
          ====================================================== */}

          <div>

            <p className="max-w-[400px] text-[22px] font-black leading-7 tracking-[-0.03em]">
              Tem uma ideia, projeto ou simplesmente quer
              conhecer melhor a Rise?
            </p>

            <p className="mt-5 max-w-[400px] text-[11px] font-medium leading-6 text-[#461B15]/55">
              Conte um pouco sobre o que você precisa.
              Vamos entender seu projeto e encontrar a
              melhor forma de transformar sua ideia em algo
              real.
            </p>


            {/* INFORMAÇÕES */}

            <div className="mt-10 grid gap-8 sm:grid-cols-2">


              {/* EMAIL */}

              <div>

                <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.3em] text-[#461B15]/40">
                  E-mail
                </span>

                <a
                  href="mailto:contato@risecompany.com"
                  className="text-[12px] font-medium transition-colors hover:text-[#E95C8B]"
                >
                  contato@risecompany.com
                </a>

              </div>


              {/* WHATSAPP */}

              <div>

                <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.3em] text-[#461B15]/40">
                  WhatsApp
                </span>

                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-medium transition-colors hover:text-[#E95C8B]"
                >
                  Falar pelo WhatsApp
                </a>

              </div>


              {/* INSTAGRAM */}

              <div>

                <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.3em] text-[#461B15]/40">
                  Instagram
                </span>

                <a
                  href="https://instagram.com/risecompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-medium transition-colors hover:text-[#E95C8B]"
                >
                  @risecompany
                </a>

              </div>


              {/* LOCALIZAÇÃO */}

              <div>

                <span className="mb-3 block text-[8px] font-bold uppercase tracking-[0.3em] text-[#461B15]/40">
                  Localização
                </span>

                <span className="text-[12px] font-medium">
                  Brasil
                </span>

              </div>

            </div>


            {/* BOTÃO */}

            <a
              href="mailto:contato@risecompany.com"
              className="group mt-10 inline-flex items-center gap-8 bg-[#461B15] px-7 py-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#F8F4D8] transition-all duration-300 hover:bg-[#E95C8B] hover:text-[#461B15]"
            >

              Iniciar conversa

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

            </a>

          </div>

        </div>


        {/* RODAPÉ */}

        <div className="mt-20 flex flex-col gap-4 border-t-2 border-[#461B15]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#461B15]/35">
            Rise Company © 2026
          </span>

          <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-[#461B15]/35">
            Estratégia · Design · Tecnologia
          </span>

        </div>

      </section>

    </main>
  );
}

export default Contato;