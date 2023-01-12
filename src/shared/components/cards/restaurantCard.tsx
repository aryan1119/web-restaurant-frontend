import { IRestaurant } from 'features/home/interface/interface';

interface IProps {
	item: IRestaurant;
}

const RestaurantCard: React.FC<IProps> = (props) => {
	const { item } = props;
	const { restaurantImage, isOpen, restaurantDescription, restaurantName } = item;

	return (
		<div className='card animated animate__fadeIn restaurant'>
			<img className='image border-radius--xl width--full' src={restaurantImage} alt='Restaurant Image' />
			<div className='flex justify-content--between info mt--16 mb--10'>
				<p>{restaurantName}</p>
				<div
					className={`status border-radius--sm flex justify-content--center align-items--center ${
						isOpen ? 'open' : 'closed'
					}`}
				>
					<p className='text--primary font-size--xxs font--semi-bold'>{isOpen ? 'Open Now' : 'Closed'}</p>
				</div>
			</div>
			<p className='font-size--xs truncate-lines--3 line-height--18' title={restaurantDescription}>
				{restaurantDescription}
			</p>
		</div>
	);
};

export default RestaurantCard;
