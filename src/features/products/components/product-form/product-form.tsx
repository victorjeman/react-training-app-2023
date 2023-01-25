import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { InputNumber } from 'primereact/inputnumber'
import { zodResolver } from '@hookform/resolvers/zod'

import {
	CURRENCY_SELECT_ITEMS,
	COUNTRY_SELECT_ITEMS,
	PRODUCT_FIELDS_DEFAULT_VALUES,
	PRODUCT_FORM_SCHEMA,
} from '~/features/products/constants/product.const'
import { Product, ProductFieldName, ProductFields } from '~/features/products/types/products.types'
import { createProductFromFields } from '~/features/products/utils/createProductFromFields'
import { createFormFieldsArrayFromProduct } from '~/features/products/utils/createFormFieldsArrayFromProduct'

interface Props {
	onSubmit: (product: Product) => void
	productToUpdate?: Product | null
}

const countryOptionTemplate = (option: any) => {
	return (
		<div className='flex gap-2 justify-content-start align-items-center'>
			<img
				className='max-w-3rem h-auto'
				alt={option.name}
				src={option.flag}
				onError={(e: any) =>
					(e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
				}
			/>
			<p>{option.name}</p>
		</div>
	)
}

export const ProductForm = ({ onSubmit, productToUpdate }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		control,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(PRODUCT_FORM_SCHEMA),
		defaultValues: PRODUCT_FIELDS_DEFAULT_VALUES,
	})

	const localOnSubmit = (formFields: ProductFields) => {
		const productToSubmit = createProductFromFields(formFields, productToUpdate?.id)

		onSubmit(productToSubmit)

		if (!productToUpdate) reset()
	}

	const getFormErrorMessage = (fieldName: ProductFieldName) => {
		const error = errors[fieldName]
		return error && <small className='p-error'>{error?.message}</small>
	}

	useEffect(() => {
		if (!!productToUpdate) {
			const formFieldsArray = createFormFieldsArrayFromProduct(productToUpdate)
			formFieldsArray.forEach((item: any) => {
				setValue(item[0], item[1])
			})
		}
	}, [productToUpdate])

	return (
		<div className='card'>
			<form onSubmit={handleSubmit(localOnSubmit)} className='p-fluid'>
				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='name'>
						Product name
					</label>

					<InputText id='name' {...register('name')} />
					{getFormErrorMessage('name')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='currency'>
						Currency
					</label>

					<Controller
						control={control}
						name='currency'
						render={({ field }) => (
							<>
								<Dropdown
									id='currency'
									options={CURRENCY_SELECT_ITEMS}
									optionLabel='name'
									optionValue='value'
									onChange={(e) => field.onChange(e)}
									value={field.value}
								/>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='price'>
						Price
					</label>

					<Controller
						control={control}
						name='price'
						render={({ field }) => (
							<>
								<InputNumber
									inputId={field.name}
									onValueChange={(e) => field.onChange(e)}
									value={field.value}
									mode='currency'
									currency='USD'
									locale='en-US'
								/>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='manufacturer'>
						Manufacturer
					</label>

					<Controller
						control={control}
						name='manufacturer'
						render={({ field }) => (
							<>
								<Dropdown
									id='manufacturer'
									options={COUNTRY_SELECT_ITEMS}
									optionLabel='name'
									optionValue='value'
									onChange={(e) => field.onChange(e)}
									value={field.value}
									itemTemplate={countryOptionTemplate}
								/>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
					{getFormErrorMessage('manufacturer')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='originCountry'>
						Origin country
					</label>

					<Controller
						control={control}
						name='originCountry'
						render={({ field }) => (
							<>
								<Dropdown
									id='originCountry'
									options={COUNTRY_SELECT_ITEMS}
									optionLabel='name'
									optionValue='name'
									onChange={(e) => field.onChange(e)}
									value={field.value}
									itemTemplate={countryOptionTemplate}
								/>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
					{getFormErrorMessage('originCountry')}
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='width'>
						Width
					</label>

					<Controller
						control={control}
						name='width'
						render={({ field }) => (
							<>
								<div className='p-inputgroup'>
									<span className='p-inputgroup-addon'>cm</span>
									<InputNumber
										inputId={field.name}
										onValueChange={(e) => field.onChange(e)}
										value={field.value}
									/>
								</div>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='height'>
						Height
					</label>

					<Controller
						control={control}
						name='height'
						render={({ field }) => (
							<>
								<div className='p-inputgroup'>
									<span className='p-inputgroup-addon'>cm</span>
									<InputNumber
										inputId={field.name}
										onValueChange={(e) => field.onChange(e)}
										value={field.value}
									/>
								</div>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='depth'>
						Depth
					</label>

					<Controller
						control={control}
						name='depth'
						render={({ field }) => (
							<>
								<div className='p-inputgroup'>
									<span className='p-inputgroup-addon'>cm</span>
									<InputNumber
										inputId={field.name}
										onValueChange={(e) => field.onChange(e)}
										value={field.value}
									/>
								</div>
								{getFormErrorMessage(field.name)}
							</>
						)}
					/>
				</div>

				<div className='mb-4'>
					<label className='mb-2 block text-color-secondary' htmlFor='weight'>
						Weight
					</label>

					<Controller
						control={control}
						name='weight'
						render={({ field }) => (
							<>
								<div className='p-inputgroup'>
									<span className='p-inputgroup-addon'>kg</span>
									<InputNumber
										inputId={field.name}
										onValueChange={(e) => field.onChange(e)}
										value={field.value}
									/>
								</div>
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
