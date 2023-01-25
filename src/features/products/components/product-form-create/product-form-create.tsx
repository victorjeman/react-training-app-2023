import { Dialog } from 'primereact/dialog'

import { Product, ProductMode } from '~/features/products/types/products.types'
import { ProductForm } from '~/features/products/components/product-form/product-form'

interface Props {
	productMode: ProductMode
	onSubmit: (product: Product) => void
	setProductMode: (value: ProductMode) => void
}

export const ProductFormCreate = ({ productMode, onSubmit, setProductMode }: Props) => {
	return (
		<Dialog
			header='Add new product'
			visible={productMode === 'isCreate'}
			style={{ width: '50vw' }}
			onHide={() => setProductMode('isDefault')}>
			<ProductForm onSubmit={onSubmit} />
		</Dialog>
	)
}
