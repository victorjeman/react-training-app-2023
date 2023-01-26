import { ORGANIZATION_FIELDS_DEFAULT_VALUES } from '~/features/organizations/constants/organization.const'

export interface OrganizationAddress {
	streetAndNumber: string
	city: string
	postalCode: string
	country: string
}

export interface NewOrganization {
	companyName: string
	legalName: string
	address: OrganizationAddress
	active: boolean
}

export interface Organization extends NewOrganization {
	id: string
}

export interface OrganizationFields {
	companyName: string
	legalName: string
	streetAndNumber: string
	city: string
	postalCode: string
	country: string
	active: boolean
}

export type OrganizationFieldName = keyof typeof ORGANIZATION_FIELDS_DEFAULT_VALUES

export type OrganizationMode = 'isRead' | 'isUpdate' | 'isCreate' | 'isDefault'
