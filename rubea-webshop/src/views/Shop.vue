<template>
  <div>
    <div class="section">
        <div>
            <h1>Shop</h1>
        </div>
    </div>
    <div class="section">
        <div v-for="(index, i) in items" :key="i">
            <div id="item-container">
                <ItemCard :name="index.name" :type="index.type" :price="index.price" :img="index.img"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import ItemCard from '@/components/ItemCard.vue'

export default {
    name: 'Shop',
        data() {
            return {
                items: [
                    {
                        id: "a000",
                        name: "Tulip",
                        type: "Necklace",
                        img: "item01.png",
                        price: 100,
                        data: [
                            {
                                color: ["blue", "purple", "green"],
                                material: ["copper", "stainless steel", "glass"]
                            }
                        ]
                    },
                    {
                        id: "a001",
                        name: "Lavendel",
                        type: "Set",
                        img: "item01.png",
                        price: 240,
                        data: [
                            {
                                color: ["red", "purple"],
                                material: ["copper", "glass"]
                            }
                        ]
                    },
                    {
                        id: "a001",
                        name: "Margaret",
                        type: "Set",
                        img: "item01.png",
                        price: 240,
                        data: [
                            {
                                color: ["red", "purple"],
                                material: ["copper", "glass"]
                            }
                        ]
                    },{
                        id: "a001",
                        name: "Lavendel",
                        type: "Set",
                        img: "item01.png",
                        price: 240,
                        data: [
                            {
                                color: ["red", "purple"],
                                material: ["copper", "glass"]
                            }
                        ]
                    },
                    {
                        id: "a001",
                        name: "Lavendel",
                        type: "Set",
                        img: "item01.png",
                        price: 240,
                        data: [
                            {
                                color: ["red", "purple"],
                                material: ["copper", "glass"]
                            }
                        ]
                    }
                ]
            }
        },
    components: {
        ItemCard,
    }
}

</script>

<style lang="scss" scoped>

.section {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    
    min-height: 50vh;
    width: 100vw;
    padding: 0 8vw 0 8vw;
    margin: 0;
    color: #555;
    background-color: white;

    h1 {
        text-transform: uppercase;
        font-size: 64px;
        font-weight: 300;
        margin-bottom: 0;
    }

    p {
        font-size: 20px;
        font-weight: 300;
        margin-bottom: 32px;
    }

    #item-container {
        display: flex;
        justify-content: center;
        padding: 16px;
    }
}

@media screen and (max-width:600px) {
    .section {
        padding: 0 24px 0 24px;

        #item-container {
        padding: 8px 0 8px 0;
    }
    }
}
</style>