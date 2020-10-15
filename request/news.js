import { request } from './request.js'

export function getNewsList() {
	return request({
		url: '/api/getnewslist'
	})
}