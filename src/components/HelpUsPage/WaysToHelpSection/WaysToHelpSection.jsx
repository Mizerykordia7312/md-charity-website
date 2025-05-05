import classes from './WaysToHelpSection.module.scss';
import HelpedCard from '../../HelpedCard/HelpedCard';
import donationBox from '../../../assets/img/help-us/donation-box.avif';
import donatePhoto from '../../../assets/img/help-us/donate2.jpg';

const WaysToHelpSection = () => {
	return (
		<section className={classes.section}>
			<h3 className='section-title'>Sposoby pomocy:</h3>
			<div className='wrapper'>
				<div className={classes.row}>
					<HelpedCard
						img={donationBox}
						href='https://www.siepomaga.pl/maskotkidzieciom'
						description='Wpłać na siepomaga'
						imageDescription='Pudełko'
						hasButton={true}
					/>
					<HelpedCard
						img={donatePhoto}
						href='https://www.przelewy24.pl/'
						description='Przelew online'
						imageDescription='Pudełko'
						hasButton={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default WaysToHelpSection;
