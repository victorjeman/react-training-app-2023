import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'

import { useToast } from '~/common/hooks/useToast'

import { USERS_ENDPOINT } from '~/features/users/constants/user.const'
import { ORGANIZATIONS_ENDPOINT } from '~/features/organizations/constants/organization.const'

import { updateUserAPI } from '~/features/users/api/user-api'

import { UserToolbar } from '~/features/users/components/user-toolbar/user-toolbar'
import { UserDetails } from '~/features/users/components/user-details/user-details'
import { UserFormCreate } from '~/features/users/components/user-form-create/user-form-create'
import { UserFormUpdate } from '~/features/users/components/user-form-update/user-form-update'
import { UserTable } from '~/features/users/components/user-table/user-table'
import { User, UserMode } from '~/features/users/types/user.types'

export const UserList = () => {
	const { organizationID } = useParams()
	const [activeOrganizationID, setActiveOrganizationID] = useState<string | null>(null)
	const [activeUserID, setActiveUserID] = useState<string | null>(null)
	const [userMode, setUserMode] = useState<UserMode>('isDefault')

	const { showToast } = useToast()

	// Challenge "users are not loaded from the API" hint
	const { isLoading, data: users, mutate: mutateUsers } = useSWR(``, () => {})

	// Challenge "single user is not loading from API" hint
	const { data: activeUser } = useSWR(activeUserID ? `` : null, () => {})

	const createUserMutation = async (newUser: User) => {
		try {
			// Challenge "create single user missing API" hint
			mutateUsers()
			showToast({ summary: 'User created successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'User creation failed!', severity: 'error' })
		}
	}

	const updateOrganizationMutation = async (userToUpdate: User) => {
		try {
			await updateUserAPI(
				`/${ORGANIZATIONS_ENDPOINT}/${organizationID}/${USERS_ENDPOINT}/${activeUserID}`,
				userToUpdate,
			)

			// Challenge "users table is not reloading on update" hint
			showToast({ summary: 'User updated successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'User update failed!', severity: 'error' })
		}
	}

	return (
		<div>
			{isLoading ? (
				<p>loading organizations</p>
			) : (
				<div className='card'>
					<UserToolbar setUserMode={setUserMode} />

					<UserDetails activeUser={activeUser} userMode={userMode} setUserMode={setUserMode} />

					<UserFormCreate
						userMode={userMode}
						setUserMode={setUserMode}
						setActiveUserID={setActiveUserID}
						onSubmit={createUserMutation}
					/>

					<UserFormUpdate
						activeUser={activeUser}
						userMode={userMode}
						setUserMode={setUserMode}
						setActiveUserID={setActiveUserID}
						onSubmit={updateOrganizationMutation}
					/>

					<UserTable users={users} setUserMode={setUserMode} setActiveUserID={setActiveUserID} />
				</div>
			)}
		</div>
	)
}
