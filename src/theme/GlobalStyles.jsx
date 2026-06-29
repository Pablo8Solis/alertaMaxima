import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        min-height: 100vh;
        font-family: ${({ theme }) => theme.fonts.base};
        font-size: 1.6rem;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
        img{
        max-width: 100%;
        display: block;
        }
`;

export default GlobalStyles;