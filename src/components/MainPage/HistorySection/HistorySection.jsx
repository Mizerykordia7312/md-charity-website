import classes from './HistorySection.module.scss';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { WorkflowIcon } from 'lucide-react';

const HistorySection = () => {
	return (
		<section className={classes.history}>
			<h1 className='section-title'>Historia Fundacji</h1>
			<div className={classes.timeline}>
				<VerticalTimeline>
					<VerticalTimelineElement
						className=' vertical-timeline-element--work '
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date=' 7 maja 2018 r.'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Rejestracja Fundacji
						</h3>
						<p>
							Tego dnia została zarejestrowana nasza fundacja i zaczęliśmy naszą
							misję.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date='2018-2019'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Pierwszy rok działalności fundacji
						</h3>

						<p>
							Początki naszej fundacji były bardzo intensywne. W pierwszym roku
							działalności rozpoczęliśmy współpracę z Zespołem Szkół nr 16 we
							Wrocławiu, zorganizowaliśmy zbiórkę na terenie Trójmiasta na rzecz
							Szkoły Podstawowej DAR. Ponadto wsparliśmy Miłosza, chłopca z
							mózgowym porażeniem dziecięcym.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date='2019-2020'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Drugi rok działalności fundacji
						</h3>

						<p>
							W drugim roku działalności nie zwolniliśmy tempa i zaczęliśmy
							wspierać dwie nowe placówki: Szkołę Podstawową Specjalną w Warczu
							oraz przedszkole „Lawendowy Król” dla dzieci z autyzmem w Pruszczu
							Gdańskim.
							<br /> <br />
							Podczas wakacji zorganizowaliśmy dużą zbiórkę publiczną, aby pomóc
							zarządowi „Lawendowego Króla” otworzyć również szkołę podstawową —
							co zakończyło się sukcesem!
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--work'
						date='2020-2021'
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Trzeci Rok działalności fundacji
						</h3>

						<p>
							W tym roku nieco zwolniliśmy z powodu pandemii koronawirusa.
							Kontynuowaliśmy jednak wsparcie dla Zespołu Szkół nr 16 we
							Wrocławiu oraz Szkoły Podstawowej Specjalnej w Warczu.
							<br /> <br />
							Rozpoczęliśmy również współpracę z Ośrodkiem
							Rewalidacyjno-Wychowawczym w Giemlicach.
							<br /> <br />
							Zorganizowaliśmy także zbiórkę dla Bartka — chłopca z dziecięcym
							porażeniem mózgowym. Za zebrane pieniądze udało nam się zakupić
							dla niego ortezy.
							<br /> <br />
							Na początku roku wsparliśmy szpital w Bolesławcu kupując im maski
							z filtrem HEPA oraz kombinezony ochronne 3M
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date='2021-2022'
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Czwarty rok działalności fundacji
						</h3>

						<p>
							W 2021 roku kontynuowaliśmy pomoc dla Zespołu Szkół nr 16,
							wyposażając placówkę m.in. w sprzęt na szkolny plac zabaw.
							<br />
							<br />
							Ponownie wsparliśmy także Szkołę Podstawową Specjalną w Warczu,
							kupując sprzęt do terapii integracji sensorycznej oraz tablice
							interaktywne.
							<br />
							<br />
							Pomogliśmy również Marice – dziewczynce z autyzmem i chorobą
							Oliera. Sfinansowaliśmy jej dziesięciomiesięczną rehabilitację
							pozabiegową.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date='2022-2023'
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Piąty rok działalności fundacji
						</h3>

						<p>
							W tym roku ponownie wsparliśmy trzy placówki dla dzieci z
							niepełnosprawnościami: Zespół Szkół nr 16 we Wrocławiu, Szkołę
							Podstawową Specjalną w Warczu oraz Ośrodek
							Rewalidacyjno-Wychowawczy we Wrocławiu.
							<br />
							<br />
							Skupiliśmy się głównie na terapii i diagnostyce autyzmu, kupując
							dla szkół m.in. tablety z systemem Mówik, ułatwiające pracę z
							dziećmi z zaburzeniami mowy, sprzęty do terapii SI oraz testy
							diagnostyczne „Profil Psychoedukacyjny – wydanie 3”, czyli
							narzędzie służące do oceny poziomu rozwoju zdolności i
							umiejętności dziecka ze spektrum autyzmu.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date='2023-2024'
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>
							Szósty rok działalności fundacji
						</h3>

						<p>
							W 2023 roku pomagaliśmy głównie Szkole Podstawowej „Lawendowy
							Król” dla dzieci z autyzmem. Współpracując z fundacją „Niebieski
							Balonik”, zorganizowaliśmy zbiórkę, której celem było opłacenie
							terapii mikropolaryzacji tDCS połączonej z psychoterapią i
							fizjoterapią dla podopiecznych tej szkoły. Finalnie terapią udało
							się objąć kilkanaścioro dzieci.
							<br />
							<br />
							Jednorazowo wspomogliśmy również zaprzyjaźniony Zespół Szkół nr 16
							we Wrocławiu, kupując im sprzęt do terapii SI oraz sprzęt
							sportowy.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className='vertical-timeline-element--education'
						date='2024 - obecnie'
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
						icon={<WorkflowIcon />}
					>
						<h3 className='vertical-timeline-element-title'>Aktualnie</h3>

						<p>
							Obecnie głównie skupiamy się na wspieraniu Zespołu Szkół nr 16 we
							Wrocławiu. Od początku 2024 roku udało się zapewnić im sprzęt
							m.in. muzyczny, sportowy, edukacyjny i terapeutyczny.
							<br />
							<br />
							Ponadto wsparliśmy również Kubę, chłopca z autyzmem z Wrocławia,
							kupując mu kołderkę i kamizelkę obciążeniową.
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
						icon={<WorkflowIcon />}
					/>
				</VerticalTimeline>
			</div>
		</section>
	);
};

export default HistorySection;
