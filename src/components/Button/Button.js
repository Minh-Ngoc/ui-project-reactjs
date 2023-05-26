import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Button = ({to, increate, textContent, className, src, type, backgroundColor, color, ...props}) => {
    const styles = { backgroundColor, color }
    let Comp = 'button';

    if(to) {
        Comp = Link ;
    }

    return (
        <div className={cx('wrapper', className)}>
            <Comp 
                style={styles}  
                className={cx('button')} 
                type={type} 
                to={to}
                {...props}
            >
                {increate && (<b> {increate} </b>)}
                {textContent && <span> {textContent} </span>}
                {src && ( <img src={src} alt="ErrorImage" /> ) }
                
            </Comp>
        </div>
    )
}

export default Button;