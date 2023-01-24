import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'

interface Props {
	setIsAddMode: (value: boolean) => void
	[x: string]: any
}

export const ProductToolbar = ({ setIsAddMode, ...rest }: Props) => {
	const rightContents = (
		<>
			<Button icon='pi pi-plus' className='mr-2 font-medium' onClick={() => setIsAddMode(true)}>
				<span className='ml-2'>Add new product</span>
			</Button>
		</>
	)

	return (
		<div>
			<Toolbar right={rightContents} {...rest} />
		</div>
	)
}
