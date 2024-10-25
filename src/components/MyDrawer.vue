<template>
  <div class="">
    <div
      @click="closeDrawer"
      class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
    ></div>
    <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
      <my-drawer-head></my-drawer-head>

      <div class="flex h-full items-center" v-if="!totalPrice && isCreatingOrder">
        <my-info-block
          :title="`Дякую за замовлення №${orderId} 💋`"
          desc="Щоб повторно замовити додайте нові товари до корзини"
          image-url="/order-success-icon.png"
        ></my-info-block>
      </div>

      <div class="flex h-full items-center" v-if="!totalPrice">
        <my-info-block
          title="Корзина порожня"
          desc="Додайте товари для замовлення"
          image-url="/empy-basket.png"
        ></my-info-block>
      </div>


      <div v-else>
        <my-card-item-list v-if="totalPrice"></my-card-item-list>

        <div v-if="totalPrice" class="flex flex-col gap-4 mt-7">
          <div class="flex gap-2">
            <span>Всього:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <b>{{ totalPrice }} ₴</b>
          </div>
          <div class="flex gap-2">
            <span>Податок 5%:</span>
            <div class="flex-1 border-b border-dashed"></div>
            <b>{{ vatPrice }} ₴</b>
          </div>
          <button
            :disabled="buttonDisabled"
            @click="handleCreateOrder"
            class="mt-4 w-full rounded-xl py-4 text-white transition"
            :class="
              buttonDisabled
                ? 'bg-orange-400 cursor-not-allowed'
                : 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 cursor-pointer'
            "
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyCardItemList from "./MyCardItemList.vue";
import MyDrawerHead from "./MyDrawerHead.vue";
import MyInfoBlock from "./MyInfoBlock.vue";

export default {
  components: { MyDrawerHead, MyCardItemList, MyInfoBlock },
  props: {
    closeDrawer: {
      type: Function,
      required: true,
    },
    totalPrice: Number,
    vatPrice: Number,
    isCreatingOrder: Boolean,
    orderId: Boolean,
  },
  methods: {
    handleCreateOrder() {
      this.$emit("create-order");
    },
  },
  computed: {
    buttonDisabled() {
      return this.isCreatingOrder || !this.totalPrice;
    },
  },
};
</script>

<style lang="scss" scoped></style>
