<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in goodsList" :key="item.id" @click="goGoodsDetail(item.id)">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>￥{{ item.sell_price }}</text>
				<text>￥{{ item.market_price }}</text>
			</view>
			<view class="name">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		goodsList: {
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		goGoodsDetail(id) {
			uni.navigateTo({
				url: '/pages/goods-detail/goods-detail?id=' + id
			})
		}
	}
}
</script>

<style lang="scss">
.goods-list {
	padding: 0 15rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods-item {
		background: #fff;
		width: 355rpx;
		margin: 10rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		image {
			width: 80%;
			height: 150px;
			display: block;
			margin: auto;
		}
		.price {
			color: $shop-color;
			font-size: 36rpx;
			margin: 20rpx 0 5rpx 0;
			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				margin-left: 17rpx;
				text-decoration: line-through;
			}
		}
		.name {
			font-size: 28rpx;
			line-height: 50rpx;
			padding-bottom: 15rpx;
			padding-top: 10rpx;
		}
	}
}
</style>
