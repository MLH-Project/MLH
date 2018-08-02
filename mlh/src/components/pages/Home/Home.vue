<template>
  <div id="app-home" class="page">
    <router-link to='/'>HOME</router-link>
    <router-link :to="{name: 'detail'}">DETAIL</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppHome'
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">

</style>
