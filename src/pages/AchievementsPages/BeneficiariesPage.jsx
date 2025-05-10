import PersonCard from '../../components/PersonCard/PersonCard';
import classes from './BeneficiariesPage.module.scss';
import childrenData from '../../data/children-data';
import { useLocation, Outlet } from 'react-router-dom';

const BeneficiariesPage = () => {
	const location = useLocation();

	const isAchievementsPage = location.pathname === '/pomoglismy/podopieczni';

	if (!isAchievementsPage) {
		return <Outlet />;
	}

	return (
		<>
			<h1>Nasi podopieczni</h1>

			<div className={classes.wrapper}>
				{childrenData.map((childData, index) => {
					return (
						<PersonCard
							key={index}
							img={childData.img}
							title={childData.title}
							description={childData.shortDescription}
							alt={childData.alt}
							href={childData.href}
						/>
					);
				})}
			</div>
		</>
	);
};

export default BeneficiariesPage;
