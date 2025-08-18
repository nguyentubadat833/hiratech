<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <slot name="banner" v-if="$slots.banner" />
    <div class="xl:w-3/5 md:pt-10 md:pb-20 py-3 px-3 mx-auto flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>


// console.log(info.value)

</script>

<style></style>