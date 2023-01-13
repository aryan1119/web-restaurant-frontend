import isEmpty from 'lodash/isEmpty';

import RestaurantCard from 'shared/components/cards/restaurantCard';
import EmptyDataContainer from 'shared/emptyDataContainer/emptyContainer';
import Spinner from 'shared/spinner/spinner';
import { IRestaurant } from '../interface/interface';

interface IProps {
	restaurants: IRestaurant[];
	loading: boolean;
}

const Restaurants: React.FC<IProps> = (props) => {
	const { restaurants, loading } = props;

	return (
		<div className='restaurant-wrapper mt--40'>
			<h4 className='small font--bold'>Restaurants</h4>
			{loading && <Spinner />}
			{!loading && (
				<>
					{isEmpty(restaurants) && <EmptyDataContainer text='No restaurants are available currently' />}
					{!isEmpty(restaurants) && (
						<div className='card-wrapper flex flex--wrap mt--20'>
							{restaurants.map((item) => (
								<RestaurantCard key={item.id} item={item} />
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Restaurants;
