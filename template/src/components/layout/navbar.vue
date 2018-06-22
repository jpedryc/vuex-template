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
  import { mapGetters, mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions({
        updateClipped: 'layout/updateClipped',
        updateDrawer: 'layout/updateDrawer',
        updateMinivariant: 'layout/updateMinivariant',
        updateFixedprop: 'layout/updateFixedprop'
      })
    },
    computed: {
      ...mapGetters({
        title: 'layout/title'
      }),
      clipped: {
        get () {
          return this.$store.state.layout.clipped
        },
        set (value) {
          this.updateClipped(value)
        }
      },
      drawer: {
        get () {
          return this.$store.state.layout.drawer
        },
        set (value) {
          this.updateDrawer(value)
        }
      },
      miniVariant: {
        get () {
          return this.$store.state.layout.miniVariant
        },
        set (value) {
          this.updateMinivariant(value)
        }
      },
      fixedProp: {
        get () {
          return this.$store.state.layout.fixedProp
        },
        set (value) {
          this.updateFixedprop(value)
        }
      }
    }
  }
</script>
