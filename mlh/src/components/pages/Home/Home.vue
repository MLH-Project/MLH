<template>
  <div id="app-home" class="page">
    <AppHomeNavList></AppHomeNavList>
    <AppHomeBanner></AppHomeBanner>
    <AppHomeAdvertisement></AppHomeAdvertisement>
    <AppHomeListGoods></AppHomeListGoods>
    <HomeNewToday></HomeNewToday>
    <AppHomeBottom></AppHomeBottom>
  </div>
</template>

<script>
    import AppHomeNavList from './Special/SpecialBox'
    import AppHomeBanner from './HomeBanner'
    import AppHomeAdvertisement from './HomeAdvertisement'
    import AppHomeListGoods from './HomeListGoods'
    import HomeNewToday from './HomeNewToday'
    export default {
        name: 'AppHome',
        components: {
            AppHomeBanner,
            AppHomeAdvertisement,
            AppHomeListGoods,
            HomeNewToday
        }
    }
</script>

<style lang="scss" scoped>
	#app-home {
		overflow: hidden;
		background: #ffff;
		color:#000000;
	}
</style>
