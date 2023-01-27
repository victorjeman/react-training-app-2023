import { Sidebar } from 'primereact/sidebar'
import { UserForm } from '~/features/users/components/user-form/user-form'
import { User, UserMode } from '~/features/users/types/user.types'

interface Props {
	activeUser: User
	userMode: UserMode
	setUserMode: (value: UserMode) => void
	setActiveUserID: (userID: string | null) => void
	onSubmit: (user: User) => void
}

export const UserFormUpdate = ({
	activeUser,
	userMode,
	setUserMode,
	setActiveUserID,
	onSubmit,
}: Props) => {
	return (
		<Sidebar
			visible={userMode === 'isUpdate'}
			position='right'
			onHide={() => setUserMode('isDefault')}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>Edit product</h3>

			<UserForm
				// @ts-ignore
				onSubmit={onSubmit}
				setUserMode={setUserMode}
				setActiveUserID={setActiveUserID}
				userToUpdate={activeUser}
			/>
		</Sidebar>
	)
}
