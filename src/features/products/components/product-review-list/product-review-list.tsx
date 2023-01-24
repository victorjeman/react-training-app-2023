import useSWR from 'swr'

import { REVIEWS_ENDPOINT as cacheKey } from '~/features/products/constants/product.const'

import { readReviewsAPI } from '~/features/products/api/product-api'
import { ProductReviewItem } from '~/features/products/components/product-review-item/product-review-item'

interface Props {
	productID: string | undefined
}

export const ProductReviewList = ({ productID }: Props) => {
	const { isLoading, data: reviews } = useSWR(`${cacheKey}/${productID}`, readReviewsAPI)

	return (
		<div>
			{isLoading && <>Loading product review</>}

			<ul className='m-0 p-0 list-none'>
				{!isLoading &&
					reviews?.map((review) => (
						<li key={review.id} className='mb-2'>
							<ProductReviewItem review={review}></ProductReviewItem>
						</li>
					))}
			</ul>
		</div>
	)
}
