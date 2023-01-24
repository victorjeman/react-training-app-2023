export enum UserRole {
	Public = 'Public',
	User = 'User',
	Admin = 'Admin',
	SuperAdmin = 'SuperAdmin',
}

export interface User {
	email: string
	firstName: string
	lastName: string
	birthDate: string
	gender: 'Male' | 'Female'
	phone: string
	role: UserRole
	active: boolean
}
