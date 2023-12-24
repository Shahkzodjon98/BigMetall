<template>
      <div class="flex items-start  mx-10">
        <h2 class="text-black text-[32px] font-normal">{{ $t('ProductTopH0') }}</h2>
      </div>
  <div class=" flex items-center justify-center div">
    <table class="px-[45px] py-4 w-full border-separate border-spacing-y-2">
      <thead
        class="
          primary  bg-[#091E3A] bg-dark
        text-white font-serif font-bold"
      >
        <tr>
          <th class="noMobile p-3">{{ $t('ProductTopth1') }}</th>
              <th class="p-3">{{ $t('ProductTopth2') }}</th>
              <th class="noMobile p-3">{{ $t('ProductTopth4') }}</th>
              <th class="p-3"> {{ $t('ProductTopth5') }}</th>
        </tr>
      </thead>

      <tbody>
          <tr
          v-for="product in products" :key="product.id"
            class=" text-center font-medium
              primary hover:bg-dark hover:bg-secondary
             hover:text-white cursor-pointer border-b-4 border-t-4 bg-neutral-100 "
         
          >
          <td class="p-3 noMobile">{{ product.categories }}</td>
              <td class="p-3">{{ product.name }}</td>
              <td class="p-3 noMobile">{{ product.qalinligi }}</td>
            <td class="p-3">{{ product.price }}</td>
          </tr>
      </tbody>

    </table>
  </div>
</template>

<script setup>
const products = ref([
  {
    id: 1,
    // categories: "tttt",
    // name: "rrwer",
    // length: 43,
    // qalinligi: 66,
    // price: "343434343",
  },
  {
    id: 2,

  },
  {
    id: 3,
 
  },
  {
    id: 4,
  },
]);


</script>

<style scoped>
@media(max-width: 780px) {
     .cards {
          @apply justify-center;
     }
}

@media(max-width: 520px) {
     .cards {
       
     }

     .noMobile {
          @apply hidden;
     }
}
</style>




