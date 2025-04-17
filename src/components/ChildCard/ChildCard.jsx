import classes from './ChildCard.module.scss';
import { useNavigate } from 'react-router-dom';

const ChildCard = ({ img, title, description, alt, href }) => {
	const navigate = useNavigate();

	const changeSite = (address) => {
		navigate(`/achievements/podopieczni/${address}`);
	};

	return (
		<div className={classes.card}>
			<div className={classes.imgContainer}>
				<img src={img} alt={alt} />
			</div>
			<div className={classes.descriptionContainer}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<button
				className={classes.supportButton}
				onClick={() => changeSite(href)}
			>
				Czytaj więcej
			</button>
		</div>
	);
};

export default ChildCard;
