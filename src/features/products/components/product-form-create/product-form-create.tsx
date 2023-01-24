import { Dialog } from 'primereact/dialog'

import { Product } from '~/features/products/types/products.types'
import { ProductForm } from '~/features/products/components/product-form/product-form'

interface Props {
	isAddMode: boolean
	onSubmit: (product: Product) => void
	setIsAddMode: (value: boolean) => void
}

export const ProductFormCreate = ({ isAddMode, onSubmit, setIsAddMode }: Props) => {
	return (
		<Dialog
			header='Add new product'
			visible={isAddMode}
			style={{ width: '50vw' }}
			onHide={() => setIsAddMode(false)}>
			<ProductForm onSubmit={onSubmit} />
		</Dialog>
	)
}
