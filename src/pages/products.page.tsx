import { PrivateLayout } from '~/layouts/private.layout'
import { ProductList } from '~/features/products/components/product-list/product-list'

export const ProductsPage = () => {
	return (
		<PrivateLayout>
			<ProductList />
		</PrivateLayout>
	)
}
