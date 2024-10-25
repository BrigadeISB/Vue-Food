<template>
    <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
        <img class="w-16 h-16" :src="imageUrl" :alt="title" />
        <div class="flex flex-col flex-1">
            <p>{{ title }}</p>
            <div class="flex justify-between mt-2">
                <b class="flex-1">{{ price }} грн.</b>
                <img @click="removeFromCart({ id, title, imageUrl, price })"
                    class="opacity-30 hover:opacity-100 cursor-pointer transition" src="/close.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        title: String,
        id: Number,
        imageUrl: String,
        price: Number,
        isAdded: Boolean,
    },
    inject: ['removeFromCart'],
};
</script>

<style lang="scss" scoped></style>
