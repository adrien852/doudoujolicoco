<template>
<div id="mySidebar" class="sidebar" data-backdrop="static">
    <div class="sidebarContent mt-2">
        <div class="d-lg-none d-block">
            <RouterLink to="/"><h2>Accueil</h2></RouterLink>
            <RouterLink to="/a-propos"><h2>À propos</h2></RouterLink>
            <RouterLink to="/boutique"><h2>Boutique</h2></RouterLink>
        </div>
        <RouterLink to="/boutique/categories"><h2>Catégories</h2></RouterLink>
        <RouterLink v-for="category in categories" :to="'/boutique/'+category.normalized">
        <ul class="m-0">
            <li>
                <h3 class="pl-3">{{category.name}}</h3>
            </li>
        </ul>
        </RouterLink>
        <RouterLink to="/contact"><h2 class="m-0 py-2">Contact</h2></RouterLink>
        <RouterLink to="/faq"><h2 class="m-0 py-2">FAQ</h2></RouterLink>
        <RouterLink v-if="adminStore.isAdmin" to="/admin"><h2 class="m-0 py-2">Admin</h2></RouterLink>
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