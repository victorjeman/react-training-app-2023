import axios from 'axios'

import { API_BASE_URL_2 } from '~/common/constants/common.const'
import { User } from '~/features/users/types/user.types'

const UserAPI = axios.create({
	baseURL: API_BASE_URL_2,
})

export const createUserAPI = async (url: string, user: User) => {
	const response = await UserAPI.post(url, user)
	return response.data
}

export const readUsersAPI = async (url: string) => {
	try {
		const response = await UserAPI.get(url)
		return response.data.users
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}

export const readSingleUserAPI = async (url: string) => {
	try {
		const response = await UserAPI.get(url)
		return response.data
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}

export const updateUserAPI = async (url: string, userToUpdate: User) => {
	const response = await UserAPI.put(url, userToUpdate)
	return response.data
}
