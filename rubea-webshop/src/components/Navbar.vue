<template>
    <div id="navbar">
        <router-link id="logo-light" v-if='$route.name === "Home"' to="/"></router-link>
        <router-link id="logo-dark" v-if='$route.name !== "Home"' to="/"></router-link>

        <div class="links" v-if='$route.name === "Home" || $route.name === "Shop" || $route.name === "About" || $route.name === "Tracker" || $route.name === "Details"'>
            <router-link id="link" v-for="(index, i) in routes" :key="i"
            :style="cssProps"
            :to= index.route >
            {{ index.name }} 
            </router-link>
        </div>
        <div class="links" v-if='$route.name === "Admin" || $route.name === "Orders" || $route.name === "Items" || $route.name === "Add"'>
            <router-link id="admin-link" v-for="(index, i) in admin_routes" :key="i"
            :style="cssProps"
            :to= index.route >
            {{ index.name }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
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
                },
                // {
                // name: 'Admin',
                // route: '/admin'
                // }
            ],
            admin_routes: [
                {
                name: 'Home',
                route: '/'
                },
                {
                name: 'Dashboard',
                route: '/admin'
                },
                {
                name: 'Orders',
                route: '/orders'
                },
                {
                name: 'Items',
                route: '/items'
                },
                {
                name: 'Add Item',
                route: '/add'
                }
            ],

            navTheme:'', //var for navbar theme in different views
            pathArray:'/' //var to store current url path name
        }
    },
    methods: {
        getPath() {
            this.pathArray = window.location.pathname;
            if (this.pathArray === '/') {
                this.navTheme = '#fff'
            }
            else {
                this.navTheme = '#555'
            }
            // console.log(this.pathArray);
            // console.log(this.navTheme);
            // document.getElementById("link").style.color = this.navTheme; 
        }
    },
    watch: {
        $route() {
            this.$nextTick(this.getPath());
        }   
    },
    computed: {
        cssProps() {
            return {
                '--link-color': this.navTheme,
            }
        }
    },
    mounted() {
       this.$router.onReady(() => this.getPath());
    },
}
</script>

<style lang="scss" scoped>
#navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    height: 128px;
    padding: 0 8vw 0 8vw;
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
    .links {
        display: flex;
        justify-content: space-between;
        width: auto;
        padding-left: 64px;
        #link {
            color: var(--link-color);
            text-decoration: none;
            padding: 0 16px 0 16px;
        }
        #admin-link {
            color: var(--link-color);
            text-decoration: none;
            padding: 0 16px 0 16px;
        }
    }
}
</style>
