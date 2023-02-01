import { APP_ROUTE_LINKS } from '~/common/constants/common.const'
import { Role } from '~/features/auth/types/auth.types'

export const getAppRouteLinksByRole = (userRole: Role) => {
	const userLinks = APP_ROUTE_LINKS.filter((routeLinkWithRoles) =>
		routeLinkWithRoles.roles.some((role) => role.valueOf() === userRole),
	)
	return userLinks
}
