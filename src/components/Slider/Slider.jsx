import MobileCart from './MobileCart';
import classes from '../../components/Slider/Slider.module.scss';
import { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = ({ data }) => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [animationClass, setAnimationClass] = useState('');
	const [hideSlideClass, setHideSlideClass] = useState('');
	const [sliderStarted, setSliderStarted] = useState(false);
	const [slidesAreRewinding, setSlidesAreRewinding] = useState(false);
	const intervalRef = useRef(null);

	const startSliderInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		intervalRef.current = setInterval(() => {
			showNextSlide();
		}, 5000);
	};

	const showNextSlide = () => {
		setSliderStarted(true);
		setAnimationClass('');
		setHideSlideClass('');
		setSlidesAreRewinding(false);
		startSliderInterval();

		setTimeout(() => {
			setCurrentSlideIndex((prevIndex) =>
				prevIndex !== data.length - 1 ? prevIndex + 1 : 0
			);
			setHideSlideClass(classes.hideSlideAnimation);
			setAnimationClass(classes.nextSlideAnimation);
		}, 10);
	};

	const showPreviousSlide = () => {
		setSliderStarted(true);
		setAnimationClass('');
		setHideSlideClass('');
		setSlidesAreRewinding(true);
		startSliderInterval();

		setTimeout(() => {
			setCurrentSlideIndex((prevIndex) =>
				prevIndex !== 0 ? prevIndex - 1 : data.length - 1
			);
			setHideSlideClass(classes.hideSlideToRight);
			setAnimationClass(classes.previousSlideAnimation);
		}, 10);
	};

	useEffect(() => {
		startSliderInterval();
		return () => clearInterval(intervalRef.current);
	}, []);

	const getImageSrc = () => {
		if (!slidesAreRewinding) {
			if (!sliderStarted) {
				return data[currentSlideIndex].image;
			} else if (currentSlideIndex === 0) {
				return data[data.length - 1].image;
			} else {
				return data[currentSlideIndex - 1].image;
			}
		} else {
			if (currentSlideIndex !== data.length - 1) {
				return data[currentSlideIndex + 1].image;
			} else {
				return data[0].image;
			}
		}
	};

	return (
		<>
			<div className={classes.container}>
				<img
					src={getImageSrc()}
					alt={data[currentSlideIndex].altText}
					className={`${classes.slide} ${hideSlideClass}`}
				/>
				<img
					src={
						currentSlideIndex === data.length
							? data[0].image
							: data[currentSlideIndex].image
					}
					alt='blrblr'
					className={`${classes.slide} ${classes.secondImage} ${animationClass}`}
				/>
				<div className={classes.desriptionContainer}>
					<p className={classes.description}>
						{data[currentSlideIndex].description}
					</p>
				</div>
				<FaChevronLeft
					className={`${classes.arrow} ${classes.left}  `}
					onClick={showPreviousSlide}
				/>
				<FaChevronRight
					className={`${classes.arrow} ${classes.right}  `}
					onClick={showNextSlide}
				/>
			</div>
			<div class={classes.mobileCards}>
				{data.map((slide, index) => {
					return (
						<MobileCart
							img={slide.image}
							alt={slide.altText}
							key={index}
							description={slide.description}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Slider;
