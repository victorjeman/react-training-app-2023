import { Role } from '~/features/auth/types/auth.types'

// export const API_BASE_URL = ' http://localhost:3000'
export const API_BASE_URL = ' https://accle-2023-products-app.azurewebsites.net/api/v1'
export const API_BASE_URL_2 = 'https://accle-2023-multitenant-app.azurewebsites.net/api/v1'

export const APP_ROUTE_LABEL = {
	HOME: 'Home',
	PRODUCTS: 'Products',
	ORGANIZATIONS: 'Organizations',
	USERS: 'Users',
	TODO: 'Todo',
	PROFILE: 'Profile',
} as const

export const APP_ROUTE_PATH = {
	HOME: '/',
	LOGIN: '/login',
	PRODUCTS: '/products',
	ORGANIZATIONS: '/organizations',
	USERS: 'organizations/:organizationID/users',
	TODO: '/todo',
	PROFILE: '/profile',
} as const

export const APP_ROUTE_ROLE = {
	LOGIN: [Role.Public, Role.Viewer, Role.Administrator],
	HOME: [Role.Public, Role.Viewer, Role.Contributor, Role.Administrator],
	PRODUCTS: [Role.Viewer, Role.Contributor, Role.Administrator],
	ORGANIZATIONS: [Role.Contributor, Role.Administrator],
	USERS: [Role.Viewer, Role.Contributor, Role.Administrator],
	TODO: [Role.Viewer, Role.Contributor, Role.Administrator],
	PROFILE: [Role.Viewer, Role.Contributor, Role.Administrator],
} as const

export const APP_ROUTE_LINKS = [
	{
		label: APP_ROUTE_LABEL.HOME,
		path: APP_ROUTE_PATH.HOME,
		roles: APP_ROUTE_ROLE.HOME,
	},
	{
		label: APP_ROUTE_LABEL.PRODUCTS,
		path: APP_ROUTE_PATH.PRODUCTS,
		roles: APP_ROUTE_ROLE.PRODUCTS,
	},
	{
		label: APP_ROUTE_LABEL.ORGANIZATIONS,
		path: APP_ROUTE_PATH.ORGANIZATIONS,
		roles: APP_ROUTE_ROLE.ORGANIZATIONS,
	},
]
