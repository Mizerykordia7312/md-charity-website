const PersonInputs = () => {
	return (
		<>
			<label htmlFor='secondName'>
				<p>Podaj imię i nazwisko osoby, której ma dotyczyć pomoc:</p>
				<input type='text' id='secondName' name='secondName' required />
			</label>

			<label htmlFor='age'>
				<p>Podaj wiek osoby, której ma dotyczyć pomoc:</p>
				<input type='number' id='age' name='age' required />
			</label>

			<label htmlFor='descriptionMessage'>
				<p>
					Jakiego rodzaju trudności zdrowotne lub rozwojowe dotyczą osoby
					potrzebującej wsparcia?
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
					Jakiego rodzaju wsparcia potrzebujesz i ile orientacyjnie może
					kosztować?
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

export default PersonInputs;
