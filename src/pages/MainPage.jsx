import classes from './MainPage.module.scss';
import HeroSection from '../components/MainPage/HeroSection/HeroSection';
import AboutUsSection from '../components/MainPage/AboutUsSection/AboutUsSection';
import HistorySection from '../components/MainPage/HistorySection/HistorySection';
import TeamSection from '../components/MainPage/TeamSection/TeamSection';
import DocumentsSection from '../components/MainPage/DocumentsSection/DocumentsSection';

const MainPage = () => {
	return (
		<>
			<HeroSection />
			<AboutUsSection />
			<TeamSection />
			<HistorySection />
			<DocumentsSection />
		</>
	);
};

export default MainPage;
