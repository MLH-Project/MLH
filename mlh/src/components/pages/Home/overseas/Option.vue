<template>
	<div class="event-product">
		<div class="event-product-box">
			<div class="container">
				<div class="list">
					<div class="pic">
						<img src="https://cdn12.mei.com/category/20180806/71895096a461b7d8c3f57d8045853900d72eb86efc6c943a.png@690w_160h_2e_65q" />
					</div>
					<div class="home-neil-barrett">
						<ul>
							<li v-for = "(item, i) in shaonv" :key = 'i'>
								<a>
									<div class="img">
										<img :src=" item.picUrl "/>
									</div>
									<div class="desc">
										<span class="brand"> {{ item.brandName }} </span>
										<span class="name"> {{ item.productName }} </span>
									</div>
									<div class="product-price-box">
										<del> {{ '￥' + item.marketPrice }} </del><br />
										<span> {{ '￥' + item.price }} </span>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'event-product',
		data () {
			return {
				shaonv: []
			}
		},
		methods: {
			product () {
				this.$http.get('/mlh/appapi/cms/cmsDetail/v3?silo=2013000100000000011&ids=2041000100000000206,2120000100000000405,2120000100000000404&timestamp=1533626684780&summary=b50307664846ed228bf7e158e1077094&platform_code=H5').then(res => {
					this.shaonv = res.data.resultList[1].data[0].products
				})
			}
		},
		created() {
			this.product()
		}
	}
</script>

<style lang="scss" scoped>
	.event-product {
		width: 100%;
		height: 360px;
		.event-product-box {
			padding-top: 0.35rem;
			width: 100%;
			.container {
				width: 345px;
				height: 310px;
				margin: 15px auto 0;
				overflow: hidden;
				.list {
					width: 100%;
					height: 100%;
					.pic {
						width: 100%;
						height: 0.8rem;
						img {
							display: block;
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
										img {
											display: block;
											width: 112px;
											height: 150px;
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
</style>