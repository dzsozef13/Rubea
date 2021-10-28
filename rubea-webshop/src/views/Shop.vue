<template>
  <div id="page" class="container">
    <div class="row section">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 item-container" v-for="item in shopItems" :key="item.id">
            <ItemCard :name="item.name" :type="item.type" :price="item.price" :img="item.img"/>        
        </div>
    </div>
  </div>
</template>

<script>


import ItemCard from '@/components/ItemCard.vue'
// import { dbItemAdd } from '../../firebase'

export default {
name: 'Shop',
  data() {
    return {
      shopItems: []        
      }
  },
components: {
  ItemCard,
},
/* created() {
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
}, */
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