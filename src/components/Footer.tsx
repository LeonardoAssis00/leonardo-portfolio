import { Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="
        relative
        bg-black
        border-t
        border-red-500/30
        pt-10
      "
    >
      {/* Glow superior */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-96
          h-20
          bg-red-600/20
          blur-[80px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-6
          py-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        {/* Texto */}
        <p className="text-zinc-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Leonardo Assis</span> —
          Desenvolvedor Front-end & Mobile
        </p>

        {/* Ícones sociais */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/leonardoassis75"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-red-500
              hover:text-red-400
              transition
              drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]
              hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)]
            "
          >
            <Instagram size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/leonardo-assis-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-red-500
              hover:text-red-400
              transition
              drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]
              hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)]
            "
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/leonardoassis00"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-red-500
              hover:text-red-400
              transition
              drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]
              hover:drop-shadow-[0_0_20px_rgba(239,68,68,1)]
            "
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
