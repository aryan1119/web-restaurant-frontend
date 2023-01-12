import { useCallback, useEffect, useState } from 'react';

import { API_CONFIG } from 'shared/constants/api';
import HttpService from 'shared/services/http.service';

import Categories from '../component/categories';
import FilterSection from '../component/filterSection';
import Restaurants from '../component/restaurants';
import '../home-page.scss';
import { IRestaurant } from '../interface/interface';

const HomePageContainer: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [restaurants, setRestaurnats] = useState<IRestaurant[]>([]);

	const fetchRestaurants = useCallback(async () => {
		try {
			const result = await HttpService.get(API_CONFIG.path.allRestaurant, { restaurantCategory: ['asian'] });
			setRestaurnats(result.allRestaurants);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchRestaurants();
	}, [fetchRestaurants]);

	return (
		<section className='home-page'>
			<FilterSection />
			<Categories />
			<Restaurants loading={loading} restaurants={restaurants} />
		</section>
	);
};

export default HomePageContainer;
