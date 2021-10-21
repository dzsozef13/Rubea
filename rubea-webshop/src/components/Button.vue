<template>
    <router-link :to="route" style="text-decoration: none;">
        <v-container id="component">
            <button id="square-button" :style="{ 'border-color': theme }">
            <h4 :style="{ 'color': theme }" > {{ btnText }} </h4>
            </button>
        </v-container>
    </router-link>
</template>

<script>
export default {
    name: 'App',
    props: ['btnText', 'route', 'theme'],
}
</script>



<style lang="scss" scoped>

#component {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: max-content;
    margin: 0;
    padding: 8px;

    #square-button {
        // body
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: max-content;
        margin: 0;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background-color: none;
        //border
        border-style: solid;
        border-width: 2px;
        border-color: white;

        h4 {
            font-weight: 400;
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 0;
            padding: 12px 26px 6px 26px;
            color: var(--button-color);
        }
        &:hover {
            border-color: #ccc;
        }
    }
}
</style>

