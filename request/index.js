import { request } from './request.js'

export function getSwiperList() {
	return request({
		url: '/api/getlunbo'
	})
}

export function getGoodsList(pageIndex) {
	return request({
		url: '/api/getgoods?pageindex=' + pageIndex,
	})
}