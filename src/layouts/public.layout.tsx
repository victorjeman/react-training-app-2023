import { Navigation } from '~/layouts/components/navigation/navigation'
import { PageContainer } from '~/layouts/components/page-container/page-container'

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export const PublicLayout = ({ children }: Props) => {
	return (
		<PageContainer>
			<Navigation />

			<h1>Authenticate to see our secrets!</h1>

			{children}
		</PageContainer>
	)
}
