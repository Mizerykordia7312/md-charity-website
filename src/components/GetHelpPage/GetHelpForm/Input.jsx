import classes from './Input.module.scss';

const Input = ({
	name,
	handleChange,
	type = 'text',
	description,
	error,
	value,
	isTextarea = false,
	...props
}) => {
	return (
		<label htmlFor={name}>
			<p>{description}</p>
			{isTextarea ? (
				<textarea
					id={name}
					name={name}
					rows='5'
					onChange={handleChange}
					value={value}
					{...props}
				></textarea>
			) : (
				<input
					type={type}
					id={name}
					name={name}
					onChange={handleChange}
					value={value}
					{...props}
				/>
			)}
			{error[name] && <p className={classes.errorMessage}>{error[name]}</p>}
		</label>
	);
};

export default Input;
