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
	const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
	const [isFilterSectionOpen, setFilterSectionOpen] = useState(false);
	const [availableCausines, setAvailableCausines] = useState<string[]>([]);
	const [selectedCausines, setSelctedCausines] = useState<string[]>([]);
	const [filterParams, setFilterParams] = useState<Record<string, string>>(); //Not using this as I am having a issue with filter query in APi

	const fetchRestaurants = useCallback(async (filterParams: Record<string, string>) => {
		try {
			setLoading(true);
			const result = await HttpService.get(API_CONFIG.path.allRestaurant, { ...filterParams });
			setRestaurnats(result.allRestaurants);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchRestaurants(filterParams as Record<string, string>);
	}, [fetchRestaurants, filterParams]);

	useEffect(() => {
		if (!isEmpty(restaurants)) getCusineValues(restaurants);
	}, [restaurants]);

	const getCusineValues = (restaurant: IRestaurant[]) => {
		let temp: string[] = [];
		restaurant.map((item) => (temp = [...temp, ...JSON.parse(item.restaurantCuisine)]));
		const convertedSet = new Set(temp);
		setAvailableCausines(Array.from(convertedSet));
	};

	const handleFilterParams = useCallback(
		(key: string, value: string) => {
			const currentFilters = { ...filterParams };
			currentFilters[key] = value;
			setFilterParams({ ...currentFilters });
		},
		[filterParams]
	);

	const handleSelectCausin = useCallback(
		(value: string) => {
			const currentSelected = [...selectedCausines];
			if (!value) {
				setSelctedCausines([]); //When use selectes all then reset all selected causines
				return;
			}
			if (currentSelected.includes(value)) {
				const causineIndex = currentSelected.findIndex((item) => item === value);
				currentSelected.splice(causineIndex, 1);
			} else {
				currentSelected.push(value);
			}
			setSelctedCausines([...currentSelected]);
		},
		[selectedCausines]
	);

	const handleSelectCategory = useCallback(
		(value: string) => {
			const currentSelected = [...selectedCategory];
			if (!value) {
				if (!isEmpty(currentSelected)) handleFilterParams('restaurantCategory', '');
				setSelectedCategory([]);
				return;
			}
			if (currentSelected.includes(value)) {
				const categoryIndex = currentSelected.findIndex((item) => item === value);
				currentSelected.splice(categoryIndex, 1);
			} else {
				currentSelected.push(value);
			}
			setSelectedCategory([...currentSelected]);
			handleFilterParams('restaurantCategory', JSON.stringify(currentSelected));
		},
		[selectedCategory, handleFilterParams]
	);

	const handleApplyFilters = useCallback(() => {
		handleFilterParams('restaurantCuisine', isEmpty(selectedCausines) ? '' : JSON.stringify(selectedCausines));
		setFilterSectionOpen(false);
	}, [selectedCausines, handleFilterParams]);

	return (
		<section className='home-page'>
			<FilterSection handleOpenFilter={() => setFilterSectionOpen(true)} />
			<Categories handleSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
			<Restaurants loading={loading} restaurants={restaurants} />
			{isFilterSectionOpen && (
				<FilterModel
					causines={availableCausines}
					handleModelClose={() => {
						setFilterSectionOpen(false);
						setSelctedCausines([]);
					}}
					selectedCausin={selectedCausines}
					handleSelectCausines={handleSelectCausin}
					handleApplyFilters={handleApplyFilters}
				/>
			)}
		</section>
	);
};

export default HomePageContainer;
