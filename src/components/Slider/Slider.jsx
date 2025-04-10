import sliderData from '../../data/slider-data';
import MobileCart from './MobileCart';
import classes from '../../components/Slider/Slider.module.scss';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = () => {
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [animationClass, setAnimationClass] = useState('');
	const [hideSlideClass, setHideSlideClass] = useState('');
	const [sliderStarted, setSliderStarted] = useState(false);
	const [slidesAreRewinding, setSlidesAreRewinding] = useState(false);

	const showNextSlide = () => {
		setSliderStarted(true);
		setAnimationClass('');
		setHideSlideClass('');
		setSlidesAreRewinding(false);

		setTimeout(() => {
			setCurrentSlideIndex((prevIndex) =>
				prevIndex !== sliderData.length - 1 ? prevIndex + 1 : 0
			);
			setHideSlideClass(classes['hide-slide-animation']);
			setAnimationClass(classes['next-slide-animation']);
		}, 10);
	};

	const showPreviousSlide = () => {
		setSliderStarted(true);
		setAnimationClass('');
		setHideSlideClass('');
		setSlidesAreRewinding(true);

		setTimeout(() => {
			setCurrentSlideIndex((prevIndex) =>
				prevIndex !== 0 ? prevIndex - 1 : sliderData.length - 1
			);
			setHideSlideClass(classes['hide-slide-to-right']);
			setAnimationClass(classes['previous-slide-animation']);
		}, 10);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			showNextSlide();
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<div className={classes['slider-container']}>
				<img
					src={
						!slidesAreRewinding
							? !sliderStarted
								? sliderData[currentSlideIndex].image
								: currentSlideIndex === 0
								? sliderData[sliderData.length - 1].image
								: sliderData[currentSlideIndex - 1].image
							: currentSlideIndex !== sliderData.length - 1
							? sliderData[currentSlideIndex + 1].image
							: sliderData[0].image
					}
					alt='ababa'
					className={`${classes.slide} ${hideSlideClass}`}
				/>
				<img
					src={
						currentSlideIndex === sliderData.length
							? sliderData[0].image
							: sliderData[currentSlideIndex].image
					}
					alt='blrblr'
					className={`${classes.slide} ${classes['second-image']} ${animationClass}`}
				/>
				<div className={classes['desription-container']}>
					<p className={classes.description}>
						{sliderData[currentSlideIndex].description}
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
			<div class={classes['mobile-cards']}>
				{sliderData.map((slide, index) => {
					return (
						<MobileCart
							img={slide.image}
							alt={slide.description}
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
