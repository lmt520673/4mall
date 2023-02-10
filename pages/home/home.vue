<template>
	<view class="home">
		<!-- 状态栏占位 -->
		<view class="status-bar">
			<view class="top-view"></view>
		</view>
		<!-- 导航栏 -->
		<nav-bar-search></nav-bar-search>
		<!-- 内容区域 -->
		<view class="container">
			<!-- banner区域 -->
			<banner :bannerList="bannerList"></banner>
			<!-- 金刚区类型区域 -->
			<home-type :typeList="typeList"></home-type>
			<!-- 通知公告区域 -->
			<navigator :url="'/pages/notice/notice?noticeList='+JSON.stringify(noticeList)">
				<van-notice-bar class="container-notice" left-icon="/static/images/home/horn.png" :scrollable="false"
					background="#fff" color="#333" :delay="3000">
					<van-swipe vertical class="notice-swipe" :autoplay="3000" :touchable="false"
						:show-indicators="false">
						<van-swipe-item class='title' v-for="item in noticeList" :key="item.id">
							{{item.title}}
						</van-swipe-item>
					</van-swipe>
					<template #right-icon>
						<view class="more">
							<image src="/static/images/common/more.png" mode="widthFix"></image>
						</view>
					</template>
				</van-notice-bar>
			</navigator>
			<!-- 每日上新区域 -->
			<home-new :newProdList="newProdList"></home-new>
			<!-- 今年爆款区域 -->
			<view class="container-hot">
				<home-header title="今年爆款"></home-header>
				<view class="content">
					<template v-for="item in hotProdList" :key="item.prodId">
						<view class="content-item">
							<view class="img">
								<image :src="item.pic" mode="widthFix"></image>
							</view>
							<view class="desc">
								<view class="title">{{item.prodName}}</view>
								<view class="price">{{item.price}}</view>
							</view>
						</view>
					</template>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import HomeType from '@/pages/home/components/home-type.vue'
	import HomeNew from '@/pages/home/components/home-new.vue'
	import HomeHeader from '@/pages/home/components/home-header.vue'
	import {
		ref
	} from 'vue';
	import {
		storeToRefs
	} from 'pinia';
	import {
		useHomeStore
	} from '@/store/home.js';


	const homeStore = useHomeStore()
	const {
		bannerList,
		noticeList,
		newProdList,
		hotProdList
	} = storeToRefs(homeStore)

	homeStore.fetchBannerData()
	homeStore.fetchNoticeData()
	homeStore.fetchNewProdList({
		tagId: 1,
		size: 2
	})
	homeStore.fetchHotProdList({
		tagId: 2,
		size: 6
	})
	const keyword = ref('')
	const typeList = ref([{
			image: '/static/images/home/newProd.png',
			text: '新品推荐'
		},
		{
			image: '/static/images/home/timePrice.png',
			text: '限时特惠'
		},
		{
			image: '/static/images/home/neweveryday.png',
			text: '每日疯抢'
		},
		{
			image: '/static/images/home/newprods.png',
			text: '领优惠券'
		}
	])
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	::v-deep .van-icon__image {
		width: 90rpx !important;
	}

	.home {

		// 状态栏高度
		.status-bar {
			height: var(--status-bar-height);
			width: 100%;
			background-color: #fff;

			.top-view {
				height: var(--status-bar-height);
				width: 100%;
				background-color: #fff;
				position: fixed;
				top: 0;
				left: 0;
				right: 0;
				z-index: 99999;
			}
		}

		.container {

			// 通知公告样式
			.container-notice {
				margin-top: 30rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.06);

				.title {
					font-size: 26rpx;
				}

				.notice-swipe {
					height: 40px;
					line-height: 40px;
				}

				.more {
					position: relative;
					top: 4rpx;

					image {
						width: 28rpx;
					}
				}
			}

			.container-hot {
				padding: 0 30rpx;

				.content {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					align-items: center;

					.content-item {
						width: 220rpx;
						height: 400rpx;
						background-color: #fff;
						box-shadow: 2rpx 0 10rpx rgba(85, 0, 255, 0.2);
						border-radius: 14rpx;
						overflow: hidden;
						margin-top: 20rpx;

						.img {
							width: 100%;
							height: 260rpx;
							line-height: 260rpx;
							text-align: center;
							// transform: translate(-50% -50%);

							image {
								max-width: 100rpx;
								// width: 100rpx;
								max-height: 300rpx;
							}
						}



						.desc {
							padding: 10rpx 10rpx 0;
							box-sizing: border-box;

							.title {
								overflow: hidden;
								-webkit-line-clamp: 2;
								text-overflow: ellipsis;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								font-size: 26rpx;
							}

							.price {
								font-size: 28rpx;
								// margin-bottom: 0rpx;
								color: #ff0000;
							}
						}
					}
				}
			}
		}
	}
</style>
