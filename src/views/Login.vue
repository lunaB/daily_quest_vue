<template>
    <div class="login">
        <router-link :to="{name: 'register'}">계정이 없으신가요</router-link>
        <form @submit.prevent="onSubmit(email, pass)">
            <input type="email" v-model="email" placeholder="Email"/>
            <input type="password" v-model="pass" placeholder="Password"/>
            <button>sign</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
    name: 'login',
    data() {
        return {
            email: 'luna20617@gmail.com',
            pass: 'q20617'
        };
    },
    methods: {
        onSubmit(email, pass) {
            this.$store.dispatch(LOGIN, {email, pass})
                .then(()=>this.$router.push({name: 'home'}));
        }
    },
    computed: {
        ...mapState({
            errors: state => state.auth.errors
        })
    }
}

</script>