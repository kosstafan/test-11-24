<script setup>
import SectionPresentationShedule from './shedule.vue'
import IconRocket from '../../icons/IconRocket.vue'
import VideoSwitcher from '../../VideoSwitcher.vue'

const options = [
  'Прибыль от всех проектов для тех, кто инвестирует в создание головного предприятия',
  'В 2 раза больше выгоды для тех, кто с нами с самого начала',
  'Доход на капитализации и в виде дивидендов',
]
const videos = [
  {
    name: 'О бизнес-модели',
    duration: '10 минут',
    link: '/44444444444444',
    id: 1,
    image: '/img/video.png',
  },
  {
    name: 'О выборе проекта',
    duration: '15 минут',
    link: '/222222',
    id: 2,
    image: '/img/video.png',
  },
]
</script>
<template>
  <div class="">
    <section class="relative overflow-hidden">
      <SectionPresentationShedule
        class="absolute left-0 h-[360px] lg:h-auto w-[630px] -bottom-[65px] lg:-bottom-[220px] lg:w-auto lg:left-1/2 lg:-translate-x-1/4 -z-10"
      />
      <div class="container">
        <div class="text-regular-black font-semibold px-[20px] lg:px-0">
          <h2 class="text-2xl lg:text-h2 uppercase mb-[25px]">
            <span>Мы создаем отрасль</span><br /><span class="opacity-50"
              >с максимальным потенциалом<br />финансовой отдачи</span
            >
          </h2>
          <div class="text-xs lg:text-lg pl-[20px] border-l-2 border-regular-black mb-[55px]">
            По независимым оценкам, стоимость<br />мирового рынка дирижаблей в ближайшие<br />20 лет
            составит 50 000 000 000 $
          </div>
          <div class="text-[40px] lg:text-[57px] lg:mb-[68px] mb-[116px]">x100</div>
        </div>
      </div>
    </section>
    <section class="mb-[85px]">
      <div class="container px-[10px] lg:px-0">
        <div
          class="rounded-2xl bg-presentation bg-no-repeat bg-cover bg-center p-[50px] min-h-[511px]"
        >
          <div class="max-w-[624px]">
            <div
              class="text-[21px] lg:text-4xl text-white uppercase mb-[70px] lg:mb-[50px] font-semibold"
            >
              Как смогут заработать инвесторы?
            </div>
            <ul class="">
              <li
                v-for="(option, index) in options"
                :key="index"
                class="flex justify-between text-white py-[20px] border-t border-white/[.15]"
              >
                <div class="text-[10px] lg:text-[15px]">0{{ index + 1 }}</div>
                <div class="max-w-[278px] text-[13px] lg:text-lg leading-6">{{ option }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-[80px]">
      <div class="container px-[10px] lg:px-0">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-[575px]">
            <div
              class="text-base lg:text-5xl text-center lg:text-left uppercase font-semibold mb-4 lg:mb-[88px]"
            >
              посмотрите Видео-презентацию проекта
            </div>
            <button
              class="hidden lg:inline-flex uppercase font-semibold text-white text-lg items-center bg-base-gradient py-[20px] px-[80px] rounded-[10px]"
            >
              <IconRocket class="mr-[13px]" />
              <span>инвестировать</span>
            </button>
          </div>
          <VideoSwitcher class="ml-auto flex-1 max-w-[516px]" :items="videos" />
          <button
            class="inline-flex lg:hidden uppercase font-semibold text-white text-[13px] items-center justify-center bg-base-gradient py-[20px] px-[80px] rounded-[10px] mt-[15px]"
          >
            <IconRocket class="mr-[13px]" />
            <span>инвестировать</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
