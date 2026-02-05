import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contato" },
  ];
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
        {/* Logo */}
        <a href="#home" className="text-white font-bold text-lg tracking-wide">
          Leonardo{" "}
          <span className="text-red-500 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] transition">
            Assis
          </span>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className="
                text-zinc-300
                text-sm
                font-medium
                hover:text-red-400
                relative
                transition-colors
                duration-300
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-0.5
                after:bg-red-500
                after:shadow-[0_0_10px_rgba(255,0,0,0.8)]
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-zinc-300 hover:text-red-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur border-t border-zinc-800">
          <nav className="flex flex-col items-center gap-6 py-6">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-lg
                  text-zinc-300
                  font-medium
                  transition-colors
                  duration-300
                  hover:text-red-400
                "
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
