<!-- <template>
  <div fluid style="max-width: unset; margin:0; padding:0;">
    <h1>Login</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="logIn()">Login</button>
  </div>
</template> -->

<template>
  <div class="section">
    <h1>Log in as admin</h1>
    <div id="input-section">
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
    </div>
    <Button @click.native="logIn()" btnText="Log in" theme="#555" route=""/>
  </div>
</template>

<script>

import Button from '@/components/Button.vue'
import firebase from 'firebase'
import 'firebase/auth'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    components: {
      Button
    },
    methods: {
      logIn() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        alert('Successfully logged in');
        this.$router.push('/admin');
      })
      .catch(error => {
        alert(error.message);
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

</style>