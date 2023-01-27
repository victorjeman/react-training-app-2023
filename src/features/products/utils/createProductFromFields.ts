import { ProductFields } from '~/features/products/types/products.types'

export const createProductFromFields = (productFormFields: ProductFields, productId?: string) => {
	return {
		...(productId && { id: productId }),
		name: productFormFields.name,

		// Challenge 3 hint
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
