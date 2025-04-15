import classes from './ChildCard.module.scss';
import bartek from '../../assets/img/podopieczni/bartek.jpg';

const ChildCard = ({ img, title, description, alt }) => {
	return (
		<div className={classes.card}>
			<div className={classes.imgContainer}>
				<img src={img} alt={alt} />
			</div>
			<div className={classes.descriptionContainer}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<button className={classes.supportButton}>Czytaj więcej...</button>
		</div>
	);
};

export default ChildCard;

// Marika Sadowska
// Bartek Sidorowicz
// Miłosz Pałaszewski
// Kuba Tarabuła
