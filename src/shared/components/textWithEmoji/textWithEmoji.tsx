interface IProps {
	text: string;
	emoji: string;
	className?: string;
}

const TextWithEmoji: React.FC<IProps> = (props) => {
	const { emoji, text, className } = props;
	return (
		<p className={`flex align-items--center text--grey-400 ${className || ''}`}>
			<span className='mr--10'>
				<img className='width--24px' src={emoji} alt='emoji' />
			</span>
			<span className='text--grey-400' dangerouslySetInnerHTML={{ __html: text }} />
		</p>
	);
};

export default TextWithEmoji;
