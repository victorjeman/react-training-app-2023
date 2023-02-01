import { Menubar } from 'primereact/menubar'
import { NavLink } from 'react-router-dom'

import { useAuth } from '~/features/auth/hooks/use-auth'
import { getAppRouteLinksByRole } from '~/common/utils/getAppRouteLinksByRole'
import { Role } from '~/features/auth/types/auth.types'

const defaultClassName = 'py-2 px-4 no-underline border-round-xl block'
const initialClassName = `${defaultClassName} no-underline text-color-secondary`
const activeClassName = `${defaultClassName} bg-blue-100 text-blue-500 border-round-xl`

export const Navigation = () => {
	const { user, logout } = useAuth()
	const links = getAppRouteLinksByRole(user.role)

	const menuModel = links.map((route) => ({
		template: () => (
			<NavLink
				to={route.path}
				className={({ isActive }) => (isActive ? activeClassName : initialClassName)}>
				{route.label}
			</NavLink>
		),
	}))

	const end = (
		<>
			Hello <strong>{user.name}</strong>
			{user.role !== Role.Public && <button onClick={() => logout()}>Logout</button>}
		</>
	)

	return <Menubar end={end} model={menuModel} className='mb-3' />
}
