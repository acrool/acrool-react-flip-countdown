import clsx from 'clsx';

import styles from './animated-card.module.scss';



interface IProps {
    animation: 'fold' | 'unfold'
    digit: string
    isPause?: boolean
}

/**
 * 動態卡片
 * @param animation  動畫模式名稱
 * @param digit
 * @param isPause
 */
const AnimatedCard = ({
    animation,
    digit,
    isPause = true,
}: IProps) => {
    return (
        <div className={clsx(
            styles.root,
            styles[animation],
            isPause && styles.paused
        )}>
            <span className={styles.digit}>{digit}</span>
        </div>
    );
};


export default AnimatedCard;
