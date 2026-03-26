<script setup>
import { onMounted } from 'vue';
import { useTheme } from './composables/useTheme';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';

const { initTheme } = useTheme();

onMounted(() => {
  // Inicializar tema
  initTheme();

  // Importar e inicializar AOS
  import('aos').then((AOS) => {
    AOS.default.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  });
});
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-x-hidden transition-colors duration-300">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>
