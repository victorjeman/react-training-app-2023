import { UserRole } from '~/features/users/types/user.types'

export const useUserRole = (): { userRole: UserRole } => {
	return { userRole: UserRole.Public }
}
