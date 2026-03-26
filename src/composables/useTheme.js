import { ref, watch } from 'vue';

const isDark = ref(false);

export function useTheme() {
  // Inicializar tema
  const initTheme = () => {
    const stored = localStorage.getItem('theme');
    
    if (stored) {
      // Usar preferência salva
      isDark.value = stored === 'dark';
    } else {
      // Usar preferência do sistema
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    applyTheme();
  };

  // Atualizar meta tag de tema para iOS Safari
  const updateThemeColor = () => {
    const metaThemeColor = document.getElementById('theme-color-meta');
    if (metaThemeColor) {
      if (isDark.value) {
        // Cor escura para modo escuro
        metaThemeColor.setAttribute('content', '#0f172a');
      } else {
        // Cor clara para modo claro
        metaThemeColor.setAttribute('content', '#f8fafc');
      }
    }
  };

  // Aplicar tema ao DOM
  const applyTheme = () => {
    const html = document.documentElement;
    if (isDark.value) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    updateThemeColor();
  };

  // Alternar tema
  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  // Observar mudanças
  watch(isDark, applyTheme);

  return {
    isDark,
    initTheme,
    toggleTheme,
  };
}
