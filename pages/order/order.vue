<template>
	<van-tabs v-model:active="activeTab" @click-tab="handleTabChange">
		<template v-for="item in tabList" :key="item.name">
			<van-tab :title="item.title" :name="item.name">
				<view v-if="orderList.length>0" class="order-content">
					<template v-for="item in orderList" :key="item.orderNumber">
						<view class="order-item">
							<view class="item-header">
								<view class="header-left">
									<text>订单编号：{{item.orderNumber}}</text>
								</view>
								<view class="header-right">
									<text class="cancel"
										:class="{cancelBg:item.status===-1}">{{statusFormat(item.status)}}</text>
									<text v-if="item.status===-1" class="iconfont icondel"
										@click="handleDelOrder(item.orderNumber)">&#xe74b;</text>
								</view>
							</view>
							<view class="item-goods">
								<image class="goods-image" :src="item.orderItemDtos[0].pic" mode=""></image>
								<view class="goods-desc">
									<view class="title">
										<view class="main-title">{{item.orderItemDtos[0].prodName}}</view>
										<view class="color">粉色</view>
									</view>
									<view class="goods-price">{{item.orderItemDtos[0].price}}</view>
								</view>
								<view class="goods-count">x{{item.orderItemDtos[0].prodCount}}</view>
							</view>
							<view class="item-all">
								<text class="all">共{{item.orderItemDtos[0].prodCount}}件商品</text>
								<text>总额：{{item.actualTotal}}</text>
							</view>
						</view>
					</template>
				</view>
				<van-empty v-else description="暂无相关数据" />
			</van-tab>
		</template>
	</van-tabs>
</template>

<script setup>
	import {
		showConfirmDialog
	} from 'vant';
	import {
		showToast
	} from 'vant';

	import {
		deleteOrder
	} from '@/api/order.js'
	import {
		storeToRefs
	} from 'pinia'
	import {
		useOrderStore
	} from '@/store/order.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref,
		computed,
		watch
	} from 'vue'

	const orderStore = useOrderStore()
	const {
		orderList
	} = storeToRefs(orderStore)

	//绑定的tab值
	const activeTab = ref(0);

	//tab栏循环列表
	const tabList = ref([{
		title: '全部',
		name: 0
	}, {
		title: '待付款',
		name: 1
	}, {
		title: '待发货',
		name: 2
	}, {
		title: '待收货',
		name: 3
	}, {
		title: '已完成',
		name: 4
	}])

	//状态格式化
	const statusFormat = computed(() => {
		return function(status) {
			switch (status) {
				case -1:
					return '已取消'
					break;
				case 1:
					return '待付款'
					break;
				case 2:
					return '待发货'
					break;
				case 3:
					return '待收货'
					break;
				case 4:
					return '已完成'
					break;
				default:
					break;
			}
		}
	})

	//监听activeTab的变化，传进来的需是响应式对象，即可实时更新
	watch(activeTab, (newVal, oldVal) => {
		orderStore.fetchOrderList({
			current: 1,
			size: 10,
			status: newVal
		})
	})

	//页面刚进来的时候
	onLoad((options) => {
		if (options.isAll) {
			orderStore.fetchOrderList({
				current: 1,
				size: 10,
				status: activeTab.value
			})
			return
		}
		activeTab.value = Number(options.status)
	})

	//tab栏点击事件
	function handleTabChange(options) {
		activeTab.value = options.name
	}

	//删除订单事件
	function handleDelOrder(orderNUmber) {
		showConfirmDialog({
			message: '确认要删除此订单吗？',
		}).then(() => {
			deleteOrder(orderNUmber).then(res => {
				if (res.code === 200) {
					orderStore.fetchOrderList({
						current: 1,
						size: 10,
						status: activeTab.value
					})
				} else {
					showToast(res.data);
				}
			})
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	//动态绑定取消的文字颜色
	.cancelBg {
		color: #999;
	}

	.order-content {
		.order-item {
			background-color: #fff;
			margin-top: 20rpx;
			padding: 20rpx;

			.item-header {
				display: flex;
				justify-content: space-between;
				font-size: 26rpx;

				.header-right {
					// color: red;
					font-size: 26rpx;

					.icondel {

						font-size: 28rpx;
						color: #999;

						&::before {
							position: relative;
							top: 4rpx;
							display: inline-block;
							content: '';
							width: 1rpx;
							height: 30rpx;
							background-color: rgba(0, 0, 0, .3);
							margin: 0 20rpx;
						}
					}
				}
			}

			.item-goods {
				display: flex;
				background-color: #f4f4f4;
				padding: 20rpx 30rpx;
				margin: 20rpx 0;

				.goods-image {
					width: 160rpx;
					height: 160rpx;
				}


				.goods-desc {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 70%;
					margin: 0 20rpx;

					.main-title {
						font-size: 28rpx;
						overflow: hidden;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
					}

					.color {
						font-size: 24rpx;
						color: #999;
					}

					.goods-price {
						font-size: 28rpx;
					}
				}


				.goods-count {
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					font-size: 30rpx;
					color: #999;
				}

			}

			.item-all {
				text-align: right;
				font-size: 28rpx;

				.all {
					margin-right: 30rpx;
				}
			}
		}
	}
</style>
