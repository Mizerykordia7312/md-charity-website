import { useState } from 'react';
import classes from './GetHelpForm.module.scss';
import MainInputs from './MainInputs/MainInputs';
import SchoolInputs from './SchoolInputs/SchoolInputs';
import PersonInputs from './PersonInputs/PersonInputs';

const GetHelpPage = () => {
	const [userType, setUserType] = useState('');
	const [step, setStep] = useState(1);

	return (
		<form
			action='https://formsubmit.co/maskotkidzieciom@gmail.com'
			method='POST'
			className={classes.form}
		>
			<h3 className={classes.title}>Skorzystaj z naszej pomocy</h3>

			<MainInputs />

			{userType === 'private' && <PersonInputs />}
			{userType !== 'school' && <SchoolInputs />}

			<button type='submit' className={classes.helpBtn}>
				Wyślij wiadomość
			</button>
		</form>
	);
};

export default GetHelpPage;
