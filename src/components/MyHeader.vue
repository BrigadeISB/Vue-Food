<template>
  <div>
    <header class="flex justify-between border-b border-slate-200 px-10 py-8">
      <router-link to="/">
        <div class="flex items-center gap-4">
          <img src="/logo.svg" alt="Logo" />
          <div class="">
            <h2 class="text-xl font-bold uppercase">Index Food</h2>
            <p class="text-slate-400">Маган їжі (by Artem, Ilia, Bohdan)</p>
          </div>
        </div>
      </router-link>
      <ul class="flex items-center gap-10">
        <li
          class="flex items-center cursor-pointer gap-10 text-gray-500 hover:text-black"
          @click="openDrawer"
        >
          <img src="/cart.svg" alt="card" />
          <b>{{ totalPrice }} грн.</b>
        </li>

        <router-link to="/favorites">
          <li
            class="flex items-center cursor-pointer gap-10 text-gray-500 hover:text-black"
          >
            <img src="/heart.svg" alt="card" />
            <span>Закладки</span>
          </li>
        </router-link>

        <li
          class="flex items-center cursor-pointer gap-10 text-gray-500 hover:text-black"
        >
          <img src="/profile.svg" alt="card" />
          <span>Профіль</span>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    openDrawer: {
      type: Function,
      required: true,
    },
    totalPrice: Number,
  },
};
</script>

<style lang="scss" scoped></style>
