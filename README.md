# Acrool React Flip Countdown

<a href="https://acrool-react-flip-countdown.pages.dev/" title="Acrool React Block - This is a block function for React development loading block">
    <img src="https://raw.githubusercontent.com/acrool/acrool-react-flip-countdown/main/example/public/og.png" alt="Acrool React Block Logo"/>
</a>

<p align="center">
    A simple and animated flip countdown timer for React.
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@acrool/react-flip-countdown.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-flip-countdown)
[![npm](https://img.shields.io/bundlejs/size/@acrool/react-flip-countdown?style=for-the-badge)](https://github.com/acrool/@acrool/react-flip-countdown/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/l/@acrool/react-flip-countdown?style=for-the-badge)](https://github.com/acrool/react-flip-countdown/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/@acrool/react-flip-countdown.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-flip-countdown)
[![npm](https://img.shields.io/npm/dt/@acrool/react-flip-countdown.svg?style=for-the-badge)](https://www.npmjs.com/package/@acrool/react-flip-countdown)

</div>




## Features

- Flip animation for hours, minutes, and seconds
- Support `endTime` as countdown target
- Supports 3-digit hours: the display shows 99, and starts flipping down when the hour drops below 99
- Lightweight and easy to use


## Install

```bash
yarn add @acrool/react-flip-countdown
```


## Usage

add in your index.tsx
```tst
import "@acrool/react-flip-countdown/dist/index.css";
```

then in your page
```tsx
import FlipCountdown from '@acrool/react-flip-countdown';

const Example = () => {
    
    return (
        <FlipCountdown endTime="2025/05/05 18:50:53"/>
    );
};
```

There is also a example that you can play with it:

[![Play react-editext-example](https://raw.githubusercontent.com/acrool/acrool-react-flip-countdown/main/play-in-example-button.svg)](https://acrool-react-flip-countdown.pages.dev)


## Props

| Prop      | Type       | Default | Required | Description                                                                   |
|:----------|------------|---------|----------|-------------------------------------------------------------------------------|
| `endTime` | `string `  | –       | Yes      | Countdown target time. Accepts a date string or a format supported by `dayjs` |


## License

MIT © [Acrool](https://github.com/acrool)
