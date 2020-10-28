<template>
    <header>
        <div class="box"></div>
        <div class="fixed">
            <a class="logo" href="/">QUEST_</a>
            <div class="menu">
                <ul>
                    <li><router-link :to="{name: 'home'}">Home</router-link></li>
                    <li><router-link :to="{name: 'quest'}">퀘스트</router-link></li>
                    <li><router-link :to="{name: 'guild'}">길드</router-link></li>
                    <li><router-link :to="{name: 'field'}">필드</router-link>
                        <ul>
                            <li><a href="#">미니게임</a></li>
                            <li><a href="#">방송유틸</a></li>
                            <li><a href="#">등등</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="login_menu">
                <template v-if="!isAuthenticated">
                    <router-link :to="{name: 'login'}" class="login">로그인</router-link> 
                    <router-link :to="{name: 'register'}" class="register">회원가입</router-link>
                </template>
                <template v-if="isAuthenticated">
                    <a @click="logout" class="login">로그아웃</a> 
                </template>
            </div>
        </div>
        
    </header>
</template>
<script>
import { mapGetters } from 'vuex';
import { LOGOUT } from '../store/actions.type';

export default {
    name: "Header",
    computed: {
        ...mapGetters(["currentUser", "isAuthenticated"])
    },
    methods: {
        logout() {
            this.$store.dispatch(LOGOUT).then(() => {
                this.$router.push({ name: "home" });
            });
        }
    }
}
</script>
<style scoped lang="scss">
    a {
        text-decoration: none;
        display: inline-block;
    }
    header {
        $header_height: 60px;
        height: $header_height;
        .fixed {
            width: 100%;
            height: $header_height;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            background-color: #333;
            .logo {
                margin-left: 15px;
                height: $header_height;
                position: relative;
                float: left;
                line-height: $header_height;
                font-size: 30px;
                color: #eee;
            }
            .menu {
                height: $header_height;
                font-size: 18px;
                position: relative;
                float: left;
                ul {
                    margin: 0;
                    padding: 0 10px;
                    li {
                        height: $header_height;
                        float: left;
                        list-style: none;
                        color: #eee;
                        text-align: left;
                        transition: all 0.3s;
                        a {
                            padding: 0 15px;
                            height: 60px;
                            color: #eee;
                            line-height: 60px;
                        }
                        ul {
                            display: none;
                            margin: 0;
                            padding: 0;
                            li {
                                clear: left;
                                height: 40px;
                                width: 150px;
                                text-align: left;
                                list-style: none;
                                transition: all 0.3s;
                                background-color: #333;
                                &:hover {
                                    background-color: #222;
                                }
                            }
                            a {
                                padding: 0 15px;
                                height: 40px;
                                color: #eee;
                                line-height: 40px;
                            }
                        }
                        &:hover {
                            background-color: #222;
                            ul {
                                display: block;
                            }
                        }
                    }
                }
            }
            /* 로그인 회원가입 */
            .login_menu {
                position: relative;
                float: right;
                height: 60px;
                a {
                    padding: 0 15px;
                    height: 60px;
                    font-size: 21px;
                    line-height: 60px;
                    transition: all 0.3s;
                    color: goldenrod;
                    &:hover {
                        color: rgb(171, 130, 26);
                    }
                }
            }
        }
    }

</style>