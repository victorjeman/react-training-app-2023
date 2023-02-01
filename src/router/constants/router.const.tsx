// @ts-nocheck

import { Navigate } from 'react-router-dom'

import { APP_ROUTE_ROLE, APP_ROUTE_PATH } from '~/common/constants/common.const'
import { RouteObjectWithRoles } from '~/router/types/router.types'

import { AuthRestrictedRoute } from '~/features/auth/components/auth-restricted-route/auth-restricted-route'

import { ProductsPage } from '~/pages/products.page'
import { OrganizationsPage } from '~/pages/organizations.page'
import { UsersPage } from '~/pages/users.page'
import { ProfilePage } from '~/pages/profile.page'
import { TodoPage } from '~/pages/todo.page'
import { HomePage } from '~/pages/home.page'
import { LoginPage } from '~/pages/login.page'

export const ROUTE_OBJECT_WITH_ROLES: RouteObjectWithRoles[] = [
	{
		path: APP_ROUTE_PATH.LOGIN,
		roles: APP_ROUTE_ROLE.LOGIN,
		element: <LoginPage />,
	},
	{
		path: APP_ROUTE_PATH.HOME,
		roles: APP_ROUTE_ROLE.HOME,
		element: <HomePage />,
	},
	{
		path: APP_ROUTE_PATH.PRODUCTS,
		roles: APP_ROUTE_ROLE.PRODUCTS,
		element: (
			<AuthRestrictedRoute>
				<ProductsPage />
			</AuthRestrictedRoute>
		),
	},
	{
		path: APP_ROUTE_PATH.ORGANIZATIONS,
		roles: APP_ROUTE_ROLE.ORGANIZATIONS,
		element: (
			<AuthRestrictedRoute>
				<OrganizationsPage />
			</AuthRestrictedRoute>
		),
	},
	// {
	// 	path: APP_ROUTE_PATH.USERS,
	// 	element: (
	// 		<AuthRestrictedRoute>
	// 			<UsersPage />
	// 		</AuthRestrictedRoute>
	// 	),
	// },
	// {
	// 	path: APP_ROUTE_PATH.PROFILE,
	// 	element: (
	// 		<AuthRestrictedRoute>
	// 			<ProfilePage />
	// 		</AuthRestrictedRoute>
	// 	),
	// },
	// {
	// 	path: APP_ROUTE_PATH.TODO,
	// 	element: (
	// 		<AuthRestrictedRoute>
	// 			<TodoPage />
	// 		</AuthRestrictedRoute>
	// 	),
	// },
	{
		path: '*',
		roles: APP_ROUTE_ROLE.HOME,
		element: <Navigate to='/login' replace />,
	},
]
