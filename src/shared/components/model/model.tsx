import { useEffect } from 'react';

import { CloseIcon } from 'shared/components/icons/icons';
import { handleAddOverflow, handleRemoveOverflow } from 'shared/util/utility';
import './model.scss';

interface IModalProps extends React.PropsWithChildren {
	className?: string;
	headerClass?: string;
	bodyClass?: string;
	hideCloseBtn?: boolean;
	onClose?: () => void;
}

const Model: React.FC<IModalProps> = (props) => {
	const { onClose, bodyClass, className = true } = props;

	useEffect(() => {
		handleAddOverflow();
		return handleRemoveOverflow;
	}, []);

	return (
		<div className={`modal flex justify-content--end animated animate__fadeIn ${className || ''}`}>
			{onClose && (
				<button
					className='bg--transparent position--absolute top--25 right--25 z-index--1'
					onClick={() => onClose && onClose()}
				>
					<CloseIcon className='width--20px fill--white' />
				</button>
			)}

			<div
				className={`modal__body flex width--full justify-content--end m--auto box-size--border-box ${
					bodyClass || ''
				}`}
			>
				{props.children}
			</div>
		</div>
	);
};

export default Model;
