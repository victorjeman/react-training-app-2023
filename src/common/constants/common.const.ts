import { AppRouteKeys } from '~/common/types/common.types'
import { UserRole } from '~/features/users/types/user.types'

export const API_BASE_URL = ' http://localhost:3000'

export const APP_ROUTE_LABEL = {
	PRODUCTS: 'Products',
	ORGANIZATIONS: 'Organizations',
	USERS: 'Users',
	TODO: 'Todo',
	PROFILE: 'Profile',
} as const

export const APP_ROUTE_PATH = {
	PRODUCTS: '/products',
	ORGANIZATIONS: '/organizations',
	USERS: '/users',
	TODO: '/todo',
	PROFILE: '/profile',
} as const

export const APP_ROUTE_ROLE = {
	PRODUCTS: [UserRole.Public],
	ORGANIZATIONS: [UserRole.Public],
	USERS: [UserRole.Public],
	TODO: [UserRole.Public],
	PROFILE: [UserRole.Public],
} as const

const ROUTE_KEYS = Object.keys(APP_ROUTE_LABEL) as Array<AppRouteKeys>

export const APP_ROUTE_LINKS = ROUTE_KEYS.map((key) => ({
	label: APP_ROUTE_LABEL[key],
	path: APP_ROUTE_PATH[key],
	roles: APP_ROUTE_ROLE[key],
}))
