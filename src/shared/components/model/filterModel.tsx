import { useRef } from 'react';
import { CloseIcon, FireIcon } from 'shared/components/icons/icons';
import useOnClickOutside from 'shared/hooks/useOutsideClick';
import Model from './model';

interface IProps {
	handleModelClose: () => void;
	selectedCausin: string[];
	causines: string[];
	handleSelectCausines: (causine: string) => void;
	handleApplyFilters: () => void;
}

const FilterModel: React.FC<IProps> = (props) => {
	const { handleModelClose, selectedCausin, causines, handleSelectCausines, handleApplyFilters } = props;
	const ref = useRef(null);
	useOnClickOutside(ref, handleModelClose);

	return (
		<Model className='filter'>
			<div
				ref={ref}
				className='wrapper flex flex--column align-items--center bg--white border-radius--xxl width--full position--relative bg--white'
			>
				<div className='flex flex--column align-items--center justify-content--between height--full'>
					<div>
						<div className='flex align-items--center justify-content--between mb--48'>
							<p className='text--black font-size--24 line-height--32 font--bold'>Search filters</p>
							<button
								className='btn action bg--grey-300 flex justify-content--center align-items--center'
								onClick={handleModelClose}
							>
								<CloseIcon className='width--16px fill--black' />
							</button>
						</div>
						<h2 className='text--black font-size--24 line-height--32 font--bold mb--32'>Sort by</h2>
						<div className='flex align-items--center mb--48'>
							<button className='btn action mr--16'>
								<FireIcon className='width--16px height--16' />
							</button>
							<p className='text--orange font-size--browser-default line-height--24 font--bold'>open</p>
						</div>
						<h2 className='text--black font-size--24 line-height--32 font--bold mb--32'>Cuisine</h2>
						<div className='flex flex--wrap'>
							<button
								className={`btn transition causine mb--10 flex justify-content--center text--grey-400 mr--10 align-items--center small border-radius--default ${
									!selectedCausin.length ? 'selected' : 'bg--grey-300'
								}`}
								onClick={() => handleSelectCausines('')}
							>
								All
							</button>
							{causines.map((item) => (
								<button
									className={`btn transition causine mb--10 flex justify-content--center text--grey-400 mr--10 align-items--center small border-radius--default ${
										selectedCausin.includes(item) ? 'selected' : 'bg--grey-300'
									}`}
									key={item}
									onClick={() => handleSelectCausines(item)}
								>
									{item}
								</button>
							))}
						</div>
					</div>
					<div className='apply-filter width--full'>
						<button
							onClick={handleApplyFilters}
							className='apply--button bg--primary width--full text--white font--bold font-size--xxl line-height--32'
						>
							Apply filters
						</button>
					</div>
				</div>
			</div>
		</Model>
	);
};

export default FilterModel;
