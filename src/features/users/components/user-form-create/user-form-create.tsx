import { Dialog } from 'primereact/dialog'
import { UserForm } from '~/features/users/components/user-form/user-form'

import { User, UserMode } from '~/features/users/types/user.types'

interface Props {
	userMode: UserMode
	onSubmit: (newUser: User) => void
	setUserMode: (value: UserMode) => void
	setActiveUserID: (activeUserID: string | null) => void
}

export const UserFormCreate = ({ userMode, onSubmit, setUserMode, setActiveUserID }: Props) => {
	return (
		<Dialog
			header='Add new user'
			visible={userMode === 'isCreate'}
			style={{ width: '50vw' }}
			onHide={() => setUserMode('isDefault')}>
			<UserForm onSubmit={onSubmit} setActiveUserID={setActiveUserID} setUserMode={setUserMode} />
		</Dialog>
	)
}
