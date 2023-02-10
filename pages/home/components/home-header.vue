<template>
	<view class="header">
		<view class="title">{{title}}</view>
		<view class="more">查看更多</view>
	</view>
</template>

<script setup>
	defineProps({
		title: {
			type: String,
			default: ''
		}
	})
</script>

<style lang="scss">
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.title {
			font-size: 28rpx;
		}

		.more {
			font-size: 24rpx;
			color: #999;

			&::after {
				position: relative;
				top: 2rpx;
				display: inline-block;
				content: '';
				background: url('@/static/images/common/more.png') no-repeat;
				background-size: 100% 100%;
				width: 20rpx;
				height: 20rpx;
				// background-color: pink;
			}
		}
	}
</style>
