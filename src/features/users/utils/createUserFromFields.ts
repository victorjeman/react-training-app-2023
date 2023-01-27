import { User } from '~/features/users/types/user.types'

export const createUserFromFields = (userFields: User, userID?: string): User => {
	return {
		...(userID && { id: userID }),
		email: userFields.email,
		firstName: userFields.firstName,
		lastName: userFields.lastName,
		birthDate: userFields.birthDate,
		gender: userFields.gender,
		phoneNumber: userFields.phoneNumber,
		role: userFields.role,
		active: userFields.active,
	}
}
