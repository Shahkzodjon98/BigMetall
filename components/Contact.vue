<template>
  <div class="flex items-center justify-center  w-full">
    <div class="bg-secondary w-full rounded-[8px] mt-52 mx-[6%] p-[40px]">
      <div class="container flex flex-col  items-center justify-between mx-auto lg:flex-row">
        <div class="grid grid-cols-1 gap-10 ">
          <div class="flex">
            <div class="p-4 my-10">
              <Icon name="subway:location-3" size="32" color="#FFFFFF80" />
            </div>
            <div class="flex flex-col items-start space-y-4">
              <h1 class="text-fiveColor text-[18px] text-lg font-semibold">
                {{ $t('ContactH1') }}
              </h1>
              <div class=" space-y-10">
                <p class="text-white w-[70%]  text-opacity-70 text-xs  lg:text-xs font-semibold">
                {{ $t('ContactP') }}
                </p>
              </div>
              <div
                class="flex items-center gap-2 px-[20px] py-[6px] bg-thirdColor text-white text-xs font-semibold rounded"
              >
                <button @click="openUrl" class="">{{ $t('ContactButton') }}</button>
                <Icon name="tdesign:location-1" size="12" color="#FFFFFF" />
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="p-3 my-8">
              <Icon name="charm:phone" size="32" color="#FFFFFF80" />
            </div>
            <div class="flex flex-col items-start space-y-4">
              <h1 class="text-fiveColor text-[18px] text-lg font-semibold">
               {{ $t('ContactH') }}
              </h1>
              <div class="flex flex-col space-y-4">
                <a
                  href="mailto:sarvarhakimov99@gmail.com"
                  class="text-white text-opacity-50 text-xs font-semibold"
                  >sarvarhakimov99@gmail.com</a
                >
                <a
                  href="tel:+998933909927"
                  class="text-white text-opacity-50 text-xs font-semibold"
                  >+998 93 390 99 27</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center mx-[6%]">
        
          <div class="">
            <form @submit="submitForm">
              <img src="" alt="" />
              <div class="mb-10 flex flex-row w-full gap-5">
                <div class="flex flex-col">
                  <label
                  for="name"
                  class="text-white text-opacity-70  text-base font-medium"
                  >{{ $t('Contactlabel1') }}</label>
                  <input
                    v-model="name"
                    type="text"
                    id="name"
                    name="name"
                    class=" p-2  relative text-black  rounded"
                    required
                  />
                
                </div>
                <div class="flex flex-col">
                  <label
                  for="phone"
                  class="text-white text-opacity-70 text-base font-medium"
                  >{{ $t('Contactlabel2') }}</label>
                  <input
                    v-model="phone"
                    type="text"
                    id="phone"
                    name="phone"
                    class=" p-2   relative text-black  rounded"
                    required
                  />
                </div>
                
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="text-white text-opacity-70 text-base font-medium"
                  >{{ $t('Contactlabel3') }}</label
                >
                <textarea
                  v-model="message"
                  id="message"
                  name="message"
                  class="w-full p-2 border rounded-md "
                  :placeholder="$t('ContactTextarea')"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="px-5 py-2 bg-thirdColor text-white text-xs font-semibold rounded  gap-4"
              >
                {{ $t('ContactButton2') }} <Icon name="fluent:send-16-filled" color="white"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import axios from "axios";

let name = ref('');
let phone = ref('');
let message = ref('');

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


const openUrl = () => {
  window.open(
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2992.7482842900927!2d69.24006627606035!3d41.40127257129805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI0JzA0LjYiTiA2OcKwMTQnMzMuNSJF!5e0!3m2!1sru!2s!4v1703241960001!5m2!1sru!2s" 
  );
};

const { t } = useI18n();
const placeholderText = ref(t('ContactTextarea'));
</script>