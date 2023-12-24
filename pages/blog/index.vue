<template>
  <section class="container mx-auto px-4 my-32">
    <div v-if="pending" class="text-center">
      <div class="loader"></div>
    </div>
    <div v-else class="flex flex-wrap justify-around mt-8 pt-6">
      <div v-for="blog in blogs" :key="blog._id" class="p-3 rounded-3xl shadow-2xl w-full sm:w-[full] md:w-[48%] lg:w-[30%] sm:my-0 my-10">
        <div class="h-[280px] bg-cover bg-center rounded-md" :style="{ backgroundImage: `url(http://194.87.252.227:3035/${blog.photo})` }"></div>
        <span class="text-black/80 text-sm my-2 block">
          <Icon name="iconamoon:clock-light" class="mr-2 text-sm" /> {{ new Date(blog.createdAt).toLocaleString() }}
        </span>
        <h3 class="font-semibold text-lg">{{ blog.title }}</h3>
        <h5 class="text-sm my-2 truncate" :class="{ 'truncate': !blog.isExpanded }">
          {{ blog.description }}
        </h5>
        <a :href="`/blog/${blog._id}`">
          <button class="w-full bg-[#323750] text-white hover:text-black p-1 rounded font-medium transition-colors border border-white hover:border-[#323750] hover:bg-white bg-transparent;">
            <Icon name="iconoir:eye-solid" class="mr-2 text-sm" /> {{ $t('BlogButton') }}
          </button>
        </a>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

let blogs = ref([]);
let pending = ref(true);

onMounted(async () => {
  try {
    let res = await axios.get('https://admin.big-metall.uz/api/blogs');
    blogs.value = res.data;
    pending.value = false;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    pending.value = false;
  }
});


</script>


<style scoped>

.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  background:linear-gradient(90deg,#000 50%,#0000 0) right/200% 100%;
  animation: l21 2s infinite linear;
}
.loader::before {
  content :"Loading...";
  color: #0000;
  padding: 0 5px;
  background: inherit;
  background-image: linear-gradient(90deg,#fff 50%,#000 0);
  -webkit-background-clip:text;
          background-clip:text;
}

@keyframes l21{
  100%{background-position: left}
}
</style>