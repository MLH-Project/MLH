<template>
    <div id="goTop">
      <div class="goTop" v-show="goTopShow" @click="goTop">
        <img src="../../assets/Totop.png" class="goTopIcon" />
      </div>
    </div>
</template>
<script>
    export default {
      name: "goTop",
      data(){
          return{
            scrollTop: '',
            goTopShow:false,
          }
        },
      methods:{
        handleScroll () {
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(this.scrollTop>500){
            this.goTopShow=true
          }
        },
        goTop(){
          let timer=null,_that=this;
          cancelAnimationFrame(timer)
          timer=requestAnimationFrame(function fn(){
            if(_that.scrollTop>0){
              _that.scrollTop-=50;
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer=requestAnimationFrame(fn)
            }else {
              cancelAnimationFrame(timer);
              _that.goTopShow=false;
            }
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
</script>
 
<style scoped>
  .goTop{
    position: fixed;
    right: 0.1rem;
    bottom: 0.08rem;
    width: 0.5rem;
    height: 0.5rem;
  }
  .goTopIcon{
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
