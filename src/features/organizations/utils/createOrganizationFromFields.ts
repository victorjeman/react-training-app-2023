import { OrganizationFields } from '~/features/organizations/types/organization.types'

export const createOrganizationFromFields = (
	organizationFields: OrganizationFields,
	organizationID?: string,
) => {
	return {
		...(organizationID && { id: organizationID }),
		companyName: organizationFields.companyName,
		legalName: organizationFields.legalName,
		address: {
			streetAndNumber: organizationFields.streetAndNumber,
			city: organizationFields.city,
			postalCode: organizationFields.postalCode,
			country: organizationFields.country,
		},
		active: organizationFields.active,
	}
}
