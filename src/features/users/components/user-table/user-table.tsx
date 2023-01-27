import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Chip } from 'primereact/chip'
import cx from 'classnames'

import { UserLite, User, UserMode } from '~/features/users/types/user.types'

interface Props {
	users: UserLite[]
	setUserMode: (value: UserMode) => void
	setActiveUserID: (activeUserID: string) => void
}

export const UserTable = ({ users, setUserMode, setActiveUserID }: Props) => {
	const actionsBodyTemplate = (user: UserLite) => {
		return (
			<>
				<Button
					tooltip='view organization details'
					tooltipOptions={{ position: 'top' }}
					icon='pi pi-eye'
					className='p-button-rounded p-button-primary p-button-text mr-1'
					onClick={() => {
						setActiveUserID(user.id)
						setUserMode('isRead')
					}}
				/>

				<Button
					tooltip='edit this organization'
					tooltipOptions={{ position: 'top' }}
					icon='pi pi-pencil'
					className='p-button-rounded p-button-secondary p-button-text mr-3'
					onClick={() => {
						setActiveUserID(user.id)
						setUserMode('isUpdate')
					}}
				/>
			</>
		)
	}

	const activeBodyTemplate = (user: User) => {
		return (
			<Chip
				label={user.active ? 'active' : 'inactive'}
				className={cx('text-sm text-white-alpha-90', {
					'bg-green-500 ': user.active,
					'bg-red-500': !user.active,
				})}
			/>
		)
	}

	return (
		<DataTable value={users} responsiveLayout='scroll'>
			<Column field='firstName' header='First Name'></Column>
			<Column field='lastName' header='Last Name'></Column>
			<Column header='Status' body={activeBodyTemplate}></Column>
			<Column
				className='flex justify-content-end'
				header='Actions'
				body={actionsBodyTemplate}></Column>
		</DataTable>
	)
}
