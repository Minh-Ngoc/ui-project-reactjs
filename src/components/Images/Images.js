import classNames from 'classnames/bind';
import styles from './Images.module.scss';

const cx = classNames.bind(styles);

const Images = ({src, alt, className, children}) => {
    return (
        <div className={cx(className, 'wrapper')}>
            <img src={src} alt={alt} />
            {children}
        </div>
    )
}

export default Images;
