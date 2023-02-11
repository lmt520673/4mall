import {
	defineStore
} from 'pinia'
import {
	getCartList
} from '@/api/cart.js'


export const useCartStore = defineStore('cart', {
	state: () => {
		return {
			cartList: []
		}
	},
	actions: {
		fetchCartList(params) {
			getCartList(params).then(res => {
				// console.log(res);
				this.cartList = res[0].shopCartItemDiscounts[0].shopCartItems
			})
		}
	}
})
