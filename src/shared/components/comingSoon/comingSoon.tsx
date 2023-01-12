import ClockEmoji from 'assets/images/emoji/clock.png';
import './comingSoon.scss';

const ComingSoon = () => {
	return (
		<div className='coming-soon  flex flex--column align-items--center justify-content--center'>
			<img className='object-fit--cover' src={ClockEmoji} alt='coming-soon' />
			<h1 className='font--bold text--success-500 text--center mt--10'>Coming soon</h1>
			<p className='font-size--lg font-medium text--center mt--10'>
				We are working to serve you the best experience of this feature. <br /> Stay tuned for next update.
			</p>
		</div>
	);
};

export default ComingSoon;
