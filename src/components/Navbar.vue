<script setup>
import { ref } from 'vue';
import { useTheme } from '../composables/useTheme';

const isOpen = ref(false);
const { isDark, toggleTheme } = useTheme();

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isOpen.value = false; // Fecha o menu após clicar
  }
};

const links = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Skills', id: 'habilidades' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contato', id: 'contato' }
];
</script>

<template>
  <nav class="fixed top-0 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-slate-700 z-50 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Desktop Menu -->
      <div class="hidden md:flex h-20 items-center justify-between">
        <div class="flex space-x-10 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <button
            v-for="link in links"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer bg-none border-none p-0"
          >
            {{ link.label }}
          </button>
        </div>
        <!-- Theme Toggle Desktop -->
        <button
          @click="toggleTheme"
          class="p-2 cursor-pointer bg-none border-none text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          :aria-label="`Ativar modo ${isDark ? 'claro' : 'escuro'}`"
        >
          <i v-if="!isDark" class="fas fa-sun text-lg"></i>
          <i v-else class="fas fa-moon text-lg"></i>
        </button>
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden h-20 flex items-center justify-end">
        <div class="flex items-center gap-2">
          <!-- Theme Toggle Mobile -->
          <button
            @click="toggleTheme"
            class="p-2 cursor-pointer bg-none border-none text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            :aria-label="`Ativar modo ${isDark ? 'claro' : 'escuro'}`"
          >
            <i v-if="!isDark" class="fas fa-sun text-lg"></i>
            <i v-else class="fas fa-moon text-lg"></i>
          </button>
          <button
            @click="isOpen = !isOpen"
            class="p-2 cursor-pointer bg-none border-none text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!isOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div
        v-if="isOpen"
        class="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 py-4 transition-colors duration-300"
      >
        <div class="flex flex-col space-y-4 px-2">
          <button
            v-for="link in links"
            :key="link.id"
            @click="scrollToSection(link.id)"
            class="text-left px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition cursor-pointer bg-none border-none"
          >
            {{ link.label }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
