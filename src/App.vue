<template>
  <v-app>
    <v-main
      class="d-flex text-center">
      <v-container
        class="d-flex align-center justify-center flex-column">
        <h1>Cart</h1>
        <product-list/>
        <order-window/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProductList from '@/components/ProductList';
import OrderWindow from '@/components/OrderWindow';

export default {
  name: 'App',
  components: {
    ProductList,
    OrderWindow,
  },
};
</script>
