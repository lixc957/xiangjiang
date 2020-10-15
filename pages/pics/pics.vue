<template>
	<view class="pics" v-if="catesList.length">
		<scroll-view class="left" scroll-y>
			<view 
				@click="getSecondData(index, item.id)" 
				:class="{ active: index === currentIndex }" 
				v-for="(item, index) in catesList" 
				:key="item.id"
			>{{ item.title }}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
import { getCatesList, getSecondData } from '../../request/pics.js'

export default {
	data() {
		return {
			currentIndex: 0,
			catesList: [],
			secondData: []
		}
	},
	onLoad() {
		this.getCatesList()
	},
	methods: {
		async getCatesList() {
			const res = await getCatesList()
			this.catesList = res.message
			this.getSecondData(0, this.catesList[0].id)
		},
		async getSecondData (index, id) {
			this.currentIndex = index
			const res = await getSecondData(id)
			this.secondData = res.message
		},
		previewImg(current) {
			const urls = this.secondData.map(item => {
				return item.img_url
			})
			uni.previewImage({
				current,
				urls
			})
		}
	}
}
</script>

<style lang="scss">
page {
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view {
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active {
			background: $shop-color;
			color: #fff;
		}
	}
	.right {
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item {
			image {
				width: 520rpx;
				height: 520rpx;
				border-radius: 5px;
			}
			text {
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
}
</style>
