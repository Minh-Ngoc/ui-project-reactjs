import Logo from '../../assets/imgs/Logo.png';
import { ReactComponent as DashBoard } from '../../assets/svgs/dashBoard.svg';
import { ReactComponent as Market } from '../../assets/svgs/market.svg';
import { ReactComponent as ActiveBids } from '../../assets/svgs/activeBids.svg';
import { ReactComponent as MyPortfolio } from '../../assets/svgs/myPortfolio.svg';
import { ReactComponent as Wallet } from '../../assets/svgs/wallet.svg';
import { ReactComponent as Favourites } from '../../assets/svgs/favourites.svg';
import { ReactComponent as History } from '../../assets/svgs/history.svg';
import { ReactComponent as Settings } from '../../assets/svgs/settings.svg';
import { ReactComponent as LighMode } from '../../assets/svgs/lightMode.svg';

export const SidebarItems = [
    {
        id: 1,
        name: false,
        values: false,
        images: Logo
    },
    {
        id: 2,
        name: false,
        values: ['Dashboard', 'Market', 'Active Bids'],
        images: [DashBoard, Market, ActiveBids]
    },
    {
        id: 3,
        name: 'Proflie',
        values: ['My Portfolio', 'Wallet', 'Favourites', 'History', 'Settings'],
        images: [MyPortfolio, Wallet, Favourites, History, Settings]
    },
    {
        id: 4,
        name: 'Other',
        values: ['Light Mode'],
        images: [LighMode]
    },
] 

// export const SidebarItem = [
//     {
//         logo: Logo
//     },
//     {
//         dashboard: [
//             {
//                 dashboard: DashBoard
//             },
//             {
//                 market: Market
//             },
//             {
//                 activeBids: ActiveBids
//             },
//         ]
//     },
//     {
//         Proflie: [
//             {
//                 myPortfolio: MyPortfolio
//             },
//             {
//                 wallet: Wallet
//             },
//             {
//                 favourites: Favourites
//             },
//             {
//                 history: History
//             },
//             {
//                 settings: Settings
//             },
//         ]
//     },
//     {
//         Other: [
//             {
//                 lightMode: LighMode
//             },
//         ]
//     }

// ]