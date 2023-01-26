import { useState } from 'react'
import useSWR from 'swr'

import { ORGANIZATIONS_ENDPOINT } from '~/features/organizations/constants/organization.const'
import {
	NewOrganization,
	Organization,
	OrganizationMode,
} from '~/features/organizations/types/organization.types'

import { useToast } from '~/common/hooks/useToast'

import {
	createOrganizationAPI,
	deleteOrganizationAPI,
	readOrganizationsAPI,
	readSingleOrganizationAPI,
	updateOrganizationAPI,
} from '~/features/organizations/api/organization-api'

import { OrganizationDetails } from '~/features/organizations/components/organization-details/organization-details'
import { OrganizationToolbar } from '~/features/organizations/components/organization-toolbar/organization-toolbar'
import { OrganizationFormUpdate } from '~/features/organizations/components/organization-form-update/organization-form-update'
import { OrganizationFormCreate } from '~/features/organizations/components/organization-form-create/organization-form-create'
import { OrganizationTable } from '~/features/organizations/components/organization-table/organization-table'

export const OrganizationList = () => {
	const [activeOrganizationID, setActiveOrganizationID] = useState<string | null>(null)
	const [organizationMode, setOrganizationMode] = useState<OrganizationMode>('isDefault')

	const { showToast } = useToast()

	const {
		isLoading,
		data: organizations,
		mutate: mutateOrganizations,
	} = useSWR(ORGANIZATIONS_ENDPOINT, readOrganizationsAPI)

	const { data: activeOrganization } = useSWR(
		activeOrganizationID ? `${ORGANIZATIONS_ENDPOINT}/${activeOrganizationID}` : null,
		readSingleOrganizationAPI,
	)

	const createProductMutation = async (organization: NewOrganization) => {
		try {
			await createOrganizationAPI(organization)
			mutateOrganizations()
			showToast({ summary: 'Organization created successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'Organization creation failed!', severity: 'error' })
		}
	}

	const updateOrganizationMutation = async (organization: Organization) => {
		try {
			await updateOrganizationAPI(organization)
			mutateOrganizations()
			showToast({ summary: 'Organization updated successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'Organization update failed!', severity: 'error' })
		}
	}

	return (
		<div>
			{isLoading ? (
				<p>loading organizations</p>
			) : (
				<div className='card'>
					<OrganizationToolbar setOrganizationMode={setOrganizationMode} />

					<OrganizationDetails
						activeOrganization={activeOrganization}
						organizationMode={organizationMode}
						setOrganizationMode={setOrganizationMode}
					/>

					<OrganizationFormCreate
						organizationMode={organizationMode}
						setOrganizationMode={setOrganizationMode}
						setActiveOrganizationID={setActiveOrganizationID}
						onSubmit={createProductMutation}
					/>

					<OrganizationFormUpdate
						activeOrganization={activeOrganization}
						organizationMode={organizationMode}
						setOrganizationMode={setOrganizationMode}
						setActiveOrganizationID={setActiveOrganizationID}
						onSubmit={updateOrganizationMutation}
					/>

					<OrganizationTable
						organizations={organizations}
						setOrganizationMode={setOrganizationMode}
						setActiveOrganizationID={setActiveOrganizationID}
					/>
				</div>
			)}
		</div>
	)
}
