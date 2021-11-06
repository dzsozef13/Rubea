<template>
 <router-link to="details" @click.native="pushDetails()">
  <div id="card">
    <!-- <img id="item-preview" :src="require(`@/assets/items/${img}`)"/> -->
    <!-- <img id="item-preview" :src="require(`@/assets/items/item01.png`)"/> -->
    <img id="item-preview" :src="image"/>
    <div id="item-details">
      <h1>{{ name }}</h1>
      <h2>{{ type }}</h2>
      <p> {{ price }} DKK </p>
      <p> {{ description }} DKK </p>
    </div>
  </div>
 </router-link>
</template>

<script>

export default {
    name: 'ItemCard',
    props: [
      "name",
      "type",
      "description",
      "price",
      "image"
    ],

    data() {
      return {
      }
    },
    methods: {
      pushDetails() {
        console.log("hell")
        this.itemDetails.itemName = this.name;
        this.itemDetails.itemType = this.type;
        this.itemDetails.itemDescription = this.description;
        this.itemDetails.itemPrice = this.price;
        this.itemDetails.itemImage = this.image;
      }
    },
    computed: {
      itemDetails() {
        return this.$store.getters.getItemDetails;
    }
  }
}

</script>

<style lang="scss" scoped>
#card {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 200px;
  max-width: 300px;
  height: auto;
  background-color: #eee;

  #item-preview {
    height: 200px;
  }

  #item-details {
    height: auto;
    padding: 16px;

    h1 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 0;
    }

    h2{
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 16px;
    }

    p {
      font-size: 12px;
      font-weight: 300;
      margin: 0;
    }
  }
}
</style>