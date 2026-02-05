import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import type { FormEvent } from "react";

export function Contato() {
  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail",
        "template_lde0bkd",
        e.currentTarget,
        "Tyk1BamOOJQp9Ux2A",
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          e.currentTarget.reset();
        },
        (error) => {
          console.error("Erro EmailJS:", error);
          alert("Erro ao enviar a mensagem 😥");
        },
      );
  }

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
        <div className="relative rounded-2xl p-0.5 bg-red-500/80 shadow-[0_0_30px_rgba(255,0,0,0.6)]">
          <div className="rounded-2xl bg-neutral-950 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Contato
            </h2>

            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-1">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Escreva sua mensagem..."
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-2 text-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 rounded-lg py-3 font-semibold text-white bg-red-600 hover:bg-red-500 transition"
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
