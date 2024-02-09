<template>
    <div class="bg-gray">
        <!-- No se usa <a> pq con <router-link> se consume el recurso router como tal -->
        <router-link :to="{ name: 'pokemon-home'}">Pokemon List</router-link>
        <!-- Calling the route by the name, instead of harded coded -->
        <router-link :to="{ name: 'pokemon-id', params: { pokemonId: 85 }}">Pokemon About</router-link>
        <router-link :to="{ name: 'pokemon-about'}">Pokemon Detail</router-link>
        <router-link :to="{ name: 'dbz-characters'}">DBZ Characters</router-link>
        <router-link :to="{ name: 'dbz-about'}">DBZ Detail</router-link>
    </div>    
</template>
<style scoped>
a {
    text-decoration: none;
}
div {
    padding: 1rem 1rem;
    background-color: rgb(52, 52, 52);
}
bg-gray{
    background-color: gray;
}

div a{
    font-weight: bold;
    color: rgb(89, 113, 114);
    margin: 0 2rem;
}
/* video 123 : clase router-link-exact-active creada al usar router-link*/
a.router-link-exact-active{
    color: #33ee9a;
}
</style>