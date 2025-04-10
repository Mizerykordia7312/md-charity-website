import { useNavigate } from 'react-router-dom';
import styles from './HelpedCart.module.scss';

const HelpedCart = ({ imageDescription, description, img }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/achievements/zs16');
	};

	return (
		<div className={styles.helpedCart} onClick={handleClick}>
			<img src={img} alt={imageDescription} />
			<div className={styles.description}>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default HelpedCart;
