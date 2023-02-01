import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '~/features/auth/hooks/use-auth'
import { Role } from '~/features/auth/types/auth.types'

interface Props {
	children: JSX.Element
	role?: Role
}

export const AuthRestrictedRoute = ({ children }: Props) => {
	const { isAuthenticated } = useAuth()
	const location = useLocation()
	// If needed add extra logic to show the page based on role

	return isAuthenticated ? (
		children
	) : (
		<Navigate to='/login' replace state={{ path: location.pathname }} />
	)
}
