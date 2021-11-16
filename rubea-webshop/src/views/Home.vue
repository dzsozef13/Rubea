<template>
  <div id="page">
    <div v-if="this.random==1" id="welcome-1" class="section-column"> 
      <h1>Rubea</h1>
      <p> Welcome to my webshop! <br> Here you will find a unique collection of enamels, <br> dreamed and created by me. </p>
      <Button btnText="My products" theme="#fff" route="/shop"/>
    </div>
    <div v-if="this.random==2" id="welcome-2" class="section-column"> 
      <h1>Rubea</h1>
      <p> Welcome to my webshop! <br> Here you will find a unique collection of enamels, <br> dreamed and created by me. </p>
      <Button btnText="My products" theme="#fff" route="/shop"/>
    </div>
    <div v-if="this.random==3" id="welcome-3" class="section-column"> 
      <h1>Rubea</h1>
      <p> Welcome to my webshop! <br> Here you will find a unique collection of enamels, <br> dreamed and created by me. </p>
      <Button btnText="My products" theme="#fff" route="/shop"/>
    </div>
    <div v-if="this.random==1" id="about-1" class="section-row">
      <img class="img" :src="require('@/assets/procd.jpg')" alt="">
      <div>
        <p>I bend copper, crush glass and burn. <br> The result of my work is a shiny enamel, that is special to its owner. </p>
        <p>You may have an idea for your own enamel. Contact me and see if we can create it together! </p>
        <Button btnText="About me" theme="#444" route="/about"/>
      </div>
    </div>
    <div v-if="this.random==2" id="about-2" class="section-row">
      <img class="img" :src="require('@/assets/procd.jpg')" alt="">
      <div>
        <p>I bend copper, crush glass and burn. <br> The result of my work is a shiny enamel, that is special to its owner. </p>
        <p>You may have an idea for your own enamel. Contact me and see if we can create it together! </p>
        <Button btnText="About me" theme="#444" route="/about"/>
      </div>
    </div>
    <div v-if="this.random==3" id="about-3" class="section-row">
      <img class="img" :src="require('@/assets/procd.jpg')" alt="">
      <div>
        <p>I bend copper, crush glass and burn. <br> The result of my work is a shiny enamel, that is special to its owner. </p>
        <p>You may have an idea for your own enamel. Contact me and see if we can create it together! </p>
        <Button btnText="About me" theme="#444" route="/about"/>
      </div>
    </div>
  </div>
</template>

<script>

import Button from '@/components/Button.vue'

export default {
  name: 'Home',
  data() {
    return {
      // bg: ['url(https://firebasestorage.googleapis.com/v0/b/rubea-webshop.appspot.com/o/backgrounds%2Fbgimg03.png?alt=media&token=842a7356-26d4-4ff7-8e56-7d85e232189b)',
      //      'url(https://firebasestorage.googleapis.com/v0/b/rubea-webshop.appspot.com/o/backgrounds%2Fbgimg02.png?alt=media&token=a944e463-0214-4ed8-97ed-31733a3930dd)',
      //      'url("https://firebasestorage.googleapis.com/v0/b/rubea-webshop.appspot.com/o/backgrounds%2Fbgimg01.jpg?alt=media&token=dcc94965-6af3-4f04-88e2-6913cf322a93)',
      // ]
      random: null,
      bg: [ '../assets/bgimg01.jpg',
            '../assets/bgimg02.png',
            '../assets/bgimg03.png'
      ]
    }
  },
  components: {
    Button
    // SquareButton,
  },
  created() {
    this.random = Math.floor(Math.random() * 3 + 1)
    console.log(this.random)
    // document.getElementById("welcome").style.backgroundImage=this.bg[random];
  }
}

</script>

<style lang="scss" scoped>

#welcome-1 {
    background-image: url("../assets/bgimg01.jpg");
    color: white;
}
#welcome-2 {
    background-image: url("../assets/bgimg02.png");
    color: white;
}
#welcome-3 {
    background-image: url("../assets/bgimg03.png");
    color: white;
}
#about-1 {
    background-color: #AAB4B7;
    color: #333;
}
#about-2 {
    background-color: #AA9C93;
    color: #333;
}
#about-3 {
    background-color: #DBCAB8;
    color: #333;
}
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
  height: 100vh;
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

@media screen and (max-width:600px) {
  .section-column {
    padding: 0 24px 0 24px;
  }
  .section-row {
    height: max-content;
    padding: 64px 24px 20vh 24px;
    flex-direction: column;
  }
  .img {
    max-height: 300px;
  }
}


</style>