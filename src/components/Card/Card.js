import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import ImageText from '../ImageText';
import GreenArrow from '../../assets/imgs/Vector.png'
import RedArrow from '../../assets/imgs/Vector1.png'
import { cardItem } from './CardItem'
const cx = classNames.bind(styles);

const Card = ({ className }) => {
    
    return (
        <div className={cx('wrapper')}>
            {
                cardItem.map((card, index) => {
                    return (
                        <div className={cx('card__content', className)} key={index} >
                            <div className={cx('card__content-title')}> {card.title} </div>
                            <div className={cx('card__content-group')}>
                               {card.icon ? (
                                   <img src={card.icon} alt='errorImage'/>
                                    ) : ( <b>+</b> )
                                }
                                <h2> {card.value.toFixed(2)} </h2>
                                <span> {card.unit} </span>
                            </div>
                            <ImageText 
                                className={cx('justifly-center')}
                                src={card.percent > 5 ? GreenArrow : RedArrow}
                                text={card.percent + '%'}
                            />
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Card;