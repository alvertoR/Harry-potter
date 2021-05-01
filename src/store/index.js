import Vue from "vue";
import Vuex from "vuex";

import * as houses from "@/store/modules/houses";

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    houses
  },
});
