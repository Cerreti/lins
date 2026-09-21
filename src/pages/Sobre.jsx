function Sobre() {
  const equipe = [
    {
      nome: "Nome da Pessoa",
      cargo: "Diretor Criativo",
      descricao:
        "Responsável pela direção criativa e pelo desenvolvimento das ideias que dão vida aos projetos da Rise Company.",
      foto: "/equipe/pessoa1.jpg",
    },
    {
      nome: "Nome da Pessoa",
      cargo: "Designer",
      descricao:
        "Transforma conceitos em identidades visuais, experiências e soluções que conectam marcas e pessoas.",
      foto: "/equipe/pessoa2.jpg",
    },
    {
      nome: "Nome da Pessoa",
      cargo: "Desenvolvedor",
      descricao:
        "Responsável por transformar ideias e conceitos em experiências digitais funcionais, modernas e interativas.",
      foto: "/equipe/pessoa3.jpg",
    },
    {
      nome: "Nome da Pessoa",
      cargo: "Marketing",
      descricao:
        "Cria estratégias para fortalecer marcas, aproximar pessoas e transformar comunicação em resultados.",
      foto: "/equipe/pessoa4.jpg",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] overflow-hidden bg-[#E6E47A] text-[#461B15]">

      {/* FAIXA LATERAL */}

      <div className="fixed left-0 top-0 z-40 h-full w-[4px] bg-[#E95C8B]" />


      {/* =====================================================
          CABEÇALHO
      ====================================================== */}

      <section className="relative mx-auto max-w-[1400px] px-[8%] pb-20 pt-32 md:pt-36">

        <div className="grid gap-12 md:grid-cols-[180px_1fr]">

          {/* NÚMERO */}

          <div>

            <div className="flex items-center gap-4">

              <span className="text-[10px] font-black text-[#E95C8B]">
                02
              </span>

              <div className="h-[2px] w-10 bg-[#461B15]/25" />

            </div>

            <span className="mt-4 block text-[8px] font-bold uppercase tracking-[0.35em] text-[#461B15]/45">
              Quem somos
            </span>

          </div>


          {/* TÍTULO */}

          <div className="max-w-[950px]">

            <p className="mb-6 text-[9px] font-black uppercase tracking-[0.5em] text-[#E95C8B]">
              Rise Company
            </p>

            <h1 className="text-[17vw] font-black leading-[0.75] tracking-[-0.08em] sm:text-[100px] md:text-[140px] lg:text-[170px]">

              Sobre

              <br />

              <span className="text-[#E95C8B]">
                nós.
              </span>

            </h1>


            <div className="mt-10 flex max-w-[720px] items-start gap-5">

              <div className="mt-2 h-[3px] w-10 shrink-0 bg-[#461B15] md:w-16" />

              <p className="text-[13px] font-medium leading-6 text-[#461B15]/65 md:text-[15px] md:leading-7">

                Somos uma equipe movida por criatividade,
                estratégia e tecnologia. Criamos experiências
                e identidades que transformam ideias em algo
                capaz de gerar conexão e impacto.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MANIFESTO
      ====================================================== */}

      <section className="bg-[#461B15] px-[8%] py-28 text-[#F8F4D8]">

        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[180px_1fr]">

          <div>

            <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C9C769]">
              Nossa ideia
            </span>

          </div>


          <div className="max-w-[950px]">

            <h2 className="text-[40px] font-black leading-[0.95] tracking-[-0.05em] sm:text-[55px] md:text-[75px]">

              Não queremos apenas
              <br />

              criar algo bonito.

              <br />

              <span className="text-[#E95C8B]">
                Queremos criar algo que fique.
              </span>

            </h2>


            <p className="mt-10 max-w-[650px] text-[12px] font-medium leading-6 text-[#F8F4D8]/55 md:text-[14px] md:leading-7">

              Cada projeto é uma oportunidade de experimentar,
              descobrir novas possibilidades e construir algo
              que realmente tenha significado para quem está
              do outro lado.

            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          EQUIPE
      ====================================================== */}

      <section className="bg-[#F8F4D8] px-[8%] py-28 text-[#461B15]">

        <div className="mx-auto max-w-[1400px]">

          {/* TÍTULO */}

          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#E95C8B]">
                Nossa equipe
              </span>

              <h2 className="mt-5 text-[50px] font-black leading-none tracking-[-0.06em] sm:text-[65px] md:text-[85px]">
                Quem faz
                <br />
                acontecer.
              </h2>

            </div>


            <p className="max-w-[300px] text-[11px] font-medium leading-5 text-[#461B15]/50">
              Pessoas diferentes, habilidades diferentes
              e uma mesma vontade: criar coisas incríveis.
            </p>

          </div>


          {/* GRID */}

          <div className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">

            {equipe.map((pessoa, index) => (

              <article
                key={index}
                className="group"
              >

                {/* FOTO */}

                <div className="relative aspect-[3/4] overflow-hidden bg-[#461B15]">

                  <img
                    src={pessoa.foto}
                    alt={pessoa.nome}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />


                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#461B15]/80 via-transparent to-transparent opacity-70" />


                  {/* NÚMERO */}

                  <span className="absolute bottom-4 left-4 text-[30px] font-black text-[#F8F4D8]/60">
                    0{index + 1}
                  </span>


                  {/* LINHA */}

                  <div className="absolute bottom-0 left-0 h-[5px] w-0 bg-[#E95C8B] transition-all duration-500 group-hover:w-full" />

                </div>


                {/* INFORMAÇÕES */}

                <div className="pt-5">

                  <p className="mb-2 text-[8px] font-black uppercase tracking-[0.4em] text-[#E95C8B]">
                    {pessoa.cargo}
                  </p>

                  <h3 className="text-[24px] font-black uppercase leading-none tracking-[-0.03em]">
                    {pessoa.nome}
                  </h3>

                  <p className="mt-4 text-[11px] font-medium leading-5 text-[#461B15]/50">
                    {pessoa.descricao}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL
      ====================================================== */}

      <section className="bg-[#E95C8B] px-[8%] py-24 text-[#461B15]">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>

            <span className="text-[9px] font-black uppercase tracking-[0.4em]">
              Rise Company
            </span>

            <h2 className="mt-5 max-w-[700px] text-[50px] font-black leading-[0.85] tracking-[-0.06em] sm:text-[65px] md:text-[90px]">

              Criar é só
              <br />

              o começo.

            </h2>

          </div>


          <div className="text-[40px] font-black md:text-[60px]">
            RISE.
          </div>

        </div>

      </section>


      {/* =====================================================
          RODAPÉ
      ====================================================== */}

      <footer className="bg-[#461B15] px-[8%] py-8 text-[#F8F4D8]">

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

export default Sobre;