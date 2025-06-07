import classes from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import maskotka from '../../assets/img/error-page/maskotka.jpg';

const ErrorPage = () => {
	return (
		<div className={classes.wrapper}>
			<img
				src={maskotka}
				alt='Zagubiona maskotka'
				className={classes.image}
			/>
			<div className={classes.separator}></div>
			<div className={classes.text}>
				<p>Ta strona nie istnieje</p>
				<Link to='/'>Wróć na stronę główną</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
