<script setup>
</script>

<template>
    <a href="#" class="col-md-4 col-sm-6 col-12 mt-4">
        <div class="shopItemCard bg-light d-flex flex-column">
            <img width="300" src="../../assets/images/BLOG-5-400x250.png">
            <p class="itemCategory text-center pt-2">Peluches - Grand format</p>
            <p class="itemTitle text-center pt-2">Girafe</p>
        </div>
    </a>
    
</template>

<style scoped>
    .shopItemCard{
        border-radius: 10px;
        box-shadow: 2px 3px 8px #0000001f;
    }
    a{
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
        color:initial;
    }
    a:hover{
        transform: scale(1.03);
        -webkit-transition: transform 0.1s ease-out;
        -moz-transition: transform 0.1s ease-out;
        -o-transition: transform 0.1s ease-out;
        transition: transform 0.1s ease-out;
        color: initial;
        text-decoration: none;
    }
    .shopItemCard img{
        border-radius:10px 10px 0 0;
        width: auto;
    }
    .itemCategory{
        font-size: small;
        opacity: 0.6;
        margin-bottom: 0;
    }
    .itemTitle{
        font-size:larger;
        opacity: 1;
    }
</style>