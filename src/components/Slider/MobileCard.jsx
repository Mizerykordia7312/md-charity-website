import classes from '../Slider/MobileCard.module.scss';

const MobileCart = ({ img, description }) => {
	return (
		<div className={classes.card}>
			<img src={img} alt={description} />
			<h3>{description}</h3>
		</div>
	);
};

export default MobileCart;
