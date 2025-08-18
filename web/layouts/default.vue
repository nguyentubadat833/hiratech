<template>
  <div class="flex flex-col min-h-screen ">
    <div>
      <div class="bg-stone-700 h-16">
        <div class="h-full xl:w-3/5 mx-auto flex justify-between">
          <div class="flex items-center hover:cursor-pointer" @click="navigateTo('/')">
            <span class="text-orange-600 text-3xl font-extrabold">HIRATECH</span>
          </div>
          <div class="h-full md:flex hidden">
            <span
              class="px-8 h-full flex items-center justify-center text-md text-slate-100 hover:bg-orange-500 hover:cursor-pointer"
              v-for="item in nav?.menu" @click="() => navigateTo(item.path)">
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>

    </div>
    <slot name="banner" v-if="$slots.banner" />
    <div class="w-3/5 md:pt-10 md:pb-20 py-3 px-2 mx-auto flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
type Nav = {
  menu: {
    name: string,
    path: string,
    order: number
  }[]
}

const { data: nav } = await useAsyncData(() => queryCollection("page").path('/nav').first(), {
  transform(value) {
    return <Nav>{
      ...value?.body
    }
  }
})

// console.log(info.value)

</script>

<style></style>