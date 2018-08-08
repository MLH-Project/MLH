<template>
	<div class="texuan">
		<div class="box">
			<div class="title">
				<img src="../../../../../static/images/111.png"/>
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
				this.$http.get('/mlh/appapi/cms/cmsDetail/v3?silo=2013000100000000004&ids=2121000100000000291,2042000100000000430&timestamp=1533631676526&summary=c6c23d28a85520852b0dbeac1c88c32d&platform_code=H5').then(res => {
					this.jinri = res.data.resultList[1].data
//					console.log(this.jinri)
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
		height: 3rem;
		.box {
			width: 100%;
			height: 100%;
			padding-top: 0.35rem;
			.title { 
				margin-left: 0.15rem;
				width: 1.34rem;
				height: 0.2rem;
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