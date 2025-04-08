import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navigation.module.scss';
import logo from '../assets/img/logo.png';
import { useState } from 'react';
import { navLinks } from '../data/nav-data';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [clases, setClases] = useState('');

	const toggleNav = () => {
		let isMobile = window.innerWidth <= 768;
		if (isMobile) {
			setIsOpen((prevIsOpen) => !prevIsOpen);
			setClases(isOpen ? styles.close : styles.open);

			if (isOpen) {
				setTimeout(() => {
					setClases('');
				}, 300);
			}
		}
	};

	return (
		<nav className={styles.nav}>
			<Link to='/'>
				<img
					src={logo}
					alt='Miś w awionetcę pokazuje baner z nazwą fundacjii '
					onClick={isOpen ? toggleNav : undefined}
				/>
			</Link>
			<ul className={`${styles.menu} ${clases}`}>
				{navLinks.map(({ path, label }) => (
					<li key={path}>
						<NavLink
							to={path}
							className={({ isActive }) =>
								isActive ? styles.active : undefined
							}
							onClick={toggleNav}
						>
							{label}
						</NavLink>
					</li>
				))}
			</ul>

			{!isOpen ? (
				<FaBars className={styles.burger} onClick={toggleNav} />
			) : (
				<FaTimes className={styles.burger} onClick={toggleNav} />
			)}
		</nav>
	);
};

export default Navigation;
