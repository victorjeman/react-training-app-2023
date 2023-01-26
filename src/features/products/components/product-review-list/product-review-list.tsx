import { ProductReviewItem } from '~/features/products/components/product-review-item/product-review-item'
import { ProductReview } from '~/features/products/types/products.types'

interface Props {
	productReviews: ProductReview[] | undefined
}

export const ProductReviewList = ({ productReviews }: Props) => {
	return (
		<ul className='m-0 p-0 list-none'>
			{productReviews?.map((review) => (
				<li key={review.id} className='mb-2'>
					<ProductReviewItem review={review}></ProductReviewItem>
				</li>
			))}
		</ul>
	)
}
