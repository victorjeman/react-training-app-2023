import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Chip } from 'primereact/chip'
import cx from 'classnames'

import { Organization, OrganizationMode } from '~/features/organizations/types/organization.types'
import { NavLink } from 'react-router-dom'
import { APP_ROUTE_PATH } from '~/common/constants/common.const'

interface Props {
	organizations: Organization[]
	setOrganizationMode: (value: OrganizationMode) => void
	setActiveOrganizationID: (organizationID: string) => void
}

export const OrganizationTable = ({
	organizations,
	setOrganizationMode,
	setActiveOrganizationID,
}: Props) => {
	const actionsBodyTemplate = (organization: Organization) => {
		return (
			<>
				<Button
					tooltip='view organization details'
					tooltipOptions={{ position: 'top' }}
					icon='pi pi-eye'
					className='p-button-rounded p-button-primary p-button-text mr-1'
					onClick={() => {
						// Challenge "organization details don't work" 6 hint
						setActiveOrganizationID()

						setOrganizationMode('isRead')
					}}
				/>

				<Button
					tooltip='edit this organization'
					tooltipOptions={{ position: 'top' }}
					icon='pi pi-pencil'
					className='p-button-rounded p-button-secondary p-button-text mr-3'
					onClick={() => {
						setActiveOrganizationID(organization.id)

						// Challenge "table edit button doesn't work" 7 hint
						// Something must be wrong with this function call
						setOrganizationMode('isRead')
					}}
				/>

				<NavLink to={`${organization.id}/users`} className='no-underline'>
					See users
				</NavLink>
			</>
		)
	}

	const activeBodyTemplate = (organization: Organization) => {
		return (
			<Chip
				label={organization.active ? 'active' : 'inactive'}
				className={cx('text-sm text-white-alpha-90', {
					'bg-green-500 ': organization.active,
					'bg-red-500': !organization.active,
				})}
			/>
		)
	}

	return (
		<DataTable value={organizations} responsiveLayout='scroll'>
			<Column field='companyName' header='Name'></Column>
			<Column field='legalName' header='Legal name'></Column>
			<Column header='Status' body={activeBodyTemplate}></Column>
			<Column
				header='Actions'
				body={actionsBodyTemplate}
				className='flex justify-content-end align-items-center'></Column>
		</DataTable>
	)
}
