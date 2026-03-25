<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <section id="contato" class="py-24 px-6 bg-slate-900 text-white rounded-t-[50px] md:rounded-t-[100px]">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <!-- Seção esquerda - Texto -->
      <div data-aos="fade-right">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Vamos trabalhar <span class="text-blue-400">juntos?</span>
        </h2>
        <div class="space-y-6">
          <!-- Email -->
          <div class="flex items-center gap-5">
            <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
              <i class="fas fa-envelope"></i>
            </div>
            <span class="text-lg opacity-80">alison117gh@gmail.com</span>
          </div>

          <!-- WhatsApp -->
          <div class="flex items-center gap-5">
            <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400">
              <i class="fab fa-whatsapp"></i>
            </div>
            <span class="text-lg opacity-80">(47) 99104-5272</span>
          </div>

          <!-- Redes Sociais -->
          <div class="flex items-center gap-5 pt-6">
            <a
              href="https://www.linkedin.com/in/alison-antonio-loffi/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 hover:bg-white/20 hover:text-blue-300 transition-all"
            >
              <i class="fab fa-linkedin-in text-lg"></i>
            </a>
            <a
              href="https://github.com/Alison4kk"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 hover:bg-white/20 hover:text-blue-300 transition-all"
            >
              <i class="fab fa-github text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Seção direita - Ícone de Código Animado -->
      <div class="flex items-center justify-center h-full" data-aos="fade-left">
        <div class="code-icon-container">
          <i class="fas fa-code" style="font-size: 180px;"></i>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-24 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
      &copy; {{ currentYear }} Álison Antonio Loffi | Ituporanga, SC
    </footer>
  </section>
</template>

<style scoped>
.code-icon-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
}

.code-icon-container i {
  color: white;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
  filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.3));
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
}

</style>
