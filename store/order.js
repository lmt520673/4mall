import {
	defineStore
} from 'pinia'
import {
	getOrderData
} from '@/api/order.js'


export const useOrderStore = defineStore('order', {
	state: () => {
		return {
			orderList: []
		}
	},
	actions: {
		fetchOrderList(params) {
			getOrderData(params).then(res => {
				this.orderList = res.records
			})
		}
	}
})
