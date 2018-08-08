<template>
	<div class="Home-botton">
		<router-link 
		exact 
		v-for = 'data in main'
		:key = 'data.id'
		:to = '{name: data.name}' 
		class = "main" 
		><span> {{ data.title }} </span>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Home-botton',
		data () {
			return {
				main: [
					{id: 1, title: '首页', name: 'home'},
					{id: 2, title: '购物袋', name: 'cart'},
					{id: 3, title: '我的', name:'mine'}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Home-botton {
		width: 100%;
		height: 62px;
		position: fixed;
		bottom: -1px;left: 0;
		display: flex;
        border-top: 1px solid #e4e2e2;
        background: #fff;
		.main {
			display: inline-block;
			font-size: 0.18rem;
			width: 100%;
			height: 62px;
			flex: 3;
			text-align: center;
			line-height: 62px;
		}
		
	}
</style>
