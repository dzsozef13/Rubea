<template>
  <div class="section">
    <h1 v-if="this.showMessage === false">Track Order</h1>
    <div id="input-section" v-if="this.showMessage === false">
      <input type="text" v-model="inputId" placeholder="Order ID">
    </div>
    <Button v-if="this.showMessage === false" @click.native="checkOrder()" btnText="Track Order" theme="#555" route=""/>
    <div id="result" v-if="this.showMessage === true">
      <div>
        <h2> {{ this.info.name }} </h2>
        <p>Your order is stored in our system. <br> We will get in touch with you as soon as possible. <br> In case you have any questions regarding your order, please contact: vasbea@rubea.hu </p>
      </div>
      <img id="image" :src="this.info.image"/>
    </div>
    <Button v-if="this.showMessage === true" btnText="Back to Home" theme="#555" route="/"/>
  </div>
</template>

<script>
import { db } from "../../firebase"
import Button from '@/components/Button.vue'

export default {
  name: 'Tracker',
  data() {
    return {
      inputId: "",
      info: "",
      showMessage: false,
    }
  },
  components: {
    Button
  },
  methods: {
    checkOrder() {
      this.orderId = this.inputId
      console.log(this.inputId)
      var docRef = db.collection("products").doc(this.inputId);

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data());
              this.info = doc.data();
              this.showMessage = true
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

  min-height: 100vh;
  padding: 0 8vw 20vh 8vw;
  margin: 0;
  color: #555;

  #input-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
  }

  #result {
    display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: space-between;
    margin: 64px 0 64px 0;
    padding: 0;
    width: 100%;
    height: auto;
    background-color: #eee;
    #image {
      max-width: 200px;
      max-height: 200px;
    }
    h2 {
      padding: 16px 0 0 16px;
    }
    p {
      padding: 0 0 0 16px;
    }
  }

  h1 {
    text-transform: uppercase;
    text-align: left;
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 16px;
  }

  h2 {
  text-transform: uppercase;
  text-align: left;
  font-size: 32px;
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
    padding: 0 24px 20vh 24px;
    #result {
    flex-direction: column;
    #image {
      max-width: 400px;
      max-height: 400px;
    }
  }
}
}
</style>