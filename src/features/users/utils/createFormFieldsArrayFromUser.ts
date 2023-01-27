import { User } from '~/features/users/types/user.types'

export const createFormFieldsArrayFromUser = (user: User) => {
	return [
		['email', user.email],
		['firstName', user.firstName],
		['lastName', user.lastName],
		['birthDate', user.birthDate],
		['gender', user.gender],
		['phoneNumber', user.phoneNumber],
		['role', user.role],
		['active', user.active],
		['password', user.password],
	]
}
