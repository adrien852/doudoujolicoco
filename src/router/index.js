import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import AboutView from '@/views/AboutView.vue'
import ItemView from '@/views/ItemView.vue'
import CartView from '@/views/CartView.vue'
import PaymentView from '@/views/PaymentView.vue'
import ShipmentView from '@/views/ShipmentView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import NotFound from '@/views/NotFound.vue'
import AdminOrdersView from '@/views/AdminViews/Order/OrdersView.vue'
import AdminOrderView from '@/views/AdminViews/Order/OrderView.vue'
import AdminView from '@/views/AdminViews/AdminView.vue'
import AdminInventoryView from '@/views/AdminViews/Inventory/InventoryView.vue'
import AdminInventoryItemView from '@/views/AdminViews/Inventory/InventoryItemView.vue'
import AdminInventoryNewView from '@/views/AdminViews/Inventory/InventoryItemNew.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/boutique',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/boutique/:categoryNormalized',
      name: 'filteredShop',
      component: ShopView
    },
    {
      path: '/boutique/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      path: '/a-propos',
      name: 'about',
      component: AboutView
    },
    {
      path: '/article/:id',
      name: 'item',
      component: ItemView
    },
    {
      path: '/panier',
      name: 'cart',
      component: CartView
    },
    {
      path: '/paiement',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/livraison',
      name: 'shipment',
      component: ShipmentView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/admin/commandes',
      name: 'adminCommandes',
      component: AdminOrdersView
    },
    {
      path: '/admin/commandes/:reference',
      name: 'adminCommande',
      component: AdminOrderView
    },
    {
      path: '/admin/inventaire',
      name: 'adminInventaire',
      component: AdminInventoryView
    },
    {
      path: '/admin/inventaire/:id',
      name: 'adminInventaireItem',
      component: AdminInventoryItemView
    },
    {
      path: '/admin/inventaire/nouveau',
      name: 'adminInventaireNew',
      component: AdminInventoryNewView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
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

export default router
