import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  isExternal?: boolean;
  stack: string[];
}

const projects: Project[] = [
  {
    title: "Barber System",
    description:
      "Sistema de agendamento para barbearias criado com React + Tailwind CSS e Supabase, focado em organização de horários e melhor experiência para clientes e barbeiros. Projeto desenvolvido para resolver um problema real do dia a dia de barbearias.",
    image: "/imagens/barber-system.png",
    link: "https://barber-system-pink.vercel.app/",
    isExternal: true,
    stack: ["React", "Vite", "Tailwind", "Shadcn/ui", "Supabase", "Git"],
  },
  {
    title: "Finance Native",
    description:
      "Aplicativo mobile para gestão financeira pessoal, criado com React Native, permitindo cadastrar receitas e despesas, visualizar gráficos interativos, relatórios por período e acompanhar a organização financeira de forma prática e intuitiva.",
    image: "/imagens/finance-native.png",
    link: "https://drive.google.com/uc?export=download&id=1t8OPdIr34xmZikmhvWzYXU677jNHrQwU",
    isExternal: true,
    stack: ["React Native", "Expo", "TypeScript", "Git"],
  },
  {
    title: "Curriculo Fácil",
    description:
      "Aplicação web para criação de currículos profissionais de forma simples e rápida, o usuário preenche seus dados, visualiza o currículo em tempo real e pode exportá-lo em PDF pronto para impressão. Desenvolvido com React JS, TypeSript e Tailwind CSS , utilizando gerenciamento de estado com Context API e geração de PDF integrada",
    image: "/imagens/curriculoFacil.png",
    link: "https://curriculo-facil-tau.vercel.app/",
    isExternal: true,
    stack: [
      "React",
      "TypeScript",
      "Shadcn/ui",
      "Context API",
      "React-to-print",
      "Git",
    ],
  },
];

export function Projetos() {
  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        bg-linear-to-b
        from-black
        via-zinc-900
        to-black
        overflow-hidden
        px-6
        py-20
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

      {/* Título */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 z-10 relative"
      >
        Meus Projetos
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 z-10 relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              relative
              rounded-2xl
              overflow-hidden
              border-2 border-red-500
              shadow-[0_0_30px_#ef4444]
              flex
              flex-col
              max-w-md
              mx-auto
              bg-black/40
            "
          >
            {/* Imagem */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* Stack badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-30">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      text-xs
                      font-semibold
                      px-3
                      py-1
                      rounded-full
                      bg-black/80
                      text-red-400
                      border border-red-500/60
                      shadow-[0_0_10px_rgba(239,68,68,0.8)]
                      backdrop-blur
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm">{project.description}</p>
              </div>

              {/* Botão */}
              <a
                href={project.link}
                target={project.isExternal ? "_blank" : "_self"}
                download={!project.isExternal}
                className="
                  mt-6
                  inline-block
                  text-red-500
                  font-semibold
                  py-2
                  px-4
                  border-2 border-red-500
                  rounded-md
                  text-center
                  hover:text-red-400
                  hover:border-red-400
                  shadow-[0_0_10px_rgba(239,68,68,0.8)]
                  hover:shadow-[0_0_20px_rgba(239,68,68,1)]
                  transition
                  duration-300
                "
              >
                {project.isExternal ? "Ver Projeto" : "Download APK"}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
