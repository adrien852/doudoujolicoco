<template>
<div class="mb-3">
    <!-- <div class="">
        <label class="checkboxLabel" :for="'filter'+id">Peluche</label>
        <input @change.stop="checkHandler" type="checkbox" v-model="filter" :id="'filter'+id" class="d-inline-flex align-items-center">
    </div>
    <div :class="[{'d-block': filter}, 'collapse']">
        <ul class="list-unstyled fw-normal mb-0 pl-2 small pt-2">
            <li>
                <label :for="'filter'+id+'1'" >Peluche</label>
                <input name="subfilter" :id="'filter'+id+'1'" v-model="picked" :value="'Peluche'+id+1" type="radio" @change="$emit('radio', 'Peluche'+id+1)" class="d-inline-flex align-items-center">
            </li>
            <li>
                <label :for="'filter'+id+'2'">Peluche</label>
                <input name="subfilter" :id="'filter'+id+'2'"  v-model="picked" :value="'Peluche'+id+2" type="radio" @change="$emit('radio', 'Peluche'+id+2)" class="d-inline-flex align-items-center">
            </li>
        </ul>
    </div> -->
    <a class="text-capitalize" :href="'category/'+index">{{ filter }}</a>
</div>
</template>

<script setup>
defineProps({
  filter: Array,
  index: Number
})
</script>

<style scoped>
input{
    padding:5px 0;
    /* opacity: 0; */
}
label{
    cursor: pointer;
    margin-bottom: 0;
}
.checkboxLabel:after {
    font-family:Fontawesome;
    content:'\f078';
    font-size:10px;
    font-weight:300;
    transform: rotate(0deg);
    transform-origin: 50% 60%;
    -webkit-transition: transform 0.2s linear;
    -moz-transition: transform 0.2s linear;
    -o-transition: transform 0.2s linear;
    transition: transform 0.2s linear;
}
.checkboxLabel.collapsed:after {
    transform: rotate(180deg);
    transform-origin: 50% 60%;
    -webkit-transition: transform 0.2s linear;
    -moz-transition: transform 0.2s linear;
    -o-transition: transform 0.2s linear;
    transition: transform 0.2s linear;
}
a{
    text-decoration: none;
    color: initial;
    margin-right: 10px;
}
</style>