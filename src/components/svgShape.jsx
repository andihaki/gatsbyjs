import React from "react";

const Wave = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        aria-labelledby="title" 
        viewBox="0 0 1920 240" 
        id="wave">
        <title id="title">wave</title>
        <g><path fill="orange" d="M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"></path></g>
    </svg>
)

const WaveMedium = () => (
    <svg viewBox="0 0 1440 160">
        <g><path fill="orange" d="M0,160 L0,0 C548.949848,3.38469e-14 823.425766,157.977 1440,157.977 L1440,160 L0,160 Z" transform="matrix(-1 0 0 1 1440 0)"></path></g>
    </svg>
)

export { Wave, WaveMedium };