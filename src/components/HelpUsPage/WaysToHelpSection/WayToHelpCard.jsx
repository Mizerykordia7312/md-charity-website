import classes from './WayToHelpCard.module.scss';

const WayToHelpCard = ({ title, description, contact, secondContact }) => {
	return (
		<div className={classes.container}>
			<h3>{title}</h3>
			<p>{description}</p>
			<p className={classes.contact}>{contact}</p>
			<p className={classes.secondContact}>{secondContact}</p>
		</div>
	);
};

export default WayToHelpCard;
