import MainPage from './pages/MainPage.jsx';
import AutismInfoPage from './pages/AutismInfoPage.jsx';
import AchievementsPage from './pages/AchievementsPages/AchievementsPage.jsx';
import GetHelpPage from './pages/GetHelpPage.jsx';
import HelpUsPage from './pages/HelpUsPage.jsx';
import HelpedPage from './pages/AchievementsPages/HelpedPage.jsx';
import BeneficiariesPage from './pages/AchievementsPages/BeneficiariesPage.jsx';
import ChildPage from './pages/AchievementsPages/ChildPage.jsx';
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
				path: 'autyzm-info',
				element: <AutismInfoPage />,
			},
			{
				path: 'pomoglismy',
				element: <AchievementsPage />,
				children: [
					{
						path: 'podopieczni',
						element: <BeneficiariesPage />,
						children: [
							{
								path: ':childID',
								element: <ChildPage />,
							},
						],
					},
					{
						path: ':schoolID',
						element: <HelpedPage />,
					},
				],
			},
			{
				path: 'wesprzyj-nas',
				element: <HelpUsPage />,
			},
			{
				path: 'dla-potrzebujacych',
				element: <GetHelpPage />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
