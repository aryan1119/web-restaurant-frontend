import CarrowLogo from 'assets/images/carrow-logo.png';
import BurgerKingLogo from 'assets/images/burger-king-logo.png';
import MacdLogo from 'assets/images/macd-logo.png';
import PizzahutLogo from 'assets/images/pizza-hut-logo.png';

// I am adding category static here. If we want to add category dynamically then we can extract categories from restaurant data.
const categories = [
	{
		title: 'Baked',
		logo: CarrowLogo
	},
	{
		title: 'Sweet',
		logo: BurgerKingLogo
	},
	{
		title: 'Hot Dish',
		logo: PizzahutLogo
	},
	{
		title: 'Fast Food',
		logo: MacdLogo
	},
	{
		title: 'Salads',
		logo: MacdLogo
	}
];

const Categories: React.FC = () => {
	return (
		<div className='category-wrapper'>
			<h4 className='small font--bold'>Category</h4>
			<div className='categories flex'>
				{categories.map((category) => (
					<div key={category.title} className='flex align-items--center mr--40' title='Select category'>
						<button className='btn  flex justify-content--center align-items--center action mr--15 bg--grey-300'>
							<img className='image' src={category.logo} alt='' />
						</button>
						<p className='font--bold'>{category.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
