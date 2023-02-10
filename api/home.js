import request from '@/service/request.js'

export function getBannerData() {
	return request.get('/indexImgs')
}

export function getNoticeData() {
	return request.get('/shop/notice/topNoticeList')
}

export function getProdData(params) {
	return request.get('/prod/prodListByTagId', params)
}

export function getHotData(params){
	return request.get('/prod/prodListByTagId', params)
}
