<template>
  <div class="flex flex-col items-center text-center items-center w-72 mx-auto">
    <img class="max-w-40" :src="imageUrl" :alt="title" />
    <h2 class="mt-4 text-x2xl font-medium">{{ title }}</h2>
    <p class="text-gray-400 mt-2" >{{ desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imageUrl: String,
    desc: String,
  },
}
</script>

<style lang="scss" scoped></style>