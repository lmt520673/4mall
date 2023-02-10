<template>
	<view class="profile">
		<!-- 个人信息 -->
		<view class="profile-info">
			<view class="info-user">
				<image class="avatar" src="" mode=""></image>
				<view class="user">
					<view class="nickname">
						华沙雕
					</view>
					<!-- <image class="grade" src="" mode=""></image> -->
				</view>
			</view>
			<view class="icons">
				<text class="iconfont">&#xe712;</text>
				<text class="iconfont">&#xe614;</text>
				<text class="iconfont">&#xe622;</text>
			</view>
		</view>
		<!-- 数量信息 -->
		<view class="profile-count">
			<template v-for="item in 4">
				<view class="count-item">
					<view class="count">0</view>
					<view class="title">余额</view>
				</view>
			</template>
		</view>
		<!-- 我的订单 -->
		<view class="profile-order">
			<title-header></title-header>
			<view class="icons">
				<template v-for="item in iconsList" :key="item.text">
					<view class="icons-item">
						<image class="image" :src="item.image" mode=""></image>
						<view class="text">{{item.text}}</view>
					</view>
				</template>
			</view>
		</view>
		<!-- 分销积分 -->
		<view class="profile-integral">
			<template v-for="item in integralList" :key="item.title">
				<view class="integral-item">
					<view class="item-left">
						<view class="title">{{item.title}}</view>
						<view class="desc">{{item.desc}}</view>
					</view>
					<image class="item-right" :src="item.image" mode="widthFix"></image>
				</view>
			</template>
		</view>
		<!-- 服务与工具 -->
		<view class="profile-tool">
			<title-header title="服务与工具" :isShowRight="false"></title-header>
			<view class="content">
				<template v-for="item in toolList" :key="item.title">
						<view class="content-item" @click="handleToPage(item.url)">
							<view class="iconfont icon">{{item.icon}}</view>
							<view class="title">{{item.title}}</view>
						</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script setup>
	import titleHeader from '@/pages/profile/common/components/title-header.vue'
	import {
		ref
	} from 'vue'

	const iconsList = ref([{
			image: '/static/images/profile/toPay.png',
			text: '待支付',
		},
		{
			image: '/static/images/profile/toDelivery.png',
			text: '待发货'
		}, {
			image: '/static/images/profile/toTake.png',
			text: '待收货'
		}, {
			image: '/static/images/profile/toComment.png',
			text: '已完成'
		}
	])

	const integralList = ref([{
			image: '/static/images/profile/distribution.png',
			title: '分销中心',
			desc: '分享转化获佣金'
		},
		{
			image: '/static/images/profile/integral.png',
			title: '积分商城',
			desc: '攒积分兑好礼'
		}
	])

	const toolList = ref([{
			icon: '\ue64f',
			title: '会员中心'
		},
		{
			icon: '\ue60f',
			title: '领券中心'
		}, {
			icon: '\ue64e',
			title: '地址管理',
			url: '/pages/address/address'
		},
		{
			icon: '\ue78d',
			title: '我的足迹'
		}, {
			icon: '\ue645',
			title: '官方客服'
		}, {
			icon: '\ue67c',
			title: '系统设置'
		}
	])
	
	function handleToPage(url){
		uni.navigateTo({
			url:url,
			success() {
				
			}
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.profile {
		padding: 0 30rpx;

		.profile-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 30rpx;

			.info-user {
				display: flex;
				align-items: center;

				.avatar {
					width: 90rpx;
					height: 90rpx;
					background-color: aqua;
					border-radius: 50%;
				}

				.user {
					.nickname {
						font-size: 30rpx;
						margin-left: 20rpx;
					}
				}
			}

			.icons {
				text {
					font-size: 50rpx;
					margin-left: 16rpx;
				}
			}
		}

		.profile-count {
			display: flex;
			justify-content: space-around;
			margin: 30rpx 0;

			.count-item {
				text-align: center;

				.count {
					font-size: 40rpx;
					font-weight: 700;
				}

				.title {
					font-size: 26rpx;
					color: #999;
				}
			}
		}

		.profile-order {
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;

			.icons {
				display: flex;
				justify-content: space-around;
				padding: 30rpx 0 10rpx;

				.icons-item {
					text-align: center;

					.image {
						width: 70rpx;
						height: 70rpx;
					}

					.text {
						font-size: 24rpx;
						margin-top: 10rpx;
					}
				}
			}
		}

		.profile-integral {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			margin-top: 30rpx;

			.integral-item {
				display: flex;
				align-items: center;

				&:first-child {
					&::after {
						position: relative;
						left: 54rpx;
						content: '';
						width: 1rpx;
						height: 60rpx;
						background-color: rgba(0, 0, 0, .1);
					}
				}

				.item-left {
					.title {
						font-size: 28rpx;
						font-weight: 700;
					}

					.desc {
						font-size: 24rpx;
						color: #999;
						margin-top: 10rpx;
					}

				}

				.item-right {
					width: 60rpx;
					margin-left: 50rpx;
				}
			}
		}

		.profile-tool {
			padding: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			margin-top: 30rpx;

			.content {
				display: flex;
				flex-wrap: wrap;

				.content-item {
					width: 25%;
					text-align: center;
					margin-top: 26rpx;

					.icon {
						font-size: 46rpx;
					}

					.title {
						font-size: 26rpx;
						margin-top: 6rpx;
					}
				}
			}
		}
	}
</style>
