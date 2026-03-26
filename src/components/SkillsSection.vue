<script setup>
const livewireSvg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Livewire--Streamline-Simple-Icons">
<path d="M12.001 0C6.1735 0 1.4482 4.9569 1.4482 11.0723c0 2.0888 0.5518 4.0417 1.5098 5.709 0.2492 0.2796 0.544 0.4843 0.9649 0.4843 1.3388 0 1.2678 -2.0644 2.6074 -2.0644 1.3395 0 1.4111 2.0644 2.75 2.0644 1.3388 0 1.2659 -2.0644 2.6054 -2.0644 0.5845 0 0.9278 0.3967 1.2403 0.8398 -0.2213 -0.2055 -0.4794 -0.3476 -0.8203 -0.3476 -1.1956 0 -1.3063 1.6771 -2.2012 2.1406v4.5097c0 0.9145 0.7418 1.6563 1.6562 1.6563 0.9145 0 1.6563 -0.7418 1.6563 -1.6563v-5.8925c0.308 0.4332 0.647 0.8144 1.2207 0.8144 1.3388 0 1.266 -2.0644 2.6055 -2.0644 0.465 0 0.7734 0.2552 1.039 0.58 -0.1294 -0.0533 -0.2695 -0.0878 -0.4297 -0.0878 -1.1582 0 -1.296 1.574 -2.1171 2.0937v2.4356c0 0.823 0.6672 1.4902 1.4902 1.4902s1.4902 -0.6672 1.4902 -1.4902V16.371c0.3234 0.4657 0.6684 0.8945 1.2774 0.8945 0.7955 0 1.093 -0.7287 1.4843 -1.3203 0.6878 -1.4704 1.0743 -3.1245 1.0743 -4.873C22.5518 4.9569 17.8284 0 12.001 0zm-0.5664 2.877c2.8797 0 5.2148 2.7836 5.2148 5.8066 0 3.023 -1.5455 5.1504 -5.2148 5.1504 -3.6693 0 -5.2149 -2.1274 -5.2149 -5.1504S8.5548 2.877 11.4346 2.877zm-1.4024 1.66a1.9554 2.1583 0 0 0 -1.955 2.1582 1.9554 2.1583 0 0 0 1.955 2.1582 1.9554 2.1583 0 0 0 1.9551 -2.1582 1.9554 2.1583 0 0 0 -1.955 -2.1582zm-0.3261 0.664a0.9777 0.9961 0 0 1 0.9785 0.9962 0.9777 0.9961 0 0 1 -0.9785 0.996 0.9777 0.9961 0 0 1 -0.9766 -0.996 0.9777 0.9961 0 0 1 0.9766 -0.9961zM6.7568 15.6935c-1.0746 0 -1.2724 1.3542 -1.9511 1.9648v1.7813c0 0.823 0.6672 1.4902 1.4902 1.4902s1.4902 -0.6672 1.4902 -1.4902v-3.1817c-0.2643 -0.3237 -0.5767 -0.5644 -1.0293 -0.5644Z" fill="#000000" stroke-width="1"></path>
</svg>`;

const alpineSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"  stroke-linecap="round" stroke-linejoin="round" id="Brand-Alpine-Js--Streamline-Tabler">
  <desc>
    Brand Alpine Js Streamline Icon: https://streamlinehq.com
  </desc>
  <path d="M3 11.5 7.5 16h9l-9 -9z" stroke-width="2"></path>
  <path d="m16.5 16 4.5 -4.5L16.5 7 12 11.5" stroke-width="2"></path>
</svg>`;

const skills = [
  {
    id: 1,
    icon: 'fab fa-php',
    name: 'PHP',
    color: '#777BB4',
  },
  {
    id: 2,
    icon: 'fab fa-laravel',
    name: 'Laravel',
    color: '#FF2D20',
  },
  {
    id: 3,
    icon: 'fab fa-vuejs',
    name: 'Vue.js',
    color: '#42b883',
  },
  {
    id: 4,
    icon: 'fab fa-js',
    name: 'TS / JS',
    color: '#f7df1e',
  },
  {
    id: 5,
    icon: 'fab fa-node',
    name: 'Node.js',
    color: '#339933',
  },
  {
    id: 6,
    icon: 'fab fa-sass',
    name: 'CSS / SASS',
    color: '#CC6699',
  },
  {
    id: 7,
    icon: 'svg',
    svg: alpineSvg,
    name: 'Alpine.js',
    color: '#77C1D3',
  },
  {
    id: 8,
    icon: 'svg',
    svg: livewireSvg,
    name: 'Livewire / Volt',
    color: '#FB70A9',
  },
  {
    id: 9,
    icon: 'fab fa-docker',
    name: 'Docker',
    color: '#2496ED',
  },
  {
    id: 10,
    icon: 'fas fa-database',
    name: 'MySQL',
    color: '#00758F',
  },
  {
    id: 11,
    icon: 'fab fa-aws',
    name: 'AWS',
    color: '#FF9900',
  },
  {
    id: 12,
    icon: 'fab fa-linux',
    name: 'Linux',
    color: '#000000',
  },
];
</script>

<template>
  <section id="habilidades" class="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-center text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 transition-colors duration-300">
        Competências
      </h2>
      <h3 class="text-center text-4xl font-extrabold mb-16 text-slate-900 dark:text-slate-50 transition-colors duration-300">Minha Stack</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.id"
          :data-aos="'zoom-in'"
          class="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center hover:shadow-xl dark:hover:shadow-slate-800 hover:-translate-y-2 transition-all group cursor-default"
        >
          <div v-if="skill.icon === 'svg'" class="text-5xl text-blue-400 dark:text-blue-500 group-hover:transition-colors mb-4 svg-icon" :style="{ '--hover-color': skill.color }" v-html="skill.svg"></div>
          <i v-else :class="skill.icon" class="text-5xl text-blue-400 dark:text-blue-500 group-hover:transition-colors mb-4"
            :style="{ '--hover-color': skill.color }"
          ></i>
          <span class="font-bold text-slate-700 dark:text-slate-300 transition-colors duration-300">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover i {
  color: var(--hover-color, inherit);
}

.svg-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
}

.svg-icon :deep(path) {
  fill: rgb(96, 165, 250);
  transition: fill 0.3s;
}

.group:hover .svg-icon :deep(path) {
  fill: var(--hover-color, inherit);
}
</style>
