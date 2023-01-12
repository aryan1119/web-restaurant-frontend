import RestaurantCard from 'shared/components/cards/restaurantCard';
import Spinner from 'shared/spinner/spinner';
import { IRestaurant } from '../interface/interface';

interface IProps {
	restaurants: IRestaurant[];
	loading: boolean;
}

const Restaurants: React.FC<IProps> = (props) => {
	const { restaurants, loading } = props;

	return (
		<div className='restaurant-wrapper'>
			<h4 className='small font--bold'>Restaurants</h4>
			{loading && <Spinner />}
			{!loading && (
				<div className='card-wrapper flex flex--wrap'>
					{restaurants.map((item) => (
						<RestaurantCard key={item.id} item={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default Restaurants;
