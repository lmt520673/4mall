<template>
	<view class="container-new">
		<home-header title="每日上新"></home-header>
		<view class="prod">
			<template v-for="item in newProdList">
				<view class="pro-item">
					<image :src="item.pic"></image>
					<view class="desc">
						<view class="title">{{item.prodName}}</view>
						<view class="operate">
							<view class="price">{{priceFormat(item.price)}}</view>
							<image src="/static/images/tabbar/basket-sel.png"></image>
						</view>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script setup>
	import HomeHeader from '@/pages/home/components/home-header.vue'
	import {
		priceFormat
	} from '@/utils/index.js'
	defineProps({
		newProdList: {
			type: Array,
			default: () => {
				return []
			}
		}
	})
</script>

<style lang="scss">
	.container-new {
		color: #333;
		margin: 40rpx 0;
		padding: 0 30rpx;

		.prod {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 20rpx;

			.pro-item {
				background-color: #fff;
				padding-bottom: 20rpx;
				box-shadow: 2rpx 0 10rpx rgba(0, 0, 0, .2);
				border-radius: 14rpx;
				overflow: hidden;

				image {
					width: 330rpx;
					height: 330rpx;
					object-fit: cover;
				}

				.desc {
					width: 330rpx;
					padding: 20rpx 10rpx 0;
					box-sizing: border-box;

					.title {
						font-size: 28rpx;
						overflow: hidden;
						-webkit-line-clamp: 1;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-box-orient: vertical;
					}

					.operate {
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-top: 10rpx;

						.price {
							font-size: 28rpx;
							color: #ff0000;
						}

						image {
							width: 42rpx;
							height: 42rpx;
						}
					}
				}
			}
		}
	}
</style>
