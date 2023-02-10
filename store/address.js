import {
	defineStore
} from 'pinia'

import {
	getAddressData,
	getAddressInfoById
} from '@/api/address.js'


export const useAddressStore = defineStore('address', {
	state: () => {
		return {
			addressList: [],
			formatAddressList: []
		}
	},
	actions: {
		fetchAddressData() {
			getAddressData().then(res => {
				this.addressList = res
				this.formatAddressList = []
				this.addressList.forEach(item => {
					this.formatAddressList.push({
						"id": item.addrId,
						"name": item.receiver,
						"tel": item.mobile,
						"address": item.province + item.city + item.area + item.addr
					})
				})
			})
		},
		// addAddress(data) {
		// 	handleAddAddress(data).then(res => {
				
		// 	})
		// },
		// fetchAddressInfoById(id) {
		// 	getAddressInfoById(id).then(res => {
		// 		// console.log(res)
		// 		this.addressInfo = res
		// 	})
		// }
	}
})
