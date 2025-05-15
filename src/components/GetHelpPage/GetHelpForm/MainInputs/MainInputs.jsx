import classes from './MainInputs.module.scss';

const MainInputs = () => {
	return (
		<>
			<p className={classes.question}>Kim jesteś?</p>
			<label htmlFor='name' className={classes.radioInputsContainer}>
				<div className={classes.row}>
					<input
						type='radio'
						name='userType'
						onChange={() => setUserType('private')}
						value='private'
						className={classes.radio}
					/>
					<p className={classes.answer}>osoba prywatna</p>
				</div>
				<div className={classes.row}>
					<input
						type='radio'
						name='userType'
						onChange={() => setUserType('school')}
						value='school'
						className={classes.radio}
					/>
					<p className={classes.answer}>reprezentant szkoły</p>
				</div>
			</label>
			<label htmlFor='name'>
				<p>Imię:</p>
				<input type='text' id='name' name='name' required />
			</label>
			<label htmlFor='lastName'>
				<p>Nazwisko:</p>
				<input type='text' id='lastName' name='lastName' required />
			</label>
			<label htmlFor='adress'>
				<p>Adres:</p>
				<input type='text' id='adress' name='adress' required />
			</label>
			<label htmlFor='phoneNumber'>
				<p> Numer telefonu:</p>
				<input type='number' id='phoneNumber' name='phoneNumber' required />
			</label>
			<label htmlFor='email'>
				<p>Email:</p>
				<input type='text' id='email' name='email' required />
			</label>
		</>
	);
};

export default MainInputs;
