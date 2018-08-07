<template>
  <div class="detail con">
    <header>
      <span @click="$router.go(-1)">←</span>
      <div v-if = "infos.brand">
        <span>{{infos.brand.toUpperCase()}}</span>
        <span>￥{{infos.price}}</span>
      </div>
      <span class="show-menu" @click="showMenu">· · ·</span>
      <div v-if="status">
        <ShowMenu></ShowMenu>
      </div>
    </header>
    <div ref = "el" class="swiper-container" >
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
    <div 
      class="product-price" 
      v-if = "infos.itemPriceDto"
      >
      <del>￥{{infos.marketPrice}}</del>
      <div>￥{{infos.price}}
        <span 
          v-for = "product_label in infos.product_labels" 
          :key = "product_label.labelType"
        >{{product_label.label_text}}</span>
      </div>
    </div>
    <div class="delivery">
      <strong>{{infos.warehouse_name}}</strong>
      <span>{{infos.deliver_date}}</span>
    </div>
    <div class="other-info">
      <div class="countdown" v-if = "infos.eventEndDate">
        <span class="c-title">闪购</span>
        <div class="c-txt">
          <strong>距离结束</strong>
          <Countdown @time-end="message = '倒计时结束'" :endTime='endTime'></Countdown>
        </div>
      </div>
      <div 
        class="promotions"
        v-if = "infos.promotions"  
      >
        <span class="p-title">促销</span>
        <span class="p-txt">{{infos.promotions.event.info.replace(';','')}}</span>
      </div>
      <div class="service-labels">
        <div class="s-title">服务</div>
        <div class="s-txt">
          <span 
            class="label-item"
            v-for = "(service_label, i) in infos.service_labels"
            :key = "i"
          ><em>{{service_label.label_title}}</em></span>
        </div>
      </div>
    </div>
    <div class="product-params">
      <h3 class="h3">商品参数</h3>
      <ul class="params-list" v-if = "infos.description">
        <li 
          v-for = "(params, i) in infos.description.attributesList"
          :key = "i"
        >
          <label>{{params.name}}</label>
          <span>{{params.value}}</span>
        </li>
      </ul>
    </div>
    <div class="sizeMeasure bt" v-if = "infos.sizeMeasure">
      <h3 class="h3">尺码信息<span>单位：CM</span></h3>
      <div class="container clear ">
        <div class="size-name">
          <ul>
            <li class="name-item" v-for = "(name, i) in infos.sizeMeasure.sizeTable[0]" :key = "i">{{name}}</li>
          </ul>
        </div>
        <div class="size-table">
          <div class="container clear">
            <ul class="size-item" v-for = "(items, i) in infos.sizeMeasure.sizeTable" :key = "i">
              <li 
                v-if = "Number(items.product_size) || items.product_size == 'UNI'" 
                v-for = "(item, i) in items" 
                :key = "i"
              >{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="description" v-if = "infos.description">
      <h3 class="h3">商品详情</h3>
      <p class="design">{{infos.description.design.replace('商品描述：','')}}</p>
      <div 
        class="pic"
        v-for = "(img, i) in infos.description.product_img1"
        :key = "i"
      >
        <img :src="img.bigImgUrl" alt="">
      </div>
      <p>{{infos.description.message}}</p>
    </div>
    
    <div class="returnNote" v-if = "infos.returnNote">
      <h3 class="h3">退货提示</h3>
      <p>{{infos.returnNote}}</p>
    </div>
    <div 
      class="tips bt bb pb" 
      v-if = "infos.description"
    >
      <h3 class="h3">洗护与保养</h3>
      <p>{{infos.description.maintenanceList[0]}}</p>
    </div>
    <div class="footer"></div>
    <CartBottom></CartBottom>
  </div>
</template>

<script>
import Vue from "vue";
import Swiper from "swiper";
import CartBottom from "./CartBottom"

export default {
  name: "app-detail",
  props: {
    product_size: Number
  },
  data() {
    return {
      banners: [],
      infos: {},
      status: false,
      message: '',
      endTime: '2018-08-08 00:00:00'
    }
  },
  components: {
    CartBottom
  },
  methods: {
    getInfos() {
      this.$http
        .get(
          "http://www.meihigo.hk/appapi/product/detail/v3?categoryId=2042204290000004981&productId="+this.$route.query.productId+"&platform_code=H5&timestamp="+Date.now()+"&summary=a344f855f2ff0bb77f727e800373ea18"
        )
        .then(res => {
          this.banners = res.data.infos.images;
          this.infos = res.data.infos;
          console.log(JSON.parse(JSON.stringify(this.infos)));
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
    },
    showMenu () {
      this.status = !this.status
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
  .h3 {
      font-size: 0.18rem;
      font-weight: bold;
      padding: 0.25rem 0 0.2rem;
  }
  .bt {
    border-top: 0.01333rem solid #c5c5c5;
  }
  .bb {
    border-bottom: 0.01333rem solid #c5c5c5;
  }
  .pb {
    padding-bottom: 0.2rem;
  }
  header {
    display: flex;
    .show-menu {
      display: block;
      position: relative;
      text-align: right;
    }
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
  h1 {
    padding-top: 0.12rem;
    font-size: 0.18rem;
  }
  .product-price {
    padding-bottom: 0.12rem;
    del {
      color: $base-gray;
      font-size: 0.12rem;
    }
    div {
      font-size: 0.16rem;
      color: $base-red;
      font-weight: bold;
      span {
        color: #000;
        font-weight: normal;
        font-size: 0.12rem;
        margin-left: 0.1rem;
        padding: 0.01rem;
        text-align: center;
        line-height: 0.206rem;
        border: 0.013333rem solid #000;
      }
    }
  }
  .delivery {
    font-size: 0.12rem;
    padding-bottom: 0.29rem;
    strong {
      color: #000;
      font-weight: bold;
    }
    span {
      color: #666;
    }
  }
  .other-info {
    border-top: .013333rem solid #eee;
    box-shadow: 0.03rem 0.013333rem 0 0 #eee;
    border-bottom: .013333rem solid #eee;
    .countdown {
      padding: 0.2rem 0;
      overflow: hidden;
      .c-title {
        float: left;
        color: #666;
      }
      .c-txt {
        float: left;
        padding-left: 0.2rem;
        strong {
          font-weight: bold;
        }
        span {
          font-size: 0.15rem;
        }
      }
    }
    .promotions {
      padding: 0.2rem 0;
      overflow: hidden;
      border-top: 0.01rem solid #eee;
      .p-title {
        color: #666;
      }
      .p-txt {
        font-size: 0.14rem;
        font-weight: bold;
        color: $base-red;
        padding-left: 0.16rem;
      }
    }
    .service-labels {
      border-top: 0.01rem solid #eee;
      overflow: hidden;
      div {
        float: left;
        line-height: .533333rem;
      }
      .s-title {
        color: #666;
      }
      .s-txt {
        width: 2.65rem;
        padding-left: 0.2rem;
      }
      .label-item {
          line-height: .533333rem;
          color: #666;
          font-size: 0.12rem;
      }
      .label-item:after {
          content: "|";
          padding: 0.1rem;
      }
      .s-txt span:last-child:after {
        content: "";
      }
    }
  }
  .product-params {
    overflow: hidden;
    .params-list {
      li {
        width: 100%;
        padding-bottom: 0.13rem;
      }
      label {
        float: left;
        width: 1.15rem;
        color: #999;
      }
      span {
        font-size: 0.14rem;
      }
    }
  }
  .sizeMeasure {
    background: #fff;
    margin-bottom: 0.2rem;
    font-size: 0.14rem;
    h3 {
      span {
        color: #999;
        font-size: 0.12rem;
        font-weight: 400;
        margin-left: 0.05rem;
      }
    }
    .size-name, .size-item, ul{
      float: left;
    }
    li {
      width: 0.92rem;
      padding: 0.05rem;
      text-align: center;
    }
    li:nth-of-type(odd) {
      background: #f9f9f9;
    }
    li:nth-of-type(even) {
      background: #fff;
    }
    .size-name {
      box-shadow: 0.03rem 0 0.15333rem 0.02rem rgba(237, 237, 237, 0.8);
    }
  }
  .description {
    h3 {
      border-top: .013333rem solid rgb(197, 197, 197);
    }
    .design {
      font-size: 0.14rem;
    }
    img {
      width: 3.35rem;
      // height: 6.585rem;
      display: block;
    }
    p {
      font-size: 0.12rem;
      padding: 0.2rem 0;
    }
  }
  .returnNote {
    border-top: 1px solid rgb(197, 197, 197); 
    // border-bottom: 1px solid rgb(197, 197, 197); 
    p {
      font-size: 0.12rem;
      padding-bottom: 0.2rem;
    }
  }
  .footer {
    margin-bottom: 0.49rem;
  }
}
</style>