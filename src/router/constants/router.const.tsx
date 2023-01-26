// @ts-nocheck

import { RouteObjectWithRoles } from '~/router/types/router.types'
import { APP_ROUTE_PATH, APP_ROUTE_ROLE } from '~/common/constants/common.const'

import { ProductsPage } from '~/pages/products.page'
import { OrganizationsPage } from '~/pages/organizations.page'
import { UsersPage } from '~/pages/users.page'
import { ProfilePage } from '~/pages/profile.page'
import { TodoPage } from '~/pages/todo.page'

export const ROUTE_OBJECT_WITH_ROLES: RouteObjectWithRoles[] = [
	{
		path: APP_ROUTE_PATH.PRODUCTS,
		roles: APP_ROUTE_ROLE.PRODUCTS,
		element: <ProductsPage />,
	},
	{
		path: APP_ROUTE_PATH.ORGANIZATIONS,
		roles: APP_ROUTE_ROLE.ORGANIZATIONS,
		element: <OrganizationsPage />,
	},
	{
		path: APP_ROUTE_PATH.USERS,
		roles: APP_ROUTE_ROLE.USERS,
		element: <UsersPage />,
	},
	{
		path: APP_ROUTE_PATH.PROFILE,
		roles: APP_ROUTE_ROLE.PROFILE,
		element: <ProfilePage />,
	},
	{
		path: APP_ROUTE_PATH.TODO,
		roles: APP_ROUTE_ROLE.TODO,
		element: <TodoPage />,
	},
]
