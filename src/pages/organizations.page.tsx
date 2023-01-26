import { AuthenticatedLayout } from '~/layouts/Authenticated.layout'
import { OrganizationList } from '~/features/organizations/components/organization-list/organization-list'

export const OrganizationsPage = () => {
	return (
		<AuthenticatedLayout>
			<OrganizationList />
		</AuthenticatedLayout>
	)
}
