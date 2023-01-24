import { useState } from 'react'
import useSWR from 'swr'

import { Product } from '~/features/products/types/products.types'
import { PRODUCTS_ENDPOINT as cacheKey } from '~/features/products/constants/product.const'

import {
	createProductAPI,
	deleteProductAPI,
	readProductsAPI,
} from '~/features/products/api/product-api'
import {
	createProductOptions,
	deleteProductOptions,
	updateProductOptions,
} from '~/features/products/api/product-swr-options'

import { ProductDetails } from '~/features/products/components/product-details/product-details'
import { ProductToolbar } from '~/features/products/components/product-toolbar/product-toolbar'
import { ProductFormUpdate } from '~/features/products/components/product-form-update/product-form-update'
import { ProductFormCreate } from '~/features/products/components/product-form-create/product-form-create'
import { ProductTable } from '~/features/products/components/product-table/product-table'
import { useToast } from '~/common/hooks/useToast'

export const ProductList = () => {
	const [activeProduct, setActiveProduct] = useState<Product | null>(null)
	const [isAddMode, setIsAddMode] = useState(false)
	const [isEditMode, setIsEditMode] = useState(false)
	const [isViewMode, setIsViewMode] = useState(false)

	const { showToast } = useToast()

	const { isLoading, data: products, mutate: mutateProducts } = useSWR(cacheKey, readProductsAPI)

	const createProductMutation = async (newProduct: Product) => {
		try {
			// version 1
			// await createProductAPI(newProduct)
			// mutateProducts()

			// version 2
			await mutateProducts(createProductAPI(newProduct), createProductOptions(newProduct))
			showToast({ summary: 'Product created successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'Product creation failed!', severity: 'error' })
		}
	}

	const updateProductMutation = async (productToUpdate: Product) => {
		try {
			await mutateProducts(createProductAPI(productToUpdate), updateProductOptions(productToUpdate))
			showToast({ summary: 'Product updated successfully!', severity: 'success' })
		} catch (err) {
			showToast({ summary: 'Product update failed!', severity: 'error' })
		}
	}

	const deleteProductMutation = async (productToDeleteID: string | undefined) => {
		try {
			await mutateProducts(
				deleteProductAPI(productToDeleteID),
				deleteProductOptions(productToDeleteID),
			)
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
					<ProductToolbar setIsAddMode={setIsAddMode} className='mb-4' />

					<ProductDetails
						product={activeProduct}
						isViewMode={isViewMode}
						setIsViewMode={setIsViewMode}
					/>

					<ProductFormCreate
						isAddMode={isAddMode}
						setIsAddMode={setIsAddMode}
						onSubmit={createProductMutation}
					/>

					<ProductFormUpdate
						activeProduct={activeProduct}
						editMode={isEditMode}
						onSubmit={updateProductMutation}
						setIsEditMode={setIsEditMode}
					/>

					<ProductTable
						products={products}
						setIsViewMode={setIsViewMode}
						setIsEditMode={setIsEditMode}
						setActiveProduct={setActiveProduct}
						deleteProductMutation={deleteProductMutation}
					/>
				</div>
			)}
		</div>
	)
}
