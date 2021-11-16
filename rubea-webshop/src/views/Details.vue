<template>
  <div id="page">
    <div class="section">
      <div id="details-card">
      <img id="image" :src="this.itemInfo.image"/>
      <div id="detail">
        <h1> {{ this.itemInfo.name }} </h1>
        <p> {{ this.itemInfo.type }} <br> {{ this.itemInfo.description }} </p>
        <p> {{ this.itemInfo.price }} EUR </p>
      </div>
    </div>
    <Button @click.native="placeOrder()" btnText="Place Order" theme="#555" route=""/>
    </div>
    <div id="header">
      <h1>Terms</h1>
      <p> As you continue to fill out the details of yourself and shipping adress, we will get in touch with you to complete the order. </p>
      <p> Your data is not getting collected, it is only stored safely for the period of the purchase. </p>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase"
import Button from '@/components/Button.vue'

export default {
  name: 'Details',
  props: {
    id: null
  },
  components: {
    Button
  },

  data() {
    return {
      itemInfo: [],
      itemId: ""
    }
  },
  beforeCreate() {
    console.log(this.$route.params.id)
    var docRef = db.collection("products").doc(this.$route.params.id);

    docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          this.itemInfo = doc.data();
          this.itemId = this.$route.params.id
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          alert("This item does not exist.")
      }
    }).catch((error) => {
        console.log("Error getting document:", error);
        alert("Error, try again.")
    });
  },
  methods: {
    placeOrder() {
      this.$router.push('/order/' + this.itemId);
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
  .section {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
    height: 80vh;
    color: #555;

    #details-card {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      background-color: #eee;
      margin-bottom: 64px;
      #detail {
        display: flex;
        flex-direction: column;
        padding: 24px 24px 0 24px;
      }
    }
    #image {
      max-width: 300px;
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
      margin-bottom: 16px;
    }
  }
  #header {
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: flex-end;
      width: 100%;
      height: max-content;
      margin: 64px 0 64px 0;
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

@media screen and (max-width:600px) {
  #page {
    padding: 0 24px 20vh 24px;
    .section {
      min-height: 100vh;
      #details-card {
        flex-direction: column;
        #image {
          max-width: 100%;
        }
        h1 {
          font-size: 32px;
        }
      }
    }
  }
}
</style>