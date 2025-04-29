import classes from './AboutUsSection.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import { FaPaw } from 'react-icons/fa';

const AboutUsSection = () => {
	return (
		<section className={classes.aboutSection}>
			<h2 className='section-title'>O naszej fundacji</h2>
			<div className={classes.container}>
				<p className={classes.intro}>
					Zajmujemy się wyposażaniem szkół i przedszkoli dla dzieci z
					niepełnosprawnościami intelektualnymi. Pomagamy, wspieramy i dajemy
					uśmiech! 💙
				</p>

				<div className={classes.aboutDetails}>
					<ul>
						<li>Wyposażenie sal lekcyjnych</li>
						<li> Sprzęty do terapii SI i testy diagnostyczne</li>
						<li> Pomoc edukacyjna i zabawki dla dzieci</li>
						<li> Przedstawienia i maskotki na festynach</li>
					</ul>
				</div>

				<div className={classes.facilities}>
					<h3>Współpracujemy m.in. z:</h3>
					<ul>
						<li>
							<strong>Zespół Szkół nr 16 we Wrocławiu</strong> – sala SI, sala
							doświadczania świata, plac zabaw.
						</li>
						<li>
							<strong>Szkoła specjalna w Warczu</strong> – testy diagnostyczne i
							pomoce dydaktyczne.
						</li>
						<li>
							<strong>ORW w Giemliach</strong> – sprzęt dla dzieci z głębokimi
							niepełnosprawnościami.
						</li>
					</ul>
				</div>
			</div>

			<div className={classes.highlight}>
				<p>
					🌟 Pomogliśmy otworzyć <strong>Szkołę „Lawendowy Król”</strong> w
					Pruszczu Gdańskim i zapewniliśmy terapię mikropolaryzacji tDCS dla jej
					podopiecznych!
				</p>
				<p>
					💸 Łączna wartość przekazanego sprzętu:{' '}
					<strong>około 295 000 zł</strong> (stan na kwiecień 2025)
				</p>
			</div>

			<AiFillHeart className={`${classes.icon} ${classes.left}`} />
			<FaPaw className={`${classes.icon} ${classes.right}`} />
		</section>
	);
};

export default AboutUsSection;
