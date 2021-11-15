<template>
  <div class="section">
    <h1>Thanky you for your order.</h1>
    <p>Check your inbox, you should have received our confirmation email. We will get in touch with you as soon as possible. <br>
      Save this code for later, so you can see the status of your order:</p>
    <p> {{ this.$route.params.id }} </p>
    <Button btnText="Track Order" theme="#444" route="/tracker"/>
  </div>
</template>

<script>

import Button from '@/components/Button.vue'

export default {
  name: 'Thankyou',
  data() {
    return {
    }
  },
  components: {
    Button
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
  padding: 64px 8vw 20vh 8vw;
  margin: 0;
  color: #555;

  h1 {
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
  }
}
</style>