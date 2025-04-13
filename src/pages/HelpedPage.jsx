import { useParams } from 'react-router-dom';
import Slider from '../components/Slider/Slider.jsx';
import SchoolInfoCard from '../components/SchoolInfoCard/SchoolInfoCard.jsx';

import sliderData from '../data/school-data/zs16/slider-data.js';
import cardData from '../data/school-data/zs16/card-data.js';

import lkSliderData from '../data/school-data/lawendowy-król/slider-data.js';
import lkCardData from '../data/school-data/lawendowy-król/card-data.js';

import warczSliderData from '../data/school-data/zsp-warcz/slider-data.js';
import warczCardData from '../data/school-data/zsp-warcz/card-data.js';

import darSliderData from '../data/school-data/dar-gdynia/slider-data.js';
import darCardData from '../data/school-data/dar-gdynia/card-data.js';

const dataMap = {
	'zespół-szkół-nr16': {
		slider: sliderData,
		card: cardData,
	},
	'lawendowy-król': {
		slider: lkSliderData,
		card: lkCardData,
	},
	'sps-warcz': {
		slider: warczSliderData,
		card: warczCardData,
	},
	'szkoła-podstawowa-dar': {
		slider: darSliderData,
		card: darCardData,
	},
};

const HelpedPage = () => {
	const { schoolID } = useParams();
	const currentData = dataMap[schoolID];
	const { card, slider } = currentData;

	return (
		<>
			<div className='wrapper'>
				<SchoolInfoCard
					title={card.title}
					description={card.description}
					description2={card.secondDescription}
					description3={card.thirdDescription}
					description4={card.fourthDescription}
					logo={card.logo}
				/>
				<Slider data={slider} />
			</div>
		</>
	);
};

export default HelpedPage;
