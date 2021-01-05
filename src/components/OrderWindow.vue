<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey darken-2"
            dark
            v-bind="attrs"
            v-on="on"
            class="mt-8"
          >
            Buy
          </v-btn>
        </template>

        <v-card>
          <v-card-title
            class="headline grey lighten-2 text-center justify-center d-flex">
            Thank you for your order!
          </v-card-title>

          <v-card-actions
          class="d-flex justify-center">
            <v-btn
              outlined
              fab
              color="grey darken-2"
              @click="dialog = false"
            >
              <v-icon>💃</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
export default {
  name: 'OrderWindow',
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>

</style>
