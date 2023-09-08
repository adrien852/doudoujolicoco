<script setup>
</script>

<template>
    <div class="filterContainer">
        <h4>Filtres</h4>
        <div class="filterList">
                <label for="filter1">Peluche</label>
                <input id="filter1" type="checkbox" class="d-inline-flex align-items-center collapsed" data-toggle="collapse" data-target="#content-collapse-1" aria-expanded="false">
                <br/><div class="collapse" id="content-collapse-1" style="">
                    <ul class="list-unstyled fw-normal mb-0 pl-2 small">
                        <label for="filter11">Peluche</label>
                        <input id="filter11" type="radio" class="d-inline-flex align-items-center collapsed">
                    </ul>
                </div>
      
                <label for="filter2">Peluche</label>
                <input id="filter2" type="checkbox" class="d-inline-flex align-items-center rounded collapsed" data-toggle="collapse" data-target="#content-collapse-2" aria-expanded="false">
                <br/><div class="collapse" id="content-collapse-2" style="">
                    <ul class="list-unstyled fw-normal mb-0 pl-2 small">
                        <label for="filter21">Peluche</label>
                        <input id="filter21" type="radio" class="d-inline-flex align-items-center collapsed">
                    </ul>
                </div>

                <label for="filter3">Peluche</label>
                <input id="filter3" type="checkbox" class="d-inline-flex align-items-center rounded collapsed" data-toggle="collapse" data-target="#content-collapse-3" aria-expanded="false">
                <div class="collapse" id="content-collapse-3" style="">
                    <ul class="list-unstyled fw-normal mb-0 pl-2 small">
                        <label for="filter31">Peluche</label>
                        <input id="filter31" type="radio" class="d-inline-flex align-items-center collapsed">
                    </ul>
                </div>
        </div>
                
    </div>
</template>

<style scoped>
.filterContainer{
    position: -webkit-sticky;
    position: sticky;
    top: 2rem;
    display: block !important;
    height: calc(100vh - 7rem);
    padding-left: .25rem;
    margin-left: -.25rem;
    overflow-y: auto;
    border-right: solid #a3867264 1px;
}
input{
    padding:5px 0;
    opacity: 0;
}
label{
    cursor: pointer;
}
.filterList{
    width:150px;
}
</style>