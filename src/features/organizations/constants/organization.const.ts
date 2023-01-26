import { z as zod } from 'zod'

export const ORGANIZATIONS_ENDPOINT = 'organizations'

export const ORGANIZATION_FORM_SCHEMA = zod.object({
	companyName: zod
		.string({
			required_error: 'product name is required',
		})
		.min(1),
	legalName: zod
		.string({
			required_error: 'legal name is required',
		})
		.min(1),
	streetAndNumber: zod
		.string({
			required_error: 'street and number is required',
		})
		.min(1),
	city: zod
		.string({
			required_error: 'city is required',
		})
		.min(1),
	postalCode: zod
		.string({
			required_error: 'postal code is required',
		})
		.min(1),
	country: zod
		.string({
			required_error: 'country is required',
		})
		.min(1),
	active: zod.boolean(),
})

export const ORGANIZATION_FIELDS_DEFAULT_VALUES = {
	companyName: '',
	legalName: '',
	streetAndNumber: '',
	city: '',
	postalCode: '',
	country: '',
	active: false,
} as const
