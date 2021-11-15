<template>
    <router-link :to="dest" style="text-decoration: none;">
        <div id="burger-button" v-on:click="destChange()">
            <div id="logo-light" v-if='$route.name === "Home"' to="/"></div>
            <div id="logo-dark" v-if='$route.name !== "Home"' to="/"></div>
        </div>
    </router-link>
</template>

<script>
export default {
    data() {
        return { 
            dest: "/nav",
            prev: "", // previous view is stored here
            icon: "="
        }
    },
    methods: {
        destChange() {
            if (this.$router.history.current.path == "/nav") {
                this.dest = this.prev
            }
            else { 
                this.dest = "/nav",
                this.prev = this.$router.history.current.path
            }
            //console.log(this.prev);
        }
    }
}
</script>

<style lang="scss">
    $buttonSize: 64px;

    #burger-button {
        // position
        position: fixed;
        bottom: 44px + $buttonSize/2;
        right: 0px;
        margin-right: 25px;
        z-index: 999;
        // body
        display: flex;
        justify-content: center;
        align-items: center;
        width: $buttonSize;
        height: $buttonSize;
        #logo-light {
            display: block;
            width: $buttonSize;
            height: $buttonSize;
            background-image: url('../assets/rubea_webshop_logo_white.svg');
            background-size: contain;
            background-repeat: no-repeat;
        }
        #logo-dark {
            display: block;
            width: $buttonSize;
            height: $buttonSize;
            background-image: url('../assets/rubea_webshop_logo_dark.svg');
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
</style>

