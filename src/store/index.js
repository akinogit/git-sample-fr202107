import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    sample() {
      axios
        .get(
          "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706",
          {
            params: {
              applicationId: "1031636184299349316",
              keyword: 'ビール',
            },
          }
        )
        .then((res) => {
          console.log(res)
        });
    }
  },
  modules: {
  }
})
