import JwtService from "../services/jwt.service";
import ApiService from "../services/api.service";

import {
    LOGIN,
    LOGOUT,
    // REGISTER,
    CHECK_AUTH,
    REGISTER,
    // UPDATE_USER
} from "./actions.type";
import { 
    SET_AUTH, 
    PURGE_AUTH, 
    SET_ERROR 
} from "./mutations.type";

const state = {
    error: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
}
const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
}
const actions = {
    [LOGIN](context, credentials) {
        return new Promise(resolve => {
            ApiService.post('/users/login', {user: credentials})
                .then(({ data })=>{
                    context.commit(SET_AUTH, data.user);
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.error);
                });
        })
    },
    [LOGOUT](context) {
        context.commit(PURGE_AUTH)
    },
    [CHECK_AUTH](context) {
        if (JwtService.getToken()) {
            ApiService.setHeader();
            ApiService.get("/users/user")
                .then(({ data }) => {
                    context.commit(SET_AUTH, data.user);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.error);
                });
        } else {
            context.commit(PURGE_AUTH);
        }
    },
    [REGISTER](context, credentials) {
        return new Promise((resolve, reject) => {
            ApiService.post('/users/register', {user: credentials})
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit(SET_ERROR, response.data.error);
                    reject(response)
                });
        })
    },
}
const mutations = {
    [SET_ERROR](state, error) {
        state.errors = error;
    },
    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        JwtService.saveToken(state.user.token);
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};
