<template>
  <div>
    <main class="flex flex-col md:flex-row items-center justify-between mx-auto  p-[6%]">
      <div class="w-full md:w-1/2 ">
        <div class="flex items-start sm:text-start text-center flex-col gap-[24px] md:mt-10 mt-16">
          <h1 class="w-full sm:w-[150%] text-[#222222] text-[44px] not-italic font-semibold leading-[66px] tracking-wide-[3.52px]">{{ $t('heroH1') }}</h1>
          <p class="w-full sm:w-[60%] text-[#222222] text-[24px] not-italic font-normal leading-[35px] tracking-wide-[1.92px] opacity-80">{{ $t('heroP') }}</p>
        </div>
        <div class="flex sm:items-start items-center flex-col  mt-4 md:mt-44 gap-[24px]">
          <a href="/catalog" class="flex text-[#1950DD] justify-center items-center gap-[10px] rounded-[4px] border border-blue-700 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white" style="padding: 10px 60px">
            {{ $t('HeroButton') }} <Icon name="ep:right" size="24" />
          </a>
          <a href="/contact" class="bg-[#1950DD] rounded border border-[#F4F7F8] justify-center items-center flex text-[#F4F7F8] text-base font-medium" style="padding: 10px 119px">
            <Icon name="basil:contacts-outline" size="24" />{{ $t('HeroButtonContact') }}
          </a>
        </div>
      </div>
    <div class="flex sm:flex-col md:flex-row flex-row   items-center h-[auto] md:h-[550px] gap-6 mt-6 md:mt-0">
        <div class="flex self-end w-full md:w-80">
          <img src="/HeroImg2.png" class="" alt="">
        </div>
        <div class="flex self-start w-full md:w-80 ">
          <img src="/HeroImg1.png" class="z-10" alt="">
         
        </div>
        
      </div>
      <img src="/icons/bigMetall.png" alt="" class="sm:block hidden  -mx-28 relative top-24">
    </main>
  </div>
</template>


<script setup>
</script>
