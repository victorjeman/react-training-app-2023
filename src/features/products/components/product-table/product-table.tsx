import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup'

import { Product, ProductMode } from '~/features/products/types/products.types'

interface Props {
	products: Product[]
	setProductMode: (value: ProductMode) => void
	setActiveProduct: (product: Product) => void
	deleteProductMutation: (productToDeleteID: string | undefined) => void
}

const tableHeader = <div className='table-header'>Products</div>

export const ProductTable = ({
	products,
	setProductMode,
	setActiveProduct,
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
						setProductMode('isRead')
						setActiveProduct(product)
					}}
				/>

				<Button
					tooltip='edit this product'
					tooltipOptions={{ position: 'top' }}
					icon='pi pi-pencil'
					className='p-button-rounded p-button-secondary p-button-text mr-3'
					onClick={() => {
						setActiveProduct(product)
						setProductMode('isUpdate')
					}}
				/>

				<Button
					tooltip='delete this product'
					tooltipOptions={{ position: 'top' }}
					icon='pi pi-trash'
					className='p-button-rounded p-button-danger p-button-text'
					onClick={(event) => confirm(event, product.id)}
				/>
				<ConfirmPopup />
			</>
		)
	}

	return (
		<DataTable value={products} header={tableHeader} responsiveLayout='scroll'>
			<Column field='name' header='Name'></Column>
			<Column field='price.value' header='Price'></Column>
			<Column header='Actions' body={actionsBodyTemplate} exportable={false}></Column>
		</DataTable>
	)
}
