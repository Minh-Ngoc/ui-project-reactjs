import Home from '../pages';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Market from '../pages/Market';
import ActiveBids from '../pages/ActiveBids';
import MyPortfolio from '../pages/MyPortfolio';
import Wallet from '../pages/Wallet';
import Favourites from '../pages/Favourites';
import History from '../pages/History';
import Settings from '../pages/Settings';
import DefaultLayout from '../components/DefaultLayout';
export const publicRoutes = [
    {
        path: '/', component: Home, layout: DefaultLayout
    },
    {
        path: '/login', component: Login, layout: null
    },
    {
        path: '/register', component: Register, layout: null
    },
    {
        path: '/dashboard', component: Dashboard, layout: DefaultLayout
    },
    {
        path: '/market', component: Market, layout: DefaultLayout
    },
    {
        path: '/activebids', component: ActiveBids, layout: DefaultLayout
    },
    {
        path: '/myportfolio', component: MyPortfolio, layout: DefaultLayout
    },
    {
        path: '/wallet', component: Wallet, layout: DefaultLayout
    },
    {
        path: '/favourites', component: Favourites, layout: DefaultLayout
    },
    {
        path: '/history', component: History, layout: DefaultLayout
    },
    {
        path: '/settings', component: Settings, layout: DefaultLayout
    },
]