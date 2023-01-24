import { UserRole } from '~/features/users/types/user.types'
import { RouteObjectWithRoles } from '~/router/types/router.types'

import { ProductsPage } from '~/pages/products.page'

export const routeObjectsWithRoles: RouteObjectWithRoles[] = [
	{
		path: '/products',
		element: <ProductsPage />,
		roles: [UserRole.Public],
	},
]
