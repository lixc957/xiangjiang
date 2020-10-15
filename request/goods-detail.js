import { request } from './request.js'

export function getGoodsDetailSwiper(id) {
	return request({
		url: '/api/getthumimages/' + id
	})
}

export function getGoodsDetailInfo(id) {
	return request({
		url: '/api/goods/getinfo/' + id
	})
}

export function getGoodsDetailContent(id) {
	return request({
		url: '/api/goods/getdesc/' + id
	})
}