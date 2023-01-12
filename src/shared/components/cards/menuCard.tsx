import { IMenu } from 'features/restaurantDetails/interface/interface';
import FoodPlaceholderImage from 'assets/images/placeholder-food.png';
interface IProps {
	item: IMenu;
}
const MenuCard: React.FC<IProps> = (props) => {
	const { item } = props;
	const { itemPhoto, itemCost, itemName } = item;

	return (
		<div className='card cursor--pointer animated animate__fadeIn restaurant menu'>
			<img
				className='image border-radius--xl width--full object-fit--cover'
				src={itemPhoto || FoodPlaceholderImage}
				alt='Food Image'
			/>
			<div className='flex justify-content--between info mt--16 mb--10'>
				<p className='font--bold'>{itemName}</p>
				<p className='text--primary fom--semi-bold'>{itemCost}</p>
			</div>
		</div>
	);
};

export default MenuCard;
