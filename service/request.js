const BASE_URL = 'http://192.168.0.106:8086'
const TIME_OUT = 6000

class Request {
	request(url, method, data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + url,
				method: method || 'GET',
				timeout: TIME_OUT,
				data: data,
				header: {
					Authorization: 'Xz/H6qtVS9Tf1dD6p5cDoy09l4J1IHld1HENJutKfehT0xmLZLV4Cuori7tVFQGi'
				},
				success(res) {
					resolve(res.data)
				},
				fail(err) {
					reject(err)
				}
			})
		})
	}

	get(url, params) {
		return this.request(url, 'GET', params)
	}

	post(url, data) {
		return this.request(url, 'POST', data)
	}

	put(url, data) {
		return this.request(url, 'PUT', data)
	}

	delete(url, params) {
		return this.request(url, 'DELETE', params)
	}
}

export default new Request()
