import ChildCart from '../../components/ChildCard/ChildCard';
import classes from './BeneficiariesPage.module.scss';
import childrenData from '../../data/children-data';

const BeneficiariesPage = (params) => {
	return (
		<>
			<h1>Podopieczni</h1>

			<div className={classes.wrapper}>
				{childrenData.map((childData, index) => {
					return (
						<ChildCart
							key={index}
							img={childData.img}
							title={childData.title}
							description={childData.shortDescription}
							alt={childData.alt}
						/>
					);
				})}
			</div>
		</>
	);
};

export default BeneficiariesPage;
