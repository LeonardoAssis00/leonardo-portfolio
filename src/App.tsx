import { Header } from "@/components/Header";
import { Home } from "@/pages/Home";
import { Sobre } from "@/pages/Sobre";
import { Projetos } from "@/pages/Projetos";
import { Contato } from "@/pages/Contato";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="bg-zinc-900 text-white">
      <Header />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
