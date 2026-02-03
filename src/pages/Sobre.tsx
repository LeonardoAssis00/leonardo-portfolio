import { Instagram, Linkedin, Github } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export function Sobre() {
  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        flex
        items-center
        bg-linear-to-b
        from-black
        via-zinc-900
        to-black
        overflow-hidden
      "
    >
      {/* Glow de fundo */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-150
          h-150
          bg-red-600/10
          blur-[140px]
          rounded-full
        "
      />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-14
          px-6
        "
      >
        {/* Lado esquerdo - Texto */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre mim
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Sou desenvolvedor front-end e mobile, focado em criar interfaces
            modernas, funcionais e bem estruturadas. Venho de uma trajetória
            prática, sempre buscando evoluir tecnicamente e transformar ideias
            em soluções reais através do código.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mt-4">
            Trabalho principalmente com React, React Native e tecnologias web
            modernas, prezando por código limpo, boa experiência do usuário e
            atenção aos detalhes visuais.
          </p>

          {/* Ícones sociais */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 mt-8"
          >
            <a
              href="https://www.instagram.com/leonardoassis75"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-red-500
                hover:text-red-400
                transition
                duration-300
                drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]
                hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)]
                hover:scale-135
              "
            >
              <Instagram size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/leonardo-assis-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-red-500
                hover:text-red-400
                transition
                duration-300
                drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]
                hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)]
                hover:scale-135
              "
            >
              <Linkedin size={28} />
            </a>

            <a
              href="https://github.com/leonardoassis00"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-red-500
                hover:text-red-400
                transition
                duration-300
                drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]
                hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)]
                hover:scale-135
              "
            >
              <Github size={28} />
            </a>
          </motion.div>
        </motion.div>

        {/* Lado direito - Foto com moldura neon */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Glow externo */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                bg-red-500/20
                blur-2xl
              "
            />

            {/* Moldura neon */}
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                border-2
                border-red-500
                shadow-[0_0_30px_#ef4444]
                overflow-hidden
              "
            />

            {/* Foto */}
            <div className="relative z-10 w-80 h-96 rounded-2xl overflow-hidden">
              <img
                src="/foto.png"
                alt="Leonardo Assis"
                className="
                  w-full
                  h-full
                  object-cover
                  scale-120
                  object-[50%_20%]
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
