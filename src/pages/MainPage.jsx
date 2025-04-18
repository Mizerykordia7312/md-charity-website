import classes from './MainPage.module.scss';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<section className={classes.heroSection}>
			<div className={classes.heroContent}>
				<h1>Fundacja Maskotki dzieciom</h1>
				<p>Pomagamy dzieciom z autyzmem w całym kraju</p>
				<Link to='help-us' className={classes.button}>
					Wesprzyj
				</Link>
			</div>
		</section>
	);
};

export default MainPage;
