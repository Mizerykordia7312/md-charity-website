import classes from './WaysToHelpSection.module.scss';
import HelpedCard from '../../HelpedCard/HelpedCard';
import donationBox from '../../../assets/img/help-us/donation-box.avif';
import donatePhoto from '../../../assets/img/help-us/donate2.jpg';
import WayToHelpCard from './WayToHelpCard';

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
			<div className={`${classes.row} ${classes.secondRow}`}>
				<WayToHelpCard
					title='Wysyłka maskotek'
					description='Możecie przesyłać nam maskotki i zabawki, które przekażemy naszym podopiecznym podczas jednej z wizyt w szkole. Jeśli chcecie to zrobić, wyślijcie je na poniższy adres:'
					contact='ul. Świeradowska 51–57, '
					secondContact='50-559 Wrocław'
				/>
				<WayToHelpCard
					title='Wolontariat'
					description='Jeśli chciałbyś zostać naszym wolontariuszem, napisz do nas lub zadzwoń! Możesz pomóc przy zbiórkach publicznych albo przygotować coś wyjątkowego dla dzieci.'
					contact='📧 maskotkidzieciom@gmail.com'
					secondContact='📞 506 353 893'
				/>
				<WayToHelpCard
					title='Przelew bezpośredni'
					description='Jeśli chcesz nas wesprzeć finansowo, możesz przelać dowolną kwotę bezpośrednio na numer rachunku podany poniżej. Każda wpłata pomaga nam działać na rzecz dzieci!'
					contact='Numer rachunku'
					secondContact='🏦65 1160 2202 0000 0003 0052 2609'
				/>
			</div>
		</section>
	);
};

export default WaysToHelpSection;
