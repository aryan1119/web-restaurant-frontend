import { useLocation, useNavigate } from 'react-router-dom';
import { EmailIcon, HomeIcon, Logo, MenuIcon, OrderIcon, SettingIcon, SupportIcon } from '../icons/icons';
import './sidebar.scss';

interface ILinksArray {
	title: string;
	path: string;
	icon: JSX.Element;
}
const Links: ILinksArray[] = [
	{
		title: 'Home',
		path: '/restaurants',
		icon: <HomeIcon className='width--24px icon height--24px fill--grey-100' />
	},
	{
		title: 'Orders',
		path: '/orders',
		icon: <OrderIcon className='width--24px icon height--24px fill--grey-100' />
	},
	{
		title: 'Notification',
		path: '/notification',
		icon: <EmailIcon className='width--24px icon height--24px fill--grey-100' />
	},
	{
		title: 'Help & Support',
		path: '/support',
		icon: <SupportIcon className='width--24px icon height--24px fill--grey-100' />
	},
	{
		title: 'Settings',
		path: '/setting',
		icon: <SettingIcon className='width--24px icon height--24px fill--grey-100' />
	}
];

const Sidebar: React.FC = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<div className='sidebar-wrapper position--fixed left--0 top--0 width--full bg--grey-300 flex flex--column justify-content--between'>
			<div>
				<div className='logo ml--16'>
					<Logo className='icon' /> <span className='font-size--lg font--bold ml--5'>Pomo & co</span>
				</div>
				<div className='links'>
					<ul className='no---margin'>
						{Links.map((link) => (
							<li
								key={link.title}
								className={`mt--32 cursor--pointer transition link flex align-items--center text--grey-400 ${
									pathname.includes(link.path) ? 'active' : ''
								}`}
								onClick={() => navigate(link.path)}
							>
								<span className='mr--25 ml--16 icon-wrapper flex'>{link.icon}</span>
								{link.title}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='bottom-panel'>
				<div className='user-info flex justify-content--between align-items--center'>
					<div className='user'>
						<p className='font-size--sm line-height--24 font--bold'>Mark Clarke</p>
						<p className='text--grey-400 font-size--xxs'>markclarke@gmail.com</p>
					</div>
					<MenuIcon className='width--24px height--24px fill--black' />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
