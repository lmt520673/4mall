<template>
	<view class="container-banner">
		<swiper class="banner" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<template v-for="item in bannerList" :key="item.imgUrl">
				<swiper-item>
					<image :src="item.imgUrl" mode="widthFix"></image>
				</swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script setup>
	defineProps({
		bannerList: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
</script>

<style lang="scss">
	// banner样式
	.container-banner {
		box-shadow: 0 10rpx 10rpx rgb(0, 0, 0, .2);

		.banner {
			height: 340rpx;

			image {
				width: 100%;
			}
		}

	}
</style>
