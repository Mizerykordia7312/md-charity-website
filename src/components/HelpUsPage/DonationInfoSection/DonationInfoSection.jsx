import classes from './DonationInfoSection.module.scss';
import img from '../../../assets/img/help-us/donation-info.jpg';

const DonationInfoSection = () => {
	return (
		<section className={classes.section}>
			<div className={classes.container}>
				<div className={classes.textBox}>
					<h3>Jak możesz nam pomóc?</h3>
					<hr />
					<p>
						Twoje wsparcie naprawdę zmienia świat – szczególnie świat dzieci z
						autyzmem. Dzięki ludziom o wielkich sercach możemy pomagać placówkom
						edukacyjnym i terapeutycznym, które każdego dnia wspierają wyjątkowe
						dzieci w ich rozwoju. Fundacja Maskotki dzieciom wyposaża sale
						terapeutyczne, kupuje sprzęt diagnostyczny i pomaga tam, gdzie
						brakuje nawet podstawowych rzeczy – takich jak ławki, krzesła,
						artykuły szkolne czy zabawki wspierające rozwój.
					</p>
					<p className={classes.info}>
						Jeśli chcesz pomóc, możesz to zrobić na kilka sposobów:
					</p>
				</div>
				<img
					src={img}
					alt='Dwie osoby przebrane za postacie z Kubusia Puchatka siedzą na ławce na wrocławskim rynku. Są zadowolone.'
				/>
			</div>
		</section>
	);
};

export default DonationInfoSection;
