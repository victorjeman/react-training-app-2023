import { USER_FIELDS_DEFAULT_VALUES } from '~/features/users/constants/user.const'

export interface UserLite {
	id: string
	firstName: string
	lastName: string
	role: string
	active: boolean
}

export interface User {
	id?: string
	email: string
	password?: string
	firstName: string
	lastName: string
	birthDate: string
	gender: string
	phoneNumber: string
	role: string
	active: boolean
}

export type UserFieldName = keyof typeof USER_FIELDS_DEFAULT_VALUES

export type UserMode = 'isRead' | 'isUpdate' | 'isCreate' | 'isDefault'
