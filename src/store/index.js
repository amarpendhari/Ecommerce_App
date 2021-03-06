import Vuex from "vuex";
import Vue from "vue";
import products from "./modules/ecommerce";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    products
  }
});
