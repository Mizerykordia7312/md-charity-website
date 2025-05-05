import HelpedCard from '../../components/HelpedCard/HelpedCard';
import styles from './AchievementsPage.module.scss';
import { helpedCartData } from '../../data/helped-data';
import { Outlet, useLocation } from 'react-router-dom';

const AchievmentsPage = () => {
	const location = useLocation();

	const isExactAchievementsPath = location.pathname === '/achievements';

	return (
		<>
			{isExactAchievementsPath && (
				<>
					<h1>Dzięki Wam mogliśmy pomóc:</h1>

					<div className={styles.wrapper}>
						{helpedCartData.map((cart, index) => {
							return (
								<HelpedCard
									img={cart.img}
									description={cart.description}
									alt={cart.alt}
									key={index}
									href={cart.href}
									hasButton={false}
								/>
							);
						})}
					</div>
				</>
			)}

			<Outlet />
		</>
	);
};

export default AchievmentsPage;
