export const formatDateMixin = {
	filters: {
		formatDate(date) {
			const nDate = new Date(date)
			const year = nDate.getFullYear()
			const month = nDate
				.getMonth()
				.toString()
				.padStart(2, 0)
			const day = nDate
				.getDay()
				.toString()
				.padStart(2, 0)
			return year + '-' + month + '-' + day
		}
	}
}