<script setup>
import { ref } from 'vue';
import ProjectModal from './ProjectModal.vue';

const selectedProject = ref(null);
const isModalOpen = ref(false);

const projects = [
  {
    id: 1,
    title: 'Fastprótese',
    description: 'Desenvolvimento de sistema escalável para gestão de próteses dentárias com automação de infraestrutura.',
    technologies: ['PHP', 'MySQL', 'Linux', 'SASS'],
    image: 'https://via.placeholder.com/600x400',
    date: '2026',
    icons: ['fab fa-php', 'fas fa-database', 'fab fa-linux'],
  },
];

const openProjectModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};
</script>

<template>
  <section id="projetos" class="py-24 bg-white px-6">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-4xl font-extrabold mb-16 text-slate-900 text-center">Projetos em Destaque</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="project in projects"
          :key="project.id"
          @click="openProjectModal(project)"
          data-aos="fade-up"
          class="project-card group cursor-pointer"
        >
          <!-- Imagem com overlay -->
          <div class="relative overflow-hidden rounded-[2rem] shadow-lg mb-6">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8"
            >
              <span class="text-white font-bold text-lg">Ver Detalhes</span>
            </div>
          </div>

          <!-- Informações do projeto -->
          <h4 class="text-2xl font-extrabold text-slate-900 mb-2">{{ project.title }}</h4>
          <div class="flex gap-4 text-blue-500 text-lg">
            <i v-for="(icon, index) in project.icons" :key="index" :class="icon"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ProjectModal :is-open="isModalOpen" :project="selectedProject" @close="closeModal" />
  </section>
</template>

<style scoped>
.project-card {
  transition: all 0.3s ease;
}
</style>
