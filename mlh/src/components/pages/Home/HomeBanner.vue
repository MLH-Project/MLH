<template>
	<div class='app-home-banner'>
		<div ref="el" class="swiper-container">
			<div class="swiper-wrapper">
				<div v-for="(banner, i) in banners" v-if="banner.imgUrlNew !== ''" :key="i" class="swiper-slide">
					<img :src="banner.imgUrlNew" class="loading-img">
				</div>
			</div>
			<div class="swiper-pagination dian"></div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import Swiper from "swiper";
	export default {
		name: "app-home-banner",
		data() {
			return {
				banners: []
			}
		},
		methods: {
			getInfos() {
				this.$http
					.get(
						"/mlh/appapi/home/marketingBannerNewZone/v3?timestamp=1533211244010&summary=0709bfd68850ba6d08f7cd309992bc49"
					)
					.then(res => {
						this.banners = res.data.banners;
						Vue.nextTick(() => {
							new Swiper(this.$refs.el, {
								autoplay: {
									delay: 2500,
									disableOnInteraction: false
								},
								speed: 500,
								initialSlide: 0,
								loop: true,
								pagination: {
									el: ".swiper-pagination"
								}
							});
						});
					});
			}
		},
		created() {
			this.getInfos();
		}
	};
</script>
<style lang="scss">
	.app-home-banner {
		width: 100%;
		height: 2rem;
		margin-top: 0.25rem;
		.swiper-container {
			width: 100%;
			height: 2rem;
			.swiper-wrapper {
				width: 100%;
				height: 1.875rem;
			}
			.swiper-slide {
				width: 100%;
				height: 1.875rem;
				img {
					width: 100%;
					height: 100%;
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