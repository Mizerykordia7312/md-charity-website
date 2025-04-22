import classes from './MainPage.module.scss';
import HeroSection from '../components/MainPage/HeroSection/HeroSection';
import AboutUsSection from '../components/MainPage/AboutUsSection/AboutUsSection';
import HistorySection from '../components/MainPage/HistorySection/HistorySection';

const MainPage = () => {
	return (
		<>
			<HeroSection />
			<AboutUsSection />
			<HistorySection />
		</>
	);
};

export default MainPage;
