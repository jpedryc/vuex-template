<template>
  <v-layout row wrap>
    <v-flex xs12>

      <!--
        !!! The below card component serves only for demonstration purposes.

        For starters - remove the block of code below and replace it with:

        <v-card>
          <v-card-title>Dashboard</v-card-title>
        </v-card>

      -->
      <v-card class="pa-2 ma-2">
        <v-card-title>Dashboard</v-card-title>

        <!-- MAIN LOGO -->
        <v-layout row wrap>
          <v-flex xs6 offset-xs3 text-xs-center>
            <img src="../../assets/younglions.png" width="150" alt="younglions" />
          </v-flex>
        </v-layout>

        <!-- TEMPLATE INFORMATION -->
        <v-layout row wrap class="mt-5">
          <v-flex xs6 offset-xs3 text-xs-center>
            <span class="headline">Visit links below to learn more about the template</span>
            <v-layout row wrap>
              <v-flex xs6 text-xs-right>
                <img src="../../assets/github.png" width="25" class="mt-3"/><br/>
                <img src="../../assets/fav_small.png" width="25" class="mt-2" />
              </v-flex>
              <v-flex xs6 text-xs-left class="pt-3 pl-3">
                <a href="https://github.com/YoungLionsGroup/vuex-template" class="body-2" target="_blank">github</a><br/><br/>
                <a href="https://younglions.pl/vuetify-pwa-template-vuex-extension" class="body-2" target="_blank">younglions.pl</a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <!-- VUETIFY AND VUEX INFORMATION -->
        <v-layout row wrap class="mt-3">
          <v-flex xs6 offset-xs3 text-xs-center>
            <span class="body-2">Check the links below to learn more about Vuetify and Vuex</span><br/>
            <v-layout row wrap>
              <v-flex xs6 text-xs-right>
                <v-icon class="mt-2">my_library_books</v-icon><br/>
                <v-icon class="mt-1">store</v-icon>
              </v-flex>
              <v-flex xs6 text-xs-left class="pt-3 pl-3">
                <a href="https://vuetifyjs.com" target="_blank">Vuetify</a><br/>
                <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <!-- YOUNG LIONS INFORMATION -->
        <v-layout row wrap class="mt-5 mb-5">
          <v-flex xs6 offset-xs3 text-xs-center>
            <span class="body-1">You like this template? Check our other projects!</span><br/><br/>
            <a href="https://younglions.pl/" target="_blank">Young Lions</a>
          </v-flex>
        </v-layout>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
