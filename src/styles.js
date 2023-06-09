import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles=createGlobalStyle`
${reset}

*{
    box-sizing:border-box;
}
a{
    text-decoratioin:none;
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
body{
    font-family: 'Pretendard-Regular';
}
h1{
    font-size:30px;
}
`

    