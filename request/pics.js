import { request } from './request.js'

export function getCatesList() {
	return request({
		url: '/api/getimgcategory'
	})
}

export function getSecondData(id) {
	return request({
		url: '/api/getimages/' + id
	})
}