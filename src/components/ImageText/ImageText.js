import classNames from 'classnames/bind';
import { Link } from "react-router-dom";

import styles from './ImageText.module.scss';

const cx = classNames.bind(styles);

const ImageText = ({to, src, text, className, unit, children , ...props}) => {
    let Comp = 'div';

    if(to) {
        Comp = Link ;
    }
    return (
        <Comp 
            className={cx('wrapper', className)} 
            to={to}
            {...props} >
            <img 
                src={src} 
                alt='imgError' 
            />
            <span> {text} {unit} </span>
            {children}
        </Comp>
    )
}

export default ImageText;