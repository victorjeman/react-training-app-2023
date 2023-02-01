import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'

import { AuthUser, Role } from '~/features/auth/types/auth.types'

interface UserContext {
	user: AuthUser
	isAuthenticated: boolean
	login: (user: AuthUser) => void
	logout: () => void
}

const defaultUser: AuthUser = {
	name: 'Unknown',
	role: Role.Public,
	permissions: [],
}

const useAuthLocal = () => {
	const [user, setUser] = useLocalStorage('user', defaultUser)

	return {
		user,
		isAuthenticated: user.role && user.role !== Role.Public,

		login(user: AuthUser) {
			return new Promise((res: any) => {
				setUser(user)
				res()
			})
		},

		logout() {
			return new Promise((res: any) => {
				setUser(defaultUser)
				res()
			})
		},
	}
}

const userContext = createContext<UserContext | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
	const useAuth = useAuthLocal()

	return <userContext.Provider value={useAuth}>{children}</userContext.Provider>
}

export const useAuth = () => {
	let context = useContext(userContext)

	if (context === undefined) throw Error('userContext must be withing UserProvider')

	return context
}
