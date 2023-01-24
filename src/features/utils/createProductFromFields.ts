import { ProductFields } from '~/features/products/types/products.types'

export const createProductFromFields = (productFormFields: ProductFields) => {
	return {
		name: productFormFields.name,
		manufacturer: productFormFields.manufacturer,
		originCountry: productFormFields.originCountry,
		weight: productFormFields.weight,
		price: {
			currency: productFormFields.currency,
			value: productFormFields.price,
		},
		size: {
			width: productFormFields.width,
			height: productFormFields.height,
			depth: productFormFields.depth,
		},
	}
}
