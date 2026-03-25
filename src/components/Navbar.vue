<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <nav class="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-slate-200 z-50">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-center">
      <div class="hidden md:flex space-x-10 text-sm font-bold uppercase tracking-widest text-slate-500">
        <button
          @click="scrollToSection('sobre')"
          class="hover:text-blue-600 transition cursor-pointer bg-none border-none p-0"
        >
          Sobre
        </button>
        <button
          @click="scrollToSection('habilidades')"
          class="hover:text-blue-600 transition cursor-pointer bg-none border-none p-0"
        >
          Skills
        </button>
        <button
          @click="scrollToSection('projetos')"
          class="hover:text-blue-600 transition cursor-pointer bg-none border-none p-0"
        >
          Projetos
        </button>
        <button
          @click="scrollToSection('contato')"
          class="hover:text-blue-600 transition cursor-pointer bg-none border-none p-0"
        >
          Contato
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
button {
  font-family: inherit;
}
</style>
