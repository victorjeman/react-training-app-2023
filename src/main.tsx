import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app'
import { ToastProvider } from '~/common/hooks/use-toast'

import { UserProvider } from '~/features/auth/hooks/use-auth'

import './common/styles/elements.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import './common/styles/primereact-theme-override.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<ToastProvider>
					<App />
				</ToastProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
