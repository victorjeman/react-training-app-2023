import { createContext, useContext, useRef } from 'react'
import { Toast } from 'primereact/toast'

interface ShowToastProps {
	summary: string
	severity: 'success' | 'error'
}

interface ToastProviderProps {
	children: React.ReactNode
}

// @ts-ignore
const toastContext = createContext<{ showToast: (props: ShowToastProps) => void }>(null)

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const showToast = ({ summary, severity }: ShowToastProps) => {
		if (!toast.current) return

		toast.current.show({
			severity,
			summary,
			life: 2000,
		})
	}

	const toast = useRef<Toast>(null)

	return (
		<toastContext.Provider value={{ showToast }}>
			<Toast ref={toast} position='top-left' />

			{children}
		</toastContext.Provider>
	)
}

export const useToast = () => {
	return useContext(toastContext)
}
