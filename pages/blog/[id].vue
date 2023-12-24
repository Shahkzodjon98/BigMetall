<template>
  <div class="p-[6%]">
    <div v-if="pending" class="text-center my-8">
      <div class="loader"></div>
    </div>
    <div v-else>
      <div class="my-container">
        <img :src="`http://194.87.252.227:3035/${blog.photo}`" class="w-full h-auto" />

        <div class="p-4 flex items-center justify-center flex-col gap-10">
          <h2 class="text-xl font-bold">{{ blog.title }}</h2>

          <span>{{ blog.description }}</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
const blog = ref([]);
const pending = ref(true);
const route = useRoute()
onMounted(async () => {
  try {
    const response = await axios.get(`http://194.87.252.227:3035/api/blogs/${route.params.id}`);
    console.log(route.params.id)
    blog.value = response.data;
    pending.value = false; // Set pending to false when data is loaded
  } catch (error) {
    console.error("Error fetching blogs:", error);
    pending.value = false; // Set pending to false in case of an error
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