<template>
  <nav
    class="px-[6%] w-full flex justify-between items-center py-4 fixed top-0 left-0 right-0 z-[1000] bg-secondary"
  >
    <!-- Logo and Desktop Menu -->
    <div class="hidden xs:block sm:block md:flex items-center w-[70%]">
      <a href="/">
        <div class="pr-8">
          <IconLogo class="w-[40px] h-[40px] flex-shrink-0" />
        </div>
      </a>
      <div class="flex justify-center items-center">
        <ul
          class="md:flex gap-8 text-[16px] hidden text-white text-base font-semibold"
        >
          <!-- ... (your menu items) -->
          <ul class="flex gap-8 text-[16px] text-white text-base font-semibold">
            <li>
              <NuxtLink
                class="inline-block text-white font-semibold relative whitespace-nowrap group"
                to="/catalog"
              >
                {{ $t("catalog") }}
                <span
                  class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-thirdColor transition-all duration-300 group-hover:w-full"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="inline-block text-white font-semibold relative whitespace-nowrap group"
                to="/company"
              >
                {{ $t("company_about") }}
                <span
                  class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-thirdColor transition-all duration-300 group-hover:w-full"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="inline-block text-white font-semibold relative whitespace-nowrap group"
                to="/blog"
              >
                {{ $t("blog") }}
                <span
                  class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-thirdColor transition-all duration-300 group-hover:w-full"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="inline-block text-white font-semibold relative whitespace-nowrap group"
                to="/calculyator"
              >
                {{ $t("calculyator") }}
                <span
                  class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-thirdColor transition-all duration-300 group-hover:w-full"
                ></span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="inline-block text-white font-semibold relative whitespace-nowrap group"
                to="/contact"
              >
                {{ $t("contact") }}
                <span
                  class="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-thirdColor transition-all duration-300 group-hover:w-full"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>

    <!-- Phone number and Responsive Menu Button for Small Screens (xs, sm) -->
    <div class="flex items-center gap-5 sm:hidden">
      <button
        @click="() => (isOpen = !isOpen)"
        class="flex items-center px-3 py-2 rounded text-gray-200 hover:text-white"
      >
        <Icon name="quill:hamburger" color="white" class="text-[24px]" />
      </button>
    </div>

    <!-- Responsive Menu for Small Screens (xs, sm) -->
    <div
      :class="
        isOpen
          ? 'block fixed top-0 left-0 z-50 bg-secondary min-h-[50%]'
          : 'sm:hidden xs:hidden'
      "
      class="w-full block flex-grow lg:hidden lg:items-center lg:w-auto"
    >
      <div class="flex justify-center items-center">
        <div class="flex">
          <div class="sm:hidden block absolute top-6 left-10 cursor-pointer">
            <IconLogo class="w-[40px] h-[40px] flex-shrink-0" />
          </div>
          <div
            class="sm:hidden block absolute top-8 right-10 cursor-pointer"
            @click="() => (isOpen = false)"
          >
            <Icon name="heroicons-solid:x" color="white" class="text-[24px]" />
          </div>
        </div>
        <ul
          class="flex flex-col sm:flex-row gap-8 text-[16px] text-white text-base font-semibold sm:pt-0 pt-20 text-center py-6"
        >
          <NuxtLink
            class="inline-block text-white text-base font-semibold"
            to="/catalog"
          >
            {{ $t("catalog") }}</NuxtLink
          >
          <NuxtLink
            class="inline-block text-white text-base font-semibold"
            to="/company"
          >
            {{ $t("company_about") }}</NuxtLink
          >
          <NuxtLink
            class="inline-block text-white text-base font-semibold"
            to="/blog"
          >
            {{ $t("blog") }}</NuxtLink
          >
          <NuxtLink
            class="inline-block text-white text-base font-semibold"
            to="/calculyator"
            >{{ $t("calculyator") }}</NuxtLink
          >
          <NuxtLink
            class="inline-block text-white text-base font-semibold"
            to="/contact"
          >
            {{ $t("contact") }}</NuxtLink
          >
          <a href="tel:+998933909927" class="text-white text-base font-semibold"
            >+998 93 390 99 27</a
          >

          <div class="relative">
            <div
              class="absolute bg-slate-300 text-black h-6 w-6 rounded-full right-12 -top-2 flex items-center justify-center lg:p-1 p-1"
            >
              {{ quantity }}
            </div>
            <NuxtLink href="/basket">
              <Icon name="ph:shopping-cart-light" size="20" color="white" />
            </NuxtLink>
          </div>

          <div class="relative inline-flex left-10">
            <select
            v-model="$i18n.locale"
              class="form-select bg-[#F4F4F4] border-none text-gray-700 font-semibold not-italic leading-normal text-[16px] focus:outline-none rounded-[4px] outline-none"
              style="padding: 4px 16px"
            >
              <option value="kr" class="flag-icon-kr">KР</option>
              <option value="ru" class="flag-icon-ru">РУ</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center -px-5 text-gray-700"
            >
              <Icon name="formkit:right" size="17" class="" />
            </div>
          </div>
        </ul>
      </div>
    </div>

    <div class="md:flex hidden items-center gap-5">
      <a href="tel:+998933909927" class="text-white text-base font-semibold"
        >+998 93 390 99 27</a
      >

      <div class="relative">
        <div
          class="absolute left-4 bottom-2 bg-slate-300 w-6 h-6 rounded-full flex items-center justify-center"
        >
          {{ quantity }}
        </div>
        <NuxtLink href="/basket">
          <Icon name="ph:shopping-cart-light" size="20" color="white" />
        </NuxtLink>
      </div>
    </div>

    <div class="sm:flex hidden">
      <div class="relative inline-flex">
        <select
        v-model="$i18n.locale"
          class="form-select bg-[#F4F4F4] border-none text-gray-700 font-semibold not-italic leading-normal text-[16px] focus:outline-none rounded-[4px] outline-none transition-all duration-300 ease-in-out"
          style="padding: 4px 16px"
        >
          <option value="kr" class="flag-icon-kr">KР</option>
          <option value="ru" class="flag-icon-ru">РУ</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center -px-5 text-gray-700"
        >
          <Icon name="formkit:right" size="17" class="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from "~/store";

const isOpen = ref(false);
const totalQuantity = ref();

const counterStore = useCartStore();
totalQuantity.value = counterStore.getCounter();
let quantity = computed(() => {
  return totalQuantity.value.reduce((total, item) => {
    return total + item.quantity; // Add 'return' here
  }, 0); // Initialize total to 0
});
</script>
