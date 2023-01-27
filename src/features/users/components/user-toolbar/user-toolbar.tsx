import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'

import { UserMode } from '~/features/users/types/user.types'

interface Props {
	setUserMode: (value: UserMode) => void
	[x: string]: any
}

export const UserToolbar = ({ setUserMode, ...rest }: Props) => {
	const rightContents = (
		<>
			<Button
				icon='pi pi-plus'
				className='mr-2 font-medium'
				onClick={() => setUserMode('isCreate')}>
				<span className='ml-2'>Add new user</span>
			</Button>
		</>
	)

	return (
		<div>
			<Toolbar left={<h2>Users</h2>} right={rightContents} {...rest} className='mb-3' />
		</div>
	)
}
