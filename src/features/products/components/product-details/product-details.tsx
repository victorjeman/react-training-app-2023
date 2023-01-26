import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'

import { ProductMode, Product, ProductReview } from '~/features/products/types/products.types'
import { ProductReviewList } from '~/features/products/components/product-review-list/product-review-list'

interface Props {
	activeProduct: Product
	productReviews: ProductReview[] | undefined
	productMode: ProductMode
	setProductMode: (value: ProductMode) => void
}

export const ProductDetails = ({
	activeProduct,
	productReviews,
	productMode,
	setProductMode,
}: Props) => {
	return (
		<Sidebar
			visible={productMode === 'isRead'}
			position='left'
			onHide={() => setProductMode('isDefault')}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>Product Details</h3>

			{activeProduct && (
				<>
					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Product name</span>
							<span className='col-6 text-right'>{activeProduct.name}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Price</span>
							<span className='col-6 text-right'>{activeProduct.price?.value}</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Width</span>
							<span className='col-6 text-right'>{activeProduct.size?.width} cm</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Height</span>
							<span className='col-6 text-right'>{activeProduct.size?.height} cm</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Depth</span>
							<span className='col-6 text-right'>{activeProduct.size?.depth} cm</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Manufacturer</span>
							<span className='col-6 text-right'>{activeProduct.manufacturer}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Origin country</span>
							<span className='col-6 text-right'>{activeProduct.originCountry}</span>
						</li>
					</ul>

					<Divider />

					<ProductReviewList productReviews={productReviews} />
				</>
			)}
		</Sidebar>
	)
}
