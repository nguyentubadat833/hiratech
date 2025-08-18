<script setup lang="ts">
import { NuxtLayout } from '#components';

definePageMeta({
  layout: 'non',

})

const { data: home } = await useAsyncData(() => queryCollection('page').path('/').first(), {
  transform(value) {
    return value as {
      title: string
    }
  }
})

</script>

<template>
  <div>
    <NuxtLayout name="default">
      <template #banner>
        <div class="relative w-full">
          <NuxtImg provider="imagekit" src="/banner-trang-chu.webp" class="w-full" />
          <div class="absolute inset-0 bg-black/40"></div>
          <div
            class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 space-y-2  md:space-y-6">
            <span class="text-orange-400 text-2xl md:text-5xl font-bold leading-snug">
              XÂY DỰNG HIRATECH
            </span>
            <span class="text-lg md:text-3xl font-medium leading-snug">
              Kiến tạo không gian – Vững vàng tương lai
            </span>
            <span class="mt-4 text-lg md:text-2xl font-medium">
              Xây niềm tin – Dựng giá trị bền lâu
            </span>
          </div>
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>
