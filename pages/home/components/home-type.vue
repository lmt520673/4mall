<template>
	<view class="container-type">
		<template v-for="item in typeList" :key="item.image">
			<view class="type-item">
				<image :src="item.image" mode="widthFix"></image>
				<view class="title">{{item.text}}</view>
			</view>
		</template>
	</view>
</template>

<script setup>
	defineProps({
		typeList: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
</script>

<style lang="scss">
	// 种类样式
	.container-type {
		display: flex;
		margin-top: 50rpx;
	
		.type-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
	
			image {
				width: 75rpx;
			}
	
			.title {
				font-size: 26rpx;
				color: #333;
				margin-top: 20rpx;
			}
		}
	}
</style>