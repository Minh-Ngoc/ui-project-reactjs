import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import logo from '../../assets/imgs/Logo.png'; 
import google from '../../assets/imgs/Google.png';
import github from '../../assets/imgs/Github.png';
import facebook from '../../assets/imgs/Facebook.png';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// React Final Form
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
// React toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const cx = classNames.bind(styles);

const Login = () => {
    const navigate = useNavigate();
    
    const itemLogin = [google, github, facebook];
    const [type, setType] = useState('password');

    const handleShowPassword = (e) => type === 'password' ? setType('text') : setType('password');
    
    const onSubmit = async values => {
        if (values.username !== 'ngocminh') {
          return { username: 'Unknown username' }
        }
        if (values.password !== 'ngocminh') {
          return { [FORM_ERROR]: 'Login Failed' }
        }
        toast.success("Login successfully!", {
            position: toast.POSITION.TOP_RIGHT,
            style: {
                minWidth: '400px',
                padding: '1rem',
                right: '4.2rem'
            }
        })
        setTimeout(() => navigate('/'), 2000)
    }

    return (
        <div className={cx('wrapper')}>
            <ToastContainer autoClose={1500} />
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

                    <Form
                        onSubmit={onSubmit}
                        validate={values => {
                            const errors = {}
                            
                            if (!values.username) {
                                errors.username = 'Username không được bỏ trống!'
                            }
                            if (!values.password) {
                                errors.password = 'Password không được bỏ trống!'
                            } 
                            if(values.username && values.password && values.username !== 'ngocminh') {
                                errors.username = 'Username không tồn tại!'
                            }
                            return errors
                        }}
                        render={({
                            submitError,
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Field name="username">
                                    {({ input, meta }) => (
                                        <div className={cx('form__group')}>
                                            <label htmlFor='username'>Username</label>
                                            <input 
                                                {...input}
                                                type='text' 
                                                placeholder='Enter: ngocminh'
                                                className={cx((meta.error || meta.submitError) && meta.touched && 'ipError')}
                                            />
                                            {(meta.error || meta.submitError) && meta.touched && (
                                                <span className={cx('errorMessage')}>{meta.error || meta.submitError}</span>
                                            )}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({ input, meta }) => (
                                        <>
                                            <div className={cx('form__group', 'form__password')}>
                                                <div className={cx('form__label__group')}>
                                                    <label htmlFor='password'>Password</label>
                                                    <p className={cx('forgot__password')}>Forgot Password ?</p>
                                                </div>
                                                <span onClick={handleShowPassword} className={cx('hide__password')}></span>
                                                <input 
                                                    {...input}
                                                    type={type} 
                                                    placeholder='Enter: ngocminh'
                                                    className={cx((meta.error || meta.submitError) && meta.touched && 'ipError')}
                                                />
                                            </div>
                                            {meta.error && meta.touched && <span className={cx('errorMessage')}>{meta.error}</span>}
                                        </>
                                    )}
                                </Field>
                                
                                {submitError && <div className="error">{submitError}</div>}

                                <Button 
                                    className={cx('login__btn')}
                                    textContent='Login'
                                    type="submit"
                                />
                            </form>
                        )}
                    />
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
