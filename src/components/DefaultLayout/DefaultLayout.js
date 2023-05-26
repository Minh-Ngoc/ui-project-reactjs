import SideBar from '../Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const Layout = ({children}) => {
    return (
        <div className={cx('contanier')}>
            <SideBar />
            {children}
        </div>
    )
}

export default Layout;