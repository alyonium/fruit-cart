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
      {{ quantity }}
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
import { mapMutations } from 'vuex';

export default {
  name: 'ProductCard',
  props: {
    fruit: String,
    price: Number,
    quantity: Number,
  },
  methods: {
    ...mapMutations({
      add: 'addFruit',
      remove: 'removeFruit',
    }),
    addFruit() {
      this.add(this.fruit);
    },
    removeFruit() {
      if (this.quantity === 1) {
        // eslint-disable-next-line no-alert
        alert('Value of fruit can\'t be less than 1');
      } else {
        this.remove(this.fruit);
      }
    },
  },
};
</script>
