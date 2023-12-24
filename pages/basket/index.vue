<template>
  <div class="container mx-auto px-8 my-24">
    <div class="flex items-center justify-between">
      <h1
        class="font-medium leading-[36px] not-italic text-[24px] font-'DM Sans'"
      >
        {{ $t('BasketH1')}}
      </h1>
      <button
      @click="clearCart"
        class="inline-flex rounded-[4px] bg-[#323750] text-[#F4F7F8] items-center justify-center gap-[12px]"
        style="padding: 4.5px 12px"
      >
        {{ $t('BasketButton')}}
        <Icon name="material-symbols-light:delete-outline" size="24" />
      </button>
    </div>
    <div>
    <div 
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px] p-6"
    >
      <div
      v-for="item in products" :key="item"
        class="w-[285px] rounded-[12px]"
        style="
          border: 0.5px solid var(--55555555, #d6d6d6);
          background: #fff;
          box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
        "
      >
        <button @click="clearProduct(item)" class="p-4">
          <Icon name="bi:x" size="36" color="black" />
        </button>

        <div class="flex items-center flex-col">
          <img src="/Truba.png" alt="" />
          <div class="space-y-4">
            <p
              class="text-[18px] font-medium leading-[36px] not-italic text-[#000000] font-'DM Sans' capitalize text-center"
            >{{ item.name }}</p>
            <span
              class="text-[18px] font-bold leading-[27px] not-italic font-'DM Sans' text-[#000000] text-center"
            >
              {{ item.price.toLocaleString("en-US").replace(/,/g, " ") }} {{ $t('BasketSpan1')}}
            </span>
            <div class="flex items-center flex-row gap-[12px] justify-center">
              <button
              @click="deleteItem(item)"
                class="p-[8px] flex items-center justify-center rounded-[4px] bg-[#F2F2F2]"
              >
                <Icon name="icon-park-outline:minus" size="16" />
              </button>
              <span
                class="font-'DM Sans' text-[18px] not-italic font-medium leading-[27px] text-[#202020]"
              >
              <div class="cursor-no-drop">
              {{ item.quantity }}
              </div>
              </span>
              <button
              @click="addItem(item)"
                class="p-[8px] flex items-center justify-center rounded-[4px] bg-[#F2F2F2]"
              >
                <Icon name="prime:plus" size="16" />
              </button>
            </div>
          </div>
        </div>
        <div
          class="w-[285px] h-[47px]  bg-[#323750] rounded-b-[12px] mt-4  text-white  text-lg font-bold font-'DM Sans' leading-[27px] text-center flex items-center justify-center flex-row "
        >
        {{`${(item.price * item.quantity).toLocaleString("en-US").replace(/,/g, " ")} ${ $t('BasketSpanDiv') }`}}
        </div>
      </div>
    </div>
    </div>

    <div
      class="w-[1200px] h-px sm:flex hidden items-center justify-center my-10 bg-neutral-400 mx-auto"
    />

    <div class="flex items-center flex-col gap-3 sm:flex-row sm:justify-between">
      <div class="flex items-start flex-col gap-3">
        <span
          class="text-neutral-800 text-lg font-normal font-'DM Sans' leading-[27px] "
        >
          {{ $t('BasketSpan2') }}
        </span>
        <p
          class="text-neutral-800 text-2xl font-medium font-'DM Sans' leading-[27px]"
        >{{ totalPrice.toLocaleString("en-US").replace(/,/g, " ") }} so‘m</p>
      </div>

      <a
        href="/basket/submit"
        class="w-[286px] h-[43px] rounded-[4px] bg-[#323750] text-[#FFFFFF] flex items-center justify-center"
        style="padding: 6px 24px;"
      >
        {{ $t('BasketSpanA') }}
      </a>

    </div>
  </div>
</template>
<script setup>
import {useCartStore} from "~/store";
let shop = useCartStore();

const products = ref([])
onMounted(()=> {
  products.value = shop.getCounter();
})
const addItem = (item) => {
  shop.addToCart(item)
}
const deleteItem = (item) => {
  shop.deleteFromCart(item)
}

const clearCart = () => {
  shop.clearCart()
  window.location.reload()
}
const clearProduct = (item) => {
  shop.clearProduct(item)
}

let totalPrice = computed(() => {
  return products.value.reduce((total, item) => {
    return total + item.quantity * item.price ;
  }, 0);
});

</script>
