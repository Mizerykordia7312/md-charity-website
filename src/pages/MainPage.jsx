import classes from './MainPage.module.scss';
import HeroSection from '../components/MainPage/HeroSection/HeroSection';
import AboutUsSection from '../components/MainPage/AboutUsSection/AboutUsSection';

const MainPage = () => {
	return (
		<>
			<HeroSection />
			<AboutUsSection />
		</>
	);
};

export default MainPage;
