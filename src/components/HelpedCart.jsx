import styles from './HelpedCart.module.scss';

const HelpedCart = ({ imageDescription, description, img }) => {
	return (
		<div className={styles.helpedCart}>
			<img src={img} alt={imageDescription} />
			<div className={styles.description}>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default HelpedCart;
