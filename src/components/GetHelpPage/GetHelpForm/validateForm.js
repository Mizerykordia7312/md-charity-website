const requiredFieldMessages = {
	name: 'Imię jest wymagane',
	lastName: 'Nazwisko jest wymagane',
	adress: 'Adres jest wymagany',
	phoneNumber: 'Numer telefonu jest wymagany',
	email: 'Email jest wymagany',
};

export const validateStep1 = (formData) => {
	const errors = {};
	const isEmpty = (value) => !value?.toString().trim();

	Object.keys(requiredFieldMessages).forEach((field) => {
		if (isEmpty(formData[field])) {
			errors[field] = requiredFieldMessages[field];
		}
	});

	return errors;
};

export const validateStep2 = (formData) => {
	const errors = {};
	const isEmpty = (value) => !value?.toString().trim();

	if (formData.userType === 'private') {
		if (isEmpty(formData.secondName))
			errors.secondName = 'Podaj imię i nazwisko osoby potrzebującej';
		if (isEmpty(formData.age)) errors.age = 'Podaj wiek';
	} else if (formData.userType === 'school') {
		if (isEmpty(formData.place)) errors.place = 'Podaj nazwę placówki';
		if (isEmpty(formData.placeAdress))
			errors.placeAdress = 'Podaj adres placówki';
	}

	['descriptionMessage', 'helpMessage'].forEach((field) => {
		if (isEmpty(formData[field])) {
			errors[field] = 'To pole jest wymagane';
		}
	});

	return errors;
};
