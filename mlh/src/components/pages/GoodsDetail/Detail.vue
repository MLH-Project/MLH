<template>
  <div class="detail con">
    <header>
      <router-link tag="span" to="/">←</router-link>
      <div>
        <span>{{infos.brand}}</span>
        <span>￥{{infos.price}}</span>
      </div>
      <span>· · ·</span>
    </header>
    <div ref = "el" class="app-home-banner swiper-container" >
      <div class="swiper-wrapper">
        <div 
          v-for = "(banner, i) in banners"
          :key = "i"
          class = "detail-banner swiper-slide loading-img">
          <img :src="banner.bigImgUrl">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <h1>{{infos.name}}</h1>
    <div class="product-price" v-if = "infos.itemPriceDto">
      <del>￥{{infos.marketPrice}}</del>
      <div >￥{{infos.itemPriceDto.price}}</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Swiper from "swiper";
export default {
  name: "app-detail",
  data() {
    return {
      banners: [],
      infos: {}
    }
  },
  methods: {
    getInfos() {
      this.$http
        .get(
          "http://www.meihigo.hk/appapi/product/detail/v3?categoryId=2042204290000004981&productId=2041204199000738959&platform_code=H5&timestamp=1533127546107&summary=a344f855f2ff0bb77f727e800373ea18"
        )
        .then(res => {
          this.banners = res.data.infos.images;
          this.infos = res.data.infos;
          console.log(this.infos.itemPriceDto);
          Vue.nextTick(() => {
            new Swiper(this.$refs.el, {
              autoplay: {
                delay: 2500,
                disableOnInteraction: false
              },
              speed: 500,
              initialSlide: 0,
              loop: true,
              pagination: {
                el: ".swiper-pagination"
              }
            });
          });
        });
    }
  },
  created() {
    this.getInfos();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../stylesheets/_base.scss";
.detail {
  header {
    display: flex;
    span {
      flex: 3;
      padding-top: 10px;
      font-size: 0.15rem;
      text-align: center;
      font-weight: bold;
    }
    div {
      display: flex;
      flex-flow: column;
      span {
        text-align: center;
      }
      span:last-child {
        font-size: 0.12rem;
        color: $base-red;
        font-weight: normal;
        padding-top: 0;
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
  .detail-banner {
    width: 3.35rem;
    height: 3.585rem;
    padding: 0 0 0.12rem;
    img {
      width: 3.35rem;
      height: 3.585rem;
      display: block;
    }
  }
  h1{
    padding-top: 0.12rem;
    font-size: 0.18rem;
  }
}
</style>