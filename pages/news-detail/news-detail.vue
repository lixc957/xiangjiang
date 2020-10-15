<template>
	<view class="news_detail" v-if="detail.title">
		<text class="title">{{ detail.title }}</text>
		<view class="info">
			<text>发表时间：{{ detail.add_time | formatDate }}</text>
			<text>浏览：{{ detail.click }}</text>
		</view>
		<view class="content"><rich-text :nodes="detail.content"></rich-text></view>
	</view>
</template>

<script>
import { getNewsDetail } from '../../request/news_detail.js'
import { formatDateMixin } from '../../utils/mixin.js'

export default {
	data() {
		return {
			id: 0,
			detail: {}
		}
	},
	onLoad(options) {
		this.id = options.id
		this.getNewsDetail()
	},
	methods: {
		async getNewsDetail() {
			const res = await getNewsDetail(this.id)
			this.detail = res.message[0]
		}
	},
	mixins: [formatDateMixin]
}
</script>

<style lang="scss">
.news_detail {
	font-size: 30rpx;
	padding: 0 20rpx;
	.title {
		text-align: center;
		width: 710rpx;
		display: block;
		margin: 20rpx 0;
	}
	.info {
		display: flex;
		justify-content: space-between;
	}
}
</style>
