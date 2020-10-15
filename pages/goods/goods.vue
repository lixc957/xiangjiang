<template>
	<view class="goods" v-if="goodsList.length">
		<goods-list :goods-list="goodsList"></goods-list>
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/goods/GoodsList.vue'
	import { getGoodsList } from '../../request/index.js'
	
	export default {
	  components: { GoodsList },
		data() {
			return {
				pageIndex: 1,
				goodsList: [],
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			async getGoodsList(callback) {
				const res = await getGoodsList(this.pageIndex)
				this.goodsList = [...this.goodsList, ...res.message]
				callback && callback()
			}
		},
		// 上拉加载
		onReachBottom() {
			if(this.goodsList.length < this.pageIndex * 10) return this.flag = true
			this.pageIndex++
			this.getGoodsList(this.pageIndex)
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.pageIndex = 1
			this.goodsList = []
			this.flag = false
			this.getGoodsList(this.pageIndex)
			this.$nextTick(() => {
				uni.stopPullDownRefresh()
			})
		}
	}
</script>

<style>
.goods {
	background: #eee;
}
.isOver {
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 38rpx;
}
</style>
