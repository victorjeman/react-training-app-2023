import { Organization } from '~/features/organizations/types/organization.types'

export const createFormFieldsArrayFromOrganization = (organization: Organization) => {
	return [
		['companyName', organization.companyName],
		['legalName', organization.legalName],
		['streetAndNumber', organization.address?.streetAndNumber],
		['city', organization.address?.city],
		['postalCode', organization.address?.postalCode],
		['country', organization.address?.country],
		['active', organization.active],
	]
}
