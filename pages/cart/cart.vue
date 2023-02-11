<template>
	<view class="cart">
		<view class="cart-list">
			<template v-for="(item,index) in cartList" :key="item.prodId">
				<view class="list-item">
					<van-checkbox v-model="isChecked" />
					<image class="pic" :src="item.pic" mode=""></image>
					<view class="goods-info">
						<view class="title">{{item.prodName}}</view>
						<view class="price">{{priceFormat(item.price)}}</view>
					</view>
					<view class="count">
						<!-- @plus="handleCountChange(item,$event)"
						@minus="handleCountChange(item,$event)" -->
						<van-stepper v-model="item.prodCount" 
						:before-change="beforeChange"
						 @change="handleCountChange($event, item.prodCount, item )" />
					</view>
				</view>
			</template>
		</view>
		<view class="cart-bottom">
			<van-submit-bar class="van-submit-bar" :price="totalMoney" button-text="提交订单" @submit="onSubmit">
				<van-checkbox v-model="isAllChecked" @change="handleAllCheckedChange">全选</van-checkbox>
			</van-submit-bar>
		</view>
	</view>
</template>

<script setup>
	import {
		getCartTotal
	} from '@/api/cart.js'
	import {
		ref,
		watch
	} from 'vue'
	import {
		priceFormat
	} from '@/utils/index.js'
	import {
		useCartStore
	} from '@/store/cart.js'
	import {
		storeToRefs
	} from 'pinia'

	const cartStore = useCartStore()

	const totalMoney = ref(0)
	getCartTotal([]).then(res => {
		// console.log(res);
		totalMoney.value = res.totalMoney
	})
	const {
		cartList
	} = storeToRefs(cartStore)

	const countList = ref([])
	cartList.value.forEach(item => {

	})


	// const countValue = ref(1)
	const isAllChecked = ref(false)
	const isChecked = ref(false)

	watch(isAllChecked, (val) => {
		console.log('喝喝', val);
		isChecked.value = val
	})

	function handleCountChange(options, count, xx) {
		console.log('哈哈哈哈');
		console.log(options, count, xx);
		// console.log(cartList.value[proIndex], count);
		// console.log(index);
		// // debugger
		// // console.log(options, index, e);
		// // console.log(typeof options[index].prodCount);
		// cartList.value[index].prodCount = cartList.value[index].prodCount + 1;
	}

	// function handleAllCheckedChange(options) {
	// 	// console.log(options);
	// 	isAllChecked.value = options
	// }
	
	function beforeChange(item1){
		console.log(item1);
		return false;
	}

	cartStore.fetchCartList({})
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.van-submit-bar {
		position: fixed;
		left: 0;
		bottom: 100rpx !important;
	}

	.cart {
		position: relative;

		.cart-list {
			background-color: #fff;

			.list-item {
				display: flex;
				padding: 20rpx;

				.pic {
					width: 160rpx;
					height: 160rpx;
					margin-left: 20rpx;
				}

				.goods-info {
					padding: 20rpx 0;
					margin-left: 20rpx;
					flex: 8;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.title {
						font-size: 28rpx;
						overflow: hidden;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
					}

					.price {
						font-size: 30rpx;
						color: #ff0000;
					}
				}

				.count {
					padding-bottom: 10rpx;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
				}
			}
		}
	}
</style>
