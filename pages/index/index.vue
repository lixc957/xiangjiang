<template>
	<view class="home">
		<swiper indicator-dots autoplay :interval="3000" circular>
			<swiper-item v-for="item in swiperList" :key="item.id"><image :src="item.img"></image></swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view 
				class="nav_item" 
				v-for="(item, index) in navs" 
				:key="index" 
				@click="navItemClick(item.path)"
			>
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
			<view class="hot_goods">
				<view class="title">推荐商品</view>
			  <goods-list :goods-list="goodsList"></goods-list>
			</view>
		</view>
	</view>
</template>

<script>
import GoodsList from '../../components/goods/GoodsList.vue'
import { getSwiperList, getGoodsList } from '../../request/index.js'

export default {
	components: { GoodsList },
	data() {
		return {
			swiperList: [],
			navs: [
				{
					icon: 'iconfont icon-ziyuan',
					title: '云仓超市',
					path: '/pages/goods/goods'
				},
				{
					icon: 'iconfont icon-guanyuwomen',
					title: '联系我们',
					path: '/pages/contact/contact'
				},
				{
					icon: 'iconfont icon-tupian',
					title: '社区图片',
					path: '/pages/pics/pics'
				},
				{
					icon: 'iconfont icon-shipin',
					title: '学习视频',
					path: '/pages/videos/videos'
				}
			],
			goodsList: []	
		}
	},
	onLoad() {
		this.getSwiperList()
		this.getGoodsList()
	},
	methods: {
		async getSwiperList() {
			const res = await getSwiperList()
			this.swiperList = res.message
		},
		async getGoodsList() {
			const res = await getGoodsList(1)
			this.goodsList = res.message
		},
		navItemClick(url) {
			uni.navigateTo({ url })	
		}
	}
}
</script>

<style lang="scss">
.home {
	swiper {
		width: 750rpx;
		height: 380rpx;
		image {
			height: 100%;
			width: 100%;
		}
	}
	.nav {
		display: flex;
		.nav_item {
			width: 25%;
			text-align: center;
			view {
				width: 120rpx;
				height: 120rpx;
				background: $shop-color;
				border-radius: 60rpx;
				margin: 10px auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			.icon-tupian {
				font-size: 45rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
	.hot_goods {
		background: #eee;
		overflow: hidden;
		margin-top: 10px;
		.title {
			height: 50px;
			line-height: 50px;
			color: $shop-color;
			font-weight: 700;
			text-align: center;
			letter-spacing: 20px;
			background: #fff;
			margin: 7rpx 0;
		}
	}
}
</style>
