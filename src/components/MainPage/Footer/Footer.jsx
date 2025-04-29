import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.info}>
				<h3>Fundacja "Maskotki Dzieciom"</h3>
				<p>KRS: 0000729916</p>
				<p>NIP: 8971854878</p>
				<p>REGON: 380161792</p>
				<p>ul.Świeradowska 51-57, 50-559 Wrocław</p>
			</div>

			<div className={classes.contact}>
				<h3>Kontakt</h3>
				<p>📞 506 353 893</p>
				<p>📧 maskotkidzieciom@gmail.com</p>
				<Link to='https://www.facebook.com/maskotkidzieciom/' target='blank'>
					📘 www.facebook.com/maskotkidzieciom
				</Link>
			</div>

			<div className={classes.copyright}>
				<p>
					© {new Date().getFullYear()} Fundacja "Maskotki Dzieciom". Wszelkie
					prawa zastrzeżone.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
