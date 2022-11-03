<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import Transformers from "./Transformers";
// import GameOfThrones from "./GameOfThrones";

export default {
  name: "Class25",
  components: {
    // "transformers-component": Transformers,
    // "got-component": GameOfThrones
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App - Class 25"
    };
  }
};
</script>
