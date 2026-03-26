<script setup>
import { ref, defineProps } from 'vue';
import ProjectModal from './ProjectModal.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  icons: {
    type: Array,
    default: () => [],
  },
  description: {
    type: String,
    default: '',
  },
  technologies: {
    type: Array,
    default: () => [],
  },
  date: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
  aosDelay: {
    type: Number,
    default: 0,
  },
});

const isModalOpen = ref(false);

const openProject = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div>
    <div
      @click="openProject"
      data-aos="fade-up"
      :data-aos-delay="aosDelay"
      class="project-card group cursor-pointer"
    >
      <div class="relative overflow-hidden rounded-[2rem] shadow-lg dark:shadow-slate-800 mb-6 transition-shadow duration-300">
        <img
          :src="image"
          :alt="title"
          class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8"
        >
          <span class="text-white font-bold text-lg">Ver Detalhes</span>
        </div>
      </div>

      <h4 class="text-2xl font-extrabold text-slate-900 dark:text-slate-50 mb-2 transition-colors duration-300">{{ title }}</h4>
      <div class="flex gap-4 text-blue-500 dark:text-blue-400 text-lg transition-colors duration-300">
        <i v-for="(icon, index) in icons" :key="index" :class="icon"></i>
      </div>
    </div>

    <ProjectModal :is-open="isModalOpen" @close="closeModal">
      <template #image>
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover"
        />
      </template>

      <template #content>
        <span class="text-blue-600 dark:text-blue-400 font-bold text-xs md:text-sm mb-3 md:mb-4 transition-colors duration-300">
          {{ date }}
        </span>
        <h3 class="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4 md:mb-6 transition-colors duration-300">
          {{ title }}
        </h3>

        <div class="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed transition-colors duration-300">
          <slot name="description">
            <p>{{ description }}</p>
          </slot>
        </div>

        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="mb-6 inline-flex items-center justify-center w-fit px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base transition-colors duration-300"
        >
          Ver mais
        </a>

        <div v-if="technologies.length" class="tech-scroll overflow-x-auto pb-1">
          <div class="flex items-center gap-2 md:gap-3 w-max">
            <span
              v-for="(tech, index) in technologies"
              :key="index"
              class="text-blue-600 dark:text-blue-400 font-semibold text-xs md:text-sm bg-blue-50 dark:bg-blue-950/50 px-3 md:px-4 py-1 md:py-2 rounded-lg transition-colors duration-300 whitespace-nowrap"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </template>
    </ProjectModal>
  </div>
</template>

<style scoped>
.project-card {
  transition: all 0.3s ease;
}

.tech-scroll {
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 transparent;
}

.tech-scroll::-webkit-scrollbar {
  height: 8px;
}

.tech-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.tech-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #93c5fd, #60a5fa);
  border-radius: 9999px;
}

.tech-scroll::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, #60a5fa, #3b82f6);
}

:global(.dark) .tech-scroll {
  scrollbar-color: #475569 transparent;
}

:global(.dark) .tech-scroll::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #334155, #475569);
}

:global(.dark) .tech-scroll::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, #475569, #64748b);
}
</style>