<template>
<div id="mySidebar" class="sidebar">
    <div class="sidebarContent mt-2">
        <RouterLink @click="hideSidebar" to="/boutique/categories"><h2>Catégories</h2></RouterLink>
        <RouterLink @click="hideSidebar" v-for="category in categories" :to="'/boutique/'+category.normalized">
        <ul class="m-0">
            <li>
                <h3 class="pl-3">{{category.name}}</h3>
            </li>
        </ul>
        </RouterLink>
    </div>
    
</div>
</template>
<script setup>
    const props = defineProps({
        categories: Array
    });

    function hideSidebar(){
        let sidebar = document.getElementById("mySidebar");
        if(sidebar.className.includes('toggled')){
            sidebar.style.width = "0";
            sidebar.classList.remove('toggled');
        }
    }
    
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 200;
  top: 92px;
  left: 0;
  background-color: rgba(255, 255, 255, 0.866);
  overflow-x: hidden;
  transition: 0.5s;
  text-transform: uppercase !important;
  letter-spacing: 1px;
}

h2{
    color:#22211F;
    padding: 5px 20px;
    font-size: 12pt;
}
h3{
    color:#22211F;
    font-size: 10pt;
    font-weight: normal;
    margin: 0;
}
a:hover{
    text-decoration: none;
}
ul li::marker {
  content: "\276F";
  color:#A18F7B ;
}
ul{
    padding:8px 30px;
}
ul:hover{
    background-color: #a18f7b1a;
}
</style>