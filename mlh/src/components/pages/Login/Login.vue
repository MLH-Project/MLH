<template>
<div class="app-login page page-top">
    <header class="con">
      <span @click="$router.go(-1)">←</span>
      <div>
        <span>登录</span>
      </div>
    </header>
    <form @submit.prevent="submit">
        <label>手机号</label>
        <ui-input type="text" v-model="phone" placeholder="请输入手机号">
            <button type="button" @click="sendCode" v-if="isPhone" class="send-code">发送验证码</button>
        </ui-input>
        <label>验证码</label>
        <ui-input type="text" placeholder="请输入验证码" v-model="code"></ui-input>
        <button type="submit" class="submit">登陆</button>
    </form>

</div>
</template>
<script>
export default {
  name: "app-login",
  data() {
    return {
      phone: "13531623754",
      code: ""
    };
  },
  computed: {
    isPhone() {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(this.phone)) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    submit() {
      if (!this.code) return false;
      this.$store.dispatch("action_login", {
        code: this.code,
        phone: this.phone,
        success: user_state => {
          console.log("登陆成功");
          //存cookie

          for (const key in user_state) {
            if (user_state.hasOwnProperty(key)) {
              const element = user_state[key];
              this.$cookies.set(key, element, "7d", "/");
            }
          }

          this.$router.push("/mine");
        },
        fail: () => {
          console.log("短信验证码错误");
        }
      });
    },
    sendCode() {
      //发送验证码了
      this.$http
        .post("/mz/v4/api/code?__t=" + Date.now(), {
          mobile: this.phone,
          type: "2"
        })
        .then(res => {
          if (res.data.status === 0) {
            console.log("验证码发送成功");
          }
        });
    }
  }
};
</script>

<style lang="scss">
@import "../../../stylesheets/_base.scss";
.app-login {
  header {
    display: flex;
    .show-menu {
      display: block;
      position: relative;
      text-align: right;
    }
    span {
      flex: 2;
      padding-top: 0.1rem;
      font-size: 0.15rem;
      text-align: center;
      line-height: 0.36rem;
      font-weight: bold;
    }
    div {
      padding-top: 0.1rem;
      span {
        font-size: 0.18rem;
        text-align: center;
      }
    }
    > span:first-child {
      font-size: 0.2rem;
      text-align: left;
    }
    span:last-child {
      text-align: right;
    }
  }
  form {
    padding: 0.15rem;
    text-align: center;
    label {
      padding-left: 0.15rem;
      margin-top: 0.15rem;
      display: block;
      text-align: left;
    }
    .submit {
      width: 1.63rem;
      background-color: $base-red;
      color: #fff;
      border: none;
      border-radius: 0.36rem;
      padding: 0.08rem 0.12rem;
      font-size: 0.15rem;
      outline: none;
      margin: 0.45rem 0 0;
    }
    .send-code {
      width: 0.95rem;
      position: absolute;
      right: 5px;
      top: 15px;
      background-color: #29a097;
      color: #fff;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>

