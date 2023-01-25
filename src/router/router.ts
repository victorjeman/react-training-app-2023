import { useRoutes } from 'react-router-dom'

import { useUserRole } from '~/features/auth/hooks/useUserRole'
import { getRouteObjectsByRole } from '~/router/utils/getRouteObjectsByRole'

export const Router = () => {
	const { userRole } = useUserRole()

	return useRoutes(getRouteObjectsByRole(userRole))
}
