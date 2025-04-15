import { useNavigate } from 'react-router-dom';
import styles from './HelpedCard.module.scss';

const HelpedCart = ({ imageDescription, description, img, href }) => {
	const navigate = useNavigate();

	const changeSite = (address) => {
		navigate(`/achievements/${address}`);
	};

	return (
		<div className={styles.helpedCart} onClick={() => changeSite(href)}>
			<img src={img} alt={imageDescription} />
			<div className={styles.description}>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default HelpedCart;
