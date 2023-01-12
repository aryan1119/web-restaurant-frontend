import isEmpty from 'lodash/isEmpty';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FilterSection from 'features/home/component/filterSection';
import { IRestaurant } from 'features/home/interface/interface';

import { API_CONFIG } from 'shared/constants/api';
import HttpService from 'shared/services/http.service';
import Spinner from 'shared/spinner/spinner';
import Menu from '../component/menu';
import MenuCategories from '../component/menuCategories';
import RestaurantDetailsComponent from '../component/restaurantDetailsComponent';
import { IMenu } from '../interface/interface';
import '../restaurantDetails.scss';

const RestaurantDetailContainer: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [restaurantDetails, setRestaurnatDetails] = useState<IRestaurant>({} as IRestaurant);
	const [restaurantMenu, setRestaurantMenu] = useState<IMenu[]>([]);
	const [categories, setCategories] = useState<{ [key: string]: number }>({});
	const [selectedCategory, setSelectedCategory] = useState('');
	const { restaurantId } = useParams();

	const fetchRestaurantDetails = useCallback(async (restaurantId: string | undefined) => {
		try {
			const result = await HttpService.get(`${API_CONFIG.path.restaurantDetails}/${restaurantId}`);
			const detail: IRestaurant = result.restaurantDetail;
			setRestaurnatDetails(detail);
			const menu = await HttpService.get(API_CONFIG.path.menu);
			setRestaurantMenu(getFormattedMenu(menu.menu, detail.restaurantName));
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchRestaurantDetails(restaurantId);
	}, [fetchRestaurantDetails, restaurantId]);

	useEffect(() => {
		if (!isEmpty(restaurantMenu)) getCategories(restaurantMenu);
	}, [restaurantMenu]);

	const getFormattedMenu = (menu: IMenu[], restaurantName: string) => {
		return menu.filter((item) => JSON.parse(item.restaurantName).includes(restaurantName));
	};

	const getCategories = (menu: IMenu[]) => {
		const categories: { [key: string]: number } = {};
		menu.forEach((item) => {
			const categoryArr = JSON.parse(item.itemCategory) || [];
			categoryArr.forEach((category: number) => {
				const currentValue = categories[category] || 0;
				categories[category] = currentValue + 1;
			});
		});
		setCategories(categories);
	};

	return (
		<section className='details-wrapper'>
			<FilterSection fromDetails />
			{loading && <Spinner />}
			{!loading && (
				<>
					<RestaurantDetailsComponent details={restaurantDetails} />
					<MenuCategories
						selectedCategory={selectedCategory}
						handleCategorySelect={setSelectedCategory}
						categories={categories}
					/>
					<Menu selectedCategory={selectedCategory} menu={restaurantMenu} />
				</>
			)}
		</section>
	);
};

export default RestaurantDetailContainer;
