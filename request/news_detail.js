import { request } from './request.js'

export function getNewsDetail(id) {
	return request({
		url: '/api/getnew/' + id
	})
}