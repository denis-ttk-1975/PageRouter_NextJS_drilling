import { IRatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: IRatingProps): JSX.Element => {
    console.log('setRating: ', setRating);
    console.log('isEditable: ', isEditable);

    const constructRating = (currentRating:number): void => {
        const updatedArray = ratingArray.map((item: JSX.Element, index: number) => {
            return (<StarIcon className = {cn(styles.star, {[styles.filled]: index < currentRating})}/>);
        });
        setRatingArray(updatedArray);
    };

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(()=> { constructRating(rating);}, [rating]);



    return <div {...props} className = { className }>
        {ratingArray.map((item:JSX.Element, index: number) => (<span key = { index }>{item}</span>))}
        </div>;
};
