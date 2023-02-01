import { Button } from 'primereact/button'
import { useLocation, useNavigate } from 'react-router-dom'

import { AuthUser } from '~/features/auth/types/auth.types'
import { Role } from '~/features/auth/types/auth.types'
import { useAuth } from '~/features/auth/hooks/use-auth'

interface Props {}

const viewer: AuthUser = {
	name: 'Viewer',
	permissions: ['products.read'],
	role: Role.Viewer,
}

const contributor: AuthUser = {
	name: 'Contributor',
	permissions: ['products.read', 'products.create'],
	role: Role.Contributor,
}

const administrator: AuthUser = {
	name: 'Administrator',
	permissions: ['products.create', 'products.read', 'products.update', 'products.delete'],
	role: Role.Administrator,
}

export const AuthLogin = ({}: Props) => {
	const navigate = useNavigate()
	const { state } = useLocation()

	const { login } = useAuth()

	const loginLocal = async (user: AuthUser) => {
		await login(user)
		navigate(state?.path || '/products')
	}

	return (
		<div>
			<ul className='p-0'>
				<li className='mb-3 list-none p-0'>
					<Button onClick={() => loginLocal(viewer)}>Login as viewer</Button>
				</li>

				<li className='mb-3 list-none p-0'>
					<Button onClick={() => loginLocal(contributor)}>Login as contributor</Button>
				</li>

				<li className='mb-3 list-none p-0'>
					<Button onClick={() => loginLocal(administrator)}>Login as administrator</Button>
				</li>
			</ul>
		</div>
	)
}
