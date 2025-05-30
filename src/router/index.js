import axios from 'axios'
import { useAdminStore } from '@/stores/AdminStore';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import AboutView from '@/views/AboutView.vue'
import ItemView from '@/views/ItemView.vue'
import CartView from '@/views/CartView.vue'
import PaymentView from '@/views/PaymentView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import NotFound from '@/views/NotFound.vue'
import AdminOrdersView from '@/views/AdminViews/Order/OrdersView.vue'
import AdminOrderView from '@/views/AdminViews/Order/OrderView.vue'
import AdminView from '@/views/AdminViews/AdminView.vue'
import AdminInventoryView from '@/views/AdminViews/Inventory/InventoryView.vue'
import AdminInventoryItemView from '@/views/AdminViews/Inventory/InventoryItemView.vue'
import AdminInventoryNewView from '@/views/AdminViews/Inventory/InventoryItemNewView.vue'
import AdminCategoriesView from '@/views/AdminViews/Category/CategoriesView.vue'
import AdminCategoryView from '@/views/AdminViews/Category/CategoryView.vue'
import AdminCategoryNewView from '@/views/AdminViews/Category/CategoryNewView.vue'
import AdminPromoNewView from '@/views/AdminViews/Promo/AdminPromoNewView.vue';
import AdminPromoView from '@/views/AdminViews/Promo/AdminPromoView.vue';
import AdminPromosView from '@/views/AdminViews/Promo/AdminPromosView.vue';
import ContactView from '@/views/ContactView.vue'
import FaqView from '@/views/FaqView.vue'
import PaymentConfirmationView from '@/views/PaymentConfirmationView.vue'
import LoginView from '@/views/LoginView.vue'
import SalesTermsView from '@/views/SalesTermsView.vue'
import ConfidentialityPolicyView from '@/views/ConfidentialityPolicyView.vue'
import CookiesTerms from '@/views/CookiesTerms.vue';

const API = import.meta.env.VITE_EXPRESS_API_URL;
const instance = axios.create({
  withCredentials: true,
  baseURL: API
})

async function loginCheck(){
  const adminStore = useAdminStore();
  adminStore.isAdminRouteAccessed(true);
  try{
    const response = await instance.get('/loginCheck');
    adminStore.isAdminRouteAccessed(false);
  }
  catch(error){
    if(error.response.status === 401 || error.response.status === 403){
      adminStore.isAdminLoggedIn(false);
      adminStore.isAdminRouteAccessed(false);
      return {name: 'login'};
    }
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: "La boutique de Coco",
        description: 'Doudou Joli - Boutique en ligne d\'accessoires au crochet faits main.'
      }
    },
    {
      path: '/boutique',
      name: 'shop',
      component: ShopView,
      meta:{
        title: "Boutique",
        description: 'Découvrez notre boutique d’articles cousus main : décorations, accessoires, idées cadeaux originales.'
      }
    },
    {
      path: '/boutique/:categoryNormalized',
      name: 'filteredShop',
      component: ShopView,
      meta:{
        title: "",
        description: "Doudou Joli - Boutique en ligne d\'accessoires au crochet faits main."
      }
    },
    {
      path: '/boutique/categories',
      name: 'categories',
      component: CategoriesView,
      meta:{
        title: "Catégories",
        description: 'Parcourez nos créations par catégories : articles décoratifs, boîtes et accessoires faits main.'
      }
    },
    {
      path: '/a-propos',
      name: 'about',
      component: AboutView,
      meta:{
        title: "A propos",
        description: 'Apprenez-en plus sur l’histoire de Doudou Joli et Corinne, passionnée par l’artisanat et le fait main de qualité.'
      }
    },
    {
      path: '/article/:id',
      name: 'item',
      component: ItemView,
      meta:{
        title: "Boutique",
        description: 'Doudou Joli - Boutique en ligne d\'accessoires au crochet faits main.'
      }
    },
    {
      path: '/panier',
      name: 'cart',
      component: CartView,
      meta:{
        title: "Panier",
        description: 'Vérifiez le contenu de votre panier et finalisez votre commande d’objets faits main.'
      }
    },
    {
      path: '/paiement',
      name: 'payment',
      component: PaymentView,
      meta:{
        title: "Paiement",
        description: 'Finalisez votre commande en toute sécurité grâce à notre module de paiement sécurisé.'
      }
    },
    {
      path: '/confirmation-paiement',
      name: 'paymentConfirmation',
      component: PaymentConfirmationView,
      meta:{
        title: "Confirmation de paiement",
        description: 'Merci pour votre commande ! Votre paiement a bien été reçu et votre colis est en préparation.'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta:{
        title: "Contact",
        description: 'Besoin d’aide ou d’informations ? Contactez-nous directement via notre formulaire en ligne.'
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
      meta:{
        title: "FAQ",
        description: 'Retrouvez les réponses aux questions fréquentes concernant nos produits, expéditions et retours.'
      }
    },
    {
      path: '/conditions-generales-vente',
      name: 'cgv',
      component: SalesTermsView,
      meta:{
        title: "CGV",
        description: 'Consultez les conditions générales de vente applicables sur notre boutique en ligne.'
      }
    },
    {
      path: '/politique-confidentialite',
      name: 'confidentiality',
      component: ConfidentialityPolicyView,
      meta:{
        title: "Confidentialité",
        description: 'Votre vie privée est importante : voici comment nous protégeons vos données personnelles.'
      }
    },
    {
      path: '/politique-cookies',
      name: 'cookies',
      component: CookiesTerms,
      meta:{
        title: "Politique des cookies",
        description: 'Informations sur l’utilisation des cookies et les options de gestion de votre navigation.'
      }
    },
    {
      path: '/se-connecter',
      name: 'login',
      component: LoginView,
      meta:{
        title: "Connexion",
        description: 'Connectez-vous à votre espace personnel ou accédez à l’interface d’administration.'
      }
    },
    //Admin protected routes
    {
      path: '/admin/commandes',
      name: 'adminCommandes',
      component: AdminOrdersView,
      beforeEnter: loginCheck,
      meta:{
        title: "Commandes"
      }
    },
    {
      path: '/admin/commandes/:reference',
      name: 'adminCommande',
      component: AdminOrderView,
      beforeEnter: loginCheck,
      meta:{
        title: "Commandes"
      }
    },
    {
      path: '/admin/inventaire',
      name: 'adminInventaire',
      component: AdminInventoryView,
      beforeEnter: loginCheck,
      meta:{
        title: "Articles"
      }
    },
    {
      path: '/admin/inventaire/:id',
      name: 'adminInventaireItem',
      component: AdminInventoryItemView,
      beforeEnter: loginCheck,
      meta:{
        title: "Articles"
      }
    },
    {
      path: '/admin/inventaire/nouveau',
      name: 'adminInventaireNew',
      component: AdminInventoryNewView,
      beforeEnter: loginCheck,
      meta:{
        title: "Nouvel article"
      }
    },
    {
      path: '/admin/categories',
      name: 'adminCategoriesView',
      component: AdminCategoriesView,
      beforeEnter: loginCheck,
      meta:{
        title: "Catégories"
      }
    },
    {
      path: '/admin/categories/:id',
      name: 'adminCategoryView',
      component: AdminCategoryView,
      beforeEnter: loginCheck,
      meta:{
        title: "Catégories"
      }
    },
    {
      path: '/admin/categories/nouveau',
      name: 'adminCategoryNewView',
      component: AdminCategoryNewView,
      beforeEnter: loginCheck,
      meta:{
        title: "Nouvelle catégorie"
      }
    },
    {
      path: '/admin/promos',
      name: 'adminPromosView',
      component: AdminPromosView,
      // beforeEnter: loginCheck,
      meta:{
        title: "Code promos"
      }
    },
    {
      path: '/admin/promos/:id',
      name: 'adminPromoView',
      component: AdminPromoView,
      // beforeEnter: loginCheck,
      meta:{
        title: "Code promos"
      }
    },
    {
      path: '/admin/promos/nouveau',
      name: 'adminPromoNewView',
      component: AdminPromoNewView,
      // beforeEnter: loginCheck,
      meta:{
        title: "Nouveau code promos"
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: loginCheck,
      meta:{
        title: "Admin"
      }
    },
    { 
      path: '/404', 
      component: NotFound 
    },  
    { 
      path: '/:catchAll(.*)',
      redirect: '/404' 
    },  
  ]
})

router.beforeEach((to, from, next) => {
  let name = to.params.categoryNormalized ?? to.params.id ?? to.meta.title ?? "";
  
  if(name){
    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = name.replace("_", " ");
    document.title = "Doudou Joli - " + name;
  }
  else{
    document.title = "Doudou Joli - La boutique de Coco";
  }

  const description = to.meta.description || 'Doudou Joli, boutique en ligne d\'accessoires au crochet faits main. Découvrez nos articles uniques et artisanaux.';
  
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', description);

  next();
})

export default router
