import { useState } from 'react';
import classes from './GetHelpForm.module.scss';
import { HiH1 } from 'react-icons/hi2';

const GetHelpPage = () => {
	const [userType, setUserType] = useState('');

	return (
		<form
			action='https://formsubmit.co/maskotkidzieciom@gmail.com'
			method='POST'
			className={classes.form}
		>
			<h3>Skorzystaj z naszej pomocy</h3>
			<p>Kim jesteś?</p>

			<label htmlFor='name'>
				<div className={classes.row}>
					<input
						type='radio'
						name='userType'
						onChange={() => setUserType('private')}
						value='private'
					/>
					<p className={classes.answer}>osoba prywatna</p>
				</div>
				<div className={classes.row}>
					<input
						type='radio'
						name='userType'
						onChange={() => setUserType('school')}
						value='school'
					/>
					<p className={classes.answer}>reprezentant szkoły</p>
				</div>
			</label>

			{userType === 'private' && (
				<>
					<label htmlFor='name'>Imię:</label>
					<input type='text' id='name' name='name' required />

					<label htmlFor='lastName'>Nazwisko:</label>
					<input type='text' id='lastName' name='lastName' required />

					<label htmlFor='adress'>Adres:</label>
					<input type='text' id='adress' name='adress' required />

					<label htmlFor='phoneNumber'>Numer telefonu:</label>
					<input type='number' id='phoneNumber' name='phoneNumber' required />

					<label htmlFor='email'>Email:</label>
					<input type='text' id='email' name='email' required />

					<label htmlFor='secondName'>
						Podaj imię i nazwisko osoby, której ma dotyczyć pomoc:
					</label>
					<input type='text' id='secondName' name='secondName' required />

					<label htmlFor='age'>
						Podaj wiek osoby, której ma dotyczyć pomoc:
					</label>
					<input type='number' id='age' name='age' required />

					<label htmlFor='message'>
						Jakiego rodzaju trudności zdrowotne lub rozwojowe dotyczą osoby
						potrzebującej wsparcia?
					</label>

					<textarea id='message' name='message' rows='5' required></textarea>

					<label htmlFor='message'>
						Jakiego rodzaju wsparcia potrzebujesz i ile orientacyjnie może
						kosztować?
					</label>

					<textarea id='message' name='message' rows='5' required></textarea>
				</>
			)}
			{userType === 'school' && <h1>Szkoła</h1>}

			<button type='submit'>Wyślij wiadomość</button>
		</form>
	);
};

export default GetHelpPage;
