<template>
  <tr>
    <td
      class="text-center">
      {{ fruit }}
    </td>
    <td
      class="text-center">
      {{ price }}
    </td>
    <td
      class="text-center">
      {{ newQuantity }}
    </td>
    <td
      class="text-center">
      <v-btn
        class="ml-2 mr-2"
        @click="addFruit">
        +
      </v-btn>
      <v-btn
        class="ml-2 mr-2"
        @click="removeFruit">
        -
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    fruit: String,
    price: Number,
    quantity: Number,
  },
  data() {
    return {
      newQuantity: this.quantity,
    };
  },
  methods: {
    addFruit() {
      this.newQuantity += 1;
      this.$emit('update-final-price', this.fruit, this.newQuantity);
    },
    removeFruit() {
      if (this.newQuantity === 1) {
        // eslint-disable-next-line no-alert
        alert('Value of fruit can\'t be less than 1');
      } else {
        this.newQuantity = this.quantity - 1;
        this.$emit('update-final-price', this.fruit, this.newQuantity);
      }
    },
  },
};
</script>
