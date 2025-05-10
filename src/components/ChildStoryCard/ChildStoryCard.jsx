import classes from './ChildStoryCard.module.scss';
import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChildStoryCard = ({ photo, title, description, price, alt }) => {
	const navigate = useNavigate();

	const backToBenificiaries = () => {
		navigate('/pomoglismy/podopieczni');
	};

	return (
		<div className={classes.container}>
			<MoveLeft
				size={80}
				className={classes.arrow}
				onClick={backToBenificiaries}
			/>
			<img src={photo} alt={alt} />
			<h1>{title}</h1>
			<p>{description}</p>
			<h3>Kwota wsparcia: {price}zł</h3>
		</div>
	);
};

export default ChildStoryCard;
