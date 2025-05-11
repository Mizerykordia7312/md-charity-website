import classes from './HeroSection.module.scss';
import { Link } from 'react-router-dom';

const HeroSesction = () => {
	return (
		<section className={classes.heroSection}>
			<div className={classes.heroContent}>
				<h1>Potrzebujesz pomocy?</h1>
				<p>Zobacz co możemy dla Ciebie zrobić</p>
				<Link to='wesprzyj-nas' className={classes.button}>
					Zobacz więcej
				</Link>
			</div>
		</section>
	);
};

export default HeroSesction;
