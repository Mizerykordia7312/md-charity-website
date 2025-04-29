import HeroSection from '../components/MainPage/HeroSection/HeroSection';
import AboutUsSection from '../components/MainPage/AboutUsSection/AboutUsSection';
import HistorySection from '../components/MainPage/HistorySection/HistorySection';
import TeamSection from '../components/MainPage/TeamSection/TeamSection';
import DocumentsSection from '../components/MainPage/DocumentsSection/DocumentsSection';
import Footer from '../components/MainPage/Footer/Footer';

const MainPage = () => {
	return (
		<>
			<HeroSection />
			<AboutUsSection />
			<TeamSection />
			<HistorySection />
			<DocumentsSection />
			<Footer />
		</>
	);
};

export default MainPage;
