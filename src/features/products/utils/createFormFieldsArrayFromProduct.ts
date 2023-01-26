import { Product } from '~/features/products/types/products.types'

export const createFormFieldsArrayFromProduct = (product: Product) => {
	return [
		['name', product.name],
		['manufacturer', product.manufacturer],
		['originCountry', product.originCountry],
		['weight', product.weight],
		['currency', product.price.currency],
		['price', product.price?.value],
		['width', product.size?.width],
		['height', product.size?.height],
		['depth', product.size?.depth],
	]
}
