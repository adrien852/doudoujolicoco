<template>
    <div id="accordion">
        <div class="card">
            <button class="btn btn-accordion" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        1. Quels types de doudous au crochet proposez-vous dans votre boutique en ligne ?
                    </h5>
                </div>
            </button>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
                Nous offrons une variété charmante de doudous au crochet, allant des animaux mignons aux personnages fantaisistes. Notre collection est conçue avec amour et attention pour apporter douceur et réconfort.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        2. Les doudous au crochet sont-ils adaptés à tous les âges ?
                    </h5>
                </div>
            </button>

            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
                Absolument ! Nos doudous au crochet sont fabriqués avec des matériaux sûrs et doux, les rendant adaptés à tous les âges, des tout-petits aux adultes. Chaque pièce est confectionnée pour offrir chaleur et affection.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        3. Quels sont les délais de livraison pour les doudous au crochet ?
                    </h5>
                </div>
            </button>

            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Les délais de livraison varient en fonction de votre emplacement. Généralement, nous nous efforçons de traiter et d'expédier votre commande dans les 2 à 4 jours ouvrables. Pour des estimations plus précises, veuillez consulter notre page de politique de livraison.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        4. Quelles options de paiement sécurisé proposez-vous pour l'achat de doudous au crochet ?
                    </h5>
                </div>
            </button>

            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
                Nous offrons plusieurs options de paiement sécurisé, notamment les cartes de crédit/débit et les paiements via des plateformes de confiance. La sécurité de vos informations financières est une priorité, et toutes les transactions sont cryptées pour garantir une expérience d'achat sûre.
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.btn-accordion{
    padding: 0;
    border: 0;
    text-align: left;
}
.btn-accordion:focus {
    box-shadow: none;
}
h5{
    font-size: 16px;
}
.card{
    border:1px solid rgba(0, 0, 0, 0.07);
}
.btn-accordion .card-header{
    padding: 20px 40px 20px 20px;
    color: #22211F;
    border: 0;
    background-color: rgba(161, 143, 123, 0.034);
}

.btn-accordion .card-header:after {
    content: "－";
    color: #22211F;
    font-weight: bolder;
    font-size: 20pt;
    position: absolute;
    top:10px;
    right: 0;
    margin-right: 10px;
}
.btn-accordion.collapsed .card-header:after {
    content: "＋";
    font-weight: bolder;
    font-size: 20pt;
}
</style>