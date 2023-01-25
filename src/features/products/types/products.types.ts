import { PRODUCT_FIELDS_DEFAULT_VALUES } from '~/features/products/constants/product.const'

export interface ProductSize {
	width: number
	height: number
	depth: number
}

export interface ProductPrice {
	currency: string
	value: number
}

export interface Product {
	id?: string
	name: string
	size: ProductSize
	weight: number
	price: ProductPrice
	manufacturer: string
	originCountry: string
}

export interface ProductFields {
	name: string
	width: number
	height: number
	depth: number
	weight: number
	currency: string
	price: number
	manufacturer: string
	originCountry: string
}

export type ProductFieldName = keyof typeof PRODUCT_FIELDS_DEFAULT_VALUES

export interface ProductReview {
	id: string
	author: string
	text: string
	rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}

export type ProductMode = 'isRead' | 'isUpdate' | 'isCreate' | 'isDefault'
