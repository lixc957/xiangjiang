<template>
	<view class="goods_detail" v-if="info.title">
		<swiper indicator-dots autoplay :interval="2500" circular>
			<swiper-item v-for="(item, index) in swiperList" :key="index"><image :src="item.src"></image></swiper-item>
		</swiper>
		<view class="goods_info">
			<view class="box1">
				<view class="price">
					<text>￥{{ info.sell_price }}</text>
					<text>￥{{ info.market_price }}</text>
				</view>
				<view class="goods_name">{{ info.title }}</view>
			</view>
			<view class="line"></view>
			<view class="box2">
				<view>货号：{{ info.goods_no }}</view>
				<view>库存：{{ info.stock_quantity }}</view>
			</view>
			<view class="line"></view>
			<view class="box3">
				<view class="tit">详情介绍</view>
				<view class="content"><rich-text :nodes="content"></rich-text></view>
			</view>
		</view>
		<view class="goods_nav"><uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="optionClick" @buttonClick="buttonClick"></uni-goods-nav></view>
	</view>
</template>

<script>
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
import { getGoodsDetailSwiper, getGoodsDetailInfo, getGoodsDetailContent } from '../../request/goods-detail.js'

export default {
	components: { uniGoodsNav },
	data() {
		return {
			id: 0,
			swiperList: [],
			info: {},
			content: '',
			options: [
				{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 12,
					infoBackgroundColor:'#007aff',
					infoColor:"red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 12
				},
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		}
	},
	onLoad(options) {
		this.id = options.id
		this.getGoodsDetailSwiper()
		this.getGoodsDetailInfo()
		this.getGoodsDetailContent()
	},
	methods: {
		async getGoodsDetailSwiper() {
			const res = await getGoodsDetailSwiper(this.id)
			this.swiperList = res.message
		},
		async getGoodsDetailInfo() {
			const res = await getGoodsDetailInfo(this.id)
			this.info = res.message[0]
		},
		async getGoodsDetailContent() {
			const res = await getGoodsDetailContent(this.id)
			this.content = res.message[0].content
		},
		optionClick (e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			})
		},
		buttonClick (e) {
			console.log(e)
			// this.options[2].info++
		}
	}
}
</script>

<style lang="scss">
.goods_detail {
	swiper {
		height: 700rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.goods_info {
		.box1 {
			padding: 10px;
			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3 {
			padding-bottom: 50px;
			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
			}
		}
	}
}

.goods_nav {
	position: fixed;
	bottom: 0;
	width: 100%;
}

.line {
	height: 10rpx;
	width: 750rpx;
	background: #eee;
}
</style>
