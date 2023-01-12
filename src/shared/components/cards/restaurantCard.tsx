import { useNavigate } from 'react-router';

import { IRestaurant } from 'features/home/interface/interface';
import RestaurantPlaceholder from 'assets/images/restaurant-placeholder.jpeg';

interface IProps {
	item: IRestaurant;
}

const RestaurantCard: React.FC<IProps> = (props) => {
	const { item } = props;
	const { restaurantImage, isOpen, restaurantDescription, restaurantName, id } = item;
	const navigate = useNavigate();

	return (
		<div
			onClick={() => navigate(`/restaurants/${id}`)}
			className='card cursor--pointer animated animate__fadeIn restaurant'
			title='Show Restaurant'
		>
			<img
				className='image border-radius--xl width--full object-fit--cover'
				src={restaurantImage || RestaurantPlaceholder}
				alt='Restaurant Image'
			/>
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
