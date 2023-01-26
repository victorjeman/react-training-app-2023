import { Sidebar } from 'primereact/sidebar'

import { OrganizationForm } from '~/features/organizations/components/organization-form/organization-form'
import { Organization, OrganizationMode } from '~/features/organizations/types/organization.types'

interface Props {
	activeOrganization: Organization
	organizationMode: OrganizationMode
	onSubmit: (organization: Organization) => void
	setOrganizationMode: (value: OrganizationMode) => void
	setActiveOrganizationID: (organizationID: string | null) => void
}

export const OrganizationFormUpdate = ({
	activeOrganization,
	organizationMode,
	onSubmit,
	setOrganizationMode,
	setActiveOrganizationID,
}: Props) => {
	return (
		<Sidebar
			visible={organizationMode === 'isUpdate'}
			position='right'
			onHide={() => setOrganizationMode('isDefault')}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>Edit product</h3>

			<OrganizationForm
				// @ts-ignore
				onSubmit={onSubmit}
				setOrganizationMode={setOrganizationMode}
				setActiveOrganizationID={setActiveOrganizationID}
				organizationToUpdate={activeOrganization}
			/>
		</Sidebar>
	)
}
