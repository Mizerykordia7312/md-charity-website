import MainPage from './pages/MainPage.jsx';
import AutismInfoPage from './pages/AutismInfoPage.jsx';
import AchievementsPage from './pages/AchievementsPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import HelpUsPage from './pages/HelpUsPage.jsx';
import TestPage from './pages/TestPage.jsx';
import Root from './pages/Root.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: 'autism-info',
				element: <AutismInfoPage />,
			},
			{
				path: 'achievements',
				element: <AchievementsPage />,
				children: [
					{
						path: 'zs16',
						element: <TestPage />,
					},
				],
			},
			{
				path: 'news',
				element: <NewsPage />,
			},
			{
				path: 'help-us',
				element: <HelpUsPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
