<template>
  <div class="section">
    <div id="header">
      <h1> Shipping Information </h1>
      <p> Please make sure to use your real email adress and details, otherwise we will not be able to contact you. </p>
    </div>
    <div id="input-section">
      <input type="text" v-model="costumer" placeholder="Name">
      <input type="text" v-model="email" placeholder="Email">
      <input type="text" v-model="adress" placeholder="Adress">
      <input type="text" v-model="zip" placeholder="Zip">
      <input type="text" v-model="country" placeholder="Country">
      <input type="text" v-model="comment" placeholder="Additional comments">
    </div>
    <Button @click.native="placeOrder()" btnText="Place Order" theme="#555" route=""/>
  </div>
</template>

<script>

import Button from '@/components/Button.vue'
import { dbOrderAdd } from '../../firebase'
import { db } from "../../firebase"

export default {
  name: 'Order',
  data() {
    return {
      itemInfo: [],
      costumer: '',
      email: '',
      adress: '',
      zip: '',
      country: '',
      comment: ''
    }
  },
  components: {
    Button
  },
  beforeCreate() {
    console.log(this.$route.params.id)
    var docRef = db.collection("products").doc(this.$route.params.id);

    docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        this.itemInfo = doc.data();
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
      //create order on database
      if (this.costumer != '' && this.email != '' && this.adress != '' && this.zip != '' && this.country != '') {
        dbOrderAdd.add({
          costumer: this.costumer,
          email: this.email,
          adress: this.adress,
          zip: this.zip,
          country: this.country,
          comment: this.comment,
          item: this.itemInfo
        })
      //send email to admin
      db.collection("mail").add({
        to: "punkjoad@gmail.com",
        message: {
          subject: "New order:" + " " + this.itemInfo.name,
          html: 'There is a new order in the shop, check the details on the admin panel: <br> <a href="https://www.facebook.com/RubeaEnamel">Jump to website!<a/>' +
          "<br>" + " " + "<br> Shipping information: <br>" + this.costumer + "<br>" + this.adress + "<br>" + this.zip + "<br>" + this.country + "<br> Comment: " + this.comment
        },
      })

      //send email to costumer
      db.collection("mail").add({
        to: this.email,
        message: {
          subject: "Order confirmation from Rubea",
          html: "Dear " + this.costumer + "," + "<br> Thank you for your order: " + this.itemInfo.name + 
          "<br> You will soon hear from us! <br>" + " " + "<br> Please check if the following information is correct. <br>" +
          this.adress + "<br>" + this.zip + "<br>" + this.country + "<br>" + " " + "<br> Best regards, <br> Rubea"
        },
      })
      .then(() => console.log("Queued email for delivery!"), this.$router.push("/thankyou/" + this.$route.params.id)) //takes back to shop after order placed;
      }
      else {
        alert("You must fill out the form.")
      }
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

  #header {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-end;
    width: 100%;
    height: max-content;

    margin-bottom: 64px;
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

  #input-section {
    display: flex;
    flex-direction: column;
    margin-bottom: 64px;
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