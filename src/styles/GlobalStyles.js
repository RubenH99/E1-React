import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
    :root {
        --bg-main: hsl(235, 21%, 11%);
        --bg-form: hsl(235, 24%, 19%);
        --electric: hsl(220, 98%, 61%);
        --text-white: hsl(236, 33%, 92%);
        --text-strong: hsl(0, 0%, 98%);
        --text-gray: hsl(236, 9%, 61%);
        --btn-electric: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Josefin Sans', sans-serif;
    }
    
    body {
        background-color: var(--bg-main);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;

        
    }

    .hidden {
        display: none;
    }
`;
