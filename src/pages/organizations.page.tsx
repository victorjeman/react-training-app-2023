import { PrivateLayout } from '~/layouts/private.layout'
import { OrganizationList } from '~/features/organizations/components/organization-list/organization-list'

export const OrganizationsPage = () => {
	return (
		<PrivateLayout>
			<OrganizationList />
		</PrivateLayout>
	)
}
