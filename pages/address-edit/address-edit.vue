<template>
	<view class="address-edit">
		<van-cell-group inset>
			<van-field v-model="model.receiver" name="收货人" label="收货人" placeholder="姓名"
				:rules="[{ required: true, message: '请填写收货人' }]" />
			<van-field v-model="model.mobile" name="手机号码" label="手机号码" placeholder="11位手机号码"
				:rules="[{ required: true, message: '请填写手机号码' }]" />
			<van-field v-model="result" is-link readonly name="area" label="所在地区" placeholder="点击选择省市区"
				@click="showArea = true" />
			<van-popup v-model:show="showArea" position="bottom">
				<van-area v-model="defaultValue" :area-list="areaList" @confirm="onConfirm"
					@cancel="showArea = false" />
			</van-popup>
			<van-field v-model="model.addr" name="详细地址" label="详细地址" placeholder="如楼号/单元/门牌号"
				:rules="[{ required: true, message: '请填写详细地址' }]" />
		</van-cell-group>
		<div style="margin: 16px;">
			<van-button round block type="primary" @click="onSubmit">
				提交
			</van-button>
			<van-button round block @click="onDelete">
				删除
			</van-button>
		</div>
	</view>
</template>

<script setup>
	import {
		showConfirmDialog
	} from 'vant';
	import {
		handleAddAddress,
		getAddressInfoById,
		updateAddress,
		deleteAddress
	} from '@/api/address.js'
	import {
		areaList
	} from '@vant/area-data';
	import {
		ref
	} from 'vue';
	import {
		showToast
	} from 'vant';
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		useAddressStore
	} from '@/store/address.js'

	const addressStore = useAddressStore()

	//判断是修改还是新增
	const isAdd = ref(true)
	//修改的时候省市区默认控制的
	const defaultValue = ref('');
	//省市区在界面中的显示结果
	const result = ref('');
	//是否显示省市区的dialog弹窗
	const showArea = ref(false);
	//传给后台的整个对象
	const model = ref({})
	const id = ref('')

	// 新增/编辑 使用一个页面  动态设置导航栏标题
	onLoad((option) => {
		if (option.add) {
			uni.setNavigationBarTitle({
				title: '新增地址'
			})
			isAdd.value = true
		} else {
			uni.setNavigationBarTitle({
				title: '编辑地址'
			})
			isAdd.value = false
			id.value = option.id
			getAddressInfoById(option.id).then(res => {
				model.value = res
				result.value = res.province + '/' + res.city + '/' + res.area
				defaultValue.value = String(res.areaId).slice(0, 6)
			})

		}
	})


	// 省市区选择的确定事件
	const onConfirm = ({
		selectedOptions
	}) => {
		showArea.value = false;
		// 在界面中以/形式展示省市区
		result.value = selectedOptions.map((item) => item.text).join('/');

		//省
		model.value.province = selectedOptions[0].text
		model.value.provinceId = selectedOptions[0].value
		// 市
		model.value.city = selectedOptions[1].text
		model.value.cityId = selectedOptions[1].value
		// 区
		model.value.area = selectedOptions[2].text
		model.value.areaId = selectedOptions[2].value

	};

	// 提交按钮
	const onSubmit = (values) => {
		if (isAdd.value) {
			// 新增
			handleAddAddress(model.value).then(res => {
				if (res === '添加地址成功') {
					uni.navigateTo({
						url: '/pages/address/address'
					})
				}
			})
		} else {
			//修改
			updateAddress(model.value).then(res => {
				if (res === '修改地址成功') {
					uni.navigateTo({
						url: '/pages/address/address'
					})
				}
			})
		}
	};

	const onDelete = () => {
		showConfirmDialog({
			message: '确认要删除此收货地址吗？',
		}).then(() => {
			deleteAddress(id.value).then(res => {
				if (res === '删除地址成功') {
					uni.navigateTo({
						url: '/pages/address/address'
					})
				}
			})
		}).catch(() => {});
	}
</script>

<style lang="scss">

</style>
