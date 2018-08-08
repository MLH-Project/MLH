<template>
	<div class="overseas-goods-list">
		<div class="item" v-for = '(data, i) in goods' :key = 'i'>
			<a>
				<img :src=" data.imageUrl "/>
				<div class="title">
					<div class="direct-hair">
						<span> {{ data.siloCategory}}直发 </span>
					</div>
					<div class="describe">
						<span> {{ data.englishName }} </span>
						<span> {{ data.chineseName }} </span>
						<span> {{ data.discountText }} </span>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	export default {
		name: "overseas-goods-list",
		data () {
			return {
				goods: []
			}
		},
		methods: {
			getgoods () {
				this.$http.get("/mlh/appapi/silo/eventForH5?categoryId=kids&pageIndex=1&timestamp=1533633269742&summary=091a4a39604c7966b9cdb33c512f6cfd&platform_code=H5").then(res => {
					console.log(res.data.eventList)
					this.goods = res.data.eventList
				})
			}
		},
		created () {
			this.getgoods()
		}
	}
</script>

<style lang="scss" scoped>
	.overseas-goods-list {
		width: 100%;
		height: 100%;
		padding-top: 0.15rem;
		.item {
			width: 100%;
			height: 100%;
			a {
				display: block;
				width: 3.45rem;
				height: 2.1rem;
				margin: 0 auto 10px;
				position: relative;
				img {
					width: 100%;
					height: 100%;
				}
				.title {
					width: 100%;
					height: 1.04rem;
					position: absolute;
					bottom: 0;
					font-size: 12px;
					overflow: hidden;
					.direct-hair {
						padding-left: 0.1rem;
						margin-bottom: 5px;
						width: 100%;
						span {
							background: #fff;
						}
					}
					.describe {
						width: 100%;
					    height: auto;
					    padding-left: 0.1rem;
					    text-align: left;
					    padding-bottom: 0.05rem;
					    color: #FFF;
						span {
							font-size: 0.16rem;
							line-height: 0.16rem;
							display: block;
							margin-bottom: 0.05rem;
						}
					}
				}
			}
		}
	}
</style>