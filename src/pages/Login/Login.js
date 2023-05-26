import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import logo from '../../assets/imgs/Logo.png'; 
import google from '../../assets/imgs/Google.png';
import github from '../../assets/imgs/Github.png';
import facebook from '../../assets/imgs/Facebook.png';
import img5 from '../../assets/imgs/backgroud.png';
import backgroud from '../../assets/imgs/backgroud.png';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

const Login = () => {
    const itemLogin = [google, github, facebook]
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div id={cx('login')}>
                    <div className={cx('login__logo')}>
                        <img src={logo} alt="ErrorLogo" />
                        <div className={cx('login__logo__text')}>
                            <h2>MyNFT</h2>
                            <p>NFT Marketplace</p>
                        </div>
                    </div>

                    <h1>Log In</h1>

                    <div className={cx('login__form')}>
                        <form>
                            <div className={cx('form__group')}>
                                <label htmlFor='username'>Username</label>
                                <input id='username' type='text' placeholder='username'/>
                            </div>
                            <div className={cx('form__group', 'form__password')}>
                                <div className={cx('form__label__group')}>
                                    <label htmlFor='password'>Password</label>
                                    <p className={cx('forgot__password')}>Forgot Password ?</p>
                                </div>
                                <span className={cx('hide__password')}></span>
                                <input id='password' type='password' placeholder='password'/>
                            </div>
                            
                            <div className={cx('form__group', 'isValid')}></div>

                            <Button 
                                className={cx('login__btn')}
                                textContent='Login'
                            />
                        </form>
                    </div>
                    <div className={cx('login__with')}>
                        <p>or continue with</p>
                        <div className={cx('login__with__icon')}>
                            {
                                itemLogin.map((item, index) => (
                                    <Button
                                        key={index}
                                        src={item}
                                        className={cx('login__with__icon-item')}
                                    />
                                ))
                            }
                        </div>
                        <div className={cx('login__with__group')}>
                            <p>Don't have an account yet?</p>
                            <p>Sign up for free</p>
                        </div>
                    </div>
                </div>
                <div id={cx('background')}></div>
            </div>
        </div>
    )
}

export default Login;
