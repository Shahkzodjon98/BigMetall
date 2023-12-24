<template>
  <main class="about">
    <header class="header ">
        <div class="cnt mb-10 ">
          <div class="headerText ">
            <h1>
              {{ $t('companyH1') }}
            </h1>
            <h3 >
            {{ $t('companyH3') }}
            </h3>
            <p >
             {{ $t('companyP') }}
            </p>
          </div>

          <div class="headerInfo">
            <div>
              <h5>{{ $t('companyH51') }}</h5>
              <p>{{ $t('companyP1') }}</p>
            </div>
            <div>
              <h5>{{ $t('companyH52') }}</h5>
              <p>{{ $t('companyP2') }}</p>
            </div>
            <div >
              <h5>{{ $t('companyH53') }}</h5>
              <p>{{ $t('companyP3') }}</p>
            </div>
          </div>
        </div>
      </header>


    <!-- About   -->
    <div class="my-10">
    <section class=" ">
        <div class="flex flex-col md:flex-row items-center justify-between p-4 lg:p-[6%] w-full gap-4 md:gap-14">
            <div class="flex md:items-start items-center flex-col w-full md:w-1/2 gap-4 md:gap-10">
                <h2 class="text-black text-[32px] font-normal md:text-start text-center">{{ $t('companyAboutH2') }}</h2>
                <p class="w-full lg:w-[100%] text-black text-[20px] text-balance font-medium">
                    {{ $t('companyAboutP1') }}
                </p>
            </div>
            <div class="my-10 w-full md:w-1/2">
                <img src="/Pexels Photo by Pixabay.png" class="w-full" alt="" />
            </div>
        </div>
    </section>
</div>


  
<!-- Target  -->

<section class="target ">
  <div class="cnt container mx-auto ">
    <div class=" ">
      <!-- <div class="relative sm:block hidden">
        <img class="absolute top-48" src="/line.png" alt="line" />
      </div> -->
      <div class="cards flex items-center justify-around flex-wrap">
        <div class="card mx-2 space-y-10 sm:my-0 mb-32 sm:mx-4 md:mx-8 gap-10">
          <div class="border-4 rounded-3xl border-[#091E3A] p-2 py-14 text-center">
            <h4>{{ $t('TargetH41') }}</h4>
            <h5 class="text-lg font-semibold my-4">{{ $t('TargetH51') }}</h5>
            <p class="leading-relaxed mb-4">
              {{ $t('TargetP1') }}
            </p>
          </div>
        </div>

        <div class="card mx-2 space-y-10 sm:my-0 mb-32 sm:mx-4 md:mx-8 gap-10">
          <div class="border-4 rounded-3xl border-[#091E3A] p-2 py-14 text-center">
            <h4>{{ $t('TargetH42') }}</h4>
            <h5 class="text-lg font-semibold my-4">{{ $t('TargetH52') }}</h5>
            <p class="leading-relaxed mb-4">
              {{ $t('TargetP2') }}
            </p>
          </div>
        </div>

        <div class="card mx-2 space-y-10 sm:my-0 mb-32 sm:mx-4 md:mx-8 gap-10">
          <div class="border-4 rounded-3xl border-[#091E3A] p-2 py-14 text-center">
            <h4>{{ $t('TargetH43') }}</h4>
            <h5 class="text-lg font-semibold my-4">{{ $t('TargetH53') }}</h5>
            <p class="leading-relaxed mb-4">
              {{ $t('TargetP3') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        <!-- Target end  -->


        <section class="partners mt-64 ">
         <div class="cnt ">
           <div class="wrapper flex items-center justify-between relative ">
            <img
            width="500"
            class="partnersBg absolute  top-[-19%] left-[-15%] "
            src="/partnerBg.png"
            alt="Background"
          />
             <div
             class="text text-white max-w-[580px] rounded-3xl p-12  z-10 mb-32"
               style="background: linear-gradient(49deg, #091E3A -5.91%, #164078 38.23%, #7092EA 97.71%, #FFF 128.95%)"
             >
               <h6 class="text-2xl font-semibold">{{ $t('PartnerH6') }}</h6>
               <h3 class="text-7xl font-semibold my-6 leading-tight">
                {{ $t('PartnerH3') }}
               </h3>
               <p class="font-medium">
                {{ $t('PartnerP') }}
               </p>
             </div>

          <div class="partnerImgs grid grid-cols-2  sm:flex items-center justify-center sm:flex-wrap max-w-lg sm:gap-6 gap-10  relative bottom-14 sm:mt-0 mt-11" style="margin-top: 0">
          <img src="/icons/pepsi_logo.png" alt="partner" class="w-[200px] " />
          <img src="/icons/golden_house.png" alt="partner" class="w-[200px]" />
          <img src="/icons/coca_cola.png" alt="partner" class="w-[200px]" />
          <img src="/icons/Pro_Cab.png" alt="partner" class="w-[200px]" />
          <img src="/icons/imzo.png" alt="partner" class="w-[200px]" />
          <img src="/icons/alutex.png" alt="partner" class="w-[200px]" />
          <img src="/icons/Uzkabel.png" alt="partner" class="w-[200px]" />
          <img src="/icons/akfa.png" alt="partner" class="w-[200px]" />
          </div>
           </div>
         </div>
       </section>

  </main>
</template>

<style scoped>
    @media (max-width: 1024px) {
       .partners .wrapper {
         flex-wrap: wrap;
         justify-content: center;
       }
   
       .partnerImgs img {
         width: 140px;
       }
   
       .partnersBg {
         display: none;
       }
     }
   
     @media (max-width: 420px) {
       .partners .wrapper {
         text-align: center;
       }
   
       .text {
         padding: 6;
       }
   
       h6 {
         font-size: xl;
       }
   
       h3 {
         font-size: 5xl;
       }
     }




.header {
          @apply pt-24 h-[75vh] relative;
          background: url('/Pexels Photo by Pixabay (2).png') no-repeat;
          background-size: cover;


          .headerText {
               @apply max-w-[720px];

               h1 {
                    @apply font-medium text-5xl text-white leading-tight;
               }

               h3 {
                    @apply font-medium text-white mt-6 leading-relaxed;
               }

               p {
                    @apply font-medium mt-4 text-white hidden;
               }
          }

          .headerInfo {
               transform: translate(-50%);
               @apply flex items-center justify-between absolute bottom-[-100px] w-[80vw] left-[50%];

               div {
                    @apply bg-[#323750] text-center p-6 py-14 rounded-sm;

                    h5 {
                         @apply text-white font-medium text-3xl;
                    }

                    p {
                         @apply text-white mt-6;
                    }
               }
          }
     }

     @media(max-width: 840px) {
     .about {
          .header {
               @apply h-[300px];
          }
     }
}

@media(max-width: 740px) {
     .about .header {
          .headerInfo {
               @apply top-[90%];

               div {
                    @apply p-4 py-8;
               }
          }

          .headerText h1 {
               @apply text-4xl;
          }
     }
}

@media(max-width: 620px) {
     .about {
          .header {
               @apply h-[250px] mb-64;

               .headerInfo {
                    @apply top-[70%];

                    div {
                         @apply p-4 min-w-[120px];

                         &:nth-child(2) {
                              @apply mt-[200px] mx-0;
                         }

                         h5 {
                              @apply text-xl;
                         }

                         p {
                              @apply mt-2;
                         }
                    }
               }
          }
     }
}

@media (max-width: 520px) {
     .about .header {
          .headerInfo {
               @apply justify-center;
          }

          .headerText {
               h3 {
                    @apply hidden;
               }

               p {
                    @apply block;
               }

               h1 {
                    @apply text-3xl;
               }
          }
     }
}




    /* Target  */
    .card {
  @apply bg-white shadow-2xl max-w-[280px] sm:p-5 p-10 sm:gap-0 gap-10 rounded-3xl relative;

  &::before {
      content: "";
      background: url('/icons/target.png') no-repeat;
      transform: translate(-50%);
      @apply absolute left-[50%] bottom-[-20%] sm:w-36 w-48 sm:h-36 h-48;
  }
};


h4 {
transform: translate(-50%);
@apply text-lg font-medium text-white absolute top-0 w-[70%] left-[50%] p-6 rounded-b-[40%];
background: linear-gradient(90deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%);

&::after {
content: "";
@apply absolute left-[-9%] top-[0] border-t-[18px] border-r-[18px] border-t-transparent border-r-[#061427];
}

&::before {
content: "";
@apply absolute right-[-9%] top-[0] border-t-[18px] border-l-[18px] border-t-transparent border-l-[#2D9EE0];
}
}
</style>