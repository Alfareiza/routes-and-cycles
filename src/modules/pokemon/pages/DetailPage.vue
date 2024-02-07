<template>
    <!-- 'id' exists because it is sent from router.js -->
    <h1>Pokemon <b>{{ id }}</b></h1>
    <!-- video 129 -->
    <div v-if="pokemon">
        <h2> {{ pokemon.name }} </h2>
        <img :src="pokemon.sprites.front_default" v-bind:alt="pokemon.name">
    </div>
</template>
<script>
export default {
    // The 'id' prop was created because the 'id' is mandatory
    // so, thats a way to keep it as that
    props:{
        id: {
            type: Number,
            require: true,
        }
    },
    data(){
        return {
            // id: null // Also could be this.$route.params.id 🤷🏻
            pokemon: null
        }
    },
    created(){
        // This is a way to reach the query params
        // const { pokemonId } = this.$route.params
        // this.id = pokemonId
        // Acessing to http://localhost:8080/#/100
        // console.log(this.$route)
        // ⬇︎⬇︎ will print this ⬇︎⬇︎
        // {
        //     "fullPath": "/100",
        //     "path": "/100",
        //     "query": {}, -> If the url is /#/100?cupon=XYZ&disccount=676, then the query would be { "cupon": "XYZ", "disccount": "676" }
        //     "hash": "",
        //     "name": "pokemon-id",
        //     "params": {
        //         "pokemonId": "100" -> is pokemonId because was defined in router.js
        //     },
        //     "matched": [
        //         {
        //             "path": "/:pokemonId",
        //             "name": "pokemon-id",
        //             "meta": {},
        //             "props": {
        //                 "default": false
        //             },
        //             "children": [],
        //             "instances": {
        //                 "default": {}
        //             },
        //             "leaveGuards": {},
        //             "updateGuards": {},
        //             "enterCallbacks": {},
        //             "components": {
        //                 "default": {
        //                     "__file": "src/modules/pokemon/pages/DetailPage.vue",
        //                     "__hmrId": "5cbc9768"
        //                 }
        //             }
        //         }
        //     ],
        //     "meta": {},
        //     "href": "#/100"
        // }

        this.getPokemon()
    },
    // video 129
    methods:{
        async getPokemon() {
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(
                r => r.json()
             )
             console.log(pokemon)
             this.pokemon = pokemon   
            } catch (error) {
                this.$router.push('/')
                console.log('There is nothing to do here')
            }
        }
    },
    // video 129
    // Check the state of the property and in case of updates, will 
    // be executed
    watch: {
        id() {
            console.log(this.id)
            this.getPokemon()
        }
    }
    
}
</script>