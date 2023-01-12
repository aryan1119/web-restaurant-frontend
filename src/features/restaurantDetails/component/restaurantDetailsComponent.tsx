import { IRestaurant } from 'features/home/interface/interface';
import TextWithEmoji from 'shared/components/textWithEmoji/textWithEmoji';
import Clock from 'assets/images/emoji/clock.png';
import Phone from 'assets/images/emoji/phone.png';
import Globe from 'assets/images/emoji/globe.png';
import { formatOpeningHours } from 'shared/util/utility';

interface IProps {
	details: IRestaurant;
}
const RestaurantDetailsComponent: React.FC<IProps> = (props) => {
	const { details } = props;
	const { restaurantImage, openingHours, restaurantDescription, restaurantName } = details;

	return (
		<div className='details flex justify-content--between mt--50'>
			<div className='info width--50 mr--20'>
				<h2 className='small font--bold line-height--40'>{restaurantName}</h2>
				<p className='text--grey-400 mt--5'>{restaurantDescription}</p>
				<TextWithEmoji emoji={Clock} text={formatOpeningHours(openingHours)} className='mt--20' />
				<TextWithEmoji emoji={Phone} text='+91 9687430052' className='mt--10' />
				<TextWithEmoji emoji={Globe} text='https://test.com' className='mt--10' />
			</div>
			<img
				className='image border-radius--xl width--50 object-fit--cover'
				src={restaurantImage}
				alt='restaurant-image'
			/>
		</div>
	);
};

export default RestaurantDetailsComponent;
