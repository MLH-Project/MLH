<template>
    <div class="app-home-nav clear" style="top:0rem;">
        <div class="nav">
            <ul>
                <li v-for = "data in titles" :key = "data.categoryId">
                    <router-link exact :to = "{name: data.name}"
                    	active-class = "active"
                    	class = "tiao"> {{ data.title }} </router-link>
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'app-home-nav',
        data () {
            return {
                titles: [
                	{categoryId: '2013000100000000111', urlKey: '', title: '推荐', name: 'home'},
                    {categoryId: "2013000100000000011", urlKey: "", title: "海外", name: 'overseas'},
                    {categoryId: "2013000100000000001", urlKey: "", title: "女士", name: 'madam'},
                    {categoryId: "2013000100000000002", urlKey: "", title: "男士", name: 'Man'},
                    {categoryId: "2013000100000000003", urlKey: "", title: "美妆", name: 'BeautyMakeUp'},
                    {categoryId: "2013000100000000004", urlKey: "", title: "家居", name: 'HomeFurnishing'},
                    {categoryId: "2013000100000000005", urlKey: "", title: "婴童", name: 'Infant'}
                ]
            }
        }
    }
</script>

<style lang="scss">
    .app-home-nav{
        width: 100%;
        height: 0.25rem;
        margin: 0 auto;
        position:fixed;
        z-index: 2666;
        background-color: #fff;
        overflow: hidden;
        .nav {
            overflow: scroll;
            width: 100%;
            height: 0.2rem;
            margin: 0 auto;
            padding-left: 0.1rem;
            ul {
                display: flex;
                justify-content: space-between;
                li {
                    text-align: center;
                    .tiao {
                    	display: block;
                        font-size:0.16rem;
                    }
                    .active {
		                color: #FF0000;
		            }
                }
            }
        }
    }
    
</style>