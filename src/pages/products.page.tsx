import { AuthenticatedLayout } from '~/layouts/Authenticated.layout'
import { ProductList } from '~/features/products/components/product-list/product-list'

export const ProductsPage = () => {
	return (
		<AuthenticatedLayout>
			<ProductList />
		</AuthenticatedLayout>
	)
}
