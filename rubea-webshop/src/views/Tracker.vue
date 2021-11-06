<template>
  <div class="section">
    <h1>Track Order</h1>
    <div id="input-section">
      <p>5GRGAII4azFuZ8cqIOG3</p>
      <input type="text" v-model="idT" placeholder="Order ID">
      <button @click="checkOrder()" style="margin-top:24px;">Check</button>
      <p> {{ this.info.name }}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase"

export default {
  name: 'Tracker',
  data() {
    return {
      idT: "",
      info: ""
    }
  },
  components: {
  },
  methods: {
    checkOrder() {
      this.orderId = this.idT
      console.log(this.idT)
      var docRef = db.collection("products").doc(this.idT);

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.info = doc.data();
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              alert("This order does not exist.")
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
          alert("Error, try again.")
      });
    }
  },
  computed: {
    setOrderId() {
      return this.$store.getters.getOrderId;
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