import { Product } from '~/features/products/types/products.types'

export const createProductOptions = (newProduct: any) => {
	return {
		// optimistic data displays until we populate cache
		optimisticData: (products: Product[]) => [...products, newProduct],
		populateCache: (added: any, products: any) => [...products, added],
		rollbackOnError: true,
		revalidate: false,
	}
}

export const updateProductOptions = (updatedProduct: Product) => {
	function generateUpdatedProducts(updatedProduct: any, prevProducts: any[]) {
		const productToUpdateIndex = prevProducts.findIndex(
			(product) => product.id === updatedProduct.id,
		)

		const productsUpdated = JSON.parse(JSON.stringify(prevProducts))
		productsUpdated[productToUpdateIndex] = updatedProduct

		return productsUpdated
	}

	return {
		// optimistic data displays until we populate cache
		optimisticData: (prevProducts: any[]) => {
			return generateUpdatedProducts(updatedProduct, prevProducts)
		},
		rollbackOnError: true,
		// response from API request is 1st param
		// previous data is 2nd param
		populateCache: (updatedProductFromAPI: any, prevProducts: any[]) => {
			return generateUpdatedProducts(updatedProductFromAPI, prevProducts)
		},
		revalidate: false,
	}
}

export const deleteProductOptions = (productToDeleteID: string | undefined) => {
	return {
		// optimistic data displays until we populate cache
		// param is previous data
		optimisticData: (products: Product[]) => {
			return products.filter((product) => product.id !== productToDeleteID)
		},
		populateCache: (apiResponse, products: Product[]) => {
			return products.filter((product) => product.id !== productToDeleteID)
		},
		revalidate: false,
		rollbackOnError: true,
		// response from API request is 1st param
		// previous data is 2nd param
	}
}
