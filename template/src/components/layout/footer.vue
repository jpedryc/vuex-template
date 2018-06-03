<template>
  <v-footer :fixed="fixedProp" app>
    <span>&copy; 2017</span>
  </v-footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        fixedProp: 'layout/fixedProp'
      })
    }
  }
</script>
