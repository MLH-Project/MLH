<template>
    <div class="cart-bottom-bar">
      <div class="cart-btn">
        <span class="shopping-bag">
          <img src="../../../assets/shopping-bag.png"/>
          购物袋</span>
        <span class="add-to-cart">加入购物车</span>
        <span class="buy-now">立即购买</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "CartBottom"
};
</script>

<style lang="scss" scoped>
@import "../../../stylesheets/_base.scss";
  .cart-bottom-bar {
    width: 100%;
    height: 0.49rem;
    position: fixed;
    bottom: -1px; 
    left: 0;
    background: #fff;
    border-top: 1px solid #ddd;
    .cart-btn {
      display: flex;
      span {
        flex: 3;
        line-height: 0.49rem;
        text-align: center;
      }
      .shopping-bag {
        font-size: 0.12rem;
        padding-top: 0.13rem;
        img {
          width: 0.25rem;
          height: 0.25rem;
          position: absolute;
          top: 0.06rem;
          left: 0.5rem;
        }
      }
      .add-to-cart {
        font-weight: bold;
        font-size: 0.16rem;
        border-right: 1px solid #ddd;
      }
      .buy-now {
        color: $base-red;
        font-size: 0.16rem;
      }
    }
  }
</style>


