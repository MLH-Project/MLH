<template>
	<div class="overseas-classify">
		<div>
			<ul class="classify-item">
				<li v-for = "(data, i) in classify" :key = "i">
					<a href="javascript:">
						<img :src=" data.categoryImgStr "/>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	export default {
		name: 'overseas-classify',
		data () {
			return {
				classify: []
			}
		},
		methods: {
			getClassIfy () {
				this.$http.get("/mlh/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234,2120000100000000406&timestamp=1533629258724&summary=dc93eb29940a319426f09b3737aa9d08&platform_code=H5").then(res => {
					this.classify = res.data.resultList[0].data
//					console.log(res.data.resultList[0].data)
				})
			}
		},
		created () {
			this.getClassIfy();
		}
	}
</script>

<style lang="scss" scoped>
	.overseas-classify {
		width: 100%;
		height: 0.93rem;
		padding: 0.05rem 0;
		div {
			width: 3.54rem;
			height: 100%;
			margin: 0 auto;
			.classify-item {
				display: flex;
				flex-direction: row;
			    width: 100%;
			    height: auto;
			    margin: 0 auto;
			    li {
			    	flex-grow: 1;
				    text-align: center;
				    height: auto;
				    margin: 4.5px;
				    a {
				    	display: block;
				    	img {
				    		width: 100%;
				    		height: 100%;
				    	}
				    }
			    }
			}
		}
		
	}
</style>