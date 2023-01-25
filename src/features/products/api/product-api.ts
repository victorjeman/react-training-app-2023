import axios from 'axios'

import { API_BASE_URL } from '~/common/constants/common.const'
import { PRODUCTS_ENDPOINT, REVIEWS_ENDPOINT } from '~/features/products/constants/product.const'
import { ProductReview } from '~/features/products/types/products.types'

const productsAPI = axios.create({ baseURL: API_BASE_URL })

const delay = (delay: number = 20) => new Promise((res: Function) => setTimeout(() => res(), delay))

// products
export const createProductAPI = async (product: any) => {
	await delay()

	const response = await productsAPI.post(PRODUCTS_ENDPOINT, product)
	return response.data
}

export const readProductsAPI = async () => {
	await delay()

	try {
		const response = await productsAPI.get(PRODUCTS_ENDPOINT)
		return response.data
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}

export const updateProductAPI = async (product: any) => {
	await delay(2000)
	const response = await productsAPI.patch(`${PRODUCTS_ENDPOINT}/${product.id}`, product)
	return response.data
}

export const deleteProductAPI = async (productToDeleteID: string | undefined) => {
	await delay()
	const response = await productsAPI.delete(`${PRODUCTS_ENDPOINT}/${productToDeleteID}`)
	return response.data
}

// product reviews

export const readReviewsAPI = async (url: string): Promise<ProductReview[]> => {
	await delay()

	try {
		const response = await productsAPI.get(url)
		return response.data.reviews
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}
