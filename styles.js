import { createGlobalStyle } from "styled-components";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const GlobalStyles = createGlobalStyle`
:root {
    --primary: green;
    --secondary: purple;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {

    font-family: ${openSans.style.fontFamily}
}
`;

export default GlobalStyles;
