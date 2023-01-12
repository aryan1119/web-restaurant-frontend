import isEmpty from 'lodash/isEmpty';
import { useCallback, useEffect, useState } from 'react';
import FilterModel from 'shared/components/model/filterModel';

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
	const [selectedCategory, setSelectedCategory] = useState('');
	const [isFilterSectionOpen, setFilterSectionOpen] = useState(false);
	const [availableCausines, setAvailableCausines] = useState<string[]>([]);
	// const [filterParams, setFilterParams] = useState<Record<string, string>>({}); //Not using this as I am having a issue with filter query in APi

	const fetchRestaurants = useCallback(async () => {
		try {
			const result = await HttpService.get(API_CONFIG.path.allRestaurant);
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

	useEffect(() => {
		if (!isEmpty(restaurants)) getCusineValues(restaurants);
	}, [restaurants]);

	const getCusineValues = (restaurant: IRestaurant[]) => {
		let temp: string[] = [];
		restaurant.map((item) => (temp = [...temp, ...JSON.parse(item.restaurantCuisine)]));
		const convertedSet = new Set(temp);
		setAvailableCausines(Array.from(convertedSet));
	};

	////Not using this as I am having a issue with filter query in APi
	// const handleFilterParams = (key: string, value: string) => {
	// 	console.log('inside');
	// 	filterParams[key] = value;
	// 	setFilterParams(filterParams);
	// 	setSelectedCategory(value);
	// };

	return (
		<section className='home-page'>
			<FilterSection handleOpenFilter={() => setFilterSectionOpen(true)} />
			<Categories handleSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
			<Restaurants loading={loading} restaurants={restaurants} selectedCategory={selectedCategory} />
			{isFilterSectionOpen && (
				<FilterModel
					causines={availableCausines}
					handleModelClose={() => setFilterSectionOpen(false)}
					selectedCategory=''
				/>
			)}
		</section>
	);
};

export default HomePageContainer;
