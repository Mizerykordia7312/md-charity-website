import { useState } from 'react';
import classes from './GetHelpForm.module.scss';
import { validateStep1, validateStep2 } from './validateForm';
import { mainInputs, privateInputs, schoolInputs } from './form-data';
import Input from './Input';

const GetHelpPage = () => {
	const [step, setStep] = useState(1);
	const [formErrors, setFormErrors] = useState({});
	const [formData, setFormData] = useState({
		userType: 'school',
		name: '',
		lastName: '',
		adress: '',
		phoneNumber: '',
		email: '',
		secondName: '',
		age: '',
		place: '',
		placeAdress: '',
		descriptionMessage: '',
		helpMessage: '',
	});

	const handleUserType = (e) => {
		setFormData((prev) => ({
			...prev,
			userType: e.target.value,
		}));
	};

	const handleNextStep = (e) => {
		e.preventDefault();
		const errors = validateStep1(formData);
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}
		setFormErrors({});
		setStep(2);
	};

	const handleSubmit = (e) => {
		const errors = validateStep2(formData);
		if (Object.keys(errors).length > 0) {
			e.preventDefault();
			setFormErrors(errors);
			return;
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<form
			action='https://formsubmit.co/maskotkidzieciom@gmail.com'
			method='POST'
			className={classes.form}
			onSubmit={handleSubmit}
		>
			<h3 className={classes.title}>Skorzystaj z naszej pomocy</h3>

			<div className={step === 1 ? classes.mainInputsContainer : classes.hide}>
				<>
					<p className={classes.question}>Kim jesteś?</p>
					<label htmlFor='name' className={classes.radioInputsContainer}>
						<div className={classes.row}>
							<input
								type='radio'
								name='userType'
								onChange={handleUserType}
								value='school'
								className={classes.radio}
								checked={formData.userType === 'school'}
							/>
							<p className={classes.answer}>reprezentant szkoły</p>
						</div>

						<div className={classes.row}>
							<input
								type='radio'
								name='userType'
								onChange={handleUserType}
								value='private'
								className={classes.radio}
								checked={formData.userType === 'private'}
							/>
							<p className={classes.answer}>osoba prywatna</p>
						</div>
					</label>
					{mainInputs.map((mainInput) => (
						<Input
							key={mainInput.name}
							name={mainInput.name}
							id={mainInput.name}
							handleChange={handleInputChange}
							description={mainInput.description}
							type={mainInput.type}
							value={formData[mainInput.name]}
							error={formErrors}
						/>
					))}
				</>
			</div>

			{formData.userType === 'private' && step === 2 && (
				<>
					{privateInputs.map((privateInput) => (
						<Input
							key={privateInput.name}
							name={privateInput.name}
							id={privateInput.name}
							handleChange={handleInputChange}
							description={privateInput.description}
							type={privateInput.type}
							isTextarea={privateInput.isTextarea}
							value={formData[privateInput.name]}
							error={formErrors}
						/>
					))}
				</>
			)}
			{formData.userType === 'school' && step === 2 && (
				<>
					{schoolInputs.map((schoolInput) => (
						<Input
							key={schoolInput.name}
							name={schoolInput.name}
							id={schoolInput.name}
							handleChange={handleInputChange}
							description={schoolInput.description}
							isTextarea={schoolInput.isTextarea}
							value={formData[schoolInput.name]}
							error={formErrors}
						/>
					))}
				</>
			)}

			{step === 1 ? (
				<button
					type='button'
					className={classes.helpBtn}
					onClick={handleNextStep}
				>
					Dalej
				</button>
			) : (
				<button type='submit' className={classes.helpBtn}>
					Wyślij
				</button>
			)}
		</form>
	);
};

export default GetHelpPage;
