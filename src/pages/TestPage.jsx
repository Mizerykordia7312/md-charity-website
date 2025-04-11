import Slider from '../components/Slider/Slider';
import SchoolInfoCard from '../components/SchoolInfoCard/SchoolInfoCard';
import logo from '../assets/img/zespół-szkół-nr-16/logo.png';
import sliderData from '../data/slider-data';

const TestPage = () => {
	return (
		<>
			<div className='wrapper'>
				<SchoolInfoCard
					title='Zespół Szkół nr 16'
					description='Zespół Szkół Nr 16 we Wrocławiu to szkoła, która od lat zapewnia
				wsparcie edukacyjne i terapeutyczne dzieciom i dorosłym z autyzmem.
				Nasza fundacja współpracuje z tą szkołą już od 7 lat, regularnie
				przekazując pomoc finansową na różnorodne potrzeby. Łącznie udało nam
				się wesprzeć szkołę kwotą około 100 000 zł, które zostały przeznaczone
				na zakup sprzętu do terapii sensorycznej (SI), sprzętów diagnostycznych,
				a także wyposażenie sal doświadczania świata.'
					description2='Nasze wsparcie obejmowało także pomoc w doposażeniu sal lekcyjnych, w
				tym sali muzycznej, sali przysposabiającej do pracy w zawodzie, sali
				sportowej oraz wielu innych pomieszczeń, które pozwalają uczniom w pełni
				rozwijać swoje umiejętności. Zespół Szkół Nr 16 to miejsce, które łączy
				edukację dzieci w szkole podstawowej z przygotowaniem dorosłych osób z
				autyzmem do pracy zawodowej.'
					description3='Nasza fundacja nie ogranicza się jedynie do pomocy materialnej –
				angażujemy się również w życie szkoły. Uczestniczyliśmy w wielu
				wydarzeniach organizowanych przez szkołę, przebierając się za maskotki i
				zabawiając dzieci. Zorganizowaliśmy także wyjątkowe atrakcje, jak
				wynajęcie pana, który puszczał wielkie bańki mydlane, co dostarczało
				radości zarówno dzieciom, jak i dorosłym uczestnikom.'
					description4='Jesteśmy dumni, że możemy wspierać Zespół Szkół Nr 16 i przyczyniać się
				do poprawy jakości życia osób z autyzmem. Każda pomoc, jaką
				przekazujemy, ma na celu stworzenie jak najlepszych warunków do nauki,
				terapii i rozwoju dla podopiecznych tej wspaniałej placówki.'
					logo={logo}
				/>
				<Slider data={sliderData} />
			</div>
		</>
	);
};

export default TestPage;
