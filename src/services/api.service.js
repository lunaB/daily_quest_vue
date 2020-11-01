import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "./jwt.service";
import { API_URL } from "../config/api_config";

const ApiService = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
    },
    setHeader() {
        Vue.axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${JwtService.getToken()}`;
    },
    query(resource, params) {
        return Vue.axios.get(resource, params).catch(error => {
          throw new Error(`[에러] ApiService ${error}`);
        });
    },
    get(resource, slug = "") {
        return Vue.axios.get(`${resource}/${slug}`).catch(error => {
            throw new Error(`[에러] ApiService ${error}`);
        });
    },
    post(resource, params) {
        console.log('request',params)
        return Vue.axios.post(`${resource}`, params);
    },
    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params);
    },
    put(resource, params) {
        return Vue.axios.put(`${resource}`, params);
    },
    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw new Error(`[에러] ApiService ${error}`);
        });
    }
}

export default ApiService;