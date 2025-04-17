import classes from '../AchievementsPages/ChildPage.module.scss';
import ChildStoryCard from '../../components/ChildStoryCard/ChildStoryCard';
import childrenData from '../../data/children-data';
import { useParams } from 'react-router-dom';

const ChildPage = () => {
	const { childID } = useParams();
	let index = 0;

	const show = () => {
		if (childID === 'bartek') {
			index = 0;
		} else if (childID === 'miłosz') {
			index = 1;
		} else if (childID === 'marika') {
			index = 2;
		} else if (childID === 'kuba') {
			index = 3;
		}
	};

	show();

	return (
		<>
			<div className={classes.wrapper}>
				<ChildStoryCard
					photo={childrenData[index].secondImg}
					title={childrenData[index].title}
					description={childrenData[index].longDescription}
					price={childrenData[index].price}
					alt={childrenData[index].alt}
				/>
			</div>
		</>
	);
};

export default ChildPage;
