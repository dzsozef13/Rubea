<template>
  <div id="page" class="container">
    <div id="header">
      <h1>Here you can see the items.</h1>
      <p>Get an overview of your active items, delete the ones are sold.</p>
    </div>
    <div class="row section">
        <div class="col-12 item-container" v-for="item in shopItems" :key="item.id">
            <ItemAdmin :name="item.name" :type="item.type" :price="item.price" :image="item.image"/>   
            <button @click="deleteItem(item.id, item.name)">X</button>       
        </div>
    </div>
  </div>
</template>

<script>

import ItemAdmin from '@/components/ItemAdmin.vue'
import { dbItemAdd } from '../../firebase'

export default {
  name: 'Items',
    data() {
      return {}
    },
  components: {
    ItemAdmin,
  },
  methods: {
    deleteItem(id, name) {
      if(confirm("Do you really want to delete " + name + "from the shop?")) {
        dbItemAdd.doc(id).delete().then(function() {
        alert(name + "was sucsessfully deleted from the shop.");
        }).catch(function(error) {
          alert("Error removing document: ", error);
        });
      } 
    }
  }, 
  beforeCreate() {
      this.$store.dispatch('setShopItems')
  },
  computed: {
    shopItems() {
      return this.$store.getters.getShopItems
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