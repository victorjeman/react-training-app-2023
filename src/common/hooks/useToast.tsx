import { createContext, useContext, useRef } from 'react'
import { Toast } from 'primereact/toast'

interface ShowToastProps {
	summary: string
	severity: 'success' | 'error'
}

// @ts-ignore
const toastContext = createContext<{ showToast: (props: ShowToastProps) => void }>(null)

interface ToastProviderProps {
	children: React.ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const showToast = ({ summary, severity }: ShowToastProps) => {
		if (!toast.current) return

		toast.current.show({
			severity,
			summary,
			life: 3000,
		})
	}

	const toast = useRef<Toast>(null)

	return (
		<toastContext.Provider value={{ showToast }}>
			<Toast ref={toast} />
			{children}
		</toastContext.Provider>
	)
}

export const useToast = () => {
	return useContext(toastContext)
}
