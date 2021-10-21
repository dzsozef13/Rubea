<template>
  <div fluid style="max-width: unset; margin:0; padding:0;">
    <h1>Login</h1>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="logIn()">Login</button>
  </div>
</template>

<script>

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
  height: 100vh;
  width: 100vw;
  padding: 0 8vw 0 8vw;
  margin: 0;
  color: #555;
  background-color: #eee;

  h1 {
  text-transform: uppercase;
  font-size: 64px;
  font-weight: 300;
  margin-bottom: 16px;
  }

  p {
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