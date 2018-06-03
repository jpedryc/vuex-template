<template>
  <v-toolbar
    app
    :clipped-left="clipped"
  >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-btn icon @click.stop="miniVariant = !miniVariant">
      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
    </v-btn>
    <v-btn icon @click.stop="clipped = !clipped">
      <v-icon>web</v-icon>
    </v-btn>
    <v-btn icon @click.stop="fixedProp = !fixedProp">
      <v-icon>remove</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title"></v-toolbar-title>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        clipped: 'layout/clipped',
        drawer: 'layout/drawer',
        miniVariant: 'layout/miniVariant',
        fixedProp: 'layout/fixedProp',
        title: 'layout/title',
      })
    }
  }
</script>
