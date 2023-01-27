import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'
import { Chip } from 'primereact/chip'
import cx from 'classnames'

import { User, UserMode } from '~/features/users/types/user.types'

interface Props {
	activeUser: User
	userMode: UserMode
	setUserMode: (value: UserMode) => void
}

export const UserDetails = ({ activeUser, userMode, setUserMode }: Props) => {
	return (
		<Sidebar
			visible={userMode === 'isRead'}
			position='left'
			onHide={() => setUserMode('isDefault')}
			className='w-30rem p-2'>
			<h3 className='text-2xl font-normal'>User Details</h3>

			{activeUser && (
				<>
					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>First name</span>
							<span className='col-6 text-right'>{activeUser.firstName}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Last name</span>
							<span className='col-6 text-right'>{activeUser.lastName}</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Email</span>
							<span className='col-6 text-right'>{activeUser.email}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Phone number</span>
							<span className='col-6 text-right'>{activeUser.phoneNumber}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Birth date</span>
							<span className='col-6 text-right'>{activeUser.birthDate}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Gender</span>
							<span className='col-6 text-right'>{activeUser.gender}</span>
						</li>
					</ul>

					<Divider />

					<ul className='list-none m-0 p-0'>
						<li className='grid'>
							<span className='col-6'>Role</span>
							<span className='col-6 text-right'>{activeUser.role}</span>
						</li>

						<li className='grid'>
							<span className='col-6'>Status</span>

							<span className='col-6 text-right'>
								<Chip
									label={activeUser.active ? 'active' : 'inactive'}
									className={cx('text-sm text-white-alpha-90', {
										'bg-green-500 ': activeUser.active,
										'bg-red-500': !activeUser.active,
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
