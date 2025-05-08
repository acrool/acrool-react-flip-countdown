import dayjs from 'dayjs';
import React, {useEffect} from 'react';

import FlipUnitContainer from './components/FlipUnitContainer';
import useFlipClockCountDownTimer from './hook';
import styles from './index.module.scss';
import {EUnit, IFlipCountdownProps} from './types';



const FlipCountdown = ({
    endTime,
    isDebug = false,
}: IFlipCountdownProps) => {
    const {start, hours, minutes, seconds} = useFlipClockCountDownTimer();

    const endTimeMs = dayjs(endTime).valueOf();

    useEffect(() => {
        start(endTimeMs);

    }, [endTime]);
    
    return (
        <div className={styles.root}>

            <div className={styles.title}>
                <div className={styles.unit}>HOUR</div>
                <div className={styles.unit}>MIN</div>
                <div className={styles.unit}>SEC</div>
            </div>

            <div className={styles.value}>
                {/* 時 */}
                <FlipUnitContainer
                    unit={EUnit.hours}
                    {...hours}
                />

                <div className={styles.semicolon}>:</div>

                {/* 分 */}
                <FlipUnitContainer
                    unit={EUnit.minutes}
                    {...minutes}
                />

                <div className={styles.semicolon}>:</div>

                {/* 秒 */}
                <FlipUnitContainer
                    unit={EUnit.seconds}
                    {...seconds}
                />
            </div>

            {isDebug && (
                <div className="mt-3" style={{fontSize: 25, fontWeight: 'bold'}}>
                    {String(hours.digit).padStart(2, '0')} : {String(minutes.digit).padStart(2, '0')} : {String(seconds.digit).padStart(2, '0')}
                </div>
            )}
        
        </div>
    );
};

export default FlipCountdown;