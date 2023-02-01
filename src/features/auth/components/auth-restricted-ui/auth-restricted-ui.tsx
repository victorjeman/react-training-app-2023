import React from 'react'

import { Permission } from '~/features/auth/types/auth.types'
import { useAuth } from '~/features/auth/hooks/use-auth'

type Props = {
	permission: Permission
	children: React.ReactNode
}

export const AuthRestrictedUI = ({ permission, children }: Props) => {
	const { user } = useAuth()
	const allowed: boolean = user.permissions.includes(permission)

	if (allowed) return <>{children}</>

	return null
}
