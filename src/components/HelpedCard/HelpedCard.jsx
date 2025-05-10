import { useNavigate } from 'react-router-dom';
import styles from './HelpedCard.module.scss';
import { Link } from 'react-router-dom';

const HelpedCart = ({
	imageDescription,
	description,
	img,
	href,
	hasButton,
}) => {
	const navigate = useNavigate();

	const changeSite = (address) => {
		navigate(`/pomoglismy/${address}`);
	};

	return (
		<div
			className={`${styles.helpedCart} ${
				hasButton ? styles.noHoverEffect : ''
			}`}
			onClick={!hasButton ? () => changeSite(href) : undefined}
		>
			<img src={img} alt={imageDescription} />
			{!hasButton && (
				<div className={styles.description}>
					<p>{description}</p>
				</div>
			)}
			{hasButton && (
				<Link to={href} target='blank'>
					<button>{description}</button>
				</Link>
			)}
		</div>
	);
};

export default HelpedCart;
