import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: IRatingProps): JSX.Element => {
    console.log('setRating: ', setRating);
    console.log('isEditable: ', isEditable);

    const constructRating = (currentRating:number): void => {
        const updatedArray = ratingArray.map((item: JSX.Element, index: number) => {
            return (<span
                    className = {cn(styles.star, {
                    [styles.filled]: index < currentRating,
                    [styles.editable]: isEditable})}
                    onMouseEnter = { () => changeDisplay(index+1) }
                    onMouseLeave = { () => changeDisplay(rating) }
                    onClick = { () => clickHandler(index+1) }>
                <StarIcon
                    tabIndex={ isEditable ? 0 : -1 }
                    onKeyDown = {(event: KeyboardEvent<SVGElement>) => isEditable && handleSpaceKeyDown(index+1, event)}
                    />
                </span>);
        });
        setRatingArray(updatedArray);
        };

    const changeDisplay = (index: number):void => {
            if (!isEditable) { return; }
            constructRating(index);
        };

    const clickHandler = (index: number):void => {
            if (!isEditable || !setRating) { return; }
            setRating(index);
        };
        const handleSpaceKeyDown = (index: number, event:KeyboardEvent<SVGElement> ):void => {
            console.log('keydown');
            if (!isEditable || !setRating || event.code != 'Space') { return; }
            setRating(index);
        };

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(()=> { constructRating(rating);}, [rating]);



    return <div {...props} className = { className }>
        {ratingArray.map((item:JSX.Element, index: number) => (<span key = { index }>{item}</span>))}
        </div>;
};
