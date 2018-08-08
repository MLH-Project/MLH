<template>
    <div class="app-mine page page-bottom">
        app-mine
        <p> 用户名: <span v-if = "user_info">{{ user_info.nickname }}</span> </p>
        <button @click = "exit">退出登陆</button>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "app-mine",
  computed: mapState({
    user_info: state => state.commons.user_info
  }),
  created() {
    this.$store.dispatch("action_get_user_info");
  },
  methods: {
    exit() {
      this.$store.commit({
        type: "CHANGE_USER_STATE",
        user_state: null
      });
      this.$store.commit({
        type: "CHANGE_USER_INFO",
        user_info: null
      });
      this.$cookies.clear();

      this.$router.replace("/login");
    }
  }
};
</script>

<style lang="scss">
</style>

