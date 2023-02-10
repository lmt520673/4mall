<template>
	<view class="setting-info">
		<van-cell value="个人信息" is-link center>
			<template #title>
				<view class="title">
					<image class="avatar" src="/static/images/home/bg1.png" mode=""></image>
					<text class="custom-title">李梦婷</text>
				</view>
			</template>
		</van-cell>
		<van-cell title="我的地址" is-link />
	</view>

	<view class="setting-account">
		<van-cell title="手机号码" value="个人信息" />
		<van-cell title="修改密码" is-link />
		<van-cell title="注销账户" is-link />
	</view>

	<view class="setting-service">
		<van-cell title="联系客服" is-link />
		<van-cell title="服务条款" is-link />
		<van-cell title="隐私政治" is-link />
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}

	.setting-info,
	.setting-account,
	.setting-service {
		margin-top: 20rpx;
	}

	.setting-info {
		.title {
			display: flex;
			align-items: center;
			.avatar {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
		}

	}
</style>
