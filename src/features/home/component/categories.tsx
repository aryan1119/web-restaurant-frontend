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
interface IProps {
	handleSelectCategory: (category: string) => void;
	selectedCategory: string[];
}
const Categories: React.FC<IProps> = (props) => {
	const { handleSelectCategory, selectedCategory } = props;
	return (
		<div className='category-wrapper mt--50'>
			<h4 className='small font--bold'>Category</h4>
			<div className='categories mt--30 flex flex--wrap'>
				{categories.map((category) => (
					<div
						onClick={() => handleSelectCategory(category.title)}
						key={category.title}
						className='flex align-items--center mr--40 cursor--pointer mb--15'
						title='Select category'
					>
						<button
							className={`btn  flex justify-content--center mr--15 align-items--center action ${
								selectedCategory.includes(category.title) ? 'bg--primary' : 'bg--grey-300'
							}`}
						>
							<img className='image' src={category.logo} alt='' />
						</button>
						<p className={`font--bold ${selectedCategory.includes(category.title) ? 'text--primary' : ''}`}>
							{category.title}
						</p>
					</div>
				))}
				<button
					className={`btn transition medium category font--medium font-size--sm mr--10 mb--20 bg--red-200 text--white border-radius--md`}
					onClick={() => handleSelectCategory('')}
				>
					Clear category
				</button>
			</div>
		</div>
	);
};

export default Categories;
