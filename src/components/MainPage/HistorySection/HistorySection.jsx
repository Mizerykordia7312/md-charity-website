import classes from './HistorySection.module.scss';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import years from '../../../data/timeline-data.js';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';

const HistorySection = () => {
	const [visableElements, setVisableElements] = useState(2);

	const loadMore = () => {
		setVisableElements((prev) => prev + 2);
	};

	return (
		<section className={classes.history}>
			<h1 className='section-title'>Historia Fundacji</h1>
			<div className={classes.timeline}>
				<VerticalTimeline>
					{years.slice(0, visableElements).map((years, index) => (
						<VerticalTimelineElement
							className={`vertical-timeline-element--work ${classes.custom}`}
							contentStyle={{ background: '#b3d9f2', color: '#000' }}
							contentArrowStyle={{
								borderRight: '7px solid  #b3d9f2',
							}}
							date={years.date}
							iconStyle={{ background: '#a8cfe6', color: '#2f4f6f' }}
							icon={<FaHeart />}
							key={index}
						>
							<h3 className='vertical-timeline-element-title'>{years.title}</h3>
							<p>
								{years.description}
								{years.secondDescription && (
									<>
										<br />
										<br />
										{years.secondDescription}
									</>
								)}
								{years.thirdDescription && (
									<>
										<br />
										<br />
										{years.thirdDescription}
									</>
								)}
								{years.fourthDescription && (
									<>
										<br />
										<br />
										{years.fourthDescription}
									</>
								)}
							</p>
						</VerticalTimelineElement>
					))}
					{visableElements < years.length && (
						<VerticalTimelineElement
							iconStyle={{
								background: '#a8cfe6',
								color: '#2f4f6f',
								cursor: 'pointer',
							}}
							icon={<AiOutlinePlus />}
							iconOnClick={loadMore}
						/>
					)}
				</VerticalTimeline>
			</div>
		</section>
	);
};

export default HistorySection;
