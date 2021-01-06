<template>
  <v-simple-table dark
    style="width: 500px"
    class="mt-8">
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-center">
          Fruit
        </th>
        <th class="text-center">
          Price
        </th>
        <th class="text-center">
          Count
        </th>
        <th class="text-center">
          +/-
        </th>
      </tr>
      </thead>
      <tbody>
          <product-card
            v-for="fruit in fruits"
            :key="fruit.fruitName"
            :fruit="fruit.fruitName"
            :price="fruit.fruitPrice"
            :quantity="fruit.fruitQuantity"
          />
      <tr>
        <td
          colspan="3"
          style="font-size: 1.2em"
          class="text-center grey darken-3">
          Price
        </td>
        <td
          style="font-size: 1.2em"
          class="text-center grey darken-2 font-weight-bold">
           {{ finalPrice }}
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import ProductCard from '@/components/ProductCard';
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'ProductList',
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters([
      'finalPrice',
    ]),
    ...mapState([
      'fruits',
    ]),
  },
};
</script>
