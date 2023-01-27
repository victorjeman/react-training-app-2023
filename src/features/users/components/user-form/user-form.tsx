import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { InputSwitch } from 'primereact/inputswitch'
import { Button } from 'primereact/button'
import { zodResolver } from '@hookform/resolvers/zod'

import { User, UserFieldName, UserMode } from '~/features/users/types/user.types'
import { USER_FORM_SCHEMA, USER_FIELDS_DEFAULT_VALUES } from '~/features/users/constants/user.const'
import { createUserFromFields } from '~/features/users/utils/createUserFromFields'
import { createFormFieldsArrayFromUser } from '~/features/users/utils/createFormFieldsArrayFromUser'

interface Props {
	userToUpdate?: User
	onSubmit: (user: User) => void
	setUserMode: (value: UserMode) => void
	setActiveUserID: (value: string | null) => void
}

export const UserForm = ({ userToUpdate, onSubmit, setUserMode, setActiveUserID }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		control,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(USER_FORM_SCHEMA),
		defaultValues: USER_FIELDS_DEFAULT_VALUES,
	})

	const localOnSubmit = (formFields: User) => {
		const organizationToSubmit = createUserFromFields(formFields, userToUpdate?.id)

		onSubmit(organizationToSubmit)

		if (!userToUpdate) reset()

		if (organizationToSubmit) setActiveUserID(null)

		setUserMode('isDefault')
	}

	const getFormErrorMessage = (fieldName: UserFieldName) => {
		const error = errors[fieldName]
		return error && <small className='p-error'>{error?.message}</small>
	}

	useEffect(() => {
		if (!!userToUpdate) {
			const formFieldsArray = createFormFieldsArrayFromUser(userToUpdate)
			formFieldsArray.forEach((item: any) => {
				setValue(item[0], item[1])
			})
		}
	}, [userToUpdate])

	return (
		<div className='card'>
			<form onSubmit={handleSubmit(localOnSubmit)} className='p-fluid'>
				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='firstName'>
						First name
					</label>

					<InputText id='firstName' {...register('firstName')} />
					{getFormErrorMessage('firstName')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='lastName'>
						Last name
					</label>

					<InputText id='lastName' {...register('lastName')} />
					{getFormErrorMessage('lastName')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='birthDate'>
						Birth date
					</label>

					<InputText id='birthDate' {...register('birthDate')} />
					{getFormErrorMessage('birthDate')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='gender'>
						Gender
					</label>

					<InputText id='gender' {...register('gender')} />
					{getFormErrorMessage('gender')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='email'>
						Email
					</label>

					<InputText id='email' {...register('email')} />
					{getFormErrorMessage('email')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='role'>
						Phone number
					</label>

					<InputText id='phoneNumber' {...register('phoneNumber')} />
					{getFormErrorMessage('phoneNumber')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='role'>
						Role
					</label>

					<InputText id='role' {...register('role')} />
					{getFormErrorMessage('role')}
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
