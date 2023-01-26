import { Dialog } from 'primereact/dialog'
import { OrganizationForm } from '~/features/organizations/components/organization-form/organization-form'

import {
	NewOrganization,
	OrganizationMode,
} from '~/features/organizations/types/organization.types'

interface Props {
	organizationMode: OrganizationMode
	onSubmit: (organization: NewOrganization) => void
	setOrganizationMode: (value: OrganizationMode) => void
	setActiveOrganizationID: (value: string | null) => void
}

export const OrganizationFormCreate = ({
	organizationMode,
	onSubmit,
	setOrganizationMode,
	setActiveOrganizationID,
}: Props) => {
	return (
		<Dialog
			header='Add new product'
			visible={organizationMode === 'isCreate'}
			style={{ width: '50vw' }}
			onHide={() => setOrganizationMode('isDefault')}>
			<OrganizationForm
				onSubmit={onSubmit}
				setActiveOrganizationID={setActiveOrganizationID}
				setOrganizationMode={setOrganizationMode}
			/>
		</Dialog>
	)
}
