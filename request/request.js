let requestTimes  = 0
export const request = (params) => {
	// 发送一次请求 + 1
	requestTimes++
		
	// 显示 loading 提示框
	uni.showLoading({
	  title: '加载中',
	  mask: true 
	})
	const baseURL = 'http://localhost:8082'
	return new Promise((resolve, reject) => {
		uni.request({
			...params,
			 url: baseURL + params.url,
			 success: (res) => {
				 if(res.data.status !== 0) {
				 	return uni.showToast({
				 		title: '获取数据失败',
						icon: 'none'
				 	})
				 }
			   resolve(res.data)
			 },
			 fail: (err) => {
				 uni.showToast({
				 	title: '请求接口失败',
					icon: 'none'
				 })
			   reject(err)
			 },
			 complete: () => {		 
				 requestTimes--
			   // 当所有请求都返回结果就关闭提示框		   
				 if (requestTimes === 0) uni.hideLoading()
			 }
		})
	})
}