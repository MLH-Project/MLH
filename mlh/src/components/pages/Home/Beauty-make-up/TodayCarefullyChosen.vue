<template>
	<div class="texuan">
		<div class="box">
			<div class="title">
				<img src="https://cdn13.mei.com/category/20180805/bd009eff7a30bcc796d8455e28d3979be15d3cf3671d4998.jpg@690w_160h_2e_65q"/>
			</div>
			<div class="container">
				<ul>
					<li v-for = '(item, i) in jinri' :key = 'i'>
						<a>
							<div class="C-img">
								<img :src=" item.picUrl "/>
							</div>
							<div class="C-miao">
								<span class="brand"> {{ item.brandName }} </span><br />
								<span class="name"> {{ item.productName }} </span>
								<div class="mt">
									<span> {{ '￥' + item.price }} </span>
									<del> {{ '￥' + item.marketPrice }} </del>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
	
<script>
	export default {
		name: 'texuan',
		data () {
			return {
				jinri: []
			}
		},
		methods: {
			getToday () {
				this.$http.get('/mlh/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431,2040000100000000542,2121000100000000339&timestamp=1533630124822&summary=86f347a1072945a1b5fb19ad2855f8a6&platform_code=H5').then(res => {
					this.jinri = res.data.resultList[2].data[0].products
				})
			}
		},
		created() {
			this.getToday()
		}
	}
</script>

<style lang="scss" scoped>
	.texuan {
		width: 100%;
		height: 3.65rem;
		.box {
			width: 100%;
			height: 100%;
			padding-top: 0.35rem;
			.title { 
				margin-left: 0.15rem;
				width: 95%;
				height: 0.8rem;
				img {
					display: block;
					width: 100%;
				}
			}
			.container {
				width: 100%;
				height: 2.5rem;
				ul {
					overflow-y: hidden;
					overflow-x: auto;
					width: 100%;
					display: flex;
					li {
						float: left;
						margin-right: 5px;
						display: flex;
						flex-flow: column;
						align-items: center;
						justify-content: space-between;
						a {
							display: block;
							.C-img {
								width: 1.4rem;
								height: 1.86rem;
								img {
									width: 100%;
									height: 100%;
								}
							}
							.C-miao{
								font-size: 0.14rem;
								margin-top:5px;
								margin-left: 0.15rem;
								width:95%;
								height: 0.6rem;
								.brand{color: #000;}
								.name{
									font-size:0.12rem; color: #666;
								    color: #666;
								    width: 1.25rem;
								    overflow: hidden;
								    text-overflow: ellipsis;
								    display: block;
								    word-break: keep-all;
								    white-space: nowrap;
								}
								.mt{
									color:red;
									del {
										font-size: 0.12rem;
									    color: #ccc;
									    text-decoration: line-through;
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