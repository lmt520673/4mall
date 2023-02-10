<template>
	<view class="category">
		<!-- 状态栏占位 -->
		<view class="status-bar"></view>
		<nav-bar-search placeholder="搜索您想要的商品"></nav-bar-search>
		<scroll-view scroll-y="true">
			<van-tree-select v-model:main-active-index="activeIndex" height="150vw" :items="catalogList"
				@click-nav="handleTypeClick">
				<template #content>
					<view class="content">
						<view class="banner">
							<image :src="firstType.pic" mode="widthFix"></image>
						</view>
						<template v-for="item in goodsList" :key="item.prodId">
							<view class="goods">
								<view class="pic">
									<image :src="item.pic" mode=""></image>
								</view>
								<view class="info">
									<view class="goods-name">
										{{item.prodName}}
									</view>
									<view class="desc">{{item.brief}}</view>
									<view class="price">{{priceFormat(item.price)}}</view>
								</view>
							</view>
						</template>
					</view>
				</template>
			</van-tree-select>
		</scroll-view>
	</view>
</template>

<script setup>
	import {
		priceFormat
	} from '@/utils/index.js'
	import {
		ref
	} from 'vue'
	import {
		storeToRefs
	} from 'pinia'
	import {
		useCategoryStore
	} from '@/store/category.js'

	const categoryStore = useCategoryStore()
	const {
		catalogList,
		goodsList
	} = storeToRefs(categoryStore)

	const activeIndex = ref(0);
	const firstType = ref({});
	categoryStore.fetchCatalogData({
		parentId: ''
	}).then(res => {
		firstType.value = res[0]
		categoryStore.fetchGoodsData({
			categoryId: res[0].categoryId
		})
	})


	function handleTypeClick(e) {
		firstType.value = catalogList.value[e]
		categoryStore.fetchGoodsData({
			categoryId: firstType.value.categoryId
		})
	}
</script>

<style lang="scss">
	::v-deep .van-tree-select__content {
		flex: 3;
	}

	.category {
		// 状态栏高度
		.status-bar {
			height: var(--status-bar-height);
			width: 100%;
			background-color: #fff;
		}
		.content {
			padding: 20rpx;

			.banner {
				width: 100%;

				image {
					width: 100%;
				}
			}

			.goods {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1rpx solid rgba(0, 0, 0, .1);

				.pic {
					flex: 2;
					// width: 150rpx;
					height: 150rpx;
					border-radius: 10rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.info {
					flex: 4;
					font-size: 28rpx;
					color: #333;
					margin-left: 20rpx;

					.goods-name {
						overflow: hidden;
						text-overflow: ellipsis; // text-overflow css3的属性，当文本溢出时，显示省略号
						display: -webkit-box;
						-webkit-line-clamp: 1; // 设置两行文字溢出
						-webkit-box-orient: vertical;
					}


					.desc {
						font-size: 24rpx;
						color: #999;
						margin: 10rpx 0 20rpx;

						overflow: hidden;
						text-overflow: ellipsis; // text-overflow css3的属性，当文本溢出时，显示省略号
						display: -webkit-box;
						-webkit-line-clamp: 1; // 设置两行文字溢出
						-webkit-box-orient: vertical;
					}

					.price {
						font-size: 28rpx;
						color: #ff0000;
					}

					// .goods-name{

					// }
				}
			}
		}
	}
</style>
