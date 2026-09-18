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
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#242624] text-white">

      {/* FAIXA LATERAL */}
      <div className="absolute left-0 top-0 h-full w-[55px] bg-[#ed809d] md:w-[75px]" />

      {/* LINHAS */}
      <div className="absolute left-[55px] right-0 top-0 h-px bg-white/10 md:left-[75px]" />

      <div className="absolute bottom-0 left-[55px] right-0 h-px bg-white/10 md:left-[75px]" />

      {/* DECORAÇÃO */}
      <img
        src="/HomeIcon.png"
        alt=""
        className="pointer-events-none absolute left-[70px] top-[20px] size-[180px] rotate-180 object-contain opacity-20 md:left-[100px] md:size-[250px]"
      />

      <img
        src="/HomeIcon.png"
        alt=""
        className="pointer-events-none absolute bottom-[-40px] right-[-20px] size-[230px] object-contain opacity-20 md:size-[300px]"
      />

      {/* NÚMERO */}
      <div className="absolute left-[70px] top-[105px] md:left-[105px]">
        <span className="font-serif text-[30px] text-white/30">
          02
        </span>

        <div className="mt-2 h-px w-8 bg-[#ed809d]" />
      </div>

      {/* CABEÇALHO */}
      <section className="relative z-10 ml-[90px] mr-6 pt-[120px] md:ml-[160px] md:mr-16 md:pt-[125px]">

        <div className="max-w-[850px]">

          <p className="mb-5 text-[9px] uppercase tracking-[0.5em] text-[#ed809d] md:text-[11px]">
            Who we are
          </p>

          <h1 className="font-serif text-[58px] uppercase leading-[0.85] tracking-[-0.05em] sm:text-[75px] md:text-[105px]">
            Sobre
            <span className="text-[#ed809d]"> nós.</span>
          </h1>

          <div className="mt-8 flex max-w-[650px] items-start gap-5">

            <div className="mt-2 h-px w-12 shrink-0 bg-[#ed809d] md:w-20" />

            <p className="text-[13px] leading-6 text-white/55 md:text-[15px] md:leading-7">
              Somos uma equipe movida por criatividade, estratégia e
              tecnologia. Criamos experiências e identidades que transformam
              ideias em algo capaz de gerar conexão e impacto.
            </p>

          </div>

        </div>
      </section>

      {/* EQUIPE */}
      <section className="relative z-10 ml-[90px] mr-6 mt-20 pb-24 md:ml-[160px] md:mr-16 md:mt-24">

        <div className="mb-10 flex items-center gap-4">

          <span className="h-2 w-2 rounded-full bg-[#ed809d]" />

          <span className="text-[10px] uppercase tracking-[0.4em] text-white/45">
            Nossa equipe
          </span>

          <div className="h-px w-20 bg-white/10" />

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">

          {equipe.map((pessoa, index) => (
            <article
              key={index}
              className="group max-w-[320px]"
            >

              {/* FOTO */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#303330]">

                <img
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                {/* NÚMERO */}
                <span className="absolute bottom-4 left-4 font-serif text-[28px] text-white/40">
                  0{index + 1}
                </span>

                {/* LINHA ROSA */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ed809d] transition-all duration-500 group-hover:w-full" />

              </div>

              {/* INFORMAÇÕES */}
              <div className="pt-5">

                <p className="mb-2 text-[9px] uppercase tracking-[0.4em] text-[#ed809d]">
                  {pessoa.cargo}
                </p>

                <h2 className="font-serif text-[25px] uppercase tracking-tight text-white">
                  {pessoa.nome}
                </h2>

                <p className="mt-3 text-[12px] leading-5 text-white/45">
                  {pessoa.descricao}
                </p>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* RODAPÉ */}
      <div className="absolute bottom-7 left-[70px] text-[8px] tracking-[0.35em] text-white/25 md:left-[105px]">
        RISE COMPANY
      </div>

      <div className="absolute bottom-7 right-[7%] hidden items-center gap-4 lg:flex">

        <span className="text-[9px] tracking-[0.3em] text-white/25">
          OUR PEOPLE
        </span>

        <div className="h-px w-24 bg-white/15" />

      </div>

    </main>
  );
}

export default Sobre;