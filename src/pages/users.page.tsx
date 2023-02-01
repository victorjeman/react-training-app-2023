import { PrivateLayout } from '~/layouts/private.layout'
import { UserList } from '~/features/users/components/user-list/user-list'

export const UsersPage = () => {
	return (
		<PrivateLayout>
			<UserList />
		</PrivateLayout>
	)
}
