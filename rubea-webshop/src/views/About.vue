<template>
  <div class="section">
    <h1>About</h1>
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

.section {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  height: 100vh;
  padding: 0 8vw 0 8vw;
  margin: 0;
  color: #555;

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