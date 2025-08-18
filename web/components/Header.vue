<template>
  <div class="bg-stone-700 h-16 px-2">
    <div class="h-full xl:w-3/5 mx-auto flex justify-between">
      <div class="flex items-center hover:cursor-pointer" @click="navigateTo('/')">
        <span class="text-orange-600 md:text-3xl text-2xl font-extrabold">HIRATECH</span>
      </div>
      <div class="h-full md:flex hidden">
        <span
          class="px-8 h-full flex items-center justify-center text-md text-slate-100 hover:bg-orange-500 hover:cursor-pointer"
          v-for="item in nav?.menu" @click="() => navigateTo(item.path)">
          {{ item.name }}
        </span>
      </div>
      <div class="md:hidden flex items-center mr-2">
        <div class="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer-4" class="flex items-center">
              <Icon for="my-drawer-4" name="ic:baseline-dehaze"
                class="text-gray-100 text-3xl font-semibold active:bg-orange-500" />
            </label>
          </div>
          <div class="drawer-side">
            <label ref="closeDrawerEl" for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="flex menu bg-stone-700 text-base-content min-h-full w-72 p-4">
              <Icon name="heroicons:arrow-left-circle" class="text-3xl text-gray-50 active:text-orange-500 "
                @click="closeDrawerEl?.click()" />
              <div class="flex flex-col flex-1 gap-2 mt-10">
                <span v-for="item in nav?.menu" @click="drawerMenuClick(item.path)"
                  class="text-lg text-gray-50 border-b h-10 active:text-orange-500">
                  {{ item.name }}
                </span>
              </div>

              <div class="w-full space-y-3">
                <input type="text" placeholder="Nhập email hoặc số điện thoại" class="input input-bordered join-item" />
                <button class="btn btn-neutral btn-wide">Gửi yêu cầu liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

const closeDrawerEl = ref<HTMLElement>()

function drawerMenuClick(path: string) {
  navigateTo(path)
  closeDrawerEl.value?.click()
}
</script>

<style></style>