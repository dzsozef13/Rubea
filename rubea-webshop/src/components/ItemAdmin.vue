<template>
  <div id="card">
    <!-- <img id="item-preview" :src="require(`@/assets/items/${img}`)"/> -->
    <!-- <img id="item-preview" :src="require(`@/assets/items/item01.png`)"/> -->
    <img id="item-preview" :src="image"/>
    <div id="item-details">
      <p>{{ name }}</p>
      <p>{{ type }}</p>
      <p> {{ price }} €</p>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ItemAdmin',
    props: ["name", "type", "price", "status", "image"],

    data() {
        return {
        }
    }
};

</script>

<style lang="scss" scoped>
#card {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  background-color: #eee;

  #item-preview {
    height: 80px;
  }

  #item-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    padding: 16px;

    p {
      font-size: 16px;
      font-weight: 300;
      margin: 0;
    }
  }
}
</style>