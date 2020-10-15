<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view class="phone">联系电话：<span @click="phone">400-618-9090</span>( 点击拨打 )</view>
			<view class="address">联系地址：湖南省长沙市芙蓉区解放西路188号国金中心</view>
		</view>
		<map 
			:latitude="latitude" 
			:longitude="longitude"
			:markers="markers"
			:scale="scale"
			class="map"
		></map>
	</view>
</template>

<script>
export default {
	data() {
		return {
			latitude: 28.198133,
			longitude: 112.984,
			scale: 13,
			markers: [
				{
					latitude: 28.198133,
					longitude: 112.984,
					iconPath: '../../static/biaoji.jpg',
					width: 30,
					height: 30
				}
			]
		}
	},
	methods: {
		phone() {
			uni.makePhoneCall({
				phoneNumber: '400-618-9090'
			})
		}
	}
}
</script>

<style lang="scss">
.contact {
	.img {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			border-bottom: 1px solid #eee;
			line-height: 80rpx;
			&.phone {
				span {
					color: #007AFF;
					margin-right: 5rpx;
				}
			}
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
		margin-top: 20rpx;
	}
}
</style>
