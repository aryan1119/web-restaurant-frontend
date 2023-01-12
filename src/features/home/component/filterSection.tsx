import {
	FilterIcon,
	LeftArrowIcon,
	MenuIcon,
	RestaurantIcon,
	SearchIcon,
	TrollyIcon
} from 'shared/components/icons/icons';

const FilterSection: React.FC = () => {
	return (
		<div className='flex justify-content--between'>
			<button className='btn action flex align-items--center justify-content--center bg--primary'>
				<LeftArrowIcon className='width--16px fill--white' />
			</button>
			<div className='filter-section flex'>
				<div className='location flex align-items--center justify-content--between'>
					<div className='flex align-items--center'>
						<RestaurantIcon className='width--16px mr--10 fill--primary' />
						<p className='font--size--sm font--semi-bold '>Da Otto</p>
					</div>
					<MenuIcon className='width--16px fill--black' />
				</div>
				<div className='searchbar-field position--relative ml--16'>
					<div className='position--absolute height--full flex align-items--center justify-content--center left--16'>
						<SearchIcon className='icon fill--black' />
					</div>
					<input
						type='text'
						placeholder='Search for Restaurants  (Press Enter to search)'
						className='searchbar-input width--full text--grey-400 font-size--sm bg--grey-300 border-radius--lg'
					/>
				</div>
				<button className='btn action flex align-items--center ml--16 justify-content--center bg--primary'>
					<FilterIcon className='width--16px fill--white' />
				</button>
				<button className='btn action flex align-items--center ml--16 justify-content--center bg--orange'>
					<TrollyIcon className='width--16px fill--white' />
				</button>
			</div>
		</div>
	);
};

export default FilterSection;