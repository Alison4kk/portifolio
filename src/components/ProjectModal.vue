<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  project: Object,
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
    class="modal-overlay fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
    @click="handleBackdropClick"
  >
    <div class="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in">
      <!-- Botão fechar -->
      <button
        @click="$emit('close')"
        class="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-full hover:bg-slate-200 z-10 flex items-center justify-center border-none cursor-pointer transition-colors"
      >
        <i class="fas fa-times text-slate-800"></i>
      </button>

      <!-- Imagem -->
      <div class="md:w-1/2">
        <img
          v-if="project"
          :src="project.image"
          :alt="project.title"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Conteúdo -->
      <div class="p-10 md:w-1/2 flex flex-col justify-center">
        <span v-if="project" class="text-blue-600 font-bold text-sm mb-4">
          {{ project.date }}
        </span>
        <h3 v-if="project" class="text-4xl font-extrabold text-slate-900 mb-6">
          {{ project.title }}
        </h3>
        <p v-if="project" class="text-slate-600 text-lg mb-8 leading-relaxed">
          {{ project.description }}
        </p>
        <div v-if="project && project.technologies" class="flex items-center gap-6 flex-wrap">
          <span
            v-for="(tech, index) in project.technologies"
            :key="index"
            class="text-blue-500 font-semibold text-sm bg-blue-50 px-4 py-2 rounded-lg"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
