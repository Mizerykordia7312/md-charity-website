import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<>
			<Navigation />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Root;
