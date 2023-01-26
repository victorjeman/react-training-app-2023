import axios from 'axios'

import { API_BASE_URL } from '~/common/constants/common.const'
import { PRODUCTS_ENDPOINT } from '~/features/products/constants/product.const'
import { ProductReview } from '~/features/products/types/products.types'

const productsAPI = axios.create({
	baseURL: API_BASE_URL,
})

const delay = (delay: number = 20) => new Promise((res: Function) => setTimeout(() => res(), delay))

export const createProductAPI = async (product: any) => {
	await delay()

	const response = await productsAPI.post(PRODUCTS_ENDPOINT, product)
	return response.data
}

export const readProductsAPI = async (url: string) => {
	await delay()

	try {
		const response = await productsAPI.get(url)
		return response.data.products
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}

export const readSingleProductAPI = async (url: string) => {
	try {
		const response = await productsAPI.get(url)
		return response.data
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}

export const updateProductAPI = async (product: any) => {
	await delay()
	const response = await productsAPI.patch(`${PRODUCTS_ENDPOINT}/${product.id}`, product)
	return response.data
}

export const deleteProductAPI = async (productToDeleteID: string | undefined) => {
	await delay()
	const response = await productsAPI.delete(`${PRODUCTS_ENDPOINT}/${productToDeleteID}`)
	return response.data
}

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
