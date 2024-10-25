<template>
  <div>
    <my-drawer
      v-if="drawerOpen"
      :closeDrawer="closeDrawer"
      :total-price="totalPrice"
      :vatPrice="vatPrice"
      :orderId="orderId"
      @create-order="createOrder"
      :isCreatingOrder="isCreatingOrder"
    ></my-drawer>

    <div class="bg-white w-4/5 mx-auto rounded-xl shadow-xl mt-14">
      <my-header :total-price="totalPrice" :openDrawer="openDrawer"></my-header>

      <div class="p-10">
        <router-view
          :items="items"
          :onChangeSelect="onChangeSelect"
          :onChangeInput="onChangeInput"
        ></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MyHeader from "./components/MyHeader.vue";
import MyDrawer from "./components/MyDrawer.vue";

export default {
  components: { MyHeader, MyDrawer },
  provide() {
    return {
      AddToFavorite: this.AddToFavorite,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      closeDrawer: this.closeDrawer,
      cart: this.cart,
    };
  },
  data() {
    return {
      items: [],
      favorites: [],
      cart: [],
      orderId: 0,
      drawerOpen: false,
      isCreatingOrder: false,
      filters: {
        sortBy: "title",
        searchQuery: "",
      },
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
    vatPrice() {
      return this.totalPrice * 0.05;
    },
  },
  methods: {
    async fetchItems() {
      try {
        const { data } = await axios.get(`https://28ddef75b155665a.mokky.dev/items`, {
          params: {
            title: `*${this.filters.searchQuery}*`,
            sortBy: this.filters.sortBy,
          },
        });
        this.items = data.map((obj) => ({
          ...obj,
          isFavorite: false,
          isAdded: false,
        }));
      } catch (err) {
        console.error(err);
      }
    },
    async fetchFavorites() {
      try {
        const { data: favoriteItems } = await axios.get(
          `https://28ddef75b155665a.mokky.dev/favorites`
        );
        this.items = this.items.map((item) => {
          const favorite = favoriteItems.find(
            (favorite) => favorite.parentId === item.id
          );

          if (!favorite) {
            return item;
          }

          return {
            ...item,
            isFavorite: true,
            favoriteId: favorite.id,
          };
        });
      } catch (err) {
        console.error(err);
      }
    },
    async AddToFavorite(item) {
      try {
        const favorite = this.favorites.find((fav) => fav.parentId === item.id);

        if (favorite) {
          item.isFavorite = false;
          await axios.delete(
            `https://28ddef75b155665a.mokky.dev/favorites/${favorite.id}`
          );
          this.favorites = this.favorites.filter((fav) => fav.parentId !== item.id);
        } else {
          item.isFavorite = true;
          const { data } = await axios.post(
            `https://28ddef75b155665a.mokky.dev/favorites`,
            {
              parentId: item.id,
              item
            }
          );
          item.favoriteId = data.id;
          this.favorites.push({ parentId: item.id, id: data.id });
        }
      } catch (err) {
        console.error("Не вдалося змінити статус улюбленого товару", err);
      }
    },
    async addToCart(item) {
      const cartItem = this.cart.find((cartItem) => cartItem.id === item.id);
      this.isCreatingOrder = false;
      if (cartItem) {
        item.isAdded = false;
        this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
      } else {
        item.isAdded = true;
        this.cart.push(item);
      }
      const originalItem = this.items.find((original) => original.id === item.id);
      if (originalItem) {
        originalItem.isAdded = item.isAdded;
      }
    },
    async removeFromCart(itemToRemove) {
      const index = this.cart.findIndex((item) => item.id === itemToRemove.id);
      if (index !== -1) {
        this.cart.splice(index, 1);

        const item = this.items.find((item) => item.id === itemToRemove.id);
        if (item) {
          item.isAdded = false;
        }
      }
    },
    async closeDrawer() {
      this.drawerOpen = false;
    },
    async openDrawer() {
      this.drawerOpen = true;
    },
    async createOrder() {
      try {
        this.isCreatingOrder = true;
        console.log(this.isCreatingOrder);
        
        this.items.forEach((item) => {
          item.isAdded = false;
        });
        this.cart.forEach((item_cart) => {
          item_cart.isAdded = false;
        });

        const { data } = await axios.post("https://28ddef75b155665a.mokky.dev/orders", {
          items: this.cart,
          totalPrice: this.totalPrice,
        });

        this.cart = [];
        this.orderId = data.id;

        return data;
      } catch (err) {
        console.log(err);
      } finally {
        // this.isCreatingOrder = false;
      }
    },
    onChangeSelect(event) {
      this.filters.sortBy = event.target.value;
      if (this.filters.sortBy !== "Сортування") {
        this.fetchItems();
      }
    },
    onChangeInput(searchQuery) {
      this.filters.searchQuery = searchQuery;
      this.fetchItems();
    },
  },
  mounted() {
    this.fetchItems();
    this.fetchFavorites();
  },
  watch: {
    filters: {
      deep: true,
      handler() {
        this.fetchItems();
      },
    },
  },
};
</script>

<style scoped></style>
