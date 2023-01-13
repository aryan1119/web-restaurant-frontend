import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	ClockIcon,
	CloseIcon,
	EmailIcon,
	HomeIcon,
	Logo,
	MenuIcon,
	OrderIcon,
	RightArrowIcon,
	SettingIcon,
	SupportIcon
} from '../icons/icons';
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
	const [isOrderDetails, setOrderDetails] = useState(true);
	const navigate = useNavigate();

	return (
		<div className='sidebar-wrapper position--fixed left--0 top--0 width--full bg--grey-300 flex flex--column justify-content--between height--full overflow--auto-y'>
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
				{isOrderDetails && (
					<div className='order-ready bg--white position--relative border-radius--xxl flex flex--column align-items--center'>
						<span
							className='position--absolute right--16 cursor--pointer'
							onClick={() => setOrderDetails(false)}
						>
							<CloseIcon className='icon  fill--black width--12px z-index--1' />
						</span>
						<button className='btn wait-btn m--auto mt--10 flex action bg--grey-300 flex align-items--center justify-content--center'>
							<ClockIcon className='width--32px fill--orange' />
						</button>
						<p className='font-size--sm line-height--24 font--semi-bold mt--20 mb--30'>
							Your Order is now Ready
						</p>
						<p className='font-size--xs line-height--18'>Splint Doumo </p>
						<p className='font-size--xs line-height--18'>Order Id: #ED564F </p>
						<button className='btn bg--primary border-radius--lg font--bold mt--30 text--white width--full flex justify-content--between align-items--center position--relative'>
							Details
							<RightArrowIcon className='width--16px height--16px position--absolute right--16' />
						</button>
					</div>
				)}
			</div>
			<div className='user-info mt--50 flex justify-content--between align-items--center'>
				<div className='user'>
					<p className='font-size--sm line-height--24 font--bold'>Mark Clarke</p>
					<p className='text--grey-400 font-size--xxs'>markclarke@gmail.com</p>
				</div>
				<MenuIcon className='width--24px height--24px fill--black' />
			</div>
		</div>
	);
};

export default Sidebar;
