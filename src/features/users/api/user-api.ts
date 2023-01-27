import axios from 'axios'

import { API_BASE_URL_2 } from '~/common/constants/common.const'
import { User } from '~/features/users/types/user.types'

const UserAPI = axios.create({
	baseURL: API_BASE_URL_2,
})

// Challenge "create single user missing API"
// Create an API function to create a single user

// Challenge "users are not loaded from the API" hint
// Create an API function to load all the users

// Challenge "single user is not loading from API" hint
// Create an API to load a single user

export const updateUserAPI = async (url: string, userToUpdate: User) => {
	const response = await UserAPI.put(url, userToUpdate)
	return response.data
}
