import { RouteObject } from 'react-router-dom'

import { Role } from '~/features/auth/types/auth.types'

export type RouteObjectWithRoles = RouteObject & {
	roles: Role[]
}
