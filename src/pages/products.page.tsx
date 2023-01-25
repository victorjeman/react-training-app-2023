import { PageContainer } from '~/common/components/page-container/page-container'
import { Navigation } from '~/common/components/navigation/navigation'

import { ProductList } from '~/features/products/components/product-list/product-list'

export const ProductsPage = () => {
	return (
		<PageContainer>
			<Navigation />
			<ProductList />
		</PageContainer>
	)
}
