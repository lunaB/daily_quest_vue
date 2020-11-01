<template>
    <div class="register">
        <router-link :to="{name: 'login'}">계정이 있으신가요?</router-link>
        <form @submit.prevent="onSubmit(email, pass, name)">
            <input type="email" v-model="email" placeholder="Email"/>
            <input type="password" v-model="pass" placeholder="Password"/>
            <input type="text" v-model="name" placeholder="Name"/>
            <button>sign</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";

export default {
    name: 'register',
    data() {
        return {
            email: 'admin@gmail.com',
            pass: 'admin',
            name: '세종대 훈남 나영채'
        };
    },
    methods: {
        onSubmit(email, pass, name) {
            this.$store.dispatch(REGISTER, {email, pass, name})
                .then(()=>this.$router.push({name: 'login'}));
        }
    },
    computed: {
        ...mapState({
            errors: state => state.auth.errors
        })
    }
}

</script>