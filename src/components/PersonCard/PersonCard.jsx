import classes from './PersonCard.module.scss';
import { useNavigate } from 'react-router-dom';

const PersonCard = ({ img, title, description, alt, href, isMember, role }) => {
	const navigate = useNavigate();

	const changeSite = (address) => {
		navigate(`/achievements/podopieczni/${address}`);
	};

	return (
		<div className={`${classes.card} ${isMember ? classes.stopHover : ''}`}>
			<div className={classes.imgContainer}>
				<img src={img} alt={alt} />
			</div>
			<div className={classes.descriptionContainer}>
				<h3>{title}</h3>
				{isMember && <p className={classes.role}>{role}</p>}
				<p>{description}</p>
			</div>

			{!isMember && (
				<button
					className={classes.supportButton}
					onClick={() => changeSite(href)}
				>
					Czytaj więcej
				</button>
			)}
		</div>
	);
};

export default PersonCard;
