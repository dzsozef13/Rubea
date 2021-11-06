<template>
  <div id="page" class="container">
    <div class="row section">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 item-container" v-for="item in shopItems" :key="item.id">
            <ItemCard :name="item.name" :type="item.type" :description="item.description" :price="item.price" :image="item.image"/>        
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
    return {}
  },
components: {
  ItemCard,
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