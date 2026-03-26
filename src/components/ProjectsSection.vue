<script setup>
import ProjectCard from './ProjectCard.vue';
import fastproteseImage from '../assets/projetos/fastprotese.png';
</script>

<template>
  <section id="projetos" class="py-24 bg-white dark:bg-slate-900 px-6 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-4xl font-extrabold mb-16 text-slate-900 dark:text-slate-50 text-center transition-colors duration-300">Projetos em Destaque</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard
          title="FastPrótese"
          :technologies="['PHP', 'Laravel', 'Livewire', 'MySQL', 'Linux', 'SASS', 'Alpine.js', 'MaryUI']"
          :image="fastproteseImage"
          date="2026"
          link="https://fastprotese.com.br"
          :icons="['fab fa-php', 'fas fa-database', 'fab fa-linux']"
          :aos-delay="0"
        >
          <template #description>
            <p class="mb-3">
              Sistema para gestão de laboratórios de próteses dentárias com foco em produtividade e rastreabilidade.
            </p>
            <ul class="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>Projeto Laravel robusto e seguro</li>
              <li>Multi-tenant single-database</li>
              <li>Hospedagem em ambiente Linux</li>
            </ul>
          </template>
        </ProjectCard>
      </div>
    </div>
  </section>
</template>
