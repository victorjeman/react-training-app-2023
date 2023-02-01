import { APP_ROUTE_LABEL, APP_ROUTE_PATH } from '~/common/constants/common.const'
import { Role } from '~/features/auth/types/auth.types'

export type AppRouteKeys = keyof typeof APP_ROUTE_LABEL
export type AppRouteLabels = (typeof APP_ROUTE_LABEL)[AppRouteKeys]
export type AppRoutePath = (typeof APP_ROUTE_PATH)[AppRouteKeys]

export type AppRouteLink = {
	label: AppRouteLabels
	path: AppRoutePath
	roles: Role[]
}
