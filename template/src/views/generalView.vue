<template>
  <div>
    <navbar-comp></navbar-comp>

    <drawer-comp></drawer-comp>

    <div id="content-wrapper">
      <router-view></router-view>
    </div>

    <footer-comp></footer-comp>
  </div>
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
