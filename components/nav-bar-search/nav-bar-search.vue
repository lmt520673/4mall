<template>
	<view class="nav-bar">
		<van-search v-model="keyword" shape="round" background="#fff" :placeholder='placeholder' input-align="center" />
	</view>
</template>

<script setup>
	defineProps({
		placeholder: {
			type: String,
			default: '搜索'
		}
	})
</script>

<style lang="scss">
	// 整个导航栏样式 因为固定定位不占据高度  为了使搜索框有高度  所以在外层包裹了父元素
	::v-deep .van-search {
		position: fixed;
		width: 100%;
		height: 88rpx;
		background: rgb(255, 255, 255);
		z-index: 9999;

	}

	//搜索框内搜索图标的样式
	// ::v-deep .van-icon-search:before {
	// 	content: "\e710";
	// 	position: absolute;
	// 	left: 252rpx;
	// 	top: -24rpx;
	// }

	//搜索框内搜索框本身的高度
	::v-deep .van-search__content--round {
		height: 60rpx;
	}

	::v-deep .van-icon__image {
		display: block;
		width: 77rpx;
		height: 36rpx;
		object-fit: contain;
	}

	// 导航栏高度
	.nav-bar {
		height: 88rpx;
	}
</style>
