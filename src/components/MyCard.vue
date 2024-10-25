<template>
  <div>
    <div
      class="relative bg-white border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="Like 1"
        class="absolute top-8 left-8"
        @click="$emit('clickFavorite')"
      />
      <img height="220px" :src="imageUrl" alt="Food" />

      <p class="mt-2">{{ title }}</p>

      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">Ціна</span>
          <b>{{ price }} грн.</b>
        </div>

        <img
          @click="$emit('clickAdd')"
          :src="!isAdded ? '/plus.svg' : '/checked.svg'"
          alt="Plus"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    title: String,
    id: Number,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickAdd: Function,
    onClickFavorite: Function,
  },
  inject: ["AddToFavorite"],
  methods: {},
};
</script>

<style lang="scss" scoped></style>
