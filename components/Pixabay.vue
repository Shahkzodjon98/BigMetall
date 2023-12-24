<template>
  <div class="">
    <section class="delivery ">
      <div class="cnt">
        <h2 class="max-w-[1000px]  mx-auto text-5xl sm:w-full w-[512px] relative sm:right-0  right-32 bottom-10 flex items-center justify-center text-center text-white  font-semibold leading-tight">
         {{ $t('PixabayH2') }}
        </h2>
          
        <div class="coin ">
          <div class="w-[400px] h-[400px] rounded-[400px] border-[6px] border-[#FEC601]">
            <span>10</span>
            <p>{{ $t('PixabayP') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped lang="scss">
.delivery {
  background: url("/Pixebay.png") no-repeat;
  background-size: cover;
  @apply h-[401px] flex items-center relative;

  .coin {
    transform: translate(-50%);
    background: linear-gradient(90deg, #FEC601 0%, #FFF4CD 30.93%, #FEC601 100%);
    background-size: 200% 100%;
  

    animation: gradientAnimation 2s infinite;
    @apply rounded-full w-60 h-60 flex items-center justify-center text-center absolute bottom-[-30%] left-[50%]  ;
      
    div {
      @apply border-2 border-white rounded-full w-52 h-52 flex justify-center flex-col ;

      span {
        @apply  text-6xl text-[#323750] font-medium;
      }

      p {
        @apply  text-lg font-medium mt-2 text-[#323750];
      }
    }
  }

  &::before {
    content: "";
    transform: translate(-50%);
    @apply absolute left-[50%] bottom-[-45%] z-[-1] w-[350px] h-[350px] border-4 border-yellow-400 rounded-full;
  }
}


@keyframes gradientAnimation {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: -100% 0%;
  }
}
</style>


.delivery {
  background: url(../../../public/deliveryBg.png) no-repeat;
  background-size: cover;
  @apply h-[400px] flex items-center relative;

  h2 {
       @apply max-w-[1000px] mx-auto text-5xl text-center text-white font-serif font-semibold leading-tight;
  }

  .coin {
       transform: translate(-50%);
       background: linear-gradient(90deg, #FEC601 0%, #FFF4CD 30.93%, #FEC601 100%);
       background-size: 200% 100%;
       animation: gradientAnimation 2s infinite;
       @apply rounded-full w-60 h-60 flex items-center justify-center text-center absolute bottom-[-30%] left-[50%];

       div {
            @apply border-2 border-white rounded-full w-52 h-52 flex justify-center flex-col;

            span {
                 @apply font-serif text-6xl text-primary font-medium;
            }

            p {
                 @apply font-serif text-lg font-medium mt-2 text-primary;
            }
       }
  }

  &::before {
       content: "";
       transform: translate(-50%);
       @apply absolute left-[50%] bottom-[-45%] z-[-1] w-[350px] h-[350px] border-4 border-yellow-400 rounded-full;
  }
} -->