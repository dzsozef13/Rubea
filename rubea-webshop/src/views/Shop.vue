<template>
  <div id="page" class="container">
    <div class="row section">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 item-container" v-for="(index, i) in items" :key="i">
            <ItemCard :name="index.name" :type="index.type" :price="index.price" :img="index.img"/>        
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

#page {
    display: flex;
    align-items: center;
    min-height: 100vh;
    padding: 25vh 8vw 0 8vw;
}

.item-container {
    padding: 24px;
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