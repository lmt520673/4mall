import request from '@/service/request.js'

export function getOrderData(params) {
	return request.get('/p/myOrder/myOrder', params)
}

export function deleteOrder(orderNumber) {
	return request.delete('/p/myOrder/' + orderNumber)
}
