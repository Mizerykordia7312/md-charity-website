import HelpedCart from '../components/HelpedCart';
import styles from './AchievementsPage.module.scss';
import { helpedCartData } from '../data/helped-data';

const AchievmentsPage = () => {
	return (
		<>
			<h1>Dzięki Wam mogliśmy pomóc:</h1>

			<div className={styles.wrapper}>
				{helpedCartData.map((cart, index) => {
					return (
						<HelpedCart
							img={cart.img}
							description={cart.description}
							alt={cart.alt}
							key={index}
						/>
					);
				})}
			</div>
		</>
	);
};

export default AchievmentsPage;
