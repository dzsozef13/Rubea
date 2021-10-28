import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [],
  },
  mutations: {
    created() {
      dbItemAdd.get().then((querySnapshot) => {
      querySnapshot.forEach((doc => {
          var itemData = doc.data();
          this.shopItems.push({
          id: doc.id,
          name: itemData.name,
          type: itemData.type,
          description: itemData.description,
          price: itemData.price
          })
      }))
      })
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getShopItems: state => state.shopItems,
  }
})
