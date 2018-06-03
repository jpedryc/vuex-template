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
        icon: 'settings',
        title: 'Dashboard',
        url: '/',
      },
      {
        icon: 'arrow_right',
        title: 'Menu item',
        url: '/menu-item',
      }
    ]
  },
  getters: {
    clipped: state => state.clipped,
    drawer: state => state.drawer,
    fixedProp: state => state.fixedProp,
    menuItems: state => state.menuItems,
    title: state => state.title,
  },
  actions: {

  },
  mutations: {
    UPDATE_DRAWER: (state, value) => {
      if (value !== undefined) {
        state.drawer = value
      }
    },
    UPDATE_MINIVARIANT: (state, value) => {
      if (value !== undefined) {
        state.miniVariant = value
      }
    },
    UPDATE_CLIPPED: (state, value) => {
      if (value !== undefined) {
        state.clipped = value
      }
    },
    UPDATE_FIXEDPROP: (state, value) => {
      if (value !== undefined) {
        state.fixedProp = value
      }
    }
  },
}
export default layoutStore
