import { Sidebar } from 'primereact/sidebar'

import { ProductForm } from '~/features/products/components/product-form/product-form'
import { Product } from '~/features/products/types/products.types'

interface Props {
	activeProduct: Product | null
	editMode: boolean
	onSubmit: (product: Product) => void
	setIsEditMode: (value: boolean) => void
}

export const ProductFormUpdate = ({ activeProduct, editMode, onSubmit, setIsEditMode }: Props) => {
	return (
		<Sidebar
			visible={editMode}
			position='left'
			onHide={() => setIsEditMode(false)}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>Edit product</h3>

			<ProductForm onSubmit={onSubmit} productToUpdate={activeProduct} />
		</Sidebar>
	)
}
