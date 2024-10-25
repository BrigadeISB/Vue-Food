<template>
    <div class="flex flex-col flex-1 gap-4 justify-between">
        <my-card-item v-for="item in filteredCart" :item="item" :isAdded="item.isAdded" :key="item.id" :title="item.title" :id="item.id"
            :price="item.price" :imageUrl="item.imageUrl"></my-card-item>
    </div>
</template>

<script>
import MyCardItem from "./MyCardItem.vue";
export default {
    inject: ['cart', 'closeDrawer', 'addToCart'],
    components: { MyCardItem },
    computed: {
        filteredCart() {
            // console.log(this.cart.filter(item => item.isAdded));
            
            return this.cart.filter(item => item.isAdded);
        },
    },
};
</script>

<style lang="scss" scoped></style>
