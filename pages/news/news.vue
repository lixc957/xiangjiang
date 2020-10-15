<template>
	<view class="news">
		<news-list :news-list="newsList" @newsItemClick="goNewsDetail"></news-list>
	</view>
</template>

<script>
	import NewsList from '../../components/news/NewsList.vue'
	import { getNewsList } from '../../request/news.js'
	
	export default {
		components: { NewsList },
		data() {
			return {
				newsList: []
			}
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			async getNewsList() {
				const res = await getNewsList()		
				this.newsList = res.message
			},
			goNewsDetail(id) {
				uni.navigateTo({
					url: '../news-detail/news-detail?id=' + id
				})
			}
		}
	}
</script>

<style>

</style>
