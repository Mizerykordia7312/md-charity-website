import Slider from '../components/Slider/Slider';
import zs16_logo from '../assets/img/zespół-szkół-nr-16/Zs16_logo.png';
import classes from './TestPage.module.scss';

const TestPage = () => {
	return (
		<>
			<div className='wrapper'>
				<div className={classes.school}>
					<div className={classes['img-container']}>
						<img
							src={zs16_logo}
							alt='Logo zespołu szkoł nr16'
							className={classes.logo}
						/>
					</div>
					<h1 className={classes.title}>Zespół szkół nr 16</h1>
					<p className={classes.text}>
						Zespół Szkół Nr 16 we Wrocławiu to szkoła, która od lat zapewnia
						wsparcie edukacyjne i terapeutyczne dzieciom i dorosłym z autyzmem.
						Nasza fundacja współpracuje z tą szkołą już od 7 lat, regularnie
						przekazując pomoc finansową na różnorodne potrzeby. Łącznie udało
						nam się wesprzeć szkołę kwotą około 100 000 zł, które zostały
						przeznaczone na zakup sprzętu do terapii sensorycznej (SI), sprzętów
						diagnostycznych, a także wyposażenie sal doświadczania świata.
						<br /> <br />
						Nasze wsparcie obejmowało także pomoc w doposażeniu sal lekcyjnych,
						w tym sali muzycznej, sali przysposabiającej do pracy w zawodzie,
						sali sportowej oraz wielu innych pomieszczeń, które pozwalają
						uczniom w pełni rozwijać swoje umiejętności. Zespół Szkół Nr 16 to
						miejsce, które łączy edukację dzieci w szkole podstawowej z
						przygotowaniem dorosłych osób z autyzmem do pracy zawodowej.
						<br /> <br />
						Nasza fundacja nie ogranicza się jedynie do pomocy materialnej –
						angażujemy się również w życie szkoły. Uczestniczyliśmy w wielu
						wydarzeniach organizowanych przez szkołę, przebierając się za
						maskotki i zabawiając dzieci. Zorganizowaliśmy także wyjątkowe
						atrakcje, jak wynajęcie pana, który puszczał wielkie bańki mydlane,
						co dostarczało radości zarówno dzieciom, jak i dorosłym uczestnikom.
						<br /> <br />
						Jesteśmy dumni, że możemy wspierać Zespół Szkół Nr 16 i przyczyniać
						się do poprawy jakości życia osób z autyzmem. Każda pomoc, jaką
						przekazujemy, ma na celu stworzenie jak najlepszych warunków do
						nauki, terapii i rozwoju dla podopiecznych tej wspaniałej placówki.
					</p>
				</div>
				<Slider />
			</div>
		</>
	);
};

export default TestPage;
