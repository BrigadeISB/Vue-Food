<template>
  <div>
    <div class="flex items-center gap-5 mb-5">
      <svg
        class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:-translate-x-1"
        @click="closeDrawer"
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 7H14.7143"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.71436 1L14.7144 7L8.71436 13"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h2 class="text-2xl font-bold">Корзина</h2>
    </div>
  </div>
</template>

<script>
export default {
    inject: ['closeDrawer'],
};
</script>

<style lang="scss" scoped></style>
