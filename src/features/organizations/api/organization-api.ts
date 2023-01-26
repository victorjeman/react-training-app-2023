import axios from 'axios'

import { API_BASE_URL_2 } from '~/common/constants/common.const'
import { ORGANIZATIONS_ENDPOINT } from '~/features/organizations/constants/organization.const'
import { NewOrganization, Organization } from '~/features/organizations/types/organization.types'

const organizationAPI = axios.create({
	baseURL: API_BASE_URL_2,
})

export const createOrganizationAPI = async (organization: NewOrganization) => {
	const response = await organizationAPI.post(ORGANIZATIONS_ENDPOINT, organization)
	return response.data
}

export const readOrganizationsAPI = async (url: string) => {
	try {
		const response = await organizationAPI.get(url)
		return response.data.organizations
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}

export const readSingleOrganizationAPI = async (url: string) => {
	try {
		const response = await organizationAPI.get(url)
		return response.data
	} catch (error) {
		console.log('error: ', error)
		return []
	}
}

export const updateOrganizationAPI = async (organization: Organization) => {
	const response = await organizationAPI.put(
		`${ORGANIZATIONS_ENDPOINT}/${organization.id}`,
		organization,
	)
	return response.data
}

export const deleteOrganizationAPI = async (organizationToDeleteID: string) => {
	const response = await organizationAPI.delete(
		`${ORGANIZATIONS_ENDPOINT}/${organizationToDeleteID}`,
	)
	return response.data
}
