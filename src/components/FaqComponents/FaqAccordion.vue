<template>
    <div id="accordion">
        <div class="card">
            <button class="btn btn-accordion" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        1. Comment sont réalisés vos objets au crochet ?
                    </h5>
                </div>
            </button>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
                Tous nos articles sont entièrement faits à la main avec soin et précision. Chaque pièce est réalisée avec des fils de coton ou d’acrylique sélectionnés pour leur douceur et leur durabilité. Les animaux au crochet sont rembourrés avec de la ouate hypoallergénique pour garantir sécurité et confort.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        2. Quelle est la qualité des matériaux utilisés ?
                    </h5>
                </div>
            </button>

            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
                Nous utilisons des fils de haute qualité en coton ou en acrylique, qui sont à la fois doux et résistants. Nos articles sont conçus pour durer et supporter une utilisation quotidienne. Le rembourrage des peluches est en ouate hypoallergénique.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        3. Les peluches peuvent-elles être données aux enfants comme doudou ou jouet ?
                    </h5>
                </div>
            </button>

            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                Non, les peluches sont réservées à un usage décoratif. En aucun cas elles ne doivent servir de doudou ou de jouet à un enfant. Nous déclinons toutes responsabilités si l’objet est utilisé autrement que comme prévu.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        4. Comment entretenir les objets au crochet ?
                    </h5>
                </div>
            </button>

            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
                Pour garantir la longévité de vos articles, nous recommandons un lavage à la main à l’eau tiède avec un savon doux. Évitez le sèche-linge et préférez un séchage à plat à l’air libre. Certains objets peuvent être lavés en machine en cycle délicat (30°C), mais il est toujours préférable de vérifier les instructions spécifiques fournies avec votre commande.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                        5.  Quels sont les délais et modes de livraison ?
                    </h5>
                </div>
            </button>

            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
            <div class="card-body">
                Nos créations étant faites main, le temps de réalisation peut varier selon la commande. Les articles en stock sont expédiés sous 3 à 5 jours ouvrés. Pour les commandes personnalisées, un délai supplémentaire peut être nécessaire, précisé lors de la commande. Nous expédions via La Poste ou un transporteur avec numéro de suivi, et la livraison est disponible uniquement en France.
            </div>
            </div>
        </div>
        <div class="card">
            <button class="btn btn-accordion collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                        6. Quels sont les modes de paiement acceptés ?
                    </h5>
                </div>
            </button>

            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
            <div class="card-body">
                Nous acceptons les paiements par carte bancaire, PayPal et Google Pay. Toutes les transactions sont sécurisées afin de garantir une expérience d’achat en toute confiance.
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