import classNames from 'classnames/bind';
import { Link } from "react-router-dom";

import styles from './SvgText.module.scss';

const cx = classNames.bind(styles);

const SvgText = ({to, Component, src, text, className, unit, children , ...props}) => {
    let Comp = 'div';

    if(to) {
        Comp = Link ;
    }
    return (
        <Comp 
            className={cx('wrapper', className)} 
            to={to}
            {...props} >
            <Component />
            {text || unit ? <span> {text} {unit} </span> : ''}
            {/* <span> {text} {unit} </span> */}
            {children}
        </Comp>
    )
}

export default SvgText;