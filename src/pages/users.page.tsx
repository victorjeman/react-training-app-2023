import { AuthenticatedLayout } from '~/layouts/Authenticated.layout'
import { UserList } from '~/features/users/components/user-list/user-list'

export const UsersPage = () => {
	return (
		<AuthenticatedLayout>
			<UserList />
		</AuthenticatedLayout>
	)
}
