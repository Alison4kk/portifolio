<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section class="relative pt-40 pb-24 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
    <div class="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 dark:bg-blue-950/20 rounded-bl-[100px] transition-colors duration-300"></div>
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <!-- Imagem com efeito de glow -->
      <div class="relative" data-aos="fade-right">
        <div class="absolute -inset-4 bg-gradient-main rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
        <div class="relative w-56 h-56 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-800 transition-colors duration-300">
          <img
            src="/src/assets/foto.jpeg"
            alt="Alison Antonio Loffi"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Conteúdo textual -->
      <div class="text-center md:text-left flex-1" data-aos="fade-left">
        <h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-50 mb-6 leading-tight transition-colors duration-300">
          Olá, eu sou o <span class="text-gradient">Alison.</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium transition-colors duration-300">
          Desenvolvedor Full Stack Pleno
        </p>
        <div class="flex flex-wrap justify-center md:justify-start gap-5">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/alison-antonio-loffi/"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
          >
            <i class="fab fa-linkedin-in text-xl"></i>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/Alison4kk"
            target="_blank"
            rel="noopener noreferrer"
            class="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl hover:text-slate-900 dark:hover:text-slate-100 hover:shadow-md transition-all duration-300"
          >
            <i class="fab fa-github text-xl"></i>
          </a>

          <!-- Botão Contato -->
          <button
            @click="scrollToSection('contato')"
            class="px-8 py-3.5 bg-gradient-main text-white rounded-2xl font-bold shadow-lg shadow-blue-200 dark:shadow-blue-950 hover:scale-105 transition-transform cursor-pointer border-none"
          >
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-gradient-main {
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
}

.text-gradient {
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

button {
  font-family: inherit;
}
</style>
