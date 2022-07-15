<template>
    <div>
        <p>User is <span v-if="user">{{user}}</span><span v-else>no one</span></p>
        <nuxt-link to="/auth/login">login</nuxt-link>
    </div>
</template>

<script>
    export default {
        computed: {
            user(){ return this.$store.state.user?.username }
        }
    }
</script>