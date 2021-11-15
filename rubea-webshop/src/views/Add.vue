<template>
  <div class="section">
    <h1>Add Item</h1>
    <div id="input-section">
      <input type="text" v-model="name" placeholder="Name">
      <input type="text" v-model="type" placeholder="Type">
      <input type="text" v-model="description" placeholder="Description">
      <input type="number" v-model="price" placeholder="Price">
      <!-- <input type="text" v-model="status" placeholder="Status"> -->
      <input type="file" @change="uploadImage">
      <button @click="uploadItem" style="margin-top:24px;">Add Item</button>
    </div>
  </div>
</template>

<script>

// import Button from '@/components/Button.vue'
import { dbItemAdd, fb } from '../../firebase'

export default {
  name: 'Add',
  data() {
    return {
      name: '',
      type: '',
      description: '',
      price: null,
      status: "",
      image: null
    }
  },
  components: {
  },
  methods: {
    uploadItem() {
      if (this.image != null) {
        dbItemAdd.add({
          name: this.name,
          type: this.type,
          description: this.description,
          price: this.price,
          status: this.status,
          image: this.image
        })
        this.$router.push("items") //takes back to items overview
      }
      else {
        alert("You must upload an image first.")
      }
    },
    uploadImage(e) {
      let file = e.target.files[0]
      console.log(e.target.files[0])
      var storageRef = fb.storage().ref('products/'+ file.name);
      let uploadTask = storageRef.put(file)
      console.log(uploadTask)

      uploadTask.on('state_changed', (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      }, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.image = downloadURL
          console.log('File available at', downloadURL);
        });
      }
    );
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