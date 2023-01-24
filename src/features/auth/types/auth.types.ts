import { UserRole } from '~/features/users/types/user.types'

export interface Credentials {
	name: string
	password: string
	role: UserRole
}
