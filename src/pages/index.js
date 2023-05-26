import { useState, useCallback } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import { notificationIcon, bannerImage, bannerImage1, bannerImage2, bannerImage3, userIcon, timeImg, Icon } from '../components/ImageLists'
import Images from '../components/Images'
import ImageText from '../components/ImageText';
import Button from '../components/Button';
import Card from '../components/Card';
import { userItemLists } from '../components/UserLists';

const cx = classNames.bind(styles);

const Home = () => {
    const navTrendings = ['Art', 'Music', 'Collectibles', 'Utility'];
    const [activeNavTrending, SetActiveNavTrending] = useState('Art')
    const [state, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    

    const handleOnclick = (i) => {
        forceUpdate()
        userItemLists[i].follow = !userItemLists[i].follow
    }  
    return (
        <div className={cx('wrapper')}>
            {/* --------------------------Header--------------------- */}
            <div id={cx('header')}>
                <div className={cx('header__search')}>
                    <input
                        className={cx('ip__search')}
                        type="text"
                        id={cx('search')}
                        placeholder=' '
                    />
                    <label htmlFor='search' className={cx('label__search')}>Search Item, Collection and Account..</label>
                </div>
                <div className={cx('header__icon')}>
                    <Images
                        className={cx('icon__notification')}
                        src={notificationIcon}
                        alt="ErrorNotification"
                    />
                    <Images
                        className={cx('icon__user')}
                        src={userIcon}
                        alt="ErrorUser"
                    />
                </div>
            </div>
            {/* ---------------------------Main---------------------- */}
            <main id={cx('main')}>
                {/* -------------------Banner----------------- */}

                <div className={cx('content')}>
                    <div className={cx('banner')}>
                        <Carousel showThumbs={false} autoPlay={true}>
                            <img src={bannerImage} alt="ErrorBanner" />
                            <img src={bannerImage1} alt="ErrorBanner" />
                            <img src={bannerImage2} alt="ErrorBanner" />
                            <img src={bannerImage3} alt="ErrorBanner" />
                        </Carousel>
                        <div className={cx('banner__introduce-content')}>
                            <div className={cx('banner__introduce-title')}>
                                Discover, Create and Sell Your Own NFT.
                            </div>
                            <div className={cx('banner__introduce-btn')}>
                                <Button
                                    className={cx('banner__btn__discover')}
                                    textContent='Discover'
                                />
                                <Button
                                    className={cx('banner__btn__create')}
                                    textContent='Create'
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('trending')}>
                        <div className={cx('trending__header')}>
                            <div className={cx('trending__header-title')}>Trending Auctions</div>
                            <div className={cx('trending__header-nav')}>
                                <nav>
                                    {
                                        navTrendings.map(nav => (
                                            <Button
                                                key={nav}
                                                onClick={(e) => SetActiveNavTrending(nav)}
                                                className={cx('header-nav_btn', activeNavTrending === nav && 'active')}
                                                textContent={nav}
                                            />
                                        ))
                                    }
                                </nav>
                            </div>
                        </div>
                        <div className={cx('trending__content')}>
                            {
                                userItemLists.map(item => (
                                    <div className={cx('trending__content-item')} key={item.author}>
                                        <Images
                                            src={item.video}
                                            className={cx('content-item__img')}
                                            children={(
                                                <>
                                                    <Button
                                                        className={cx('item__img__btn')}
                                                        textContent='Place a Bid'
                                                    />
                                                    <Images
                                                        className={cx('item__img__time')}
                                                        src={timeImg}
                                                        children={(
                                                            <div className={cx('item__img__time-group')}>
                                                                <span> {item.time.hour} </span>
                                                                <span>:</span>
                                                                <span> {item.time.minutes} </span>
                                                                <span>:</span>
                                                                <span> {item.time.seconds} </span>
                                                            </div>
                                                        )}
                                                    />
                                                </>
                                            )}
                                        />
                                        <div className={cx('content-item__user')}>
                                            <div className={cx('content-item__user-left')}>
                                                <h2> {item.title} </h2>
                                                <ImageText
                                                    className={cx('author')}
                                                    src={item.image}
                                                    text={`@${item.author}`}
                                                />
                                                <p>Current Bid</p>
                                            </div>
                                            <div className={cx('content-item__user-right')}>
                                                <p> {item.like} Likes</p>
                                                <ImageText
                                                    className={cx('eth')}
                                                    src={Icon}
                                                    text={item.quantity}
                                                    children={(<span> ETH </span>)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className={cx('content__right')}>
                    <Card className={cx('card')} />
                    <div className={cx('top__creator')}>
                        <div className={cx('top__creator__header')}>
                            <h1>Top Creator</h1>
                            <p>See All</p>
                        </div>
                        <div className={cx('top__creator__container')}>
                            {
                                userItemLists.map((user, index) => {
                                    return (
                                        <div className={cx('top__creator__list')} key={user.name}>
                                            <div className={cx('top__creator__list-info')}>
                                                <p> {index + 1 + '.'} </p>
                                                <Images
                                                    className={cx('user_image')}
                                                    src={user.image}
                                                />
                                                <div className={cx('user-info')}>
                                                    <p className={cx('user__username')}> {user.name} </p>
                                                    <p className={cx('user__author')}> @{user.author} </p>
                                                </div>
                                            </div>
                                            <Button
                                                onClick={() => handleOnclick(index)}
                                                className={cx('top__creator__list-follow', user.follow ? 'active' : null)}
                                                textContent={!user.follow ? 'Follow' : 'Following'}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;
