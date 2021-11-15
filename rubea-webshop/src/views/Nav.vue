<template>
  <div class="section">
    <router-link id="link" v-for="(index, i) in routes" :key="i"
    :to= index.route >
    {{ index.name }} 
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  data() {
    return {
        routes: [
            {
            name: 'Home',
            route: '/'
            },
            {
            name: 'Shop',
            route: '/shop'
            },
            {
            name: 'About',
            route: '/about'
            },
            {
            name: 'Track Order',
            route: '/tracker'
            }
        ]
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

    #link {
        font-size: 32px;
        color: #555;
        text-decoration: none;
        padding: 16px 0 16px 0;
        &:hover {
            opacity: 75%;
        }
    }
}

@media screen and (max-width:600px) {
  .section {
    padding: 0 24px 0 24px;
  }
}
</style>