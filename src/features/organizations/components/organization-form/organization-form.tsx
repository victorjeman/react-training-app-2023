import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { InputSwitch } from 'primereact/inputswitch'
import { Button } from 'primereact/button'

import { zodResolver } from '@hookform/resolvers/zod'
import { Divider } from 'primereact/divider'

import {
	NewOrganization,
	Organization,
	OrganizationFieldName,
	OrganizationFields,
	OrganizationMode,
} from '~/features/organizations/types/organization.types'
import {
	ORGANIZATION_FIELDS_DEFAULT_VALUES,
	ORGANIZATION_FORM_SCHEMA,
} from '~/features/organizations/constants/organization.const'

import { createOrganizationFromFields } from '~/features/organizations/utils/createOrganizationFromFields'
import { createFormFieldsArrayFromOrganization } from '~/features/organizations/utils/createFormFieldsArrayFromOrganization'

interface Props {
	organizationToUpdate?: Organization
	onSubmit: (organization: Organization | NewOrganization) => void
	setOrganizationMode: (value: OrganizationMode) => void
	setActiveOrganizationID: (value: string | null) => void
}

export const OrganizationForm = ({
	organizationToUpdate,
	onSubmit,
	setOrganizationMode,
	setActiveOrganizationID,
}: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		control,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(ORGANIZATION_FORM_SCHEMA),
		defaultValues: ORGANIZATION_FIELDS_DEFAULT_VALUES,
	})

	const localOnSubmit = (formFields: OrganizationFields) => {
		const organizationToSubmit = createOrganizationFromFields(formFields, organizationToUpdate?.id)

		onSubmit(organizationToSubmit)

		if (!organizationToUpdate) reset()

		if (organizationToSubmit) setActiveOrganizationID(null)

		setOrganizationMode('isDefault')
	}

	const getFormErrorMessage = (fieldName: OrganizationFieldName) => {
		const error = errors[fieldName]
		return error && <small className='p-error'>{error?.message}</small>
	}

	useEffect(() => {
		if (!!organizationToUpdate) {
			const formFieldsArray = createFormFieldsArrayFromOrganization(organizationToUpdate)
			formFieldsArray.forEach((item: any) => {
				setValue(item[0], item[1])
			})
		}
	}, [organizationToUpdate])

	return (
		<div className='card'>
			<form onSubmit={handleSubmit(localOnSubmit)} className='p-fluid'>
				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='companyName'>
						Company name
					</label>

					<InputText id='companyName' {...register('companyName')} />
					{getFormErrorMessage('companyName')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='legalName'>
						Legal name
					</label>

					<InputText id='legalName' {...register('legalName')} />
					{getFormErrorMessage('legalName')}
				</div>

				<Divider />

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='streetAndNumber'>
						Street and number
					</label>

					<InputText id='streetAndNumber' {...register('streetAndNumber')} />
					{getFormErrorMessage('streetAndNumber')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='city'>
						City
					</label>

					<InputText id='city' {...register('city')} />
					{getFormErrorMessage('city')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='postalCode'>
						Postal code
					</label>

					<InputText id='postalCode' {...register('postalCode')} />
					{getFormErrorMessage('postalCode')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='country'>
						Country
					</label>

					<InputText id='country' {...register('country')} />
					{getFormErrorMessage('country')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='active'>
						Active
					</label>

					<Controller
						control={control}
						name='active'
						render={({ field }) => (
							<>
								<InputSwitch
									inputId={field.name}
									onChange={(e) => field.onChange(e)}
									checked={field.value}
								/>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
				</div>

				<Button type='submit' label='Submit' className='mt-2' />
			</form>
		</div>
	)
}
