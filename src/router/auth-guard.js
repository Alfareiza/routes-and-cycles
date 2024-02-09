// video 137: Creating specific navigation guard to a specific route
// Once this is created, in the router.js in the path
// is created the -> beforeEnter: [ isAuthenticatedGuard ]
const isAuthenticatedGuard = (to, from, next) => {
    console.log({to, from, next})
    return new Promise( () => {
        const random = Math.random() * 100

        if (random > 50) {
            console.log('Is authenticaded')
            next()
        } else{
            console.log('Blocked by the isAuthenticatedGuard ', random)
            next({name: 'pokemon-name'})
        }
    })
}
export default isAuthenticatedGuard