import { createGlobalStyle } from "styled-components";
import resetStyle from "./resetStyle";

const breakpoints = {
  desktop: "920px",
};

const GlobalStyle = createGlobalStyle`
    html {
        --main-bg: #ffffff;
        --second-bg: #fafafb;
        --txt-color: #455560;
        --txt-white: #fff;
        --main-color: #349eff;
        --second-color: #62b4ff;
        --box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        --main-bg-light: #ffffff;
        --second-bg-light: #fafafb;
        --txt-color-light: #455560;
        --box-shadow-light: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        --main-bg-dark: #2d2d2d;
        --second-bg-dark: #202020;
        --txt-color-dark: #bbbbbb;
        --box-shadow-dark: rgba(0, 0, 0, 0.2) 0px 5px 10px;

        --main-color-blue: #349eff;
        --second-color-blue: #62b4ff;

        --main-color-red: #fb0b12;
        --second-color-red: #ff4a6b;

        --main-color-cyan: #10d4d2;
        --second-color-cyan: #2ae9e6;

        --main-color-green: #019707;
        --second-color-green: #4caf50;

        --main-color-orange: #d68102;
        --second-color-orange: #fca11a;

        --sidebar-width: 300px;
        --border-radius: 15px;
        --topnav-height: 110px;
        --transition-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        --color-dark: #555;
        --color-dark-rgb: 68,68,68;
        --color-dark-contrast: #f6f6f6;
        --color-dark-hover: #222;
        --color-light: #f6f6f6;
        --color-light-rgb: 246,246,246;
        --color-light-contrast: var(--color-dark);
        --color-light-hover: #eee;
        --color-gray: #949494;
        --color-gray-contrast: var(--color-light);
        --color-lightgray: #bbb;
        --color-lightgray-contrast: var(--color-light);
        --color-primary: #ff6358;
        --color-primary-rgb: 255,99,88;
        --color-primary-contrast: var(--color-light);
        --color-primary-hover: #e65a50;
        --color-secondary: #03a9f4;
        --color-secondary-rgb: 3,169,244;
        --color-secondary-contrast: var(--color-light);
        --color-secondary-hover: #028ccc;
        --color-green: #37b400;
        --color-green-contrast: var(--color-light);
        --color-red: #f31700;
        --color-red-contrast: var(--color-light);
        --color-orange: #ffc000;
        --color-orange-contrast: var(--color-light);
        --color-blue: #0058e9;
        --color-blue-contrast: var(--color-light);
        --color-border: rgba(0,0,0, .08);
        --color-border-hover: rgba(0,0,0, .15);
        --border-radius: 4px;
        --space-0: 0;
        --space-1: 5px;
        --space-2: 8px;
        --space-3: 12px;
        --space-4: 16px;
        --space-5: 22px;
        --space-6: 30px;
        --space-7: 36px;
        --space-7: 44px;
        --space-8: 60px;
        --space-9: 80px;
        --space-10: 110px;
        --primary-font: 'Roboto', sans-serif;
        --fsize-1: 8px;
        --fsize-2: 9px;
        --fsize-3: 11px;
        --fsize-4: 13px;
        --fsize-5: 15px;
        --fsize-6: 20px;
        --fsize-7: 25px;
        --fsize-8: 34px;
        --fsize-9: 44px;
        --fsize-10: 55px;
        --height-input: var(--space-4);
        --height-button: var(--space-4);
        --min-width-button: var(--space-4);
        --px-button: var(--space-2);
        --navbar-width: 256px;

        @media(max-width: ${breakpoints.desktop}) {
            --height-button: calc(var(--space-4) + 8px);
            --px-button: calc(var(--space-2) + 8px);
        }
    }
    ${resetStyle}
    body {
        font-size: var(--fsize-3);
        font-family: var(--primary-font);
        background-color: var(--color-light);
        color: var(--color-dark);
    }
    h1, h2, h3, h4, h4, h5, h6 {
        font-weight: 500;
    }
    h1 {
        font-size: var(--fsize-9);
    }
    h2 {
        font-size: var(--fsize-8);
    }
    h3 {
        font-size: var(--fsize-7);
    }
    h4 {
        font-size: var(--fsize-6);
    }
    h5 {
        font-size: var(--fsize-5);
    }
    h6 {
        font-size: var(--fsize-4);
    }
    p {
        font-size: var(--fsize-4);
        margin: 15px 0;
    }
    a {
        text-decoration: none;
        color: var(--color-primary);
    }
    a:hover {
        text-decoration: underline;
        color: var(--color-primary-hover);
    }
    input {
        height: 28px;
    }
    textarea {
        min-width: 220px;
        min-height: 120px;
    }

    .visually-hidden {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px, 1px, 1px, 1px);
        opacity: 0;
    }
    input {
        border: 2px solid transparent;
        outline: 0;
    }
    
    input:focus {
        border: 2px solid var(--main-color);
    }
    
    .page-header {
        margin-bottom: 40px;
        text-transform: capitalize;
    }
    
    .card {
        padding: 30px;
        margin-bottom: 30px;
        background-color: var(--main-bg);
        box-shadow: var(--box-shadow);
        border-radius: var(--border-radius);
    }
    
    .full-height {
        height: 100%;
    }
    
    .card.full-height {
        height: calc(100% - 30px);
    }
    
    .card__header {
        text-transform: capitalize;
    }
    
    .card > div ~ div {
        margin-top: 30px;
    }
    
    .card__footer {
        text-align: center;
        text-transform: capitalize;
    }
    
    .light-background {
        background-color: var(--main-bg-light);
        color: #000;
    }
    
    .dark-background {
        background-color: var(--main-bg-dark);
        color: #fff;
    }
    
    .blue-color {
        background-color: var(--main-color-blue);
        color: #fff;
    }
    
    .red-color {
        background-color: var(--main-color-red);
        color: #fff;
    }
`;

export default GlobalStyle;
export { breakpoints };
