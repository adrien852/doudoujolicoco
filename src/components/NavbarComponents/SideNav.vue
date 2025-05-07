<template>
<div id="mySidebar" class="sidebar" data-backdrop="static">
    <div class="sidebarContent mt-2">
        <div class="d-lg-none d-block">
            <RouterLink class="mainNavItems d-block" to="/">Accueil</RouterLink>
            <RouterLink class="mainNavItems d-block" to="/a-propos">À propos</RouterLink>
            <RouterLink class="mainNavItems d-block" to="/boutique">Boutique</RouterLink>
        </div>
        <RouterLink class="mainNavItems d-block" to="/boutique/categories">Catégories</RouterLink>
        <RouterLink v-for="category in categories" :to="'/boutique/'+category.normalized">
        <ul class="m-0">
            <li class="pl-3">
                {{category.name}}
            </li>
        </ul>
        </RouterLink>
        <RouterLink class="mainNavItems d-block m-0 py-2" to="/contact">Contact</RouterLink>
        <RouterLink class="mainNavItems d-block m-0 py-2" to="/faq">FAQ</RouterLink>
        <RouterLink class="mainNavItems d-block m-0 py-2" v-if="adminStore.isAdmin" to="/admin">Admin</RouterLink>
    </div>
</div>
</template>
<script setup>
    import { onMounted } from 'vue';
    import { useAdminStore } from '../../stores/AdminStore';

    const props = defineProps({
        categories: Array
    });

    const adminStore = useAdminStore();

    function closeSideBar(){
        let appContent = document.querySelector(".appContent");
        let sidebar = document.getElementById("mySidebar");
        let app = document.getElementById("app");
        sidebar.style.left = "-250px";
        sidebar.classList.remove('toggled');
        appContent.style.pointerEvents = '';
        appContent.style.opacity = '1';
        app.style.overflow = "auto"
    }

    function openSideBar(){
        let appContent = document.querySelector(".appContent");
        let sidebar = document.getElementById("mySidebar");
        let app = document.getElementById("app");
        sidebar.style.left = "0";
        sidebar.classList.add('toggled');
        if(window.innerWidth < 992){
            appContent.style.pointerEvents = 'none';
            appContent.style.opacity = '0.5';
            app.style.overflow = "hidden"
        }
    }

    onMounted(() => {
        let appContent = document.querySelector(".appContent");

        let sidebar = document.getElementById("mySidebar");
        // document.getElementById("header").addEventListener('mouseleave', () => {
        //     if(window.innerWidth > 991){
        //         if(sidebar.className.includes('toggled')){
        //             closeSideBar();
        //         }
        //     }
        // })
        // document.getElementById("sideToggler").addEventListener('mouseenter', () => {
        //     if(window.innerWidth > 991){
        //         if(!sidebar.className.includes('toggled')){
        //             openSideBar();
        //         }
        //     }
        // })
        document.getElementById("sideToggler").addEventListener('click', () => {
            if(!sidebar.className.includes('toggled')){
                openSideBar();
            }
            else{
                closeSideBar();
            }
        })
    })
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 200;
  top: 60px;
  left: -250px;
  background-color: rgba(255, 255, 255, 0.866);
  overflow-x: hidden;
  transition: 0.3s;
  text-transform: uppercase !important;
  letter-spacing: 1px;
}

.mainNavItems{
    color:#22211F;
    padding: 5px 20px;
    font-size: 12pt;
    font-weight: bold;
    margin-bottom: .5rem;
    line-height: 1.2;
}
li{
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