<template>
  <div id="page" class="container" :key="itemList">
    <div class="row section">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 item-container" v-for="item in shopItems" :key="item.id">
            <ItemAdmin :name="item.name" :type="item.type" :price="item.price" :img="item.img"/> 
            <button @click="deleteItem(item.id)">X</button>  
        </div>
    </div>
  </div>
</template>

<script>


import ItemAdmin from '@/components/ItemAdmin.vue'
import { dbItemAdd } from '../../firebase'

export default {
name: 'Shop',
  data() {
    return {
      shopItems: [],
      itemList: ''
    }
  },
components: {
  ItemAdmin
},
methods: {
  deleteItem(id) {
    dbItemAdd.doc(id).delete().then(function() {
    }).catch(function(error) {
    alert("Error removing document: ", error);
    });
  },
  // forceRerender() {
  //     this.itemList += 1;  
  //     console.log("refresch?")
  // }
},
created() {
  dbItemAdd.onSnapshot((querySnapshot) => {
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
  /*
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
  
  */
},
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