import {createRouter, createWebHashHistory} from 'vue-router'
import isAuthenticatedGuard from '@/router/auth-guard'


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
      beforeEnter: [ isAuthenticatedGuard ],  // video 137 specific guard
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

// video 135: Global Guard - Sync
// router.beforeEach( (to, from, next) => {
   
   // This is useful to determine where the user
   // is coming from (from) and where he goes (to)
   // It's also possible to execute in the next, where
   // we want to send him (next({name: 'pokemon-home'}))

      // console.log({to, from, next})
//     ⬇︎⬇︎ will print this ⬇︎⬇︎
//     {
//       "to": {
//           "fullPath": "/pokemon/about",
//           "hash": "",
//           "query": {},
//           "name": "pokemon-about",
//           "path": "/pokemon/about",
//           "params": {},
//           "matched": [
//               {
//                   "path": "/pokemon",
//                   "name": "pokemon",
//                   "meta": {},
//                   "props": {
//                       "default": false
//                   },
//                   "children": [
//                       {
//                           "path": "",
//                           "name": "pokemon-home"
//                       },
//                       {
//                           "path": "about",
//                           "name": "pokemon-about"
//                       },
//                       {
//                           "path": "pokemonid/:pokemonId",
//                           "name": "pokemon-id"
//                       },
//                       {
//                           "path": "/",
//                           "redirect": {
//                               "name": "pokemon-about"
//                           }
//                       }
//                   ],
//                   "instances": {},
//                   "leaveGuards": {},
//                   "updateGuards": {},
//                   "enterCallbacks": {},
//                   "components": {}
//               },
//               {
//                   "path": "/pokemon/about",
//                   "name": "pokemon-about",
//                   "meta": {},
//                   "props": {
//                       "default": false
//                   },
//                   "children": [],
//                   "instances": {},
//                   "leaveGuards": {},
//                   "updateGuards": {},
//                   "enterCallbacks": {},
//                   "components": {}
//               }
//           ],
//           "meta": {},
//           "redirectedFrom": {
//               "fullPath": "/",
//               "path": "/",
//               "query": {},
//               "hash": "",
//               "params": {},
//               "matched": [
//                   {
//                       "path": "/pokemon",
//                       "name": "pokemon",
//                       "meta": {},
//                       "props": {
//                           "default": false
//                       },
//                       "children": [
//                           {
//                               "path": "",
//                               "name": "pokemon-home"
//                           },
//                           {
//                               "path": "about",
//                               "name": "pokemon-about"
//                           },
//                           {
//                               "path": "pokemonid/:pokemonId",
//                               "name": "pokemon-id"
//                           },
//                           {
//                               "path": "/",
//                               "redirect": {
//                                   "name": "pokemon-about"
//                               }
//                           }
//                       ],
//                       "instances": {},
//                       "leaveGuards": {},
//                       "updateGuards": {},
//                       "enterCallbacks": {},
//                       "components": {}
//                   },
//                   {
//                       "path": "/",
//                       "redirect": {
//                           "name": "pokemon-about"
//                       },
//                       "meta": {},
//                       "props": {},
//                       "children": [],
//                       "instances": {},
//                       "leaveGuards": {},
//                       "updateGuards": {},
//                       "enterCallbacks": {}
//                   }
//               ],
//               "meta": {},
//               "href": "#/"
//           },
//           "href": "#/pokemon/about"
//       },
//       "from": {
//           "path": "/",
//           "params": {},
//           "query": {},
//           "hash": "",
//           "fullPath": "/",
//           "matched": [],
//           "meta": {}
//       }
//   }
// })

// video 136: Global Guard - Async
// const canAccess = () => {
//    return new Promise (resolve => {
      
//       const random = Math.random() * 100
//       if (random > 70) {
//          console.log('Autenticado', random)
//          resolve(true)
//       } else{
//          console.log('No Autenticado', random)
//          resolve(false)
//       }

//    })
// }

// router.beforeEach( async (to, from, next) => {
//    const authorized = await canAccess()
//    authorized ? next() : next({name: 'pokemon-home'})
// })

// video 120
export default router