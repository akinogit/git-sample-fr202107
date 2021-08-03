<template>
  <div>
    <input v-model="inputmozi" /><button @click="search">検索ボタン</button>
    <div v-for="item in items" :key="item.itemCode">
      <div>{{ item.itemName }}</div>
      <span v-for="(gazo, index) in item.smallImageUrls" :key="index">
        <img :src="gazo.imageUrl" />
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      items: [],
      inputmozi: "",
    };
  },
  methods: {
    ...mapActions(["sample"]),
    search() {
      this.sample();
      axios
        .get(
          "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706",
          {
            params: {
              applicationId: "1031636184299349316",
              keyword: this.inputmozi,
            },
          }
        )
        .then((res) => {
          this.items = [];
          console.log(res);
          res.data.Items.forEach((element) => {
            this.items.push(element.Item);
          });
        });
    },
  },
};
</script>
