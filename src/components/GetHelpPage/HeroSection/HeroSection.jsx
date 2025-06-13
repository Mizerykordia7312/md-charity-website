import classes from './HeroSection.module.scss';

const HeroSesction = () => {
	return (
		<section className={classes.heroSection}>
			<div className={classes.heroContent}>
				<h1>Potrzebujesz pomocy?</h1>
				<p>Zobacz co możemy dla Ciebie zrobić</p>
				<a
					className={classes.button}
					onClick={(e) => {
						e.preventDefault();
						const el = document.getElementById('get-help');
						el.scrollIntoView({ behavior: 'smooth' });
					}}
				>
					Zobacz więcej
				</a>
			</div>
		</section>
	);
};

export default HeroSesction;
