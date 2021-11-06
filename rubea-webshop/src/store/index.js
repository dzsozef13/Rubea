import Vue from 'vue'
import Vuex from 'vuex'
import { dbItemAdd } from '../../firebase'

// import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [],
    itemDetails: {
      itemName: "name",
      itemType: "type",
      itemDescription: "text",
      itemPrice: "199",
      itemImage: "url"
    },
    orderId: "",
    orderInfo: []
  },
  mutations: {
    setShopItems: state => {
      let shopItems = []

      dbItemAdd.onSnapshot((snapshotItems) => {
        shopItems = []
        snapshotItems.forEach((doc => {
          var itemData = doc.data();
          shopItems.push({
            ...itemData,
            id: doc.id
          })
        }))
        state.shopItems = shopItems
      })
    }
  },
  actions: {
    setShopItems: context => {
      context.commit('setShopItems')
    }
  },
  modules: {
  },
  getters: {
    getShopItems: state => state.shopItems,
    getItemDetails: state => state.itemDetails,
    getOrderId: state => state.orderId,
    getOrderInfo: state => state.orderInfo
  }
})