<template>
  <div id="card">
    <!-- <img id="item-preview" :src="require(`@/assets/items/${img}`)"/> -->
    <img id="item-preview" :src="require(`@/assets/items/item01.png`)"/>
    <div id="item-details">
      <h1>{{ name }}</h1>
      <h2>{{ type }}</h2>
      <p> {{ price }} DKK </p>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ItemAdmin',
    props: [
      "name",
      "type",
      "price",
      "img",
      "id"
    ],

    data() {
        return {
        }
    }
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