import { RouteObject } from 'react-router-dom'

import { ROUTE_OBJECT_WITH_ROLES } from '~/router/constants/router.const'

export const getRouteObjectsByRole = (userRole: string): RouteObject[] => {
	const userRouteObjects = ROUTE_OBJECT_WITH_ROLES.filter((routeObjectWithRoles) =>
		routeObjectWithRoles.roles.some((role) => role.valueOf() === userRole),
	).map(
		(routeObjectWithRoles): RouteObject => ({
			path: routeObjectWithRoles.path,
			element: routeObjectWithRoles.element,
		}),
	)

	return userRouteObjects
}
