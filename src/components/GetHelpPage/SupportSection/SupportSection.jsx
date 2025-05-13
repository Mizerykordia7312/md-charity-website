import GetHelpForm from '../GetHelpForm/GetHelpForm';
import classes from './SupportSection.module.scss';

const SupportSection = () => {
	return (
		<section className={classes.supportSection} id='get-help'>
			<div className={classes.container}>
				<div className={classes.infoBox}>
					<h2>Komu i jak pomagamy?</h2>
					<p>
						Nasza fundacja wspiera głównie placówki edukacyjne i terapeutyczne
						pracujące z dziećmi ze spektrum autyzmu, a także inne szkoły
						specjalne, w tym dla dzieci z porażeniem mózgowym. Pomagamy szkołom
						i ośrodkom, dostarczając im potrzebne wyposażenie takie jak m.in:
					</p>
					<ul>
						<li>Sprzęty do terapii SI</li>
						<li>Sprzęty diagnostyczne</li>
						<li>Sprzęt sportowy</li>
						<li>Meble takie jak ławki i krzesła</li>
						<li>Wyprawki szkolne dla najmłdoszych</li>
					</ul>
					<p>
						Wspieramy również osoby prywatne z autyzmem i/lub mózgowym
						porażeniem dziecięcym, finansując zakup sprzętów terapeutycznych
						oraz pokrywając koszty terapii.
					</p>
					<h4>
						Jeśli potrzebujesz pomocy — jako placówka lub osoba prywatna —
						wypełnij proszę formularz zgłoszeniowy. Każde zgłoszenie
						rozpatrujemy indywidualnie.
					</h4>
				</div>
				<div className={classes.formContainer}>
					<GetHelpForm />
				</div>
			</div>
		</section>
	);
};

export default SupportSection;
