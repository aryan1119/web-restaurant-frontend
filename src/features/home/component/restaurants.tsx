import RestaurantCard from 'shared/components/cards/restaurantCard';
import Spinner from 'shared/spinner/spinner';
import { IRestaurant } from '../interface/interface';

interface IProps {
	restaurants: IRestaurant[];
	loading: boolean;
	selectedCategory: string;
}

const Restaurants: React.FC<IProps> = (props) => {
	const { restaurants, loading, selectedCategory } = props;

	return (
		<div className='restaurant-wrapper mt--40'>
			<h4 className='small font--bold'>Restaurants</h4>
			{loading && <Spinner />}
			{!loading && (
				<div className='card-wrapper flex flex--wrap mt--20'>
					{restaurants
						.filter((categoryParser) =>
							selectedCategory
								? JSON.parse(categoryParser.restaurantCategory).includes(selectedCategory)
								: true
						)
						.map((item) => (
							<RestaurantCard key={item.id} item={item} />
						))}
				</div>
			)}
		</div>
	);
};

export default Restaurants;
