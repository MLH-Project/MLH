<template>
	<div class="app-home-goods">
		<div class="neil">
			<div class="event-product">
				<div class="container">
					<ul >
						<li v-for = "(data, i) in Goodsdatas" :key = "i">
							<div class="home-picture" >
								<img :src="data.data[0].imagePcUrl" />
							</div>
							<div class="home-neil-barrett">
								<ul>
									<li v-for = "(datas, i) in data.data[0].products">
										<a href=" javascript: ">
											<div class="img">
												<img :src="datas.picUrl" />
											</div>
											<div class="desc">
												<span class="brand"> {{ datas.brandName }}</span>
												<span class="name"> {{ datas.productName }} </span>
											</div>
											<div class="product-price-box">
												<del>￥{{ datas.marketPrice }}</del><br />
												<span>￥{{ datas.price }}</span>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Swiper from 'swiper'

	export default {
		name: 'app-home-goods',
		data () {
			return {
				Goodsdatas: []
			}
		},
		methods: {
			getGoods () {
				this.$http.get('/mlh/appapi/cms/cmsDetail/v3?silo=2013000100000000008&ids=2040000100000000544,2041000100000000487,2042000100000000436&timestamp=1533646761340&summary=6f260fa1fcb7f9e39355e91143c41ae2&platform_code=H5').then(res => {
					this.Goodsdatas = res.data.resultList
			})
		}
	},
	created () {
		this.getGoods()
	}
}
</script>

<style lang="scss" scoped>
	.app-home-goods {
		width: 100%;
		height: 10.25rem;
		background: #FFF;
		.neil {
			width: 100%;
			height: 3.59rem;
			.event-product {
				padding-top: 0.35rem;
				.container {
					margin: 0.2rem 0.15rem 0;
					ul {
						li {
							.home-picture {
								width: 100%;
								height: 0.8rem;
								img {
									width: 100%;
									height: 100%;
								}
							}
							.home-neil-barrett {
								overflow: hidden;
								width: 100%;
								height: 2.5rem;
								ul {
									overflow-y: hidden;
									overflow-x: auto;
									width: 100%;
									display: flex;
									li {
										flex: 3;
										width: 150px;
										height: auto;
										margin-right: 5px;
										display: flex;
										flex-flow: column;
										align-items: center;
										justify-content: space-between;
										a {
											.img {
												widows:1.2rem;
												height: 1.6rem;
												img {
													width: 100%;
													height: 100%;
												}
											}
											.desc {
												font-size: 0.13rem;
												color: #000;
												.brand {
													overflow: hidden;
													white-space: nowrap;
													display: block;
													text-overflow: ellipsis;
												}
												.name {
													width: 1.2rem;
													overflow: hidden;
													white-space: nowrap;
													display: block;
													text-overflow: ellipsis;
												}
											}
											.product-price-box {
												del {
													color: #ccc;
												}
												span {
													color: red;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>