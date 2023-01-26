import { Navigation } from '~/layouts/components/navigation/navigation'
import { PageContainer } from '~/layouts/components/page-container/page-container'

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export const AuthenticatedLayout = ({ children }: Props) => {
	return (
		<PageContainer>
			<Navigation />
			{children}
		</PageContainer>
	)
}
