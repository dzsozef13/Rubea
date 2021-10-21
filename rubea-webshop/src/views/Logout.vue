<template>
  <div class="about">
    <h1>Click the button to log out. See ya!</h1>
    <button @click="logOut">Button</button>
  </div>
</template>

<script>

import firebase from 'firebase'
import 'firebase/auth'

export default {
  data() {
    return {}
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
