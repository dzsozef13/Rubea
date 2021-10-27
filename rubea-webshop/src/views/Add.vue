<template>
  <div class="section">
    <h1>Add Item</h1>
    <div id="input-section">
      <input type="text" v-model="name" placeholder="Name">
      <input type="text" v-model="type" placeholder="Type">
      <input type="text" v-model="description" placeholder="Description">
      <input type="number" v-model="price" placeholder="Price">
      <button @click="uploadItem()" style="margin-top:24px;">Add Item</button>
    </div>
  </div>
</template>

<script>

// import Button from '@/components/Button.vue'
import { dbItemAdd } from '../../firebase'

export default {
  name: 'Add',
  data() {
    return {
      name: '',
      type: '',
      description: '',
      price: null,
    }
  },
  components: {
  },
  methods: {
    uploadItem() {
      dbItemAdd.add({
        name: this.name,
        type: this.type,
        description: this.description,
        price: this.price
      })
    }
  }
}

</script>

<style lang="scss" scoped>

.section {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  height: 100vh;
  padding: 0 8vw 0 8vw;
  margin: 0;
  color: #555;

  #input-section {
    display: flex;
    flex-direction: column;
  }

  h1 {
  text-transform: uppercase;
  text-align: left;
  font-size: 64px;
  font-weight: 300;
  margin-bottom: 16px;
  }

  p {
    text-align: left;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 32px;
  }
}

@media screen and (max-width:600px) {
  .section {
    padding: 0 24px 0 24px;
  }
}
</style>