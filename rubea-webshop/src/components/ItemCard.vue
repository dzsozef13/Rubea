<template>
  <router-link
    style="text-decoration: none"
    :to="{ name: 'Details', params: { id: item.id } }"
  >
    <div id="card">
      <!-- <img id="item-preview" :src="require(`@/assets/items/${img}`)"/> -->
      <!-- <img id="item-preview" :src="require(`@/assets/items/item01.png`)"/> -->
      <img id="item-preview" :src="item.image" />
      <div id="item-details">
        <h1>{{ item.name }}</h1>
        <h2>{{ item.type }}</h2>
        <p>{{ item.price }} EUR</p>
        <!-- <p> {{ item.description }} DKK </p>
      <p> {{ item.id }} </p> -->
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["item"],

  data() {
    return {};
  },
  computed: {
    itemDetails() {
      return this.$store.getters.getItemDetails;
    },
  },
};
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
  max-width: 250px;
  height: auto;
  background-color: #eee;

  #item-preview {
    max-height: 250px;
  }

  #item-details {
    height: auto;
    padding: 16px;
    text-align: left;
    align-items: center;

    h1 {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 0;
      color: #444;
    }

    h2 {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 16px;
      color: #444;
    }

    p {
      font-size: 12px;
      font-weight: 300;
      margin: 0;
      color: #444;
    }
  }
}
</style>