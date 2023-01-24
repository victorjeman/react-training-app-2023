import { RouteObject } from 'react-router-dom'

import { UserRole } from '~/features/users/types/user.types'

export type RouteObjectWithRoles = RouteObject & {
	roles: UserRole[]
}
