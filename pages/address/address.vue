<template>
	<van-address-list v-if="formatAddressList.length>0" v-model="chosenAddressId" :list="formatAddressList"
		default-tag-text="默认" @add="onAdd" @edit="onEdit" />
	<van-empty v-else description="您还没有收货地址">
		<van-button round type="primary" class="bottom-button" @click="onAdd">新增地址</van-button>
	</van-empty>
</template>

<script setup>
	import {
		onBackPress
	} from '@dcloudio/uni-app'
	import {
		ref
	} from 'vue';
	import {
		showToast
	} from 'vant';
	import {
		useAddressStore
	} from '@/store/address.js'
	import {
		storeToRefs
	} from 'pinia'


	const chosenAddressId = ref('1');
	const addressStore = useAddressStore()
	addressStore.fetchAddressData()
	const {
		addressList,
		formatAddressList
	} = storeToRefs(addressStore)

	//禁止掉默认的返回事件  跳转到指定的页面
	onBackPress(() => {
		uni.switchTab({
			url: '/pages/profile/profile'
		})
		return true
	})

	// 新增地址事件
	const onAdd = () => {
		// console.log('点击了新增');
		uni.navigateTo({
			url: '/pages/address-edit/address-edit?add=true',
		})
	};
	//编辑地址事件
	const onEdit = (item, index) => {
		uni.navigateTo({
			url: '/pages/address-edit/address-edit?id=' + item.id,
		})
	};
</script>

<style lang="scss">
	.bottom-button {
		position: fixed;
		left: 35rpx;
		right: 35rpx;
		bottom: 10rpx;
		width: 680rpx;
		height: 80rpx;
	}
</style>
