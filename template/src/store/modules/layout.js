const UPDATE_DRAWER = 'UPDATE_DRAWER'
const UPDATE_MINIVARIANT = 'UPDATE_MINIVARIANT'
const UPDATE_CLIPPED = 'UPDATE_CLIPPED'
const UPDATE_FIXEDPROP = 'UPDATE_FIXEDPROP'

const layoutStore = {
  namespaced: true,
  state: {
    clipped: false,
    drawer: true,
    fixedProp: false,
    miniVariant: false,
    title: 'PWA + Vuex Starter',
    menuItems: [
      {
        icon: 'dashboard',
        title: 'Dashboard',
        url: '/'
      },
      {
        icon: 'arrow_right',
        title: 'Menu item',
        url: '/menu-item'
      }
    ]
  },
  getters: {
    clipped: state => state.clipped,
    drawer: state => state.drawer,
    fixedProp: state => state.fixedProp,
    miniVariant: state => state.miniVariant,
    menuItems: state => state.menuItems,
    title: state => state.title
  },
  actions: {
    updateDrawer ({ commit }, value) {
      commit(UPDATE_DRAWER, value)
    },
    updateMinivariant ({ commit }, value) {
      commit(UPDATE_MINIVARIANT, value)
    },
    updateClipped ({ commit }, value) {
      commit(UPDATE_CLIPPED, value)
    },
    updateFixedprop ({ commit }, value) {
      commit(UPDATE_FIXEDPROP, value)
    }
  },
  mutations: {
    [UPDATE_DRAWER] (state, value) {
      if (value !== undefined) {
        state.drawer = value
      }
    },
    [UPDATE_MINIVARIANT] (state, value) {
      if (value !== undefined) {
        state.miniVariant = value
      }
    },
    [UPDATE_CLIPPED] (state, value) {
      if (value !== undefined) {
        state.clipped = value
      }
    },
    [UPDATE_FIXEDPROP] (state, value) {
      if (value !== undefined) {
        state.fixedProp = value
      }
    }
  }
}
export default layoutStore
