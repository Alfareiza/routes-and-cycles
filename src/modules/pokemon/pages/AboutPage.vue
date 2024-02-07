<template>
    <h1>About Page</h1>
    <hr>
    <!-- <h2>{{ name }}</h2> -->
    <button @click="onChangeName">Changing Name</button>
</template>

<script>

export default {
    data(){
        return{
            name: 'alfonso'
        }
    },
    methods:{
        onChangeName(){
            console.log('Changing name to Carlo')
            this.name = 'Carlo'
        }

    },
    // video 126: Lifecycle of compoments
    // https://vuejs.org/api/options-lifecycle.html#lifecycle-hooks
    
    // Called when the instance is initialized.
    beforeCreate() {
        // Is not recommendable to make http requests at this point
        // Is usefull to make some validations before the component is created
        console.log('beforeCreate')
    },
    // Called after the instance has finished processing all state-related options.
    created() {
        // Good moment to make http requests
        console.log('created')
    },
    // Called right before the component is to be mounted.
    beforeMount() {
        console.log('beforeMount')
    },
    // Called after the component has been mounted.
    mounted() {
        console.log('mounted')
    },
    // Called after the component has updated its DOM
    // tree due to a reactive state change.
    updated() {
        console.log('updated')
    },
    // Called after the component instance is inserted into the DOM 
    // as part of a tree cached by <KeepAlive>
    activated() {
        console.log('activated')
    },
    // Called after the component instance is removed from the DOM as
    // part of a tree cached by <KeepAlive>.
    deactivated() {
        console.log('deactivated')
    },
    // Called right before a component instance is to be unmounted.
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    // Called after the component has been unmounted.
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    // [DevOnly] Called when a reactive dependency triggers the component's 
    // render effect to be re-run.
    renderTriggered() {
        console.log('renderTriggered')
    },
    // Called right before the component is about to update its 
    // DOM tree due to a reactive state change.
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    // [DevOnly] Called when a reactive dependency has been tracked by the
    // component's render effect.
    renderTracked() {
        console.log('renderTracked')
    },
    // Executed when the HTML part of a compoment had changes
    updated() {
        console.log('updated')
    },
}
</script>
