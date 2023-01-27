import axios from 'axios'

import { API_BASE_URL_2 } from '~/common/constants/common.const'
import { ORGANIZATIONS_ENDPOINT } from '~/features/organizations/constants/organization.const'
import { NewOrganization, Organization } from '~/features/organizations/types/organization.types'

const organizationAPI = axios.create({
	baseURL: API_BASE_URL_2,
})

// Challenge "add new organization api" hint
// See how it was one for products(product-api.ts), should be something similar
export const createOrganizationAPI = async (organization: NewOrganization) => {}

export const readOrganizationsAPI = async (url: string) => {
	try {
		const response = await organizationAPI.get(url)

		// Challenge "organization list is not loading" hint
		// Use console.log to check the response object and return the organizations instead of an empty array
		return []
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
