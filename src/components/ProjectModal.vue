<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);

const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    emit('close');
  }
};
</script>

<template>
  <div
    v-if="isOpen"
    class="modal-overlay fixed inset-0 bg-slate-900/90 dark:bg-slate-950/95 backdrop-blur-sm z-[100] flex items-center justify-center p-4 transition-colors duration-300 overflow-y-auto"
    @click="handleBackdropClick"
  >
    <div class="bg-white dark:bg-slate-900 w-full max-w-4xl md:max-w-6xl rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-slate-800 relative flex flex-col md:flex-row animate-in transition-colors duration-300 my-auto max-h-[90vh]">
      <!-- Botão fechar -->
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 z-10 flex items-center justify-center border-none cursor-pointer transition-colors duration-300"
      >
        <i class="fas fa-times text-slate-800 dark:text-slate-200 text-sm md:text-base"></i>
      </button>

      <!-- Imagem -->
      <div class="md:w-[58%] md:aspect-[5/4] w-full h-48 md:h-auto flex-shrink-0">
        <slot name="image" />
      </div>

      <!-- Conteúdo -->
      <div class="p-6 md:p-10 md:w-[42%] w-full flex flex-col justify-center overflow-y-auto max-h-[calc(90vh-12rem)] md:max-h-none">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  height: 100dvh;
}

.animate-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }
}
</style>
