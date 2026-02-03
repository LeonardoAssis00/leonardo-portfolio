import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-zinc-950/70 backdrop-blur-md
        border-b border-red-600/30
        shadow-[0_0_20px_rgba(255,0,0,0.15)]
      "
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Nome / Logo */}
        <span className="text-white font-bold text-lg tracking-wide">
          Leonardo{" "}
          <span className="text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] transition">
            Assis
          </span>
        </span>

        {/* Navegação */}
        <nav className="flex gap-4">
          {["Sobre", "Projetos", "Contato"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="
                text-zinc-300
                hover:text-red-400
                relative
                transition-all
                duration-300
                after:content-['']
                after:absolute
                after:left-2
                after:-bottom-1
                after:w-0
                after:h-0.5
                after:bg-red-500
                after:shadow-[0_0_10px_rgba(255,0,0,0.8)]
                hover:after:w-[calc(100%-16px)]
                after:transition-all
                after:duration-300
              "
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
