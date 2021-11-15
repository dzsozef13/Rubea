<template>
  <div id="page" class="container">
    <div id="header">
      <h1>Here you can see the orders.</h1>
      <p>Get an overview of your active orders, delete the ones are completed.</p>
    </div>
    <div class="row section">
        <div class="col-12 item-container" v-for="order in orderItems" :key="order.id">
            <OrderAdmin :costumer="order.costumer" :email="order.email" :image="order.image" :item="order.item"/>
            <button @click="deleteItem(order.id, order.costumer)">X</button>       
        </div>
    </div>
      <!-- <button @click="debug()">Debug</button>             -->
  </div>
</template>

<script>

import OrderAdmin from '@/components/OrderAdmin.vue'
import { dbOrderAdd } from '../../firebase'

export default {
  name: 'Orders',
  data() {
    return {}
  },
  components: {
    OrderAdmin,
  },
  methods: {
    debug() {
      console.log(this.order.costumer)
    },
    deleteItem(id, name) {
      if(confirm("Do you really want to delete " + name + "from the shop?")) {
        dbOrderAdd.doc(id).delete().then(function() {
        alert(name + "was sucsessfully deleted from the orders.");
        }).catch(function(error) {
          alert("Error removing document: ", error);
        });
      } 
    }
  }, 
  beforeCreate() {
      this.$store.dispatch('setOrderItems')
  },
  computed: {
    orderItems() {
      return this.$store.getters.getOrderItems
    }
  }
}

</script>

<style lang="scss" scoped>

#page {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 64px 8vw 0 8vw;
  #header {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
    width: 100%;
    height: 25vh;
    h1 {
      text-transform: uppercase;
      text-align: left;
      font-size: 32px;
      font-weight: 300;
      margin-bottom: 8px;
    }
    p {
      text-align: left;
      font-size: 20px;
      font-weight: 300;
      margin-bottom: 8px;
    }
  }
}

.item-container {
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 24px 0 24px 0;
}

@media screen and (max-width:600px) {
    .section {
        padding: 0 24px 0 24px;

        #item-container {
        padding: 8px 0 8px 0;
        }
    }
}

</style>