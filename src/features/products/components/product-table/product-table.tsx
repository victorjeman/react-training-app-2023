import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup'

import { Product, ProductMode } from '~/features/products/types/products.types'
import { AuthRestrictedUI } from '~/features/auth/components/auth-restricted-ui/auth-restricted-ui'

interface Props {
	products: Product[]
	setProductMode: (value: ProductMode) => void
	setActiveProductID: (productID: string | undefined) => void
	deleteProductMutation: (productToDeleteID: string | undefined) => void
}

export const ProductTable = ({
	products,
	setProductMode,
	setActiveProductID,
	deleteProductMutation,
}: Props) => {
	const actionsBodyTemplate = (product: Product) => {
		const confirm = (event: React.SyntheticEvent, productToDeleteID: string | undefined) => {
			confirmPopup({
				// @ts-ignore
				target: event!.currentTarget,
				message: 'Are you sure you want to proceed?',
				icon: 'pi pi-exclamation-triangle',
				accept: () => deleteProductMutation(productToDeleteID),
			})
		}

		return (
			<>
				<Button
					tooltip='view product details'
					tooltipOptions={{ position: 'top' }}
					icon='pi pi-eye'
					className='p-button-rounded p-button-primary p-button-text mr-1'
					onClick={() => {
						setActiveProductID(product.id)
						setProductMode('isRead')
					}}
				/>

				<AuthRestrictedUI permission='products.update'>
					<Button
						tooltip='edit this product'
						tooltipOptions={{ position: 'top' }}
						icon='pi pi-pencil'
						className='p-button-rounded p-button-secondary p-button-text mr-3'
						onClick={() => {
							setActiveProductID(product.id)
							setProductMode('isUpdate')
						}}
					/>
				</AuthRestrictedUI>

				<AuthRestrictedUI permission='products.delete'>
					<Button
						tooltip='delete this product'
						tooltipOptions={{ position: 'top' }}
						icon='pi pi-trash'
						className='p-button-rounded p-button-danger p-button-text'
						onClick={(event) => confirm(event, product.id)}
					/>
					<ConfirmPopup />
				</AuthRestrictedUI>
			</>
		)
	}

	return (
		<DataTable value={products} responsiveLayout='scroll'>
			<Column field='name' header='Name'></Column>
			<Column field='price.value' header='Price'></Column>

			{/* Challenge 1 hint */}

			<Column
				header='Actions'
				body={actionsBodyTemplate}
				exportable={false}
				className='flex justify-content-end'></Column>
		</DataTable>
	)
}
