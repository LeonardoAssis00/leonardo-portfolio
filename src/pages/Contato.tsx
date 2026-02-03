import { motion } from "framer-motion";

export function Contato() {
  return (
    <section
      id="contato"
      className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-black via-neutral-950 to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-md mx-auto"
      >
        {/* Card com moldura neon */}
        <div className="relative rounded-2xl p-0.5 bg-red-500/80 shadow-[0_0_30px_rgba(255,0,0,0.6)]">
          <div className="rounded-2xl bg-neutral-950 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Contato
            </h2>

            <form className="space-y-5">
              {/* Nome */}
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-1.5 text-white outline-none focus:border-red-500 focus:shadow-[0_0_10px_rgba(255,0,0,0.5)] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-3 text-white outline-none focus:border-red-500 focus:shadow-[0_0_10px_rgba(255,0,0,0.5)] transition"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Mensagem
                </label>
                <textarea
                  rows={3}
                  placeholder="Escreva sua mensagem..."
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-white outline-none resize-none focus:border-red-500 focus:shadow-[0_0_10px_rgba(255,0,0,0.5)] transition"
                />
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full mt-4 rounded-lg py-3 font-semibold text-white bg-red-600 hover:bg-red-500 transition shadow-[0_0_15px_rgba(255,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,0,0,0.9)]"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
