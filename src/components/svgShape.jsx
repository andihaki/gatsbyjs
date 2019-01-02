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

const NewTab = () => (
    <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className="css-19vhmgv" >
        <g transform="translate(5,15)">
            <path fill="currentColor" d="
                M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
                0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
            <polygon fill="currentColor" points="
                45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
                14.9 62.8,22.9 71.5,22.9"></polygon>
        </g>
    </svg>
)

export { Wave, WaveMedium, NewTab };