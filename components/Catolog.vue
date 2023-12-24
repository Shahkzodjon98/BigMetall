<template>
  <div>
    <section class="mx-auto my-4 p-[2%] lg:p-[6%]">
      <h2 class="text-black text-[32px] font-normal">{{ $t('CatalogH2') }}</h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14 my-10"
      >

        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
            class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-10 gap-8">
            <img
              src="/icons/Dvuxtavr.webp"
              alt=""
              width="95.64"
              height="79.7"
            />
            <span
              class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanDvuxtavr') }}</span
            >
          </div>
        </NuxtLink>


        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "></div>
          <div class="flex items-center justify-center flex-col mt-10 gap-5">
            <img
              src="/icons/Shveller.webp"
              alt=""
              width="95.64"
              height="79.7"
            />
            <span
              class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanShveller') }}</span
            >
          </div>
        </NuxtLink>


        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-10 gap-5">
            <img src="/icons/Ugalok.webp" alt="" width="95.64" height="79.7" />
            <span
              class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanUgalok') }}</span
            >
          </div>
        </NuxtLink>



        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-10 gap-6">
            <img src="/icons/Truba.webp" alt="" width="95.64" height="79.7" />
            <span
              class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanTruba') }}</span
            >
          </div>
        </NuxtLink>



        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-12 gap-7">
            <img
              src="/icons/List.webp"
              alt=""
              width="95.64"
              height="79.7"
            />
            <span
              class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanList') }}</span
            >
          </div>
        </NuxtLink>

        <!-- <<!>> -->

        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-10 gap-9">
            <img src="/icons/Armatura.webp" alt="" width="98.9" height="64.5" />
            <span
              class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanArmatura') }}</span
            >
          </div>
        </NuxtLink>
        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-9 gap-5">
            <img
              src="/icons/Kvadrat profil.webp"
              alt=""
              width="86.86"
              height="86"
            />
            <span
              class="text-black text-base pr-16 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanKvadratprofil') }}</span
            >
          </div>
        </NuxtLink>
        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-6 gap-4">
            <img
              src="/icons/Kvadrat prut.webp"
              alt=""
              width="117.53"
              height="94.41"
            />
            <span
              class="text-black text-base pr-16 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanKvadratprut') }}</span
            >
          </div>
        </NuxtLink>
        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/"
        >
          <div
          class="absolute h-full w-0 "
          ></div>
          <div class="flex items-center justify-center flex-col mt-8 gap-5">
            <img src="/icons/Prut.webp" alt="" width="115.27" height="76.62" />
            <span
              class="text-black text-base pr-24 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanPrut') }}</span
            >
          </div>
        </NuxtLink>

        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/catalog/palasa"
        >
          <div
          class="absolute h-full w-0"
          ></div>
          <div class="flex items-center justify-center flex-col mt-6 gap-5">
            <img src="/icons/Metall palasa.png" alt="" width="115.27" height="76.62" />
            <span
              class="text-black text-base text-center  pr-16 bottom-2 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanMetallpalasa') }}</span
            >
          </div>
        </NuxtLink>
        <NuxtLink
          class="group text-sm w-full h-[182px] relative bg-[#F4F7F8] ring-1 hover:ring-transparent ring-fiveColor rounded-r-lg transition-all duration-500"
          to="/catalog/planka"
        >
          <div
          class="absolute h-full w-0"
          ></div>
          <div class="flex items-center justify-center flex-col mt-2 gap-5">
            <img src="/icons/Metall planka.png" alt="" width="115.27" height="76.62" />
            <span
              class="text-black text-base text-center  pr-16 bottom-4 font-normal transition-all duration-500 group-hover:text-thirdColor relative"
              >{{ $t('SpanMetallplanka') }}</span
            >
          </div>
        </NuxtLink>
      </div>
    </section>
    <div class="flex items-center justify-center">
      <a
        class="px-12 py-4 bg-secondary justify-center items-center gap-5 inline-flex text-white text-xs font-semibold"
        href="/catalog"
      >
        <span>{{ $t('SpanKataloggaotish') }}</span
        ><Icon name="fluent:arrow-enter-20-regular" size="20" />
      </a>
    </div>
  </div>
</template>


<script setup>
</script>