export function priceFormat(price) {
	if (typeof price !== 'number') return
	return '￥' + price.toFixed(2)
}
