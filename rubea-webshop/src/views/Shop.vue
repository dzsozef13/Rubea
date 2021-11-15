<template>
  <div id="page" class="container">
    <div id="header">
      <h1>My Collection</h1>
      <p>New pieces are in the making, so the collection is always changing. <br> You can find medals, bracelets and complete sets with unique motives and color combinations.</p>
    </div>
    <div class="row section">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 item-container" v-for="item in shopItems" :key="item.id">
            <ItemCard :item="item"/>        
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
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 64px 8vw 20vh 8vw;
  #header {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
    width: 100%;
    height: 25vh;

    margin-bottom: 64px;
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
  justify-content: center;
  padding: 24px;
}

@media screen and (max-width:600px) {
    .page {
      padding: 0 24px 0 24px;

    #item-container {
      padding: 0;
    }
  }
}
</style>