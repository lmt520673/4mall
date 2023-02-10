<template>
	<view class="order-top">
		<view class="title">{{title}}</view>
		<navigator url="/pages/order/order">
			<view class="iconfont all" v-if="isShowRight">{{desc}}</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			default: '我的订单'
		},
		isShowRight: {
			type: Boolean,
			default: true
		},
		desc: {
			type: String,
			default: '全部订单'
		}
	})
</script>

<style lang="scss">
	.order-top {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			font-size: 28rpx;
			font-weight: 700;
		}

		.all {
			font-size: 24rpx;
			color: #999;

			&:after {
				content: "\e600";
				font-size: 26rpx;
			}
		}
	}
</style>
