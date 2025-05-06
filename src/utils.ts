import dayjs from 'dayjs';

import {EUnit} from './types';



/**
 * 取得與當前時間的時間差
 * @param endTime
 */
export const getTimeDiffFromNow = (endTime: number) => {
    // 將現在時間 dayjs 物件的毫秒設置為0，避免與 endTime 計算造成一秒誤差
    const now = dayjs().millisecond(0);
    // 計算endTime與當前時間秒差，並確保時間差不會是負數
    const diff = Math.max(dayjs(endTime).diff(now, 'seconds'), 0);

    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;

    if (hours > 99) {
        return {hours: 99, minutes: 99, seconds: 99};
    }

    return {hours, minutes, seconds};
};


/**
 * 取得前一個數字
 * @param currentDigit
 * @param unit
 * @param isPause
 */
export const getPreviousDigit = (currentDigit: number, unit: string, isPause: boolean) => {
    let previousDigit = 0;

    if (isPause) {
        previousDigit = currentDigit;
    } else {
        if (currentDigit === 99) {
            previousDigit = currentDigit;
        } else {
            previousDigit = currentDigit + 1;
        }
    }

    // to prevent a negative value (防止出現負值)
    if (unit === EUnit.hours) {
        if(previousDigit >= 99){
            previousDigit = 99;
        }
    } else {
        if(previousDigit === 60){
            previousDigit = 0;
        }
    }

    return previousDigit;
};


/**
 * 取得 digit 數字
 * @param isFlip  是否需要翻轉
 * @param previousDigit
 * @param currentDigit
 */
export const getDigit = (isFlip: boolean, previousDigit: string, currentDigit: string) => {
    if (isFlip) {
        return previousDigit;
    }

    return currentDigit;
};


/**
 * 取得 animation 動畫模式名稱
 * @param isFlip  是否需要翻轉
 */
export const getAnimation = (isFlip: boolean) => {
    if (isFlip) {
        return 'fold';
    }

    return 'unfold';
};
