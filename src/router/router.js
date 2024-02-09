import {createRouter, createWebHashHistory} from 'vue-router'


// video 120
// 1. Define some routes
// Each route map a component.
const routes = [
   {  
      // video 132: 
      // Once this path is created, in App.vue is created the <roouter-vue/>
      path: '/pokemon',
      name: 'pokemon',
      component: () => import (/*webPackChunkName: 'PokemonLayout'*/ '@/modules/pokemon/layouts/PokemonLayout'),
      children:[
         {  
            path: '', 
            name: 'pokemon-home',
            component: () => import (/*webPackChunkName: 'ListPage'*/ '@/modules/pokemon/pages/ListPage')
         }, 
         {  
            path: 'about', 
            name: 'pokemon-about',
            component: () => import (/*webpackChunkName:'AboutPage'*/ '@/modules/pokemon/pages/AboutPage') 
         }, 
         {  
            path: 'pokemonid/:pokemonId', 
            name: 'pokemon-id',  // Establishing name/alias to the route
            // video 128: Now the compoments has access to all the routes properties
            props: ( route ) => {
              console.log( route )
              const id = Number(route.params.pokemonId)
              // In the return , the props are sent (in fact in the compoment, they are attrs)
              // And the attrs are accesible with this.$attrs
              // So, they are not props unless they are defined in the props part.
              // -----
              // If 'id' is not a number send 1, otherwise sent it
              return isNaN( id ) ? { id: 1 }: { id }
            },
            component: () => import (/*webPackChunkName: 'DetailPage'*/ '@/modules/pokemon/pages/DetailPage')
         }, 
         {
           // video 130: redirecting
           path: '/',
           // redirect: to => { return 'home' }
           redirect: {name: 'pokemon-about'}
         },
      ]
   },
   
   {  
      path: '/dbz',
      name: 'dbz',
      component: () => import (/*webPackChunkName: 'DragonBallLayout'*/ '@/modules/dragonball/layouts/DragonBallLayout'),
      children:[
         {  
            path: 'characters', 
            name: 'dbz-characters',
            component: () => import (/*webPackChunkName: 'Characters'*/ '@/modules/dragonball/pages/Characters')
         }, 
         {  
            path: 'about', 
            name: 'dbz-about',
            component: () => import (/*webpackChunkName:'About'*/ '@/modules/dragonball/pages/About') 
         },
         {
            path: '',
            redirect: {name: 'dbz-characters'}
          },
      ]
   },
   {  
      path: '/:patMatch(.*)*', 
      component: () => import (/*webPackChunkName: 'NotFoundPage'*/ '@/modules/shared/pages/NotFoundPage')
   },
  ]

// video 120
// 3. Create the router instance and pass the `routes` option
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

// video 120
export default router