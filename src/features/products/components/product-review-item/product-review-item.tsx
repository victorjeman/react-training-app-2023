import { Fieldset } from 'primereact/fieldset'
import { Rating } from 'primereact/rating'

import { ProductReview } from '~/features/products/types/products.types'

interface Props {
	review: ProductReview
}

export const ProductReviewItem = ({ review }: Props) => {
	return (
		<Fieldset>
			<Rating stars={10} value={review.rating} readOnly={true} cancel={false} />

			<p>{review.text}</p>

			<p className='mb-0'>
				<strong>- {review.author}</strong>
			</p>
		</Fieldset>
	)
}
