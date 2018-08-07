<template>
	<div id="Home-furnishing">
		<AppHomeNavList></AppHomeNavList>
		<overseasBanner></overseasBanner>
		<HomeOption></HomeOption>
		<HomeSelection></HomeSelection>
		<HomeGoods></HomeGoods>
		<AppHomeBottom></AppHomeBottom>
	</div>
</template>

<script>
    import AppHomeNavList from '../Special/SpecialBox'
	import overseasBanner from './Banner'
	import HomeOption from './Classify'
	import HomeSelection from './TodayCarefullyChosen'
	import HomeGoods from './Goods'

	export default {
		name: "Home-furnishing",
		components: {
			overseasBanner,
			HomeOption,
			HomeSelection,
			HomeGoods
		}
	}
</script>

<style lang="scss" scoped>
</style>