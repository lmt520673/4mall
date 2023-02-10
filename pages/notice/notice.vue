<template>
	<van-cell-group>
		<template v-for="item in noticeList" :key="item.id">
			<van-cell title-class="title-left" value-class="time-right" :title="item.title" :value="item.publishTime" />
		</template>
	</van-cell-group>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref
	} from 'vue'

	const noticeList = ref([])
	onLoad((options) => {
		noticeList.value = JSON.parse(options.noticeList)
	})
</script>

<style lang="scss">
::v-deep .title-left{
	font-size: 26rpx;
	flex: 3;
}

::v-deep .time-right{
	flex: 2;
	font-size: 22rpx;
	color: #999;
	margin-top: 50rpx;
	
}
</style>
