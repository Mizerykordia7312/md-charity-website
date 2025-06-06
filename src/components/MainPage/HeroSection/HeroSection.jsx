import { Link } from 'react-router-dom';
import classes from './HeroSection.module.scss';

const HeroSection = () => {
	return (
		<section className={classes.heroSection}>
			<div className={classes.heroContent}>
				<h1>Fundacja Maskotki dzieciom</h1>
				<p>Pomagamy dzieciom z autyzmem w całym kraju</p>
				<Link to='wesprzyj-nas' className={classes.button}>
					Wesprzyj
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
