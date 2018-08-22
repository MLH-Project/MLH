<template>
  <div class="list">
    <header class="con">
      <span @click="$router.go(-1)">←</span>
      <div>
        <span>{{listInfos.eventName}}</span>
      </div>
      <span class="show-menu" @click="showMenu">· · ·</span>
      <div v-if="status">
        <ShowMenu></ShowMenu>
      </div>
    </header>
    <nav>
      <span>人气</span>
      <span>折扣</span>
      <span>价格<i></i></span>
      <span>筛选</span>
    </nav>
    <ul class="con" v-if="listInfos.promotions">
      <li>免运</li>
      <li>满688元全场免运</li>
    </ul>
    <div class="goods-box">
      <router-link tag = "div"
        :to = "{name: 'detail', query:{productId: goods.productId}}"
        class="goods-item loding-img"
        v-for = "goods in listInfos.products"
        :key = "goods.productId"
      >
        <a>
          <div class="goods-pic" >
            <img :src="goods.imageUrl">
            <div class="size">
              <div>
                <span
                  v-for = "size in goods.productSizes"
                  :key = "size.id"
                >{{size.size}}</span>
              </div>
              
            </div>
          </div>
          <div class="goods-icon" v-if = "goods.tagListDto[0]">
            <span>{{goods.tagListDto[0].tag}}</span>
          </div>
          <div class="goods-info">
            <span class="goods-brand">{{goods.brandName.toUpperCase()}}</span>
            <span class="goods-name">{{goods.productName}}</span>
          </div>
          <div class="goods-price">
            <span>￥{{goods.price}}</span>
            <del>￥{{goods.marketPrice}}</del>
            <span>{{goods.discount}}折</span>
          </div>
        </a>
      </router-link>
    </div>
    <GoTop></GoTop>
  </div>
</template>

<script>
import Vue from 'vue'
import GoTop from '../../commons/component' 
import ShowMenu from '../../commons/component' 

export default {
  name: 'app-list',
  data () {
    return {
      listInfos: {},
      status: false
    }
  },
  methods: {
    ListGetInfos() {
      // console.log(this.$http)
      this.$http.get(
          "http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId="+this.$route.query.categoryId+"&key=&sort=&timestamp="+Date.now()+"&summary=6eaff4191091d74f11bbec39a11f49f5&platform_code=H5"
        ).then(res => {
          this.listInfos = res.data
          console.log(JSON.parse(JSON.stringify(this.listInfos)))
        })
    },
    showMenu () {
      this.status = !this.status
    }
  },
  created() {
    this.ListGetInfos()
  }
}
</script>

<style lang="scss" scoped>
@import "../../../stylesheets/_base.scss";
.list {
  header {
    display: flex;
    .show-menu {
      display: block;
      position: relative;
      text-align: right;
    }
    span {
      flex: 3;
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
  nav {
    display: flex;
    line-height: 0.44rem;
    span {
      flex: 4;
      color: #999;
      text-align: center;
    }
    span:last-child {
        color: #2b2b2b;
      }
  }
  ul {
    overflow: hidden;
    line-height: 0.12rem;
    li {
      float: left;
      font-size: 0.12rem;
    }
    li:first-child {
      color: #f00;
      padding: 0.01rem;
      border: 1px solid #f00;
    }
    li:last-child {
      padding-left: 0.1rem;
    }
  }
  .goods-box {
    margin: 0 auto;
    width: 3.45rem;
    padding-bottom: 0.3rem;
    .goods-item {
      display: inline-block;
      width: 1.65rem;
      margin: 0 0.07rem 0.1rem 0;
      a {
        display: block;
        width: 1.65rem;
        .goods-pic {
          width: 1.65rem;
          height: 2.2rem;
          position: relative;
          img {
            display: block;
            width: 100%;
            margin-bottom: 0.05rem;
          }
          .size {
            position: absolute;
            left: 0;
            bottom: 0.01rem;
            width: 100%;
            height: 0.17rem;
            text-align: center;
            div {
              display: inline-block;
              width: auto;
              color: #fff;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              max-width: 0.75rem;
              padding: 0 0.09rem;
              border-radius: 0.09rem;
              background: rgba(0,0,0,.6);
            }
            span:before {
              content: '/';
              padding: 0 0.03rem;
              font-size: 0.12rem;
            }
            span:first-child:before {
              content: '';
              padding: 0;
            }
          }
        }
        .goods-icon {
          margin:  0.05rem 0;
          span {
            border: 0.005rem solid #000;
            padding: 0.003rem;
          }
        }
        .goods-info {
          span {
            display: block;
            width: 100%;
          }
          .goods-brand {
            font-weight: bold;
            font-size: 0.14rem;
          }
        }
        .goods-price {
          font-size: 0.13rem;
          span:first-child {
            color: $base-red;
            padding-right: 0.1rem;
          }
          del {
            color: $base-gray;
          }
          span:last-child {
            float: right;
            // padding-right: 0.05rem;
          }
        }
      }
    }
  }
}
</style>