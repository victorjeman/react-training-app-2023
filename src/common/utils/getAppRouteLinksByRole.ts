import { APP_ROUTE_LINKS } from '~/common/constants/common.const'
import { AppRouteLink } from '~/common/types/common.types'
import { UserRole } from '~/features/users/types/user.types'

export const getAppRouteLinksByRole = (userRole: UserRole) => {
	const userLinks = APP_ROUTE_LINKS.filter((routeLinkWithRoles) =>
		routeLinkWithRoles.roles.some((role) => role.valueOf() === userRole),
	)
	return userLinks
}
