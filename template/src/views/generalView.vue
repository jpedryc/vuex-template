<template>
  <v-app>
    <drawer-comp></drawer-comp>

    <navbar-comp></navbar-comp>

    <v-content>
      <router-view></router-view>
    </v-content>

    <footer-comp></footer-comp>
  </v-app>
</template>

<script>
  import navbarComp from '../components/layout/navbar.vue'
  import drawerComp from '../components/layout/drawer.vue'
  import footerComp from '../components/layout/footer.vue'

  export default {
    components: {
      navbarComp,
      drawerComp,
      footerComp
    }
  }
</script>
