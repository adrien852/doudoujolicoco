<template>
    <NavPath :path="path" />
    <div class="container pt-3">
        <header class="entry-header mb-4">
            <h2 class="entry-title">Politique des Cookies</h2>
        </header>
        <div class="entry-content">
            <p>Le présent document a pour but d’expliquer comment notre site web Doudou Joli utilise des cookies pour améliorer l’expérience utilisateur et analyser la fréquentation du site.</p>
            <p>En poursuivant votre navigation sur notre site, vous pouvez accepter ou refuser l’utilisation des cookies conformément aux choix que vous effectuez via notre bannière de consentement.</p>

            <h3>1. Introduction</h3>
            <p>Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, tablette, smartphone) lors de votre navigation sur notre site. Ils nous permettent de reconnaître votre appareil et de personnaliser votre expérience sur notre site.</p>

            <h3>2. Quels types de cookies utilisons-nous ?</h3>

            <h4>2.1 Cookies strictement nécessaires</h4>
            <p>Ces cookies sont essentiels au bon fonctionnement de notre site et ne peuvent pas être désactivés. Ils permettent, par exemple, de sauvegarder vos préférences ou de maintenir votre session ouverte.</p>
            <p>Exemples : gestion du panier d’achat, connexion sécurisée.</p>

            <h4>2.2 Cookies de mesure d’audience (Firebase Analytics)</h4>
            <p>Nous utilisons Firebase Analytics pour collecter des données anonymes sur l’utilisation du site et améliorer nos services. Ces cookies nous permettent de :</p>
            <ul>
                <li>Mesurer le nombre de visiteurs et leur comportement de navigation.</li>
                <li>Identifier les pages les plus consultées.</li>
                <li>Optimiser les performances du site.</li>
            </ul>
            <p>Les données collectées par Firebase Analytics incluent : l'adresse IP anonymisée, les pages visitées, la durée de la visite, le type d’appareil utilisé, etc.</p>
            <p>Consentement requis : ces cookies ne sont déposés qu’après acceptation via notre bannière de cookies.</p>

            <h4>2.3 Cookies publicitaires et de réseaux sociaux</h4>
            <p>Nous n’utilisons pas de cookies publicitaires ou liés aux réseaux sociaux sur ce site.</p>

            <h3>3. Gestion des cookies</h3>
            <p>Vous pouvez à tout moment :</p>
            <ul>
                <li>Accepter ou refuser les cookies via notre bannière de consentement.</li>
                <li>Modifier vos préférences dans les paramètres de votre navigateur.</li>
            </ul>

            <h3>4. Modification de la politique des cookies</h3>
            <p>Nous nous réservons le droit de mettre à jour cette politique. Toute modification sera indiquée sur cette page avec la date de mise à jour.</p>

            <h3>5. Contact</h3>
            <p>Pour toute question sur cette politique, vous pouvez nous contacter à doudoujolicoco@gmail.com.</p>
            <p>Dernière mise à jour: 21 février 2025.</p>
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import NavPath from '@/components/NavbarComponents/NavPath.vue';

let path = null;

onBeforeMount(() => {
    path = [
        {
            name: 'accueil',
            route: '/'
        },
        {
            name: 'Politique des Cookies',
            route: '/politique-cookies'
        },
    ]
})
</script>

<style scoped></style>