import { z as zod } from 'zod'

import { COUNTRIES } from '~/features/products/constants/countries.const'

export const PRODUCTS_ENDPOINT = 'products'
export const REVIEWS_ENDPOINT = 'reviews'

export const PRODUCT_FORM_SCHEMA = zod.object({
	name: zod
		.string({
			required_error: 'product name is required',
		})
		.min(1, 'product name must contain at least a character'),
	currency: zod.string({
		required_error: 'currency is required',
	}),
	price: zod
		.number({
			required_error: 'price is required',
		})
		.min(0.1, "product price can't be zero"),
	manufacturer: zod.string({
		required_error: 'select a manufacturer',
	}),
	originCountry: zod.string({
		required_error: 'select origin country',
	}),
	width: zod
		.number({ required_error: 'Please enter the width of your product' })
		.min(0.1, "product width can't be zero"),
	height: zod
		.number({ required_error: 'Please enter the height of your product' })
		.min(0.1, "product height can't be zero"),
	depth: zod
		.number({ required_error: 'Please enter the depth of your product' })
		.min(0.1, "product depth can't be zero"),
	weight: zod
		.number({ required_error: 'Please enter the weight of your product' })
		.min(0.1, "product weight can't be zero"),
})

export const CURRENCY_SELECT_ITEMS = COUNTRIES.map((country) => ({
	name: `${country.Code} (${country.Currency})`,
	value: country.Code,
}))

export const COUNTRY_SELECT_ITEMS = COUNTRIES.map((country) => ({
	name: country.CountryName,
	value: country.CountryName,
	flag: country.Flag,
}))

export const PRODUCT_FIELDS_DEFAULT_VALUES = {
	name: '',
	width: 0,
	height: 0,
	depth: 0,
	weight: 0,
	price: 0,
	currency: 'EUR',
	manufacturer: '',
	originCountry: 'Romania',
} as const
