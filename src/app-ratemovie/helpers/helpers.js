const parseDate = (date) => {
	let regex = /\b(UTC)\b|\b(Z)\b/
	return date.replace(regex, "")
}
export const validateDate = (date) => {
	if (date) {
		const now = new Date()
		const tokendate = new Date(parseDate(date))
		const current = new Date(parseDate(now.toISOString()))
		return current > tokendate
	}
	return false
}

export const compareDates = (date, date2) => {

}