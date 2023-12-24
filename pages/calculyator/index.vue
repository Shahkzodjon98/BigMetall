<template>
  <div class="">
    <div class="pt-24 px-10">
      <h2 class="text-black text-[32px] font-normal">{{ $t("CalcH2") }}</h2>
    </div>
    <div class="bg-[#1950DD0D]">
      <section class="mx-auto my-10 p-[2%] lg:p-[6%]">
        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 my-10"
        >
          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            href="/catalog/dvuxtavr"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-10 gap-8">
              <img
                src="/icons/Dvuxtavr.webp"
                alt=""
                width="95.64"
                height="79.7"
              />
              <span
                class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanDvuxtavr") }}</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/shveller"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-10 gap-5">
              <img
                src="/icons/Shveller.webp"
                alt=""
                width="95.64"
                height="79.7"
              />
              <span
                class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanShveller") }}</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/ugalok"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-10 gap-5">
              <img
                src="/icons/Ugalok.webp"
                alt=""
                width="95.64"
                height="79.7"
              />
              <span
                class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanUgalok") }}</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/truba"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-10 gap-6">
              <img src="/icons/Truba.webp" alt="" width="95.64" height="79.7" />
              <span
                class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanTruba") }}</span
              >
            </div>
          </NuxtLink>

          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/list"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-12 gap-7">
              <img src="/icons/List.webp" alt="" width="95.64" height="79.7" />
              <span
                class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanList") }}</span
              >
            </div>
          </NuxtLink>

          <!-- <<!>> -->

          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/armatura"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-10 gap-9">
              <img
                src="/icons/Armatura.webp"
                alt=""
                width="98.9"
                height="64.5"
              />
              <span
                class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanArmatura") }}</span
              >
            </div>
          </NuxtLink>
          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/kvadrat-profil"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-9 gap-5">
              <img
                src="/icons/Kvadrat profil.webp"
                alt=""
                width="86.86"
                height="86"
              />
              <span
                class="text-black text-base pr-16 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanKvadratprofil") }}</span
              >
            </div>
          </NuxtLink>
          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/kvadrat-prut"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-6 gap-4">
              <img
                src="/icons/Kvadrat prut.webp"
                alt=""
                width="117.53"
                height="94.41"
              />
              <span
                class="text-black text-base pr-16 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanKvadratprut") }}</span
              >
            </div>
          </NuxtLink>
          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/prut"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-8 gap-5">
              <img
                src="/icons/Prut.webp"
                alt=""
                width="115.27"
                height="76.62"
              />
              <span
                class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanPrut") }}</span
              >
            </div>
          </NuxtLink>
          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/palasa"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-6 gap-5">
              <img
                src="/icons/Metall palasa.png"
                alt=""
                width="115.27"
                height="76.62"
              />
              <span
                class="text-black text-base text-center pr-16 bottom-2 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanMetallpalasa") }}</span
              >
            </div>
          </NuxtLink>
          <NuxtLink
            class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
            to="/catalog/planka"
          >
            <div class="absolute h-full w-0"></div>
            <div class="flex items-center justify-center flex-col mt-2 gap-5">
              <img
                src="/icons/Metall planka.png"
                alt=""
                width="115.27"
                height="76.62"
              />
              <span
                class="text-black text-base text-center pr-16 bottom-4 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
                >{{ $t("SpanMetallplanka") }}</span
              >
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>

    <div
      class="cnt my-12 flex flex-col md:flex-row lg:flex-row gap-9 items-center"
    >
      <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
        <label
          for="countries"
          class="mb-2 text-[12px] not-italic font-normal leading-normal text-[#222]"
          >O‘lchov</label
        >
        <select
          id="countries"
          class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
        >
          <option selected>Uzunligi bo‘yicha</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
        <label
          for="countries"
          class="mb-2 text-[12px] not-italic font-normal leading-normal text-[#222]"
          >Nisbat</label
        >
        <select
          id="countries"
          class="rounded-[6px] h-[35px] border border-[#222222] outline-none pl-1 pr-[30px] py-1.5"
        >
          <option selected>yangi</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>

    <hr />

    <div
      class="cnt my-12 flex flex-col md:flex-row lg:flex-row items-center gap-4 md:gap-72 lg:gap-72"
    >
      <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
        <label
          for=""
          class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
          >Diametr D, mm</label
        >
        <input
          type="number"
          id=""
          class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
          placeholder="0"
          required
        />
      </div>

      <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
        <label
          for="visitors"
          class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
          >Uzunligi, m
        </label>
        <input
          type="number"
          id=""
          class="rounded-[6px] h-[35px] border border-[#222] pl-1 pr-[30px] py-1.5 outline-none"
          placeholder="0"
          required
        />
      </div>

      <div class="flex flex-col w-full md:w-[217px] lg:w-[217px]">
        <label
          for=""
          class="block mb-2 text-[#222222] text-[12px] not-italic font-normal leading-normal"
          >Armatura og‘irligi</label
        >
        <input
          type="number"
          id=""
          class="rounded-[6px] h-[35px] bg-[#1950DD] pl-1 pr-[30px] py-1.5 outline-none text-[#FFFFFF]"
          placeholder="0"
          required
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
let products = ref();
onMounted(async () => {
  try {
    let res = await axios.get("https://admin.big-metall.uz/api/products");
    products.value = res.data;
  } catch (error) {
    return error;
  }
});
</script>
