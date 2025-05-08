import {useCallback, useEffect, useRef, useState} from 'react';

import {getTimeDiffFromNow} from './utils';





type TStart = (endTime: number) => Promise<void>

/**
 * 翻頁時鐘倒數計時器
 */
const useFlipClockCountDownTimer = () => {
    const [hours, setHours] = useState({digit: 0, flip: false, isPause: true});
    const [minutes, setMinutes] = useState({digit: 0, flip: false, isPause: true});
    const [seconds, setSeconds] = useState({digit: 0, flip: false, isPause: true});

    const timerRef = useRef<ReturnType<typeof setInterval>>(null);

    //卸載時清除計時器
    useEffect(()=> {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const start: TStart = useCallback(async (endTime: number) => {

        return new Promise<void>((resolve) => {

            // 清除上一個計時器
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            // 取得要倒數的時分秒
            const currentTime = getTimeDiffFromNow(endTime);

            // 如果endTime為過去時間則不需要開始倒數
            if (currentTime.hours <= 0 && currentTime.minutes <= 0 && currentTime.seconds <= 0) {
                resolve();
                return;
            }

            //  第一次渲染畫面
            setHours(prev => ({...prev, digit: currentTime.hours, isPause: true}));
            setMinutes(prev => ({...prev, digit: currentTime.minutes, isPause: true}));
            setSeconds(prev => ({...prev, digit: currentTime.seconds, isPause: true}));


            // //啟動計時
            timerRef.current = setInterval(() => {
                //重新計算當前剩餘時間
                const {hours: newHours, minutes: newMinutes, seconds: newSeconds} = getTimeDiffFromNow(endTime);

                //更新時分秒狀態
                setHours(prev => ({
                    digit: newHours,
                    flip: newHours !== prev.digit ? !prev.flip : prev.flip,
                    isPause: newHours === prev.digit,
                }));

                setMinutes(prev => ({
                    digit: newMinutes,
                    flip: newMinutes !== prev.digit ? !prev.flip : prev.flip,
                    isPause: newMinutes === prev.digit,
                }));

                setSeconds(prev => ({
                    digit: newSeconds,
                    flip: newSeconds !== prev.digit ? !prev.flip : prev.flip,
                    isPause: newSeconds === prev.digit,
                }));

                if (newHours <= 0 && newMinutes <= 0 && newSeconds <= 0) {
                    resolve();
                    if (timerRef.current) clearInterval(timerRef.current);
                }

                return{
                    newHours,
                    newMinutes,
                    newSeconds,
                };
            }, 1000);
        });

    }, []);

    return {
        start,
        hours,
        minutes,
        seconds,
    };
};


export default useFlipClockCountDownTimer;
