import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'

import { Product } from '~/features/products/types/products.types'
import { ProductReviewList } from '~/features/products/components/product-review-list/product-review-list'

interface Props {
	product: Product | null
	isViewMode: boolean
	setIsViewMode: (value: boolean) => void
}

export const ProductDetails = ({ product, isViewMode, setIsViewMode }: Props) => {
	return (
		<Sidebar
			visible={isViewMode}
			position='left'
			onHide={() => setIsViewMode(false)}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>Product Details</h3>

			{product && (
				<>
					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Product name</span>
							<span className='col-6 text-right'>{product.name}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Price</span>
							<span className='col-6 text-right'>{product.price.value}</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Width</span>
							<span className='col-6 text-right'>{product.size.width} cm</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Height</span>
							<span className='col-6 text-right'>{product.size.height} cm</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Depth</span>
							<span className='col-6 text-right'>{product.size.depth} cm</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Manufacturer</span>
							<span className='col-6 text-right'>{product.manufacturer}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Origin country</span>
							<span className='col-6 text-right'>{product.originCountry}</span>
						</li>
					</ul>

					<Divider />

					<ProductReviewList productID={product.id} />
				</>
			)}
		</Sidebar>
	)
}
