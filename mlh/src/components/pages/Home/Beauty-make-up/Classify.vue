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
				this.$http.get("/mlh/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431,2040000100000000542,2121000100000000339&timestamp=1533630124822&summary=86f347a1072945a1b5fb19ad2855f8a6&platform_code=H5").then(res => {
					this.classify = res.data.resultList[0].data
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