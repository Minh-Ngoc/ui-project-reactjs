import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import ImageText from '../ImageText';
import SvgText from '../SvgText';
import { SidebarItems } from './SideBarItem';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Icon from '../../assets/imgs/Ethereum (ETH).png';
import ArrowRight from '../../assets/imgs/VectorRight.png';
const cx = classNames.bind(styles);

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard');
    const joinPath = (path) => {
        let text = path.split(' ').join('')
        return `/${text.toLowerCase()}`
    }

    return (
        <div className={cx('wrapper')}>
            <Link to='/' className={cx('sidebar__logo')}>
                <img src={SidebarItems[0].images} alt="ErrorLogo" />
                <div className={cx('sidebar__logo-text')}>
                    <h2>MyNFT</h2>
                    <p>NFT Marketplace</p>
                </div>
            </Link>
            <div className={cx('sidebar__redirect')}>
                {
                    SidebarItems.map((item) => {
                        return (
                            <div className={cx('sidebar__item')} key={item.id} >
                                <div className={cx('sidebar__item-title')}> 
                                    {item.name ? item.name : ''} 
                                </div>
                                {
                                    item.values ? item.values.map((value, index) => (
                                        <SvgText 
                                            to={joinPath(value)}
                                            key={value} 
                                            text={value} 
                                            Component={item.images[index]} 
                                            onClick={() => setActive(value)}
                                            className={cx('image__text', active == value && 'active')}
                                        /> 
                                    )) : ''
                                }
                            </div>
                        ) 
                    })
                }
            </div>
            <div className={cx('sidebar__card')} >
                <div className={cx('sidebar__card-title')} >Your Balance</div>
                <div className={cx('sidebar__card-value')} >1,034.02</div>
                <ImageText 
                    unit='ETH' 
                    src={Icon} 
                    className={cx('sidebar__card-icon')}
                /> 
                <Button 
                    increate='+'
                    textContent='Top Up Balance'
                    backgroundColor='#fff'
                    src={ArrowRight}
                    className={cx('sidebar__card-btn')}
                />
            </div>
        </div>
    )
}

export default Sidebar;
