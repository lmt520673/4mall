import {
	defineStore
} from 'pinia'
import {
	getBannerData,
	getNoticeData,
	getProdData,
	getHotData
} from '@/api/home.js'

export const useHomeStore = defineStore('home', {
	state: () => {
		return {
			bannerList: [],
			noticeList: [],
			newProdList: [],
			hotProdList: []
		}
	},
	actions: {
		fetchBannerData() {
			getBannerData().then(res => {
				this.bannerList = res
			})
		},
		fetchNoticeData() {
			getNoticeData().then(res => {
				this.noticeList = res
			})
		},
		fetchNewProdList(params) {
			getProdData(params).then(res => {
				this.newProdList = res.records
			})
		},
		fetchHotProdList(params) {
			getHotData(params).then(res => {
				this.hotProdList = res.records
			})
		}
	}
})
