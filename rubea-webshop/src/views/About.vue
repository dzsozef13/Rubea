<template>
  <div class="section-row">
    <img class="img" :src="require('@/assets/bea.jpg')" alt="">
    <div>
      <h1>Hello</h1>
      <p>My name is Bea, the enamelist behind my own brand, Rubea. <br> I live in Hungary, working from home as an entrepreneur. What started as my hobby has grown into a small business during the past couple years.</p>
      <p>However, I am still doing it with the same love and care like at the beginning. You can find my lates creations here, and I also share them on social media, alongside a lot of insights of the process.</p>
      <p>Please feel free to contact me with any questions regarding my enamels or my work. You can find me on Facebook or in emails. :)</p>
      <p>
        <a href="https://www.facebook.com/RubeaEnamel">@RubeaEnamel</a> <br>
        vasbea@rubea.hu
      </p>
    </div>
  </div>
</template>

<script>

// import Button from '@/components/Button.vue'

export default {
  name: 'About',
  data() {
    return {
    }
  },
  components: {
  }
}

</script>

<style lang="scss" scoped>

.img {
  width: auto;
  max-height: 400px;
  margin: 40px;
  border-style: solid;
  border-color: #444;
  border-width: 0 0 24px 0;
}
@mixin section-style {
  display: flex;
  min-height: 100vh;
  padding: 0 8vw 0 8vw;
  margin: 0;
  background-position: center;
  background-size: cover;
}
.section-column {
  @include section-style();
  flex-direction: column;
  align-items: left;
  justify-content: center;
}
.section-row {
  @include section-style();
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
a {
  text-decoration: none;
  text-align: left;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 32px;
}

@media screen and (max-width:600px) {
  .section-column {
    padding: 0 24px 20vh 24px;
  }
  .section-row {
    padding: 0 24px 20vh 24px;
    flex-direction: column;
  }
  .img {
    max-height: 300px;
  }
}
</style>