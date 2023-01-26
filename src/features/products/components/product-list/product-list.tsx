import { useState } from 'react'
import useSWR from 'swr'

import { PRODUCTS_ENDPOINT, REVIEWS_ENDPOINT } from '~/features/products/constants/product.const'
import { ProductMode, Product } from '~/features/products/types/products.types'

import { useToast } from '~/common/hooks/useToast'

import {
	createProductAPI,
	deleteProductAPI,
	readProductsAPI,
	readReviewsAPI,
	readSingleProductAPI,
	updateProductAPI,
} from '~/features/products/api/product-api'

import { ProductDetails } from '~/features/products/components/product-details/product-details'
import { ProductToolbar } from '~/features/products/components/product-toolbar/product-toolbar'
import { ProductFormUpdate } from '~/features/products/components/product-form-update/product-form-update'
import { ProductFormCreate } from '~/features/products/components/product-form-create/product-form-create'
import { ProductTable } from '~/features/products/components/product-table/product-table'

export const ProductList = () => {
	const [activeProductID, setActiveProductID] = useState<string | undefined>(undefined)
	const [productMode, setProductMode] = useState<ProductMode>('isDefault')

	const { showToast } = useToast()

	const {
		isLoading,
		data: products,
		mutate: mutateProducts,
	} = useSWR(PRODUCTS_ENDPOINT, readProductsAPI)

	const { data: activeProduct } = useSWR(
		activeProductID ? `${PRODUCTS_ENDPOINT}/${activeProductID}` : null,
		readSingleProductAPI,
	)

	const { data: productReviews } = useSWR(
		activeProductID ? `${PRODUCTS_ENDPOINT}/${activeProductID}/${REVIEWS_ENDPOINT}` : null,
		readReviewsAPI,
	)

	const createProductMutation = async (newProduct: Product) => {
		try {
			await createProductAPI(newProduct)
			mutateProducts()
			showToast({ summary: 'Product created successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'Product creation failed!', severity: 'error' })
		}
	}

	const updateProductMutation = async (productToUpdate: Product) => {
		try {
			await updateProductAPI(productToUpdate)
			mutateProducts()
			showToast({ summary: 'Product updated successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'Product update failed!', severity: 'error' })
		}
	}

	const deleteProductMutation = async (productToDeleteID: string | undefined) => {
		try {
			await deleteProductAPI(productToDeleteID)
			mutateProducts()
			showToast({ summary: 'Product deleted successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'Product delete failed!', severity: 'error' })
		}
	}

	return (
		<div>
			{isLoading ? (
				<p>loading products</p>
			) : (
				<div className='card'>
					<ProductToolbar setProductMode={setProductMode} />

					<ProductDetails
						activeProduct={activeProduct}
						productReviews={productReviews}
						productMode={productMode}
						setProductMode={setProductMode}
					/>

					<ProductFormCreate
						productMode={productMode}
						setProductMode={setProductMode}
						onSubmit={createProductMutation}
					/>

					<ProductFormUpdate
						activeProduct={activeProduct}
						productMode={productMode}
						setProductMode={setProductMode}
						onSubmit={updateProductMutation}
					/>

					<ProductTable
						products={products}
						setProductMode={setProductMode}
						setActiveProductID={setActiveProductID}
						deleteProductMutation={deleteProductMutation}
					/>
				</div>
			)}
		</div>
	)
}
