import { Menubar } from 'primereact/menubar'
import { NavLink } from 'react-router-dom'

import { useUserRole } from '~/features/auth/hooks/useUserRole'
import { getAppRouteLinksByRole } from '~/common/utils/getAppRouteLinksByRole'

const defaultClassName = 'py-2 px-4 no-underline border-round-xl block'
const initialClassName = `${defaultClassName} no-underline text-color-secondary`
const activeClassName = `${defaultClassName} bg-blue-100 text-blue-500 border-round-xl`

export const Navigation = () => {
	const { userRole } = useUserRole()
	const links = getAppRouteLinksByRole(userRole)

	const menuModel = links.map((route) => ({
		template: () => (
			<NavLink
				to={route.path}
				className={({ isActive }) => (isActive ? activeClassName : initialClassName)}>
				{route.label}
			</NavLink>
		),
	}))

	return <Menubar model={menuModel} className='mb-3' />
}
