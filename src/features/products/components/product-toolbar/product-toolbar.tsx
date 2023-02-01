import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'

import { ProductMode } from '~/features/products/types/products.types'
import { AuthRestrictedUI } from '~/features/auth/components/auth-restricted-ui/auth-restricted-ui'

interface Props {
	setProductMode: (value: ProductMode) => void
	[x: string]: any
}

export const ProductToolbar = ({ setProductMode, ...rest }: Props) => {
	const rightContents = (
		<AuthRestrictedUI permission='products.create'>
			<Button
				icon='pi pi-plus'
				className='mr-2 font-medium'
				onClick={() => setProductMode('isCreate')}>
				<span className='ml-2'>Add new product</span>
			</Button>
		</AuthRestrictedUI>
	)

	return (
		<div>
			<Toolbar left={<h2>Products</h2>} right={rightContents} {...rest} className='mb-3' />
		</div>
	)
}
