import MenuCard from 'shared/components/cards/menuCard';
import { IMenu } from '../interface/interface';

interface IProps {
	menu: IMenu[];
	selectedCategory: string;
}

const Menu: React.FC<IProps> = (props) => {
	const { menu, selectedCategory } = props;

	return (
		<div className='menu-wrapper'>
			<h4 className='small font--bold'>Menu</h4>
			<div className='card-wrapper flex flex--wrap'>
				{menu
					.filter((categoryParse) =>
						selectedCategory ? JSON.parse(categoryParse.itemCategory).includes(selectedCategory) : true
					)
					.map((item) => (
						<MenuCard key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default Menu;
