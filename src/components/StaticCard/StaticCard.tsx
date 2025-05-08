import clsx from 'clsx';

import styles from './static-card.module.scss';


interface IProps {
    position: 'upperCard'|'lowerCard'
    digit: string
}


/**
 * 靜態卡片
 * @param position
 * @param digit
 */
const StaticCard = ({
    position,
    digit
}: IProps) => {
    return (
        <div className={clsx(styles.root, styles[position])}>
            <span>{digit}</span>
        </div>
    );
};

export default StaticCard;