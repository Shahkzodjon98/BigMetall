<template>
  <div class="">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2992.7482842900927!2d69.24006627606035!3d41.40127257129805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI0JzA0LjYiTiA2OcKwMTQnMzMuNSJF!5e0!3m2!1sru!2s!4v1703241960001!5m2!1sru!2s" 
      width="100%"
      height="140px"
      class="mobileMap"
      allowFullScreen="false"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    <footer class="footer">
      <div class="cnt">
        <div class="content">
          <div class="leftSide">
            <a href="/">
              <img src="/logo.webp" alt="Big metall logo" />
            </a>

            <div class="footerText">
              <div class="links">
                <div>
                  <a href="/catalog">{{ $t('Footercatalog') }}</a>
                  <a href="/company">{{ $t('Footerabout') }}</a>
                  <a href="/blog">{{ $t('Footerblog') }}</a>
                </div>
                <div>
                  <a href="/calculator">{{ $t('Footercalculyator') }}</a>
                  <a href="/contact">{{ $t('Footercontact') }}</a>
                </div>
              </div>

              <div class="contact">
                <div>
                  <h5>
                    <Icon name="charm:phone" size="16" /> {{ $t('FooterH5') }}
                  </h5>
                  <a href="mailto:sarvarhakimov99@gmail.com">
                    <span>sarvarhakimov99@gmail.com</span>
                  </a>
                  <a href="tel:+998933909927" class="text-white text-base font-semibold"><span>+998 93 390 99 27</span></a>
                </div>

                <div class="mx-10 space-x-5 ">
                  <a href="">
                    <Icon name="teenyicons:facebook-outline" size="32" class="text-white hover:text-[#1950DD]"/>
                  </a>
                  <a href="">
                    <Icon name="ph:telegram-logo-light" size="32" class="text-white hover:text-[#1950DD]"/>
                  </a>
                 <a href="">
                  <Icon name="teenyicons:instagram-outline" size="32" class="text-white hover:text-[#1950DD]" />
                 </a>
                </div>
              </div>
            </div>
          </div>

          <div class="rightSide">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2992.7482842900927!2d69.24006627606035!3d41.40127257129805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI0JzA0LjYiTiA2OcKwMTQnMzMuNSJF!5e0!3m2!1sru!2s!4v1703241960001!5m2!1sru!2s" 
                width="100%"
                height="100%"
                class="border-0"
                allowFullScreen="false"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <button @click="openUrl">
                {{ $t('FooterButton') }}
                <Icon name="tdesign:location-1" size="16" />
              </button>
            </div>

            <h6>
              <Icon name="subway:location-3" size="16" /> {{ $t('FooterH6') }}
            </h6>
          </div>
        </div>

        <div class="footerBottom">
          <h5>{{ $t('FooterH7') }}</h5>
        </div>

        <button @click="openUrl" class="button mobileBtn">
         {{ $t('FooterBuuton2') }}
          <Icon name="tdesign:location-1" />
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>

const mapSrc = ref(
     "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2992.7482842900927!2d69.24006627606035!3d41.40127257129805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI0JzA0LjYiTiA2OcKwMTQnMzMuNSJF!5e0!3m2!1sru!2s!4v1703241960001!5m2!1sru!2s" 

);

const openUrl = () => {
  window.open(
     "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2992.7482842900927!2d69.24006627606035!3d41.40127257129805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDI0JzA0LjYiTiA2OcKwMTQnMzMuNSJF!5e0!3m2!1sru!2s!4v1703241960001!5m2!1sru!2s" 

  );
};

onMounted(() => {});
</script>



<style scoped lang="scss">


.footer {
  @apply mt-24 bg-[#323750] p-8;

  button {
    @apply bg-[#1950DD] border-2 border-transparent p-2 px-4 font-semibold text-white rounded-md text-sm my-4;

    .Icon {
      @apply ml-2 text-base;
    }
  }

  .mobileBtn {
    @apply hidden;
  }

  .content {
    @apply flex items-center justify-center;

    .leftSide {
      @apply flex mr-24;

      img {
        @apply w-[100px] h-[100px] mr-20;
      }

      .links {
        @apply flex;

        div {
          @apply mr-14;

          a {
            @apply font-semibold block text-white leading-loose transition-colors;

            &:hover {
              @apply text-[#1950DD];
            }
          }
        }
      }

      .contact {
        @apply flex mt-12 flex-wrap;

        div {
          @apply mr-4;

          h5 {
            @apply font-semibold text-lg text-white;

            .Icon {
              @apply mr-2 text-lg;
            }
          }

          span {
            @apply block my-4 text-white/70;
          }

          .Icon {
            @apply text-4xl text-white mr-6 cursor-pointer transition-colors;

            &:hover {
              @apply text-secondary;
            }
          }
        }
      }
    }

    .rightSide {
      div {
        @apply relative max-w-[490px] min-w-[300px] h-[260px] rounded-xl overflow-hidden;

        iframe {
          @apply brightness-100;
        }
      }

      h6 {
        @apply font-semibold text-white mt-4;

        .Icon {
          @apply mr-2;
        }
      }

      button {
        @apply absolute z-10 right-16 bottom-0;
      }
    }
  }

  .footerBottom {
    @apply mt-10 text-center border-t-2 border-white p-4;

    h5 {
      @apply text-white;
    }
  }
}

.mobileMap {
  @apply border-0 hidden -mb-24 mt-20;
}

@media (max-width: 680px) {
  .rightSide {
    @apply hidden;
  }

  .footer .content .leftSide {
    img {
      @apply w-[64px] h-[64px] mr-0;
    }

    @apply flex-wrap items-center flex-col;

    margin-right: 0 !important;

    .links {
      @apply flex-col;
    }

    .contact {
      @apply flex-col mt-0;
    }

    .footerText {
      @apply flex mt-6;
    }
  }

  .footerBottom {
    @apply hidden;
  }

  .footer .mobileBtn {
    @apply block mx-auto w-[70%] mt-6;
  }

  .mobileMap {
    @apply block;
  }
}
</style>
