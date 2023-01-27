import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'
import { Chip } from 'primereact/chip'
import cx from 'classnames'

import { Organization, OrganizationMode } from '~/features/organizations/types/organization.types'

interface Props {
	activeOrganization: Organization
	organizationMode: OrganizationMode
	setOrganizationMode: (value: OrganizationMode) => void
}

export const OrganizationDetails = ({
	activeOrganization,
	organizationMode,
	setOrganizationMode,
}: Props) => {
	return (
		<Sidebar
			visible={organizationMode === 'isRead'}
			position='left'
			onHide={() => setOrganizationMode('isDefault')}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>Organization Details</h3>

			{activeOrganization && (
				<>
					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Name</span>
							<span className='col-6 text-right'>{activeOrganization.companyName}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Legal name</span>
							<span className='col-6 text-right'>{activeOrganization.legalName}</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Street and number</span>
							<span className='col-6 text-right'>
								{activeOrganization.address?.streetAndNumber}
							</span>
						</li>

						<li className='grid'>
							<span className='col-6'>City</span>
							<span className='col-6 text-right'>{activeOrganization.address?.city}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Postal code</span>
							<span className='col-6 text-right'>{activeOrganization.address?.postalCode}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Country</span>
							<span className='col-6 text-right'>{activeOrganization.address?.country}</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Status</span>
							<span className='col-6 text-right'>
								<Chip
									label={activeOrganization.active ? 'active' : 'inactive'}
									className={cx('text-sm text-white-alpha-90', {
										'bg-green-500 ': activeOrganization.active,
										'bg-red-500': !activeOrganization.active,
									})}
								/>
							</span>
						</li>
					</ul>
				</>
			)}
		</Sidebar>
	)
}
