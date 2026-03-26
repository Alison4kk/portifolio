<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <section id="contato" class="py-24 px-6 bg-slate-900 dark:bg-slate-800 text-white rounded-t-[50px] md:rounded-t-[100px] transition-colors duration-300">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <!-- Seção esquerda - Texto -->
      <div data-aos="fade-right">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Vamos trabalhar <span class="text-blue-400 dark:text-blue-300">juntos?</span>
        </h2>
        <div class="space-y-6">
          <!-- Email -->
          <div class="flex items-center gap-5">
            <div class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-2xl flex items-center justify-center text-blue-400 dark:text-blue-300 transition-colors duration-300">
              <i class="fas fa-envelope"></i>
            </div>
            <span class="text-lg opacity-80 dark:opacity-90">alison117gh@gmail.com</span>
          </div>
          
          <!-- Redes Sociais -->
          <a
            href="https://www.linkedin.com/in/alison-antonio-loffi/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-5 group"
          >
            <div class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-2xl flex items-center justify-center text-blue-400 dark:text-blue-300 group-hover:bg-white/20 dark:group-hover:bg-white/30 group-hover:text-blue-300 dark:group-hover:text-blue-200 transition-all duration-300">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <span class="text-lg opacity-80 dark:opacity-90 group-hover:text-blue-200 transition-colors duration-300">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Alison4kk"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-5 group"
          >
            <div class="w-12 h-12 bg-white/10 dark:bg-white/20 rounded-2xl flex items-center justify-center text-blue-400 dark:text-blue-300 group-hover:bg-white/20 dark:group-hover:bg-white/30 group-hover:text-blue-300 dark:group-hover:text-blue-200 transition-all duration-300">
              <i class="fab fa-github"></i>
            </div>
            <span class="text-lg opacity-80 dark:opacity-90 group-hover:text-blue-200 transition-colors duration-300">GitHub</span>
          </a>
        </div>
      </div>

      <!-- Seção direita - Formulário de Contato -->
      <div class="w-full" data-aos="fade-left">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          class="w-full rounded-[2rem] bg-white/10 dark:bg-white/10 backdrop-blur-sm border border-white/20 p-6 md:p-8 shadow-2xl"
        >
          <input
            type="hidden"
            name="access_key"
            value="c5fdd428-d917-45b8-90b7-d1241c639c14"
          />

          <input type="hidden" name="subject" value="Novo contato do portfólio" />
          <input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

          <div class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-semibold text-slate-200 mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Seu nome"
                class="w-full rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 px-4 py-3 outline-none border border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-semibold text-slate-200 mb-2">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="voce@email.com"
                class="w-full rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 px-4 py-3 outline-none border border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-semibold text-slate-200 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Me conte sobre seu projeto..."
                class="w-full rounded-xl bg-white/90 text-slate-900 placeholder:text-slate-500 px-4 py-3 outline-none border border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-900/30 hover:scale-[1.01] transition-all duration-300"
            >
              <i class="fas fa-paper-plane"></i>
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-24 pt-8 border-t border-white/10 dark:border-white/20 text-center text-white/40 dark:text-white/50 text-sm transition-colors duration-300">
      &copy; {{ currentYear }} Álison Antonio Loffi | Ituporanga, SC
    </footer>
  </section>
</template>

