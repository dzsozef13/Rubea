<template>
  <div class="section">
    <img id="image" :src="this.info.image"/>
    <h1> {{ this.info.name }} </h1>
    <p> {{ this.info.type }}  </p>
    <p> {{ this.info.description }} </p>
    <p> {{ this.info.price }} </p>
    <button>Place Order</button>
  </div>
</template>

<script>
import { db } from "../../firebase"

export default {
  name: 'Details',
  props: {
    id: null
  },

  data() {
    return {
      info: ""
    }
  },
  beforeCreate() {
    console.log(this.$route.params.id)
    var docRef = db.collection("products").doc(this.$route.params.id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            this.info = doc.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            alert("This item does not exist.")
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
        alert("Error, try again.")
    });
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

  #image {
    width: 300px;
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