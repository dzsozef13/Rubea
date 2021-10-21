<template>
  <v-container fluid style="max-width: unset; margin:0; padding:0;">
    <v-row class="section" align="center">
      <v-col lg="6" sm="12" style="max-width: unset; margin:0; padding:0;">
        <h1>About</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

// import Button from '@/components/Button.vue'

export default {
  name: 'Aboubt',
  data() {
    return {
    }
  },
  components: {
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