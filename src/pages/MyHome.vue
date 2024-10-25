<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="text-3xl font-bold mb-8">Товари</h2>
      <div class="flex gap-4">
        <select @change="onChangeSelect" class="py-2 px-3 border rounded outline-none">
          <option value="title">По назві</option>
          <option value="price">По ціні, дешевші</option>
          <option value="-price">По ціні, дорожчі</option>
        </select>
        <div class="relative">
          <img class="absolute left-4 top-3" src="/search.svg" alt="search" />
          <input
            @input="handleInputChange"
            class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
            type="text"
            placeholder="Пошук..."
          />
        </div>
      </div>
    </div>
    <div class="mt-10">
      <my-card-list :items="items"></my-card-list>
    </div>
  </div>
</template>

<script>
import MyCardList from "../components/MyCardList.vue";

export default {
  components: { MyCardList },
  props: {
    items: {
      type: Array,
      required: true,
    },
    onChangeSelect: {
      type: Function,
      required: true,
    },
    onChangeInput: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      filters: {
        sortBy: "title",
        searchQuery: "",
      },
    };
  },
  methods: {
    handleInputChange(event) {
      this.onChangeInput(event.target.value);
    },
  },
};
</script>

<style scoped></style>
