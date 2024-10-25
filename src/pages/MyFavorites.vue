<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Мої Закладки</h1>
    <my-card-list :items="favorites"></my-card-list>
  </div>
</template>

<script>
import MyCardList from '@/components/MyCardList.vue';
import axios from 'axios';

export default {
  components: { MyCardList },
  data() {
    return {
      favorites: []
    };
  },
  created() {
    this.fetchFavorites();
  },
  methods: {
    async fetchFavorites() {
      try {
        const { data } = await axios.get('https://28ddef75b155665a.mokky.dev/favorites');
        // console.log(data);
        this.favorites = data.filter(obj => obj.item.isFavorite).map(obj => obj.item);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
