<template>
    <div class="p-[6%] h-full my-10 lg:my-0">
      <div class="container mx-auto bg-white rounded-t-3xl py-8 lg:max-w-[1200px]">
        <div class="flex items-center justify-between lg:mx-16 mx-2 pb-[2%]">
          <a href="/basket">
            <div>
                <img src="/icons/backicon.svg" alt="" />
            </div>
          </a>
       
        </div>
        <div class="flex justify-center lg:mx-24">
          <form class="flex flex-col max-w-[90%]" @submit="handleSubmit">
            <input
              type="text"
              :placeholder="$t('BasketInput1')"
              class="text-2xl border py-3 px-10 rounded-3xl mb-[10%]"
              :class="{ 'border-lime-700': name, 'border-red-500': !name }"
              v-model="name"
            />
            <input
              type="text"
              :placeholder="$t('BasketInput2')"
              class="text-2xl border py-3 px-10 rounded-3xl mb-[80%]"
              :class="phoneClasses"
              v-model="phone"
            />
            <button
              type="submit"
              class="font-semibold bg-[#323750] text-center text-[#fff] rounded-3xl px-10 py-3 text-2xl"
            >
              {{ $t('BasketButton2') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { useCartStore } from "~/store";
  import Swal from 'sweetalert2';
  
  const getCounterStore = useCartStore();
let name = ref("");
let phone = ref("");
  
const phoneClasses = computed(() => {
  return {
    "border-lime-700": phone.value && phone.value.length >= 7,
    "border-red-500": !phone.value || phone.value.length < 7,
  };
});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.value || !phone.value || phone.value.length < 7) {
      return;
    } else {
      let text = `<b>Name:</b> ${name.value}\n<b>Phone</b>: ${phone.value}\n<b>Order</b>:`;
    getCounterStore.count.forEach((item) => {
      text += `\n<b>ID</b>: ${item.id}\n<b>Name</b>: ${item.name}\n<b>Price</b>: ${item.price}\n<b>Quantity</b>: ${item.quantity}\n---------`;
    });
  
    axios.post("YOUR_API_URL_HERE", { text })
      .then((res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tez orada siz bilan operahrefrlar bog\'lanadi'
        });
      })
      .catch((err) => {
        // Handle the error more gracefully (show a user-friendly message)
        console.error(err);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something went wrong. Please try again later.'
        });
      });
  }
};
  </script>
  