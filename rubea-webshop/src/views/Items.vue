<template>
  <div id="page" class="container">
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
  min-height: 100vh;
  padding: 25vh 8vw 0 8vw;
}

.item-container {
  display: flex;
  flex-direction: row;
  padding: 24px;
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