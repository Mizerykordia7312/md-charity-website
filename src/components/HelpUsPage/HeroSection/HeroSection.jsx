import classes from './HeroSection.module.scss';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section class={classes.donationHero}>
			<div class={classes.donationText}>
				<h2>Pomóż nam zmieniać świat dzieci z autyzmem</h2>
				<p className={classes.description}>
					Każda złotówka to krok ku terapii, edukacji i uśmiechowi dziecka,
					które na co dzień mierzy się z ciszą. Twoje wsparcie naprawdę ma
					znaczenie.
				</p>
				<Link to='#wesprzyj' class={classes.donateBtn}>
					Wesprzyj nas teraz
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
