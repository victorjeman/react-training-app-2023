import { z as zod } from 'zod'

export const USERS_ENDPOINT = 'users'

export const USER_FORM_SCHEMA = zod.object({
	email: zod
		.string({
			required_error: 'required field',
		})
		.min(1),

	firstName: zod
		.string({
			required_error: 'required field',
		})
		.min(1),

	lastName: zod
		.string({
			required_error: 'required field',
		})
		.min(1),

	birthDate: zod
		.string({
			required_error: 'required field',
		})
		.min(1),

	gender: zod
		.string({
			required_error: 'required field',
		})
		.min(1),

	phoneNumber: zod
		.string({
			required_error: 'required field',
		})
		.min(1),

	role: zod
		.string({
			required_error: 'required field',
		})
		.min(1),

	active: zod.boolean(),
})

export const USER_FIELDS_DEFAULT_VALUES = {
	email: '',
	firstName: '',
	lastName: '',
	birthDate: '',
	gender: '',
	phoneNumber: '',
	role: '',
	active: true,
} as const
