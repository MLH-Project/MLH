<template>
    <div class="ShowMenu">
      <div class="menu">
        <div class="arrow"></div> 
        <div class="menu-list">
          <router-link to = "/">
            <span >首页</span>
          </router-link> 
          <router-link to = "/">
            <span >购物袋</span>
          </router-link> 
          <router-link :to = "{name: 'mine'}">
            <span >个人中心</span>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ShowMenu",
  data () {
    return {
      
    }
  }
};
</script>

<style lang="scss" scoped>
  .menu {
    position: absolute;
    right: 0;
    top: 0.44rem;
    z-index: 999;
    .arrow {
      width: 0;
      height: 0;
      border-left: 0.1rem solid transparent;
      border-right: 0.1rem solid transparent;
      border-bottom: 0.1rem solid hsla(0,0%,96%,.96);
      position: absolute;
      right: 0.16rem;
      top: -0.1rem;
    }
    .menu-list {
      width: 1.15rem;
      background-color: hsla(0,0%,96%,.96);
      a {
        display: block;
      }
      span {
        display: block;
        width: 0.85rem;
        margin: 0 auto;
        padding: 0.18rem 0;
        text-align: center;
        color: #000;
        font-size: 0.16rem!important;
        border-bottom: 0.000484rem solid #ccc;
      }
    }
  }
</style>


