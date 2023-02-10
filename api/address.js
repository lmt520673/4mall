import request from '@/service/request.js'

export function getAddressData() {
	return request.get('/p/address/list')
}

export function handleAddAddress(data) {
	return request.post('/p/address/addAddr', data)
}

export function getAddressInfoById(id) {
	return request.get('/p/address/addrInfo/' + id)
}

export function updateAddress(data) {
	return request.put('/p/address/updateAddr', data)
}

export function deleteAddress(id) {
	return request.delete('/p/address/deleteAddr/' + id)
}
