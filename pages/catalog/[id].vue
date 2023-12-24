<template>

<div class=" p-[6%] sm:my-10 my-16">
  <div class=" sm:mx-10 mx-16">
  
        <select
          v-model="selectedCategory"
          class="p-2 flex items-center justify-center gap-12 rounded-[6px] outline-none capitalize border border-black"
        >
          <option>{{ $t('catalogoption') }}</option>
          <option v-for="(item, i) in categories" :key="i">
            {{ item }}
          </option>
        </select>
      </div>

      <div v-if="pending">
        <div class="loader"></div>
      </div>
      <div v-else-if="filteredProducts.length" class="div">
      
        <table class="w-full py-4 border-separate border-spacing-y-2" style="padding:16px 45px">
          <thead
            class="primary bg-[#091E3A] bg-dark text-white font-serif font-bold  "
          >
            <tr>
              <th class="noMobile p-3">{{ $t('ProductTopth1') }}</th>
              <th class="p-3">{{ $t('ProductTopth2') }}</th>
              <th class="noMobile p-3">{{ $t('ProductTopth4') }}</th>
              <th class="p-3"> {{ $t('ProductTopth5') }}</th>
              <th class="sm:p-3  p-2">Karzinka</th>
              
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in filteredProducts"
              :key="product.id"
              class=" text-center font-medium primary hover:bg-dark hover:bg-secondary hover:text-white cursor-pointer border-b-4 border-t-4 bg-neutral-100 "
            >
              <td class="p-3">{{ product.name }}</td>
              <td class="noMobile p-3">{{ product.category }}</td>
              <td class="p-3 noMobile">{{ product.qalinligi }}</td>
              <td class="p-3">{{ formatPrice(product.price) }}</td>



              <td @click="handle" class="p-1 px-3">
              <div
               v-if="!handleclick"
               @click="add(product)"
              class="block w-[32px] h-[32px] md:w-[48px] md:h-[48px] p-6 ml-10 rounded-[4px] bg-[#323750] hover:bg-[#4b4f63] text-white text-center"
              >
              <Icon
              name="mdi:shopping-cart"
              size="1.5rem"
              class="-mx-3 -mt-5"
              />
              </div>
              </td>



            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p class=" flex items-center justify-center capitalize">Tanlangan turkum uchun mahsulotlar mavjud emas.</p>
      </div>
</div>
   
</template>

<script setup>
import { useCartStore } from "~/store";
const counterStore = useCartStore();

const selectedCategory = ref('');
const products = ref([]);
const route = useRoute();
const pending = ref(true);
const loading = ref(false);


onMounted(async () => {
  try {
    pending.value = true;
    const response = await fetch(`https://admin.big-metall.uz/api/products`);
    const data = await response.json();
    selectedCategory.value = route.params.id.toLowerCase();
    products.value = [...data];
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    pending.value = false;
  }
});

const filteredProducts = computed(() => {
  return selectedCategory.value !== 'Ҳамма Маҳсулотлар'
    ? products.value.filter((product) => product.name === selectedCategory.value)
    : products.value.map((product) => ({ ...product, primary: false }));
});

const categories = computed(() => {
  const uniqueCategories = [...new Set(products.value.map((product) => product.name))];
  return [...uniqueCategories];
});

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'UZS',
  }).format(price);
};


// const handleclick = ref(false);
// const handle = () => {
//   handleclick.value = true;
// };


const add = (product) => {
  counterStore.addToCart(product);
};

</script>

<style scoped>
@media (max-width: 780px) {
  .cards {
    @apply justify-center;
  }
}

@media (max-width: 520px) {
  .cards {
  
  }

  .noMobile {
    display: none;
  }
}



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