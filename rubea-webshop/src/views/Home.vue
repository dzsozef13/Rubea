<template>
  <div class="section"> 
    <h1>Rubea Enamel</h1>
    <p>Shiny enamles straight from a small village in Europe. <br> Text about some thing here, nice.</p>
    <Button btnText="My products" theme="#fff" route="/shop"/>
  </div>
</template>

<script>

import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    Button
    // SquareButton,
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
  color: white;
  background-image: url("../assets/img01.jpg");
  background-position: center;
  background-size: cover;

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