<template>
  <div class="container mx-auto px-4 my-32">
    <section
      class="flex items-center justify-around flex-wrap mt-8 py-12 border-y border-y-[#f2f2f2] border-t border-t-[#f2f2f2]"
    >
      <form class="max-w-lg mt-10" @submit="submitForm">
        <h3 class="font-medium text-3xl">{{ $t('ContactPageH3') }}</h3>
        <p class="font-medium my-4">
         {{ $t('ContactPageP') }}
        </p>
        <input
          v-model="name"
          class="outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1"
          required
          type="text"
          :placeholder="$t('ContactPageInput')"
        />
        <input
          v-model="phone"
          class="outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1"
          required
          type="text"
          :placeholder="$t('ContactPageInput2')"
        />
        <input
          v-model="message"
          class="outline-none border-b border-b-[#D9D9D9] block w-full my-10 p-1"
          required
          type="text"
          :placeholder="$t('ContactPageInput3')"
        />

        <button
          type="submit"
          class="w-full bg-[#1950DD] p-2 rounded text-white font-medium transition-transform scale-105"
        >
          {{ $t('ContactPageButton') }} <Icon name="fluent:send-16-filled" class="ml-2" />
        </button>
      </form>

      <div class="bg-[#323750] h-[384px] p-8 px-12 relative mt-10">
        <div
          class="w-[60px] h-[60px] bg-[#F4F7F8] absolute top-0 left-0 -mx-8 -mt-8"
        />
        <h4 class="font-semibold text-2xl text-white font-['Libre Franklin']">
          {{ $t('ConatctPageH4') }}
        </h4>
        <a href="">
          <h6
            class="font-semibold text-lg text-white font-'Libre Franklin' my-6"
          >
            <Icon name="wpf:message-outline" /> bigmetall.uz
          </h6>
        </a>
        <a href="">
          <h6 class="font-semibold text-lg text-white my-6">
            <Icon name="carbon:phone" /> +99 899 999 99 99
          </h6>
        </a>
        <h6 class="font-semibold text-lg text-white my-6">
          <Icon name="bytesize:location" />{{ $t('ContactPageH6') }}
        </h6>
        <h6 class="font-semibold text-lg text-white my-6">
          <Icon name="quill:clock" /> 9:00 - 18:00
        </h6>
      </div>
    </section>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import axios from "axios";

let name = ref("");
let phone = ref("");
let message = ref("");

const submitForm = async (e) => {
  e.preventDefault();
  try {
    await axios.post("https://ts-express.vercel.app/sendMessage", {
      name: name.value,
      phone: phone.value,
      message: message.value,
    });
    Swal.fire({
      icon: "success",
      title: "Operatorlarimiz siz bilan bog'lana olishdi",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Operatorlarimiz siz bilan bog'lana olishmadi",
    });
  }
};
</script>
