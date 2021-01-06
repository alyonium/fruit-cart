import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    fruits: [
      {
        fruitName: '🍌',
        fruitPrice: 10,
        fruitQuantity: 3,
      },
      {
        fruitName: '🍏',
        fruitPrice: 5,
        fruitQuantity: 2,
      },
      {
        fruitName: '🍊',
        fruitPrice: 3,
        fruitQuantity: 1,
      }],
  },
  getters: {
    finalPrice: (state) => state.fruits
      .reduce((prevValue, curFruit) => prevValue + (curFruit.fruitPrice * curFruit.fruitQuantity), 0),
  },
  mutations: {
    addFruit(state, addFruit) {
      state.fruits.find((fruit) => fruit.fruitName === addFruit).fruitQuantity += 1;
    },
    removeFruit(state, removeFruit) {
      state.fruits.find((fruit) => fruit.fruitName === removeFruit).fruitQuantity -= 1;
    },
  },
});

export default store;
