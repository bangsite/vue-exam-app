import Vue from "vue";
import Vuex from "vuex";

// Modules
import link from "./modules/link.module";

const modules = {
    link
}
Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules
});
