<template>
	<div class="overseas-classify">
		<div v-for = "data in classify" class="jj">
			<img :src="data.imageUrl"/>
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
				this.$http.get("/mlh/appapi/cms/cmsDetail/v3?silo=2013000100000000004&ids=2121000100000000291,2042000100000000430&timestamp=1533631676526&summary=c6c23d28a85520852b0dbeac1c88c32d&platform_code=H5").then(res => {
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
		height: 2.2rem;
		padding: 0.05rem 0;
		.jj {
			width: 100%;
			height: 2.2rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>