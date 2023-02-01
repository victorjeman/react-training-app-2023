import { AuthLogin } from '~/features/auth/components/auth-login/auth-login'
import { PublicLayout } from '~/layouts/public.layout'

export const LoginPage = () => {
	return (
		<PublicLayout>
			<AuthLogin />
		</PublicLayout>
	)
}
