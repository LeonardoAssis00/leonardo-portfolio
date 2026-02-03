import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center text-center gap-8 px-4 bg-linear-to-br from-red-800 via-black to-black">
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Desenvolvedor Front-end & Mobile
      </h1>

      <p className="text-zinc-400 max-w-xl">
        Crio aplicações modernas com React e React Native, focadas em
        performance, usabilidade e código limpo.
      </p>

      <div className="flex gap-6 pb-6">
        <Button
          asChild
          variant="outline"
          className="
        border-red-600
        text-white
        bg-transparent
        shadow-[0_0_15px_rgba(255,0,0,0.8),0_0_30px_rgba(255,0,0,0.6)]
        hover:shadow-[0_0_25px_rgba(255,0,0,1),0_0_50px_rgba(255,0,0,0.9)]
        hover:bg-red-600/10
        hover:text-red-400
        transition-all
        duration-300
      "
        >
          <a
            href="/cv/curriculo-leonardo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>

        <Button
          className="relative
            bg-red-600
            text-white
            font-bold
            px-6
            py-3
            shadow-[0_0_15px_rgba(255,0,0,0.8),0_0_30px_rgba(255,0,0,0.6)]
            hover:shadow-[0_0_25px_rgba(255,0,0,1),0_0_50px_rgba(255,0,0,0.9)]
            hover:bg-red-500
            transition-all
            duration-300"
        >
          <a href="#contato">Contato</a>
        </Button>
      </div>

      {/* Tecnologias */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 ">
        {[
          { name: "HTML5", src: "/icons/html.svg" },
          { name: "CSS3", src: "/icons/css.svg" },
          { name: "JavaScript", src: "/icons/javascript.svg" },
          { name: "React", src: "/icons/react.svg" },
          { name: "React Native", src: "/icons/react.svg" },
          { name: "TypeScript", src: "/icons/typescript.svg" },
          { name: "Tailwind", src: "/icons/tailwind.svg" },
          { name: "Node.js", src: "/icons/nodejs.svg" },
        ].map((tech) => (
          <div
            key={tech.name}
            className="
        group
        flex flex-col items-center
        gap-2
        opacity-80
        transition-all
        duration-300
        hover:opacity-100
        
      "
          >
            <div
              className="
          w-12 h-12
          flex items-center justify-center
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:drop-shadow-[0_0_12px_rgba(255,0,0,0.7)]
        "
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <span
              className="
          text-xs
          text-zinc-400
          group-hover:text-red-400
          transition-colors
          duration-300
        "
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-zinc-500 text-xs tracking-widest">
          {" "}
          <a href="#about">SCROLL</a>{" "}
        </span>

        <div className="w-6 h-6 border-b-2 border-r-2 border-zinc-500 rotate-45"></div>
      </div>
    </section>
  );
}
