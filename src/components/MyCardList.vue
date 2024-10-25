<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <my-card v-for="item in items" :title="item.title" :id="item.id" :price="item.price"
                :image-url="item.imageUrl" :isAdded="item.isAdded" :isFavorite="item.isFavorite"
                @clickAdd="addToCart(item)" @clickFavorite="onClickFavorite(item)" :key="item.id"></my-card>
        </div>
    </div>
</template>

<script>
import MyCard from "./MyCard.vue";



export default {
    components: { MyCard },
    inject: ['AddToFavorite', 'addToCart'],
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    methods: {
        onClickFavorite(item) {
            this.AddToFavorite(item);
        },
    },
};
</script>

<style lang="scss" scoped></style>
