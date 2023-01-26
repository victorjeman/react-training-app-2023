import { AuthenticatedLayout } from '~/layouts/Authenticated.layout'

export const HomePage = () => {
	return (
		<AuthenticatedLayout>
			<h1>Home page</h1>
		</AuthenticatedLayout>
	)
}
