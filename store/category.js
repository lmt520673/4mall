import {
	defineStore
} from 'pinia'

import {
	getCatalogData,
	getGoodsListData
} from '@/api/category.js'



export const useCategoryStore = defineStore('category', {
	state: () => {
		return {
			catalogList: [],
			goodsList: []
		}
	},
	actions: {
		fetchCatalogData(params) {
			return getCatalogData(params).then(res => {
				return new Promise((resolve, reject) => {
					res.forEach(item => {
						this.catalogList.push({
							text: item.categoryName,
							categoryId: item.categoryId,
							pic: item.pic,
							parentId: item.parentId
						})
					})
					if (this.catalogList.length > 0) {
						resolve(this.catalogList)
					}
				})
			})
		},
		fetchGoodsData(params) {
			getGoodsListData(params).then(res => {
				this.goodsList = res.records
			})
		}
	}
})
