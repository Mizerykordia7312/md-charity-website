import classes from './DocumentsSection.module.scss';
import statut from '../../../assets/img/main-page/dokumenty/statut.jpg';
import odpis from '../../../assets/img/main-page/dokumenty/odpis.jpg';
import pozwolenie from '../../../assets/img/main-page/dokumenty/zbiórka.jpg';
import statutPdf from '../../../../public/documents/statut.pdf';
import odpisPdf from '../../../../public/documents/odpis.pdf';

const DocumentsSection = () => {
	return (
		<section>
			<h1 className='section-title'>Dokumenty do pobrania</h1>
			<div className={classes.documents}>
				<a href={statutPdf} download>
					<div className={classes.document}>
						<img src={statut} alt='' />
						<h3>Statut fundacji</h3>
					</div>
				</a>
				<a href={odpis} download>
					<div className={classes.document}>
						<img src={odpis} alt='' />
						<h3>Odpis z krs</h3>
					</div>
				</a>
				<a
					href='http://zbiorki.gov.pl/zbiorki/zbiorki/szczegoly-zbiorki.xhtml?zbiorka_nazwa=Pomagajmy!&v=-64376395412344561197033399535662226609190993904'
					target='blank'
				>
					<div className={classes.document}>
						<img src={pozwolenie} alt='' />
						<h3>Pozwolenie na zbiórkę</h3>
					</div>
				</a>
			</div>
		</section>
	);
};

export default DocumentsSection;
