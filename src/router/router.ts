import { useRoutes } from 'react-router-dom'
import { useAuth } from '~/features/auth/hooks/use-auth'

import { getRouteObjectsByRole } from '~/router/utils/getRouteObjectsByRole'

export const Router = () => {
	const { user } = useAuth()

	return useRoutes(getRouteObjectsByRole(user.role))
}
