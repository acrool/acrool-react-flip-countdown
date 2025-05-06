import dayjs from 'dayjs';

import {EUnit} from './types';
import {getAnimation,getDigit, getPreviousDigit, getTimeDiffFromNow} from './utils';


describe('getTimeDiffFromNow', () => {
    it('should return correct time difference', () => {
        const end = dayjs().add(1, 'hour').add(2, 'minute').add(3, 'second').millisecond(0).valueOf();
        const result = getTimeDiffFromNow(end);
        expect(result.hours).toBe(1);
        expect(result.minutes).toBe(2);
        expect(result.seconds).toBe(3);
    });

    it('should return capped values when hours > 99', () => {
        const end = dayjs().add(150, 'hour').millisecond(0).valueOf();
        const result = getTimeDiffFromNow(end);
        expect(result).toEqual({hours: 99, minutes: 99, seconds: 99});
    });

    it('should return zero values for past time', () => {
        const end = dayjs().subtract(1, 'hour').millisecond(0).valueOf();
        const result = getTimeDiffFromNow(end);
        expect(result.hours).toBe(0);
        expect(result.minutes).toBe(0);
        expect(result.seconds).toBe(0);
    });
});


describe('getPreviousDigit', () => {
    it('should return same digit if paused', () => {
        expect(getPreviousDigit(5, EUnit.hours, true)).toBe(5);
    });

    it('should return +1 if not paused', () => {
        expect(getPreviousDigit(5, EUnit.minutes, false)).toBe(6);
    });

    it('should cap at 99 if not paused and >= 99 (hours)', () => {
        expect(getPreviousDigit(150, EUnit.hours, false)).toBe(99);
    });

    it('should return 0 if current is 59 for minutes/seconds', () => {
        expect(getPreviousDigit(59, EUnit.seconds, false)).toBe(0);
    });
});


describe('getDigit', () => {
    it('should return previousDigit if isFlip is true', () => {
        expect(getDigit(true, '8', '7')).toBe('8');
    });

    it('should return currentDigit if isFlip is false', () => {
        expect(getDigit(false, '8', '7')).toBe('7');
    });
});


describe('getAnimation', () => {
    it('should return fold if isFlip is true', () => {
        expect(getAnimation(true)).toBe('fold');
    });

    it('should return unfold if isFlip is false', () => {
        expect(getAnimation(false)).toBe('unfold');
    });
});
