import classes from './HeroSection.module.scss';
import { Link } from 'react-router-dom';

const HeroSesction = () => {
	return (
		<section className={classes.heroSection}>
			<div className={classes.heroContent}>
				<h1>Potrzebujesz pomocy?</h1>
				<p>Zobacz co możemy dla Ciebie zrobić</p>
				<a href='#get-help' className={classes.button}>
					Zobacz więcej
				</a>
			</div>
		</section>
	);
};

export default HeroSesction;
