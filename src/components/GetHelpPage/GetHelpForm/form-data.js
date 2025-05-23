export const mainInputs = [
	{ name: 'name', description: 'Imię:' },
	{ name: 'lastName', description: 'Nazwisko:' },
	{ name: 'adress', description: 'Adres:' },
	{ name: 'phoneNumber', description: 'Numer Telefonu:', type: 'number' },
	{ name: 'email', description: 'Email:' },
];

export const privateInputs = [
	{
		name: 'secondName',
		description: 'Podaj imię i nazwisko osoby, której ma dotyczyć pomoc:',
	},
	{
		name: 'age',
		description: 'Podaj wiek osoby, której ma dotyczyć pomoc:',
		type: 'number',
	},
	{
		name: 'descriptionMessage',
		description:
			'Jakiego rodzaju trudności zdrowotne lub rozwojowe dotyczą osoby potrzebującej wsparcia?',
		isTextarea: true,
	},
	{
		name: 'helpMessage',
		description:
			'Jakiego rodzaju wsparcia potrzebujesz i ile orientacyjnie może	kosztować?',
		isTextarea: true,
	},
];

export const schoolInputs = [
	{
		name: 'place',
		description: 'Podaj nazwę placówki:',
	},
	{
		name: 'placeAdress',
		description: 'Podaj adres placówki:',
	},
	{
		name: 'descriptionMessage',
		description:
			'Jakiego rodzaju trudności zdrowotne, rozwojowe lub edukacyjne występują u dzieci/podopiecznych w Państwa placówce?',
		isTextarea: true,
	},
	{
		name: 'helpMessage',
		description:
			'Jakiego rodzaju wsparcia potrzebuje Państwa placówka (np. sprzęt,materiały, zajęcia specjalistyczne) i jaki jest szacunkowy koszt?',
		isTextarea: true,
	},
];
