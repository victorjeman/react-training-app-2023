import { AuthenticatedLayout } from '~/layouts/Authenticated.layout'
import { Navigation } from '~/layouts/components/navigation/navigation'

export const UsersPage = () => {
	return (
		<AuthenticatedLayout>
			<h1>Users</h1>
		</AuthenticatedLayout>
	)
}
