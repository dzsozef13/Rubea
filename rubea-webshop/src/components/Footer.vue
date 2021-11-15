<template>
    <div id="footer">
        <router-link id="logo-light" to="/"></router-link>
        <router-link id="login" to="/admin">Login</router-link>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
#footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 0;
    height: 120px;
    padding: 0 8vw 0 8vw;
    background-color: #333;
    #logo-light {
        display: block;
        width: 36px;
        height: 36px;
        background-image: url('../assets/rubea_webshop_logo_white.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
    #logo-dark {
        display: block;
        width: 36px;
        height: 36px;
        background-image: url('../assets/rubea_webshop_logo_dark.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
    #login {
        color: white;
        opacity: 5%;
        text-decoration: none;
        padding: 0 16px 0 16px;
    }
}
@media screen and (max-width:600px) {
  #login {
      display: none;
  }
}
</style>
