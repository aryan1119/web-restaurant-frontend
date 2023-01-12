import { useMemo } from 'react';

interface IProps {
	categories: { [key: string]: number };
	handleCategorySelect: (category: string) => void;
	selectedCategory: string;
}

const MenuCategories: React.FC<IProps> = (props) => {
	const { categories, handleCategorySelect, selectedCategory } = props;
	const convertedCategory: string[] = useMemo(() => Object.keys(categories), [categories]);

	return (
		<div className='categories flex flex--wrap mt--40'>
			{convertedCategory.map((category) => (
				<button
					className={`btn transition small category font-size--sm mr--10 mb--20 ${
						selectedCategory === category ? 'bg--primary text--white' : 'bg--grey-300 text--grey-400'
					} border-radius--md`}
					onClick={() => handleCategorySelect(category)}
					key={category}
				>{`${category} (${categories[category]})`}</button>
			))}
			<button
				className={`btn transition small category font--medium font-size--sm  mb--20 bg--red-200 text--white border-radius--md`}
				onClick={() => handleCategorySelect('')}
			>
				Clear category
			</button>
		</div>
	);
};

export default MenuCategories;
