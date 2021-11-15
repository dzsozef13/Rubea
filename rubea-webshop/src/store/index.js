import Vue from 'vue'
import Vuex from 'vuex'
import { dbItemAdd } from '../../firebase'
import { dbOrderAdd } from '../../firebase'


// import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopItems: [],
    orderItems: [],
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
    },
    setOrderItems: state => {
      let orderItems = []

      dbOrderAdd.onSnapshot((snapshotItems) => {
        orderItems = []
        snapshotItems.forEach((doc => {
          var orderData = doc.data();
          orderItems.push({
            ...orderData,
            id: doc.id
          })
        }))
        state.orderItems = orderItems
      })
    }
  },
  actions: {
    setShopItems: context => {
      context.commit('setShopItems')
    },
    setOrderItems: context => {
      context.commit('setOrderItems')
    }
  },
  modules: {
  },
  getters: {
    getShopItems: state => state.shopItems,
    getOrderItems: state => state.orderItems,
    // getOrderId: state => state.orderId,
    // getOrderInfo: state => state.orderInfo
  }
})