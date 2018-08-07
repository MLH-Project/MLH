<template>
	<div class='overseas-banner'>
		<div ref="el" class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="(banner, i) in banners" v-if="banner.imgUrlNew !== ''" :key="i" class="swiper-slide">
					<img :src="banner.imgUrlNew" class="loading-img">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import Swiper from "swiper";
	export default {
		name: "overseas-banner",
		data() {
			return {
				banners: []
			}
		},
		methods: {
			getInfos() {
				this.$http.get("/mlh/appapi/home/marketingBannerNewZone/v3?silo_code=3&timestamp=1533630124525&summary=3af0422c105fa0484062cec001da7673").then(res => {
					this.banners = res.data.banners;
				})
			}
		},
		created() {
			this.getInfos();
		}
	};
</script>
<style lang="scss">
	.overseas-banner {
		width: 100%;
		height: 2rem;
		margin-top: 0.25rem;
		.swiper-container {
			width: 100%;
			height: 2rem;
			.swiper-wrapper {
				width: 100%;
				height: 1.875rem;
				.swiper-slide {
					width: 100%;
					height: 1.875rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.swiper-pagination {
				bottom: 0rem;
				.swiper-pagination-bullet {
					width: 0.05rem;
					height: 0.05rem;
				}
				.swiper-pagination-bullet-active {
					background: #000;
				}
			}
		}
	}
</style>