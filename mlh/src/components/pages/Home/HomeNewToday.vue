<template>
	<div class="app-home-Today">
		<div  v-for = "(data, i) in getNewToday.lists" :key = 'i' class="box">
			<div class="new-today">
				<img src="../../../assets/newArrival.png"/>
			</div>
			<div class="container">
				<router-link 
					tag="div"
					class="item" 
					v-for = '(datas, i) in data.events' 
					:key = 'i' 
					:to = "{name: 'list', query:{categoryId: datas.categoryId}}"
				>
					<a>
						<img :src=" datas.imageUrl "/>
						<div>
							<div class="describe">
								<span class="event-brand"> {{ datas.englishName }} </span>
								<span> {{ datas.chineseName }} </span><br />
								<span> {{ datas.discountText }} </span>
							</div>
						</div>
					</a>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-home-Today',
		data () {
			return {
				getNewToday: []
			}
		},
		methods: {
			getToday () {
				this.$http.get('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1533299929881&summary=3de9bc8f2d5cb3325964d00c0cc7405d&platform_code=H5').then(res => {
				
					console.log(res.data.lists)
					this.getNewToday  = res.data
				})
			}
		},
		created() {
			this.getToday()
		}
	}
</script>

<style lang="scss" scoped>
	.app-home-Today {
		width: 3.49rem;
		margin:0 auto;
		.box {
			margin-top: 0.3rem;
			width: 100%;
			.new-today {
			width: 1.4rem;
			height: 0.2rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.container {
			margin-top: 0.2rem;
    		width: 100%;
    		.item {
    			width: 100%;
    			margin-bottom: 0.1rem;
    			position: relative;
    			a {
    				display: block;
    				width: 100%;
    				height: 100%;
    				img {
    					display: block;
					    width: 100%;
					    height: 2.07rem;
    				}
    				div {
    					width: 100%;
    					height: 0.7rem;
    					position: absolute;
    					bottom: -1px;
    					z-index: 1;
    					color:#FFF;
    					div {
    						padding-bottom:5px;
    						padding-left: 10px;
    						.event-brand {
    							display: block;
    							text-align: left;
    							margin-bottom: 5px;
    							font-size: 0.16rem;
    							width: 100%;
    							line-height: 0.16rem;
    						}
    						span {
    							font-size: 0.14rem;
    						}
    					}
    				}
    			}
    		}
		}
		}
		
	}
</style>