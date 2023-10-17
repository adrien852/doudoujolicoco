<template>
    <RouterLink :to="'/boutique/'+category.normalized">
        <div class="d-flex flex-column justify-content-center text-center mx-auto mb-2">
            <div class="itemTitle d-flex">
                <p class="m-auto text-uppercase">{{ category.name }}</p>
            </div>
        </div>
        <div class="bg-white d-flex w-100 flex-column shopItemCard zoom">
            <img width="300" height="300" :src="imageUrl">
        </div>
    </RouterLink>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
    category: Object,
})

const imageUrl = computed(() => new URL(`/src/assets/images/${props.category.image}`, import.meta.url).href)

</script>

<style scoped>
    .shopItemCard{
        border-radius: 10px;
        box-shadow: 2px 3px 8px #0000001f;
    }
    a{
        color:#22211F;
        height: fit-content;
    }
    .zoom{
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    .zoom:hover{
        transform: scale(1.03);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
    }
    a:hover{
        color: #22211F;
        text-decoration: none;
    }
    .shopItemCard img{
        border-radius: 10px;
        width: auto;
        height: 200px;
    }
    .itemCategory{
        font-size: small;
        opacity: 0.6;
        margin-bottom: 0;
    }
    .itemTitle{
        font-size:16pt;
        opacity: 1;
        height:38px;
        overflow: hidden;
    }
    .itemTitle p{
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: anywhere;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 13pt;
        font-weight: bold;
        color: #A18F7B;
    }
    .cartImg{
        object-position: 50% 40%;
        width: 160px;
    }
    img{
        object-fit: cover;
    }
    .itemPrice{
        color: #94BCD8;
        font-size: 13pt;
        font-weight: bold;
    }
</style>