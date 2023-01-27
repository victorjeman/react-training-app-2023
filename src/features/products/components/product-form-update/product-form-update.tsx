import { Sidebar } from 'primereact/sidebar'

import { ProductForm } from '~/features/products/components/product-form/product-form'
import { Product, ProductMode } from '~/features/products/types/products.types'

interface Props {
	activeProduct: Product | null
	productMode: ProductMode
	onSubmit: (product: Product) => void
	setProductMode: (value: ProductMode) => void
}

export const ProductFormUpdate = ({
	activeProduct,
	productMode,
	onSubmit,
	setProductMode,
}: Props) => {
	return (
		<Sidebar
			visible={productMode === 'isUpdate'}
			position='right'
			onHide={() => setProductMode('isDefault')}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>Edit product</h3>

			<ProductForm
				onSubmit={onSubmit}
				productToUpdate={activeProduct}
				setProductMode={setProductMode}
			/>
		</Sidebar>
	)
}
