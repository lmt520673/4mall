import request from '@/service/request.js'

export function getCatalogData(params) {
	return request.get('/category/categoryInfo', params)
}


export function getGoodsListData(params) {
	return request.get('/prod/pageProd', params)
}