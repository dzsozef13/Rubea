<template>
  <div class="section">
    <div id="header">
      <h1>Welcome back, Bea</h1>
      <p> Now you are logged in as admin, from here you can update your shop and keep track of your orders.</p>
      <p> Hope you are having a good day.</p>
    </div>
    <Button @click.native="logOut()" btnText="Log out" theme="#444" route=""/>
  </div>
</template>

<script>

import Button from '@/components/Button.vue'
import firebase from 'firebase'
import 'firebase/auth'

export default {
  name: 'Admin',
  data() {
    return {
    }
  },
  components: {
    Button
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
          this.$router.push('/');
        });
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
    height: 25vh;

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
}

@media screen and (max-width:600px) {
  .section {
    padding: 0 24px 0 24px;
  }
}
</style>