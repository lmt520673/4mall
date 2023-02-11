import request from '@/service/request.js'

export function getCartList(params) {
	return request.post('/p/shopCart/info', params)
}


export function getCartTotal(params) {
	return request.post('/p/shopCart/totalPay', params)
}
