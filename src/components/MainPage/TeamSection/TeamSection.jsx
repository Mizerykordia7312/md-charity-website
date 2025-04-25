import classes from './TeamSection.module.scss';
import { members } from '../../../data/members-data';
import PersonCard from '../../PersonCard/PersonCard.jsx';

const TeamSection = () => {
	return (
		<section>
			<h1 className='section-title'>Nasz Zespół</h1>
			<div className={classes.cards}>
				{members.map((member, index) => {
					return (
						<PersonCard
							key={index}
							title={member.title}
							role={member.role}
							description={member.description}
							alt={member.alt}
							img={member.img}
							isMember
						/>
					);
				})}
			</div>
		</section>
	);
};

export default TeamSection;
