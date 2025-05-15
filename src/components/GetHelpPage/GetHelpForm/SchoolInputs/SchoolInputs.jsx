const SchoolInputs = (params) => {
	return (
		<>
			<label htmlFor='place'>
				<p>Podaj nazwę placówki</p>
				<input type='text' id='place' name='place' required />
			</label>

			<label htmlFor='placeAdress'>
				<p>Podaj adres placówki</p>
				<input type='text' id='placeAdress' name='placeAdress' required />
			</label>

			<label htmlFor='descriptionMessage'>
				<p>
					Jakiego rodzaju trudności zdrowotne, rozwojowe lub edukacyjne
					występują u dzieci/podopiecznych w Państwa placówce?
				</p>
				<textarea
					id='descriptionMessage'
					name='descriptionMessage'
					rows='5'
					required
				></textarea>
			</label>

			<label htmlFor='helpMessage'>
				<p>
					Jakiego rodzaju wsparcia potrzebuje Państwa placówka (np. sprzęt,
					materiały, zajęcia specjalistyczne) i jaki jest szacunkowy koszt?
				</p>
				<textarea
					id='helpMessage'
					name='helpMessage'
					rows='5'
					required
				></textarea>
			</label>
		</>
	);
};

export default SchoolInputs;
