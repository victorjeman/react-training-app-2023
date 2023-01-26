import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'

import { OrganizationMode } from '~/features/organizations/types/organization.types'

interface Props {
	setOrganizationMode: (value: OrganizationMode) => void
	[x: string]: any
}

export const OrganizationToolbar = ({ setOrganizationMode, ...rest }: Props) => {
	const rightContents = (
		<>
			<Button
				icon='pi pi-plus'
				className='mr-2 font-medium'
				onClick={() => setOrganizationMode('isCreate')}>
				<span className='ml-2'>Add new organization</span>
			</Button>
		</>
	)

	return (
		<div>
			<Toolbar left={<h2>Organizations</h2>} right={rightContents} {...rest} className='mb-3' />
		</div>
	)
}
