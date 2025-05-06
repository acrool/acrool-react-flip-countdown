import {paddingLeft} from '@acrool/js-utils/string';

import {EUnit} from '../../types';
import {getAnimation, getDigit, getPreviousDigit} from '../../utils';
import AnimatedCard from '../AnimatedCard';
import StaticCard from '../StaticCard';
import styles from './flip-unit-container.module.scss';


interface IProps {
    digit: number
    flip: boolean
    unit: EUnit
    isPause?: boolean
}

/**
 * FlipUnitContainer
 * @param digit
 * @param flip
 * @param unit
 * @param isPause
 */
const FlipUnitContainer = ({
    digit,
    flip,
    unit,
    isPause = true,
}: IProps) => {

    // add zero
    const currentDigitStr = paddingLeft(digit, 2);
    const previousDigitStr = paddingLeft(getPreviousDigit(digit, unit, isPause), 2);

    // flip digits
    const digit1 = getDigit(flip, previousDigitStr, currentDigitStr);
    const digit2 = getDigit(!flip, previousDigitStr, currentDigitStr);

    // flip animations
    const animation1 = getAnimation(flip);
    const animation2 = getAnimation(!flip);


    return (
        <div className={styles.root}>
            {/*  十位數字  */}
            <div className={styles.container}>
                <StaticCard
                    position="upperCard"
                    digit={currentDigitStr.substring(0, 1)}
                />
                <StaticCard
                    position="lowerCard"
                    digit={previousDigitStr.substring(0, 1)}
                />
                <AnimatedCard
                    digit={digit1.substring(0, 1)}
                    animation={animation1}
                    isPause={isPause}
                />
                <AnimatedCard
                    digit={digit2.substring(0, 1)}
                    animation={animation2}
                    isPause={isPause}
                />
            </div>

            {/*  個位數字  */}
            <div className={styles.container}>
                <StaticCard
                    position="upperCard"
                    digit={currentDigitStr.substring(1, 2)}
                />
                <StaticCard
                    position="lowerCard"
                    digit={previousDigitStr.substring(1, 2)}
                />
                <AnimatedCard
                    digit={digit1.substring(1, 2)}
                    animation={animation1}
                    isPause={isPause}
                />
                <AnimatedCard
                    digit={digit2.substring(1, 2)}
                    animation={animation2}
                    isPause={isPause}
                />
            </div>
        </div>
    );
};



export default FlipUnitContainer;
