<template>
	<div id="Beauty-make-up">
		<AppHomeNavList></AppHomeNavList>
		<overseasBanner></overseasBanner>
		<overseasClassify></overseasClassify>
		<HomeOption></HomeOption>
		<HomeSelection></HomeSelection>
		<HomeGoods></HomeGoods>
		<AppHomeBottom></AppHomeBottom>
	</div>
</template>

<script>
    import AppHomeNavList from '../Special/SpecialBox'
	import overseasBanner from './Banner'
	import overseasClassify from './Classify'
	import HomeOption from './Option'
	import HomeSelection from './TodayCarefullyChosen'
	import HomeGoods from './Goods'

	export default {
		name: "Beauty-make-up",
		components: {
			overseasBanner,
			overseasClassify,
			HomeOption,
			HomeSelection,
			HomeGoods
		}
	}
</script>

<style lang="scss" scoped>
</style>