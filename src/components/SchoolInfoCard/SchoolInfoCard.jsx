import classes from '../SchoolInfoCard/SchoolInfoCard.module.scss';

const SchoolInfoCard = ({
	title,
	description,
	description2,
	description3,
	description4,
	logo,
}) => {
	return (
		<div className={classes.school}>
			<div className={classes.imgContainer}>
				<img
					src={logo}
					alt='Logo zespołu szkoł nr16'
					className={classes.logo}
				/>
			</div>
			<h1 className={classes.title}>{title}</h1>
			<p className={classes.text}>
				{description}
				<br /> <br />
				{description2}
				<br /> <br />
				{description3}
				<br /> <br />
				{description4}
			</p>
		</div>
	);
};

export default SchoolInfoCard;
